<?php

namespace App\Http\Requests\User\Strategy\Get;

use App\Http\Requests\Checker;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Str;

class RegisterForm implements Checker
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
            'token' => $formRequest->query('token'),
        ];
    }

    public function rules(): array
    {
        return [
            'token' => 'required|string|exists:allowed_registers,token'
        ];
    }

    public function messages(): array
    {
        $typeInvalidMessage = Str::of(__('validation-invalid-male', ['subject' => __('type')]))->ucfirst();
        return [
            'token.required' => Str::of(__('validation-required'))->ucfirst(),
            'token.string' => $typeInvalidMessage,
            'email.exists' => $typeInvalidMessage,
        ];
    }
}
