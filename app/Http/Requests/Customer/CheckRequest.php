<?php

namespace App\Http\Requests\Customer;

use App\Http\Requests\VerifyRequest;
use App\Http\Requests\Customer\Strategy\CheckerFactory;

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
