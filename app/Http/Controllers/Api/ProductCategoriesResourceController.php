<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\ProductCategory\CheckRequest;
use App\Models\ProductCategory;

class ProductCategoriesResourceController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(CheckRequest $request)
    {
        $whereClauses = [
            ['user_id', auth()->user()->id]
        ];
        if ($request->has('productCategoryName')) {
            $productCategoryName = $request->input('productCategoryName', '');
            $whereClauses[] = [
                'name',
                'like',
                "%{$productCategoryName}%"
            ];
        }
        $group = $request->query('group', 3);
        return ProductCategory::select(
            'id',
            'name',
            'description',
            'obs'
        )->where($whereClauses)->paginate($group);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(CheckRequest $request)
    {
        $productCategory = ProductCategory::make($request->only(
            'name',
            'description',
            'obs',
        ));

        $productCategory->user_id = auth()->user()->id;
        $productCategory->save();

        return response('OK', 200);
    }

    /**
     * Display the specified resource.
     */
    public function show(CheckRequest $request)
    {
        $productCategory = ProductCategory::find($request->validated('productCategoryID'));
        return response()->json([
            'id' => $productCategory->id,
            'name' => $productCategory->name,
            'description' => $productCategory->description,
            'obs' => $productCategory->obs,
            'created_at' => $productCategory->created_at_formatted
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(CheckRequest $request)
    {
        $productCategory = ProductCategory::find($request->validated('productCategoryID'));
        $productCategory->update($request->only(
            'name',
            'description',
            'obs',
        ));

        return response('OK', 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(CheckRequest $request, $productCategoryID)
    {
        $productCategory = ProductCategory::find($request->validated('productCategoryID'));
        $productCategory->delete();

        return response('OK', 200);
    }
}
