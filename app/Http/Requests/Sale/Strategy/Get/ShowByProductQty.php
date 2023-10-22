<?php

namespace App\Http\Requests\Sale\Strategy\Get;

use App\Http\Requests\Checker;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Str;

class ShowByProductQty implements Checker
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
            'productQty' => $formRequest->route('qty'),
            'dtStart' => $formRequest->query('dtStart')
        ];
    }

    public function rules(): array
    {
        return [
            'productQty' => [
                'required',
                'integer',
                'min:1',
            ],
            'dtStart' => 'nullable|date_format:Y-m'
        ];
    }

    public function messages(): array
    {
        return [
            'productQty.required' => Str::of(__('validation-required'))->ucfirst(),
            'productQty.integer' => Str::of(__('validation-integer'))->ucfirst(),
            'productQty.min' => Str::of(__('validation-min', ['size' => '1']))->ucfirst(),
            'dtStart.date_format' => Str::of(__('validation-invalid-female', ['subject' => __('date')]))->ucfirst(),
        ];
    }
}
