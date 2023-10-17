<?php

namespace App\Http\Requests\Product\Strategy\Get;

use App\Http\Requests\Checker;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Str;

class Plain implements Checker
{
    /** @var int */
    private $prodCategoryNameMaxSize = 0;

    public function __construct()
    {
        $this->prodCategoryNameMaxSize = config('database.column-sizes.product-category.name');
    }

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
            'productCategoryName' => $formRequest->query('productCategoryName'),
            'page' => $formRequest->query('page'),
            'group' => $formRequest->query('group')
        ];
    }

    public function rules(): array
    {
        return [
            'productCategoryName' => "nullable|string|max:{$this->prodCategoryNameMaxSize}",
            'page' => 'required|integer|min:1',
            'group' => 'required|integer|min:1'
        ];
    }

    public function messages(): array
    {
        return [
            'productCategoryName.string' => Str::of(__('validation-invalid-male', ['subject' => __('type')]))->ucfirst(),
            'productCategoryName.max' => Str::of(__('validation-max', [
                'size' => $this->prodCategoryNameMaxSize
            ]))->ucfirst(),

            'page.required' => Str::of(__('validation-required'))->ucfirst(),
            'page.integer' => Str::of(__('validation-integer'))->ucfirst(),
            'page.min' => Str::of(__('validation-min', ['size' => '1']))->ucfirst(),

            'group.required' => Str::of(__('validation-required'))->ucfirst(),
            'group.integer' => Str::of(__('validation-integer'))->ucfirst(),
            'group.min' => Str::of(__('validation-min', ['size' => '1']))->ucfirst()
        ];
    }
}
