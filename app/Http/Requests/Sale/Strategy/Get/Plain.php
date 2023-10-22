<?php

namespace App\Http\Requests\Sale\Strategy\Get;

use App\Http\Requests\Checker;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Str;

class Plain implements Checker
{
    /** @var int */
    private $customerNameMaxSize = 0;

    /** @var int */
    private $productNameMaxSize = 0;

    public function __construct()
    {
        $this->customerNameMaxSize = config('database.column-sizes.customer.name');
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
            'page' => $formRequest->query('page'),
            'group' => $formRequest->query('group'),
            'dtStart' => $formRequest->query('dtStart'),
            'dtEnd' => $formRequest->query('dtEnd')
        ];
    }

    public function rules(): array
    {
        return [
            'page' => 'required|integer|min:1',
            'group' => 'required|integer|min:1',

            'customerName' => "nullable|string|max:{$this->customerNameMaxSize}",
            'productName' => "nullable|string|max:{$this->productNameMaxSize}",
            'dtStart' => 'required|date_format:Y-m-d',
            'dtEnd' => 'required|date_format:Y-m-d'
        ];
    }

    public function messages(): array
    {
        return [
            'page.required' => Str::of(__('validation-required'))->ucfirst(),
            'page.integer' => Str::of(__('validation-integer'))->ucfirst(),
            'page.min' => Str::of(__('validation-min', ['size' => '1']))->ucfirst(),

            'group.required' => Str::of(__('validation-required'))->ucfirst(),
            'group.integer' => Str::of(__('validation-integer'))->ucfirst(),
            'group.min' => Str::of(__('validation-min', ['size' => '1']))->ucfirst(),

            'customerName.string' => Str::of(__('validation-invalid-male', ['subject' => __('type')]))->ucfirst(),
            'customerName.max' => Str::of(__('validation-max', [
                'size' => $this->customerNameMaxSize
            ]))->ucfirst(),

            'productName.string' => Str::of(__('validation-invalid-male', ['subject' => __('type')]))->ucfirst(),
            'productName.max' => Str::of(__('validation-max', [
                'size' => $this->productNameMaxSize
            ]))->ucfirst(),

            'dtStart.required' => Str::of(__('validation-required'))->ucfirst(),
            'dtStart.date_format' => Str::of(__('validation-invalid-female', ['subject' => __('date')]))->ucfirst(),

            'dtEnd.required' => Str::of(__('validation-required'))->ucfirst(),
            'dtEnd.date_format' => Str::of(__('validation-invalid-female', ['subject' => __('date')]))->ucfirst(),
        ];
    }
}
