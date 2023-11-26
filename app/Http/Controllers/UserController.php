<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\CheckRequest;
use Illuminate\Http\Request;
use GuzzleHttp\Exception\ClientException;
use Illuminate\Foundation\Auth\EmailVerificationRequest;
use App\Library\{
    GoogleClient,
    ResponseBuilder
};
use Illuminate\Support\{
    Facades\Auth,
    Facades\Session,
    Str
};

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
        $googleClient = new GoogleClient();
        $googleClient->init();

        try {
            if ($googleClient->authorize($request->input('code'))) {
                return $googleClient->executeGoogleLogin();
            }
            if (!Auth::check()) {
                return view('login.auth', [
                    'authAction' => json_encode(route('auth.user')),
                    'googleAuthUrl' => $googleClient->generateAuthLink()
                ]);
            }
            $userLogged = $request->user();
            if (!$userLogged->email_verified_at) {
                return redirect()->route('verification.notice');
            }

            return view('app.main', [
                'tokenAuth' => $userLogged->createToken('auth-app')->plainTextToken,
                'abilities' => $userLogged->roles->map(fn ($role) => $role->abilities)->flatten()->pluck('id')->unique()
            ]);
        } catch (ClientException $th) {
            return redirect()->to('/');
        }
    }

    /**
     * Return the user register view.
     *
     * @param Illuminate\Http\Request $request
     * @return \Illuminate\Contracts\View\View|\Illuminate\Contracts\View\Factory
     */
    public function register(Request $request)
    {
        $googleClient = new GoogleClient(config('app.routes.urls.register_user_form'));
        $googleClient->init();

        $variables = [
            'registerAction' => json_encode(config('app.routes.urls.register_user')),
            'successAction' => route('login.page'),
            'googleAuthUrl' => $googleClient->generateAuthLink()
        ];

        try {
            if ($googleClient->authorize($request->input('code'))) {
                $variables = [
                    ...$variables,
                    ...$googleClient->executeGoogleRegister()
                ];
            }
            return view('register.main', $variables);
        } catch (ClientException $th) {
            return redirect()->to('/');
        }
    }

    /**
     * Return the user register-request view.
     *
     * @param Illuminate\Http\Request $request
     * @return \Illuminate\Contracts\View\View|\Illuminate\Contracts\View\Factory
     */
    public function registerRequest(Request $request)
    {
        $googleClient = new GoogleClient(config('app.routes.urls.register_request_form'));
        $googleClient->init();

        $variables = [
            'registerRequestAction' => json_encode(config('app.routes.urls.register_request')),
            'successAction' => route('login.page'),
            'googleAuthUrl' => $googleClient->generateAuthLink()
        ];

        try {
            if ($googleClient->authorize($request->input('code'))) {
                $variables = [
                    ...$variables,
                    ...$googleClient->executeGoogleRegister(['email'])
                ];
            }
            return view('register.request', $variables);
        } catch (ClientException $th) {
            return redirect()->to('/');
        }
    }

    /**
     * Execute the Authentication
     *
     * @param \App\Http\Requests\Auth\CheckRequest $request
     */
    public function auth(CheckRequest $request)
    {
        $credentials = $request->only('email', 'password');
        if (!Auth::attempt($credentials, $request->remember)) {
            return ResponseBuilder::buildInvalidResponse(Str::of(__('invalid-auth'))->ucfirst());
        }
        return response('OK', 200);
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
     * Show the email notification notice
     *
     * @return \Illuminate\Contracts\View\View|\Illuminate\Contracts\View\Factory
     */
    public function emailVerify()
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
    public function emailVerifyFinal(EmailVerificationRequest $request)
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
    public function emailVerifyResend(Request $request)
    {
        $user = $request->user();
        if ($user->hasVerifiedEmail()) {
            return redirect()->route('login.page');
        }
        $user->sendEmailVerificationNotification();
        $msg = Str::of(__('verification-link-sent'))->ucfirst();
        return back()->with('message', $msg);
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
