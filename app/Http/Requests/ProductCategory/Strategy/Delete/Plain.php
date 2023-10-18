<?php

namespace App\Http\Requests\ProductCategory\Strategy\Delete;

use App\Http\Requests\Checker;
use App\Rules\BelongsToUser;
use App\Rules\NotLinked;
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
            'productCategoryID' => $formRequest->route('productCategoryID')
        ];
    }

    public function rules(): array
    {
        return [
            'productCategoryID' => [
                'required',
                'integer',
                'min:1',
                'exists:product_categories,id',
                new BelongsToUser('product_categories'),
                new NotLinked('product_categories', [
                    [
                        'products',
                        ['products.product_category_id', '=', 'product_categories.id']
                    ]
                ])
            ],
        ];
    }

    public function messages(): array
    {
        return [
            'productCategoryID.required' => Str::of(__('validation-required'))->ucfirst(),
            'productCategoryID.integer' => Str::of(__('validation-integer'))->ucfirst(),
            'productCategoryID.min' => Str::of(__('validation-min', ['size' => '1']))->ucfirst(),
            'productCategoryID.exists' => Str::of(__('validation-invalid-female', ['subject' => __('category')]))->ucfirst()
        ];
    }
}
