<?php

namespace App\Http\Requests\ResetPassword\Strategy\Post;

use App\Http\Requests\Checker;
use App\Rules\PasswordValid;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Str;

class Plain implements Checker
{
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
            'token' => 'required',
            'email' => 'required|email',
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
            'token.required' => Str::of(__('validation-required'))->ucfirst(),

            'email.required' => Str::of(__('validation-required'))->ucfirst(),
            'email.email' => Str::of(trim(__('validation-invalid-male', ['subject' => ''])))->ucfirst(),

            'password.required' => Str::of(__('validation-required'))->ucfirst(),
            'password.confirmed' => Str::of(__('pass-confirm-invalid'))->ucfirst(),
        ];
    }
}
