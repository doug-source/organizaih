<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;

class AuthController extends Controller
{
    /**
     * Execute the API login.
     */
    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');
        if (!Auth::attempt($credentials)) {
            return $this->buildInvalidAuth();
        }
        return response()->json([
            'message' => 'Authorized',
            'status' => 200,
            'data' => [
                'token' => $request->user()->createToken('auth-app')->plainTextToken
            ]
        ]);
    }

    /**
     * Build the invalid Authentication response
     */
    private function buildInvalidAuth()
    {
        $msg = Str::of(__('forbidden-access'))->ucfirst();
        return response()->json([
            'message' => $msg,
            'status' => 403,
            'errors' => ['status' => [$msg]]
        ], 403);
    }

    /**
     * Execute the API logout.
     */
    public function logout(Request $request)
    {
        $request->user()->currentAccessToken()->delete();
        return response()->json([
            'message' => 'Token Revoked',
            'status' => 200,
        ]);
    }
}
