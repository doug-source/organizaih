<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\CheckRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Library\GoogleClient;
use App\Models\User;
use GuzzleHttp\Exception\ClientException;

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
                $user = new User();
                $data = $googleClient->getData();
                $userFound = $user->where('email', $data->email)->first();
                if (!$userFound) {
                    return view('login.auth', [
                        'authAction' => json_encode(route('auth.user')),
                        'googleAuthUrl' => $googleClient->generateAuthLink(),
                        'authStatus' => TRUE,
                        'authMsgStatus' => 'Usuário não registrado'
                    ]);
                }
                Auth::login($userFound);
                return redirect()->to('/');
            }
            if (!Auth::check()) {
                return view('login.auth', [
                    'authAction' => json_encode(route('auth.user')),
                    'googleAuthUrl' => $googleClient->generateAuthLink()
                ]);
            }
            $userLogged = $request->user();
            return view('app.main', [
                'tokenAuth' => $userLogged->createToken('auth-app')->plainTextToken,
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
        $googleClient = new GoogleClient(config('app.routes.urls.register_form'));
        $googleClient->init();

        $variables = [
            'registerAction' => json_encode(config('app.routes.urls.register_user')),
            'successAction' => route('login.page'),
            'googleAuthUrl' => $googleClient->generateAuthLink()
        ];

        try {
            if ($googleClient->authorize($request->input('code'))) {
                $user = new User();
                $data = $googleClient->getData();
                $userFound = $user->where('email', $data->email)->first();
                if ($userFound) {
                    $variables['gateStatus'] = TRUE;
                    $variables['gateMsgStatus'] = Str::of(__('user-already-registered'))->ucfirst();
                } else {
                    $variables['fields'] = json_encode([
                        'email' => $data->email,
                        'name' => $data->name
                    ]);
                }
            }
            return view('register.main', $variables);
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
