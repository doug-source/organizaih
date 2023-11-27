<?php

namespace App\Http\Requests\RegisterRequest\Strategy\Delete;

use App\Http\Requests\Checker;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Str;

class Plain implements Checker
{
    public function all(FormRequest $formRequest, array $requestInputs): array
    {
        return [
            ...$requestInputs,
            'registerRequestID' => $formRequest->route('registerRequestID')
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
            ],
        ];
    }

    public function messages(): array
    {
        return [
            'registerRequestID.required' => Str::of(__('validation-required'))->ucfirst(),
            'registerRequestID.integer' => Str::of(__('validation-integer'))->ucfirst(),
            'registerRequestID.min' => Str::of(__('validation-min', ['size' => '1']))->ucfirst(),
            'registerRequestID.exists' => Str::of(__('validation-invalid-female', ['subject' =>  Str::of(__('register-request'))->ucfirst()]))->ucfirst(),
        ];
    }
}
