<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\CheckRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Str;
use Illuminate\Http\Request;

class UserController extends Controller
{
    /**
     * Execute the Web login.
     *
     * @param Illuminate\Http\Request $request
     * @return \Illuminate\Contracts\View\View|\Illuminate\Contracts\View\Factory
     */
    public function login(Request $request)
    {
        if (!Auth::check()) {
            return view('login.auth', ['authAction' => json_encode(route('auth.user'))]);
        }
        $userLogged = $request->user();
        return view('app.main', ['tokenAuth' => $userLogged->createToken('auth-app')->plainTextToken]);
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
        ], 403);
    }

    /**
     * Execute the Web logout.
     *
     * @param Illuminate\Http\Request $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function logout(Request $request)
    {
        if ($request->has('tokenAuthApi')) {
            $user = $request->user();
            $tokenId = Str::before($request->input('tokenAuthApi'), '|');
            $user->tokens()->where([
                ['id', $tokenId],
                ['tokenable_id', $user->id]
            ])->delete();
        }
        $this->logoutUser();
        return redirect()->route('login.page')->with('authAction', json_encode(route('auth.user')));
    }

    /**
     * Execute the user logout
     */
    private function logoutUser()
    {
        Session::flush();
        Auth::logout();
    }
}
