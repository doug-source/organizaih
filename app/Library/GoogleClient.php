<?php

namespace App\Library;

use App\Models\User;
use Google\Client;
use Google\Service\Oauth2\Userinfo;
use GuzzleHttp\Client as GuzzleClient;
use Google\Service\Oauth2 as ServiceOauth2;
use Illuminate\Support\{
    Facades\Auth,
    Str
};

class GoogleClient
{
    /** @var Google\Client */
    public readonly Client $client;

    /** @var Google\Service\Oauth2\Userinfo */
    private Userinfo $data;

    /** @var string */
    private string $redirectEndpoint;

    public function __construct($redirectEndpoint = '')
    {
        $this->client = new Client();
        $this->redirectEndpoint = $redirectEndpoint;
    }

    /**
     * Mount the url used to redirect after google account selection
     *
     * @return string
     */
    private function makeRedirectUrl()
    {
        $appUrl = config('app.url');
        return "{$appUrl}{$this->redirectEndpoint}";
    }

    /**
     * Search the user registered based on email provided by Google credentials
     *
     *
     * @return ?mixed
     */
    private function getGoogleUser()
    {
        $data = $this->getData();
        if (!$data) {
            return NULL;
        }
        return User::where('email', $data->email)->first();
    }

    /**
     * Used to initialize the google client's instance
     *
     */
    public function init()
    {
        $this->client->setHttpClient(
            new GuzzleClient(['curl' => [CURLOPT_SSL_VERIFYPEER => false]])
        );
        $this->client->setClientId(
            config('app.google.client.id')
        );
        $this->client->setClientSecret(
            config('app.google.client.secret')
        );
        $this->client->setRedirectUri($this->makeRedirectUrl());
        $this->client->addScope('email');
        $this->client->addScope('profile');
    }

    /**
     * Catch the google account's data if the auth code is received by $code
     *
     * @return bool
     */
    public function authorize($code = NULL)
    {
        if (isset($code)) {
            $token = $this->client->fetchAccessTokenWithAuthCode($code);
            $this->client->setAccessToken($token['access_token']);
            $googleService = new ServiceOauth2($this->client);
            $this->data = $googleService->userinfo->get();
            return true;
        }
        return false;
    }

    /**
     * Build the auth link used by user interface to login/register
     */
    public function generateAuthLink()
    {
        return $this->client->createAuthUrl();
    }

    /**
     * Execute the login based on Google credentials
     *
     * @return \Illuminate\Routing\Redirector|\Illuminate\Http\RedirectResponse|\Illuminate\Contracts\View\View|\Illuminate\Contracts\View\Factory
     */
    public function executeGoogleLogin()
    {
        $userFound = $this->getGoogleUser();
        if (!$userFound) {
            return view('login.auth', [
                'authAction' => json_encode(route('auth.user')),
                'googleAuthUrl' => $this->generateAuthLink(),
                'authStatus' => TRUE,
                'authMsgStatus' => 'Usuário não registrado'
            ]);
        }
        Auth::login($userFound);
        return redirect()->to('/');
    }

    /**
     * Define the session's parameters used during some process based on Google credentials
     *
     * @param array $fields
     * @return array The session's paramenters
     */
    public function executeGoogleRegister($fields = ['email', 'name'])
    {
        $userFound = $this->getGoogleUser();
        if ($userFound) {
            return [
                'gateStatus' => TRUE,
                'gateMsgStatus' => Str::of(__('user-already-registered'))->ucfirst()
            ];
        }
        $data = $this->getData();
        if (!$data) {
            return [];
        }
        return [
            'fields' => json_encode(collect($fields)->reduce(function ($acc, $field) use (&$data) {
                $acc[$field] = $data->$field;
                return $acc;
            }, []))
        ];
    }

    /**
     * Get the data collected by google account selection
     *
     * @return Google\Service\Oauth2\Userinfo
     */
    public function getData()
    {
        return $this->data;
    }
}
