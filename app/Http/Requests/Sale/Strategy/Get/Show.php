<?php

namespace App\Http\Requests\Sale\Strategy\Get;

use App\Http\Requests\Checker;
use App\Rules\BelongsToUser;
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
            'saleID' => $formRequest->route('saleID')
        ];
    }

    public function rules(): array
    {
        return [
            'saleID' => [
                'required',
                'integer',
                'min:1',
                'exists:sales,id',
                new BelongsToUser('sales')
            ],
        ];
    }

    public function messages(): array
    {
        return [
            'saleID.required' => Str::of(__('validation-required'))->ucfirst(),
            'saleID.integer' => Str::of(__('validation-integer'))->ucfirst(),
            'saleID.min' => Str::of(__('validation-min', ['size' => '1']))->ucfirst(),
            'saleID.exists' => Str::of(__('validation-invalid-female', ['subject' =>  Str::of(__('sale'))->ucfirst()]))->ucfirst(),
        ];
    }
}
