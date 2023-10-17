<?php

namespace App\Http\Requests\Product\Strategy\Get;

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
            'productID' => $formRequest->route('productID')
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
                new BelongsToUser('products')
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
