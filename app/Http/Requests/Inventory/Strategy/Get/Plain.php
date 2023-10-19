<?php

namespace App\Http\Requests\Inventory\Strategy\Get;

use App\Http\Requests\Checker;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Str;

class Plain implements Checker
{
    /** @var int */
    private $productNameMaxSize = 0;

    public function __construct()
    {
        $this->productNameMaxSize = config('database.column-sizes.product.name');
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
            'search' => $formRequest->query('search'),
            'page' => $formRequest->query('page'),
            'group' => $formRequest->query('group'),
        ];
    }

    public function rules(): array
    {
        return [
            'search' => "nullable|string|max:{$this->productNameMaxSize}",
            'page' => 'required|integer|min:1',
            'group' => 'required|integer|min:1'
        ];
    }

    public function messages(): array
    {
        return [
            'search.string' => Str::of(__('validation-invalid-male', ['subject' => __('type')]))->ucfirst(),
            'search.max' => Str::of(__('validation-max', [
                'size' => $this->productNameMaxSize
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
