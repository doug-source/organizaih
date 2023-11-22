<?php

namespace App\Http\Requests\User\Strategy\Get;

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
            'userID' => $formRequest->route('userID'),
        ];
    }

    public function rules(): array
    {
        return [
            'userID' => [
                'required',
                'integer',
                'min:1',
                'exists:users,id',
            ]
        ];
    }

    public function messages(): array
    {
        return [
            'userID.required' => Str::of(__('validation-required'))->ucfirst(),
            'userID.integer' => Str::of(__('validation-integer'))->ucfirst(),
            'userID.min' => Str::of(__('validation-min', ['size' => '1']))->ucfirst(),
            'userID.exists' => Str::of(__('validation-invalid-male', ['subject' => __('customer')]))->ucfirst()
        ];
    }
}
