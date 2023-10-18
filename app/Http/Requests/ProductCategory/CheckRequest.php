<?php

namespace App\Http\Requests\ProductCategory;

use App\Http\Requests\VerifyRequest;
use App\Http\Requests\Checker;
use App\Http\Requests\ProductCategory\Strategy\CheckerFactory;
use Illuminate\Foundation\Http\FormRequest;

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
