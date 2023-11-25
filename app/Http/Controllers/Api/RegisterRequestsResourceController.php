<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\RegisterRequests;
use App\Http\Requests\RegisterRequest\CheckRequest;

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
