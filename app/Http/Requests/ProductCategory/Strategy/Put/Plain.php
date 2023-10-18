<?php

namespace App\Http\Requests\ProductCategory\Strategy\Put;

use App\Http\Requests\Checker;
use App\Rules\BelongsToUser;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class Plain implements Checker
{
    /** @var int */
    private $productCategoryID;

    /** @var string */
    private $name;

    /** @var int */
    private $prodCategoryNameMaxSize = 0;

    public function __construct(FormRequest $formRequest)
    {
        $this->productCategoryID = $formRequest->productCategoryID ?? NULL;
        $this->name = $formRequest->input('name');
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
                new BelongsToUser('product_categories')
            ],
            'name' => $this->getNameFieldRules(),
            'description' => 'nullable|string|max:200',
            'obs' => 'nullable|string|max:500'
        ];
    }

    public function messages(): array
    {
        return [
            'productCategoryID.required' => Str::of(__('validation-required'))->ucfirst(),
            'productCategoryID.integer' => Str::of(__('validation-integer'))->ucfirst(),
            'productCategoryID.min' => Str::of(__('validation-min', ['size' => '1']))->ucfirst(),
            'productCategoryID.exists' => Str::of(__('validation-invalid-female', ['subject' => __('category')]))->ucfirst(),

            'name.required' => Str::of(__('validation-required'))->ucfirst(),
            'name.max' => Str::of(__('validation-size', [
                'size' => $this->prodCategoryNameMaxSize
            ]))->ucfirst(),
            'name.unique' => Str::of(__('validation-name-already-used'))->ucfirst(),

            'description.string' => Str::of(__('validation-invalid-female', ['subject' => __('description')]))->ucfirst(),
            'description.max' => Str::of(__('validation-size', ['size' => '200']))->ucfirst(),

            'obs.string' => Str::of(__('validation-invalid-female', ['subject' => __('obs')]))->ucfirst(),
            'obs.max' => Str::of(__('validation-size', ['size' => '500']))->ucfirst()
        ];
    }

    /**
     * Get the validation rules data to name field
     *
     * @return array
     */
    private function getNameFieldRules()
    {
        if (self::isNameEqual($this->productCategoryID, $this->name)) {
            return "required|max:{$this->prodCategoryNameMaxSize}";
        }
        return "required|max:{$this->prodCategoryNameMaxSize}|unique:product_categories,name";
    }

    /**
     * Define if new name is not equal to productCategory item stored in the database
     *
     * @param int $productCategoryID
     * @param string $newName
     * @return bool
     */
    private static function isNameEqual($productCategoryID, $newName)
    {
        $nameFromDB = DB::table('product_categories')->where('id', $productCategoryID)->value('name');
        return $nameFromDB === $newName;
    }
}
