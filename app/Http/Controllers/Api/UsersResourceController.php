<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\AllowedRegister;
use App\Models\User;
use Illuminate\Support\Facades\DB;
use App\Http\Requests\User\CheckRequest;

class UsersResourceController extends Controller
{
    /**
     * Store a newly created resource in storage.
     *
     * @param \App\Http\Requests\User\CheckRequest $request
     */
    public function store(CheckRequest $request)
    {
        $fields = $request->only(['name', 'email', 'password']);
        User::create($fields);
        $allowed = DB::table('allowed_registers')->where('email', $request->email)->first();
        AllowedRegister::destroy($allowed->id);

        return response()->json([
            'message' => 'OK',
            'status' => 200,
            'data' => NULL
        ]);
    }
}
