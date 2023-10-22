<?php

namespace App\Http\Requests\Sale\Strategy\Get;

use App\Http\Requests\Checker;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Str;

class ShowProductQty implements Checker
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
            'dtStart' => $formRequest->query('dtStart')
        ];
    }

    public function rules(): array
    {
        return [
            'dtStart' => 'nullable|date_format:Y-m'
        ];
    }

    public function messages(): array
    {
        return [
            'dtStart.date_format' => Str::of(__('validation-invalid-female', ['subject' => __('date')]))->ucfirst(),
        ];
    }
}
