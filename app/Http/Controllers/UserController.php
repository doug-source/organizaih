<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\CheckRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Str;

class UserController extends Controller
{
    public function login()
    {
        if (!Auth::check()) {
            return view('login.auth', ['authAction' => json_encode(route('auth.user'))]);
        }
        return view('app.main');
    }

    /**
     * Execute the Authentication
     *
     * @param \App\Http\Requests\Auth\CheckRequest $request
     */
    public function auth(CheckRequest $request)
    {
        $credentials = $request->only('email', 'password');
        if (!Auth::attempt($credentials)) {
            return $this->buildInvalidAuth();
        }
        return response('OK', 200);
    }

    /**
     * Build the invalid Authentication response
     *
     * @return \Illuminate\Http\JsonResponse
     */
    private function buildInvalidAuth()
    {
        $msg = Str::of(__('invalid-auth'))->ucfirst();
        return response()->json([
            'message' => $msg,
            'errors' => ['status' => [$msg]]
        ], 422);
    }

    public function logout()
    {
        $this->logoutUser();
        return redirect()->route('login.page')->with('authAction', json_encode(route('auth.user')));
    }

    private function logoutUser()
    {
        Session::flush();
        Auth::logout();
    }
}
