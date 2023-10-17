<?php

namespace App\Http\Requests\Product\Strategy\Post;

use App\Http\Requests\Checker;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Str;

class Plain implements Checker
{

    /** @var int */
    private $productNameMaxSize = 0;

    /** @var int */
    private $productDescriptionMaxSize = 0;

    /** @var int */
    private $productObsMaxSize = 0;

    public function __construct()
    {
        $this->productNameMaxSize = config('database.column-sizes.product.name');
        $this->productDescriptionMaxSize = config('database.column-sizes.product.description');
        $this->productObsMaxSize = config('database.column-sizes.product.obs');
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
        ];
    }

    public function rules(): array
    {
        return [
            'name' => "required|string|max:{$this->productNameMaxSize}",
            'photo' => 'nullable|mimes:jpeg,jpg,png|max:1024',
            'description' => "nullable|string|max:{$this->productDescriptionMaxSize}",
            'obs' => "nullable|string|max:{$this->productObsMaxSize}",
            'productCategory' => [
                'required',
                'integer',
                'min:1',
                'exists:product_categories,id'
            ]
        ];
    }

    public function messages(): array
    {
        return [
            'name.required' => Str::of(__('validation-required'))->ucfirst(),
            'name.string' => Str::of(__('validation-invalid-male', ['subject' => __('type')]))->ucfirst(),
            'name.max' => Str::of(__('validation-size', ['size' => $this->productNameMaxSize]))->ucfirst(),

            'photo.mimes' => Str::of(__('validation-mimes', ['mimes' => 'jpeg, jpg ' . __('or') . ' png']))->ucfirst(),
            'photo.max' => Str::of(__('validation-profile-photo-size', ['size' => '1Mb']))->ucfirst(),

            'description.string' => Str::of(__('validation-invalid-male', ['subject' => __('type')]))->ucfirst(),
            'description.max' => Str::of(__('validation-size', ['size' => $this->productDescriptionMaxSize]))->ucfirst(),

            'obs.string' => Str::of(__('validation-invalid-male', ['subject' => __('type')]))->ucfirst(),
            'obs.max' => Str::of(__('validation-size', ['size' => $this->productObsMaxSize]))->ucfirst(),

            'productCategory.required' => Str::of(__('validation-required'))->ucfirst(),
            'productCategory.integer' => Str::of(__('validation-integer'))->ucfirst(),
            'productCategory.min' => Str::of(__('validation-min', ['size' => '1']))->ucfirst(),
            'productCategory.exists' => Str::of(__('validation-invalid-female', ['subject' => __('category')]))->ucfirst()
        ];
    }
}
