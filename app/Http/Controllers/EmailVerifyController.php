<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Foundation\Auth\EmailVerificationRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;

class EmailVerifyController extends Controller
{
    /**
     * Show the email notification notice
     *
     * @return \Illuminate\Contracts\View\View|\Illuminate\Contracts\View\Factory
     */
    public function index()
    {
        $paragraph_1 = Str::of(__('verify-email-warn-text'))->ucfirst();
        $paragraph_2 = Str::of(__('verify-email-warn-text-otherwise'))->ucfirst();

        return view('auth.verify-email', [
            'title' => Str::of(__('verify-email-warn-title'))->ucfirst(),
            'paragraph_1' => $paragraph_1,
            'paragraph_2' => $paragraph_2,
            'btn_text' => Str::of(__('verify-email-warn-text-btn'))->ucfirst()
        ]);
    }

    /**
     * Execute the Email Verification from inside of user's email's inbox
     *
     * @param Illuminate\Foundation\Auth\EmailVerificationRequest $request
     * @return \Illuminate\Routing\Redirector|\Illuminate\Http\RedirectResponse
     */
    public function fromEmail(EmailVerificationRequest $request)
    {
        $request->fulfill();
        return redirect()->route('login.page');
    }

    /**
     * Execute the email verification resend logic
     *
     * @param Illuminate\Http\Request $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function resend(Request $request)
    {
        $user = $request->user();
        if ($user->hasVerifiedEmail()) {
            return redirect()->route('login.page');
        }
        $user->sendEmailVerificationNotification();
        $msg = Str::of(__('verification-link-sent'))->ucfirst();
        return back()->with('message', $msg);
    }
}
