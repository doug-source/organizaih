<?php

namespace App\Http\Requests\RegisterRequest\Strategy\Post;

use App\Http\Requests\Checker;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Str;

class Plain implements Checker
{
    /** @var int */
    private $registerRequestEmailMaxSize = 0;

    /** @var int */
    private $registerRequestPhoneMaxSize = 0;

    public function __construct()
    {
        $this->registerRequestEmailMaxSize = config('database.column-sizes.user.email');
        $this->registerRequestPhoneMaxSize = config('database.column-sizes.register-request.phone');
    }

    /**
     * Get all of the input and files for the request and organize the fields
     * to be validated.
     *
     * @param  Illuminate\Foundation\Http\FormRequest  $formRequest
     * @param  array  $requestInputs
     * @return array
     */
    public function all(FormRequest $formRequest, array $requestInputs): array
    {
        return [
            ...$requestInputs,
        ];
    }

    public function rules(): array
    {
        return [
            'email' => [
                'required',
                'email',
                "max:{$this->registerRequestEmailMaxSize}",
            ],
            'phone' => [
                'nullable',
                "max:{$this->registerRequestPhoneMaxSize}",
                'regex:/\d{2}\s?(\d{4}[\s-]?\d{4}|\d{5}[\s-]?\d{4})$/'
            ]
        ];
    }

    public function messages(): array
    {
        return [
            'email.required' => Str::of(__('validation-required'))->ucfirst(),
            'email.email' => Str::of(__('validation-invalid-male', ['subject' => __('type')]))->ucfirst(),
            'email.max' => Str::of(__('validation-max', ['size' => $this->registerRequestEmailMaxSize]))->ucfirst(),

            'phone.max' => Str::of(__('validation-max', ['size' => $this->registerRequestPhoneMaxSize]))->ucfirst(),
            'phone.regex' => Str::of(__('validation-invalid-male', ['subject' => __('phone')]))->ucfirst(),
        ];
    }
}
