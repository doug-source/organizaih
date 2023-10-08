<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\CheckRequest;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function login()
    {
        return view('login.auth', ['authAction' => json_encode(route('auth.user'))]);
    }

    public function auth(CheckRequest $request)
    {
        $credentials = $request->only('email', 'password');
        if (Auth::attempt($credentials)) {
            dump('Logou');
        } else {
            dump('Não logou');
        }
    }
}
