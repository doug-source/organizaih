<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\AllowedRegister;
use App\Models\User;
use Illuminate\Support\Facades\DB;
use App\Http\Requests\User\CheckRequest;
use App\Models\Role;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use App\Library\Converters\Phone as PhoneConverter;
use App\Library\Builders\Response as ResponseBuilder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Contracts\Auth\Authenticatable;

class UsersResourceController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param \App\Http\Requests\User\CheckRequest $request
     * @return \Illuminate\Http\Response
     */
    public function index(CheckRequest $request)
    {
        $userLogged = auth()->user();
        $parameters = [$userLogged->id, TRUE, $request->input('group', 3)];
        if ($request->name) {
            $parameters[] = trim($request->name);
        }
        if ($request->email) {
            $parameters[] = trim($request->email);
        }
        return response()->json(
            $this->searchUsers(...$parameters)
        );
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \App\Http\Requests\User\CheckRequest $request
     */
    public function store(CheckRequest $request)
    {
        $allowed = DB::table('allowed_registers')->where('email', $request->email)->first();
        $phone = PhoneConverter::clear($allowed->phone ?? $request->phone);
        $fields = [...$request->only(['name', 'email', 'password']), 'phone' => $phone];
        $user = User::create($fields);
        event(new Registered($user));

        AllowedRegister::destroy($allowed->id);

        $this->applyDefaultUserRole($user);

        return response()->json([
            'message' => 'OK',
            'status' => 200,
            'data' => NULL
        ]);
    }

    /**
     * Apply the role default to user
     *
     * @param  \App\Models\User $user
     */
    private function applyDefaultUserRole(User $user)
    {
        $roleID = DB::table('roles')->where('name', 'seller')->value('id');
        $role = Role::find($roleID);
        $user->roles()->save($role);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Http\Requests\User\CheckRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function show(CheckRequest $request)
    {
        $user = User::find($request->userID);
        $roles = $user->roles;
        return response()->json([
            'id' => $user->id,
            'name' => $user->name,
            'email' => $user->email,
            'email_verified_at' => $user->email_verified_at_formatted,
            'phone' => $user->phone,
            'created_at' => $user->created_at_formatted,
            'updated_at' => $user->updated_at_formatted,
            'roles' => $roles->map(fn ($role) => $role->name),
            'abilities' => $roles->map(fn ($role) => $role->abilities)->flatten()->pluck('name')->unique()
        ]);
    }

    /**
     * Display the user logged data.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function showSelf()
    {
        $user = auth()->user();
        return response()->json([
            'name' => $user->name,
            'email' => $user->email,
            'phone' => $user->phone,
            'photo' => $user->photo
        ]);
    }

    /**
     * Filter just the request fields modified.
     *
     * @return array<array-key, string>
     */
    private function detachRequest(Request $request, Authenticatable|Model|null $user)
    {
        $filePath = self::handleFile($request, $user, 'photo', 'user-photos');
        $inputs = collect([
            ...$request->only(['name', 'photo', 'phone']),
            ...($filePath ? ['photo' => $filePath] : [])
        ])->filter(fn ($val, $key) => $user->$key !== $val)->toArray();
        return $inputs;
    }

    /**
     * Update the user logged data.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function editSelf(CheckRequest $request)
    {
        $user = auth()->user();
        $fields = $this->detachRequest($request, $user);
        if ($fields) {
            User::where('id', $user->id)->update($fields);
        }
        return ResponseBuilder::successJSON();
    }

    /**
     * Search the users list
     *
     * @param  int  $userLoggedID
     * @param  bool  $paginate
     * @param  int  $perPage
     * @param  ?string  $name
     * @param  ?string  $email
     * @return  \Illuminate\Database\Eloquent\Collection
     */
    private function searchUsers(int $userLoggedID, $paginate = FALSE, $perPage = 3, $name = NULL, $email = NULL)
    {
        $query = User::select('id', 'name', 'email');
        $whereCauses = [];
        if ($name) {
            $whereCauses[] = ['name', 'like', "%{$name}%"];
        }
        if ($email) {
            $whereCauses[] = ['email', 'like', "%{$email}%"];
        }
        if ($whereCauses) {
            $query = $query->where($whereCauses);
        }
        $query = $query->where('id', '<>', $userLoggedID);
        if ($paginate) {
            return $query->paginate($perPage);
        }
        return $query->get();
    }
}
