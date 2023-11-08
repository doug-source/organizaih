<?php

namespace App\Library;

use Google\Client;
use Google\Service\Oauth2\Userinfo;
use GuzzleHttp\Client as GuzzleClient;
use Google\Service\Oauth2 as ServiceOauth2;

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
     * Get the data collected by google account selection
     *
     * @return Google\Service\Oauth2\Userinfo
     */
    public function getData()
    {
        return $this->data;
    }

    /**
     * Build the auth link used by user interface to login/register
     */
    public function generateAuthLink()
    {
        return $this->client->createAuthUrl();
    }
}
