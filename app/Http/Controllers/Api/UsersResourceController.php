<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\AllowedRegister;
use App\Models\User;
use Illuminate\Support\Facades\DB;
use App\Http\Requests\User\CheckRequest;
use App\Models\Role;
use Carbon\Carbon;
use Illuminate\Auth\Events\Registered;

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
        $fields = $request->only(['name', 'email', 'password']);
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
            'created_at' => $user->created_at_formatted,
            'updated_at' => $user->updated_at_formatted,
            'roles' => $roles->map(fn ($role) => $role->name),
            'abilities' => $roles->map(fn ($role) => $role->abilities)->flatten()->pluck('name')->unique()
        ]);
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
