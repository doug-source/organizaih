<?php

namespace App\Http\Requests\User\Strategy\Post;

use App\Http\Requests\Checker;
use App\Rules\PasswordValid;
use App\Rules\AllowedRegisterRule;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Str;

class Plain implements Checker
{
    /** @var int */
    private $userNameMaxSize = 0;

    /** @var int */
    private $userEmailMaxSize = 0;

    /** @var int */
    private $tokenMaxSize = 0;

    /** @var string */
    private $email;

    /** @var string */
    private $token;

    public function __construct(FormRequest $formRequest)
    {
        $this->userNameMaxSize = config('database.column-sizes.user.name');
        $this->userEmailMaxSize = config('database.column-sizes.user.email');
        $this->tokenMaxSize = config('database.column-sizes.allowed-register.token');

        $this->email = $formRequest->input('email');
        $this->token = $formRequest->query('token');
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
            'name' => "required|string|max:{$this->userNameMaxSize}",
            'email' => [
                'required',
                'email',
                "max:{$this->userEmailMaxSize}",
                'unique:App\Models\User,email',
                'exists:allowed_registers,email'
            ],
            'phone' => [
                'nullable',
                'regex:/\d{2}\s?(\d{4}[\s-]?\d{4}|\d{5}[\s-]?\d{4})$/'
            ],
            'password' => [
                'required',
                'confirmed',
                new PasswordValid()
            ],
            'token' => [
                'required',
                "max:{$this->tokenMaxSize}",
                new AllowedRegisterRule($this->email, $this->token)
            ]
        ];
    }

    public function messages(): array
    {
        return [
            'name.required' => Str::of(__('validation-required'))->ucfirst(),
            'name.string' => Str::of(__('validation-invalid-male', ['subject' => __('type')]))->ucfirst(),
            'name.max' => Str::of(__('validation-max', ['size' => $this->userNameMaxSize]))->ucfirst(),

            'email.required' => Str::of(__('validation-required'))->ucfirst(),
            'email.email' => Str::of(__('validation-invalid-male', ['subject' => __('type')]))->ucfirst(),
            'email.max' => Str::of(__('validation-max', ['size' => $this->userEmailMaxSize]))->ucfirst(),
            'email.unique' => Str::of(__('validation-invalid-male', ['subject' => __('user')]))->ucfirst(),
            'email.exists' => Str::of(__('validation-invalid-male', ['subject' => __('user')]))->ucfirst(),

            'phone.regex' => Str::of(__('validation-invalid-male', ['subject' => __('phone')]))->ucfirst(),

            'password.required' => Str::of(__('validation-required'))->ucfirst(),
            'password.confirmed' => Str::of(__('pass-confirm-invalid'))->ucfirst(),

            'token.required' => Str::of(__('validation-required'))->ucfirst(),
            'token.max' => Str::of(__('validation-max', ['size' => $this->tokenMaxSize]))->ucfirst(),
        ];
    }
}
