<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Product\CheckRequest;
use App\Models\Product;
use App\Models\ProductCategory;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;
use App\Library\Builders\Response as ResponseBuilder;

class ProductsResourceController extends Controller
{
    /**
     * Returns the product list on json format
     */
    public function index(CheckRequest $request)
    {
        $productCategoryName = trim($request->validated('productCategoryName') ?? '');
        $group = $request->input('group');
        $search = $request->input('search');
        return $this->searchProducts(TRUE, $group, $productCategoryName, $search);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(CheckRequest $request)
    {
        $product = Product::make($request->only(
            'name',
            'description',
            'obs',
        ));
        if ($request->hasFile('photo') && $request->file('photo')->isValid()) {
            $path = $request->photo->store('product-photos');
            $product->photo = $path;
        }

        $product->user_id = auth()->user()->id;
        $product->product_category_id = $request->validated('productCategory');
        $product->save();

        return response('OK', 200);
    }

    /**
     * Display the specified resource.
     */
    public function show(CheckRequest $request)
    {
        $product = Product::find($request->validated('productID'));
        $category = $product->product_category;
        return ResponseBuilder::successJSON([
            'id' => $product->id,
            'name' => $product->name,
            'photo' => $product->photo,
            'description' => $product->description,
            'obs' => $product->obs,
            'category' => [
                'id' => $category->id,
                'name' => $category->name,
                'description' => $category->description,
                'obs' => $category->obs
            ],
            'created_at' => $product->created_at_formatted
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(CheckRequest $request)
    {
        $product = Product::find($request->validated('productID'));
        if ($request->hasFile('photo') && $request->file('photo')->isValid()) {
            $pathPhotoRecent = storage_path() . '/app/' . $product->photo;
            if (File::exists($pathPhotoRecent)) {
                File::delete($pathPhotoRecent);
            }
            $pathPhotoNew = $request->photo->store('product-photos');
            $product->photo = $pathPhotoNew;
        }

        $product->name = $request->name;
        $product->description = $request->description;
        $product->obs = $request->obs;

        $productCategoryID = $request->validated('productCategory');
        if ($product->product_category_id !== $productCategoryID) {
            $productCategory = ProductCategory::find($productCategoryID);
            $product->product_category()->associate($productCategory);
        }
        $product->update();

        return response('OK', 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(CheckRequest $request)
    {
        Product::find($request->validated('productID'))->delete();
        return response('OK', 200);
    }

    /**
     * Requests the products registered by user logged.
     * Product list is optionally filtered by product category.
     *
     * @param bool $paginate
     * @param int $perPage
     * @param ?string $productCategoryName
     * @param ?string $search
     *
     * @return Illuminate\Database\Eloquent\Collection
     */
    private function searchProducts($paginate = FALSE, $perPage = 3, $productCategoryName = NULL, $search = NULL)
    {
        if (!$productCategoryName) {
            $query = Product::select('id', 'name', 'photo')->where([
                ['user_id', auth()->user()->id],
            ]);
            if ($search) {
                $query = $query->where([
                    ['name', 'like', "%{$search}%"],
                ]);
            }
            if ($paginate) {
                return $query->paginate($perPage);
            }
            return $query->get();
        }

        $hasDefaultCategory = $this->containsDefaultCategoryName($productCategoryName);
        $query = DB::table('products')->select(
            'products.id',
            'products.name',
            'products.photo',
        )->distinct()->join('product_categories', function ($join) use ($productCategoryName, $hasDefaultCategory) {
            $join->on(
                'products.product_category_id',
                '=',
                'product_categories.id'
            )->where(
                'product_categories.name',
                'like',
                "%{$productCategoryName}%"
            );
            if ($hasDefaultCategory) {
                $join->orWhere(
                    'product_categories.name',
                    'product-category-default'
                );
            } else {
                $join->where(
                    'product_categories.name',
                    '<>',
                    'product-category-default'
                );
            }
        })->where(
            'products.user_id',
            auth()->user()->id
        );
        if ($search) {
            $query = $query->where([
                ['products.name', 'like', "%{$search}%"],
            ]);
        }
        if ($paginate) {
            return $query->paginate($perPage);
        }
        return $query->get();
    }

    /**
     * Checks if the productCategory's name contains the default option value
     *
     * @param  string  $name
     */
    private function containsDefaultCategoryName($name)
    {
        return str_contains(__('product-category-default'), strtolower($name));
    }
}
