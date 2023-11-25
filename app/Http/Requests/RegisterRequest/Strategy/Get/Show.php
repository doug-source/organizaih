<?php

namespace App\Http\Requests\RegisterRequest\Strategy\Get;

use App\Http\Requests\Checker;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Str;

class Show implements Checker
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
            'registerRequestID' => $formRequest->route('registerRequestID'),
        ];
    }

    public function rules(): array
    {
        return [
            'registerRequestID' => [
                'required',
                'integer',
                'min:1',
                'exists:register_requests,id',
            ]
        ];
    }

    public function messages(): array
    {
        return [
            'registerRequestID.required' => Str::of(__('validation-required'))->ucfirst(),
            'registerRequestID.integer' => Str::of(__('validation-integer'))->ucfirst(),
            'registerRequestID.min' => Str::of(__('validation-min', ['size' => '1']))->ucfirst(),
            'registerRequestID.exists' => Str::of(__('validation-invalid-male', ['subject' => __('register-request')]))->ucfirst()
        ];
    }
}
