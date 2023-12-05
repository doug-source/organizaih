<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Library\Builders\Response as ResponseBuilder;
use Illuminate\Auth\Events\PasswordReset;
use App\Http\Requests\{
    Email\CheckRequest as EmailCheckRequest,
    ResetPassword\CheckRequest as ResetPasswordCheckRequest
};
use Illuminate\Support\{
    Facades\Password,
    Facades\Hash,
    Str
};

class PasswordController extends Controller
{
    /**
     * Show the "forgot password" screen
     *
     * @return \Illuminate\Contracts\View\View|\Illuminate\Contracts\View\Factory
     */
    public function forgotPasswordBefore()
    {
        return view('auth.forgot-password');
    }

    /**
     * Handle the "forgot password" request
     *
     * @param \App\Http\Requests\Email\CheckRequest $request
     */
    public function forgotPasswordAfter(EmailCheckRequest $request)
    {
        $status = Password::sendResetLink(
            $request->only('email')
        );
        if ($status !== Password::RESET_LINK_SENT) {
            return ResponseBuilder::invalidJSON(__($status));
        }
        return response()->json(['message' => __($status)]);
    }

    /**
     * Handle the "forgot password" request from inside of user's email's inbox
     *
     * @param string $token
     */
    public function resetPassword(EmailCheckRequest $request, string $token)
    {
        return view('auth.reset-password', [
            'token' => $token,
            'email' => json_encode($request->validated('email'))
        ]);
    }

    /**
     * Handle the "reset password" request from inside of "new Password" screen
     *
     * @param \App\Http\Requests\ResetPassword\CheckRequest $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function updatePassword(ResetPasswordCheckRequest $request)
    {
        $status = Password::reset(
            $request->only('email', 'password', 'password_confirmation', 'token'),
            function (User $user, string $password) {
                $user->forceFill([
                    'password' => Hash::make($password)
                ])->setRememberToken(Str::random(60));

                $user->save();

                event(new PasswordReset($user));
            }
        );
        if ($status !== Password::PASSWORD_RESET) {
            return ResponseBuilder::invalidJSON(__($status));
        }
        return response()->json(['message' => __($status)]);
    }
}
