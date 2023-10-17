<?php

namespace App\Http\Requests\Product\Strategy\Delete;

use App\Http\Requests\Checker;
use App\Rules\BelongsToUser;
use App\Rules\NotLinked;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Str;

class Plain implements Checker
{
    public function all(FormRequest $formRequest, array $requestInputs): array
    {
        return [
            ...$requestInputs,
            'productID' => $formRequest->route('productID'),
        ];
    }

    public function rules(): array
    {
        return [
            'productID' => [
                'required',
                'integer',
                'min:1',
                'exists:products,id',
                new BelongsToUser('products'),
                new NotLinked('products', [
                    [
                        'inventory_items',
                        ['inventory_items.product_id', '=', 'products.id']
                    ], [
                        'sale_items',
                        ['sale_items.product_id', '=', 'products.id']
                    ],
                ])
            ]
        ];
    }

    public function messages(): array
    {
        return [
            'productID.required' => Str::of(__('validation-required'))->ucfirst(),
            'productID.integer' => Str::of(__('validation-integer'))->ucfirst(),
            'productID.min' => Str::of(__('validation-min', ['size' => '1']))->ucfirst(),
            'productID.exists' => Str::of(__('validation-invalid-male', ['subject' => __('product')]))->ucfirst()
        ];
    }
}
