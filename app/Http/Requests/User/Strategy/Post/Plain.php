<?php

namespace App\Http\Requests\User\Strategy\Post;

use App\Http\Requests\Checker;
use App\Rules\PasswordValid;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Str;

class Plain implements Checker
{
    /** @var int */
    private $userNameMaxSize = 0;

    /** @var int */
    private $userEmailMaxSize = 0;

    public function __construct()
    {
        $this->userNameMaxSize = config('database.column-sizes.user.name');
        $this->userEmailMaxSize = config('database.column-sizes.user.email');
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
            'password' => [
                'required',
                'confirmed',
                new PasswordValid()
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

            'password.required' => Str::of(__('validation-required'))->ucfirst(),
            'password.confirmed' => Str::of(__('pass-confirm-invalid'))->ucfirst(),
        ];
    }
}
