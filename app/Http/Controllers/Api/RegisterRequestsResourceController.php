<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\RegisterRequest\CheckRequest;
use App\Models\{
    RegisterRequests,
    AllowedRegister,
    User
};

class RegisterRequestsResourceController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param App\Http\Requests\RegisterRequest\CheckRequest $request
     */
    public function index(CheckRequest $request)
    {
        $parameters = [TRUE, $request->input('group', 3)];
        if ($request->email) {
            $parameters[] = trim($request->email);
        }
        return response()->json(
            $this->searchRegisterRequests(...$parameters)
        );
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Http\Requests\RegisterRequest\CheckRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function show(CheckRequest $request)
    {
        $registerRequest = RegisterRequests::find($request->registerRequestID);
        return response()->json([
            'id' => $registerRequest->id,
            'email' => $registerRequest->email,
            'phone' => $registerRequest->phone,
            'created_at' => $registerRequest->created_at_formatted,
        ]);
    }

    /**
     * Persist the specified resource.
     *
     * @param  \App\Http\Requests\RegisterRequest\CheckRequest $request
     * @return \Illuminate\Http\Response
     */
    public function store(CheckRequest $request)
    {
        $fields = $request->only(['email', 'phone']);
        $registerRequest = RegisterRequests::where('email', $request->email)->first();
        if (!$registerRequest) {
            $allowedRegister = AllowedRegister::where('email', $request->email)->first();
            if (!$allowedRegister) {
                $user = User::where('email', $request->email)->first();
                if (!$user) {
                    RegisterRequests::create($fields);
                }
            } else {
                // SEND APPROVAL EMAIL
            }
        }
        return response()->json([
            'message' => 'OK',
            'status' => 200,
            'data' => NULL
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Http\Requests\RegisterRequest\CheckRequest $request
     * @return \Illuminate\Http\Response
     */
    public function destroy(CheckRequest $request)
    {
        RegisterRequests::destroy($request->validated('registerRequestID'));
        return response('OK', 200);
    }

    /**
     * Execute the register request's approval.
     *
     * @param  \App\Http\Requests\RegisterRequest\CheckRequest $request
     * @return \Illuminate\Http\Response
     */
    public function approve(CheckRequest $request)
    {
        $registerRequestID = $request->validated('registerRequestID');
        $registerRequest = RegisterRequests::find($registerRequestID);
        RegisterRequests::destroy($registerRequestID);
        $fields = ['email' => $registerRequest->email];
        if ($registerRequest->phone) {
            $fields['phone'] = $registerRequest->phone;
        }
        AllowedRegister::create($fields);
        // SEND EMAIL
        return response('OK', 200);
    }

    /**
     * Search the register_requests list
     *
     * @param  bool  $paginate
     * @param  int  $perPage
     * @param  ?string  $email
     * @return  \Illuminate\Database\Eloquent\Collection
     */
    private function searchRegisterRequests($paginate = FALSE, $perPage = 3, $email = NULL)
    {
        $query = RegisterRequests::select('id', 'email', 'phone', 'created_at');
        if ($email) {
            $query = $query->where([
                ['email', 'like', "%{$email}%"]
            ]);
        }
        if ($paginate) {
            return $query->paginate($perPage);
        }
        return $query->get();
    }
}
