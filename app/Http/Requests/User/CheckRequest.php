<?php

namespace App\Http\Requests\User;

use App\Http\Requests\User\Strategy\CheckerFactory;
use App\Http\Requests\VerifyRequest;
use Illuminate\Support\Facades\Request;

class CheckRequest extends VerifyRequest
{
    public function __construct()
    {
        parent::__construct(new CheckerFactory());
    }

    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        $method = strtolower(Request::method());
        if ($method === 'post') {
            return !auth()->check();
        }
        if (
            $method === 'get' &&
            Request::getPathInfo() === config('app.routes.urls.register_user_form')
        ) {
            return !auth()->check();
        }
        return auth()->check();
    }
}
