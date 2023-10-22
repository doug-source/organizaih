<?php

namespace App\Http\Requests\Sale\Strategy\Put;

use App\Http\Requests\Checker;
use App\Rules\BelongsToUser;
use App\Rules\SaleItemsJson;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Str;

class Plain implements Checker
{
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
            'customerID' => [
                'required',
                'integer',
                'min:1',
                'exists:customers,id',
                new BelongsToUser('customers')
            ],
            'items' => new SaleItemsJson('update')
        ];
    }

    public function messages(): array
    {
        return [
            'saleID.required' => Str::of(__('validation-required'))->ucfirst(),
            'saleID.integer' => Str::of(__('validation-integer'))->ucfirst(),
            'saleID.min' => Str::of(__('validation-min', ['size' => '1']))->ucfirst(),
            'saleID.exists' => Str::of(__('validation-invalid-female', ['subject' =>  Str::of(__('sale'))->ucfirst()]))->ucfirst(),

            'customerID.required' => Str::of(__('validation-required'))->ucfirst(),
            'customerID.integer' => Str::of(__('validation-integer'))->ucfirst(),
            'customerID.min' => Str::of(__('validation-min', ['size' => '1']))->ucfirst(),
            'customerID.exists' => Str::of(__('validation-invalid-male', ['subject' => __('customer')]))->ucfirst(),
        ];
    }
}
