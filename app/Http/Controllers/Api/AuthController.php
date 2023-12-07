<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use App\Library\Builders\Response as ResponseBuilder;

class AuthController extends Controller
{
    /**
     * Execute the API login.
     */
    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');
        if (!Auth::attempt($credentials)) {
            return ResponseBuilder::invalidJSON(
                Str::of(__('forbidden-access'))->ucfirst()
            );
        }
        return ResponseBuilder::successJSON([
            'message' => 'Authorized',
            'status' => 200,
            'data' => [
                'token' => $request->user()->createToken('auth-app')->plainTextToken
            ]
        ]);
    }

    /**
     * Execute the API logout.
     */
    public function logout(Request $request)
    {
        $request->user()->currentAccessToken()->delete();
        return ResponseBuilder::successJSON([
            'message' => 'Token Revoked',
            'status' => 200,
        ]);
    }
}
