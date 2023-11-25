<?php

namespace App\Http\Requests\RegisterRequest;

use App\Http\Requests\RegisterRequest\Strategy\CheckerFactory;
use App\Http\Requests\VerifyRequest;

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
        return auth()->check();
    }
}
