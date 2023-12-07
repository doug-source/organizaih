<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Controllers\SaleController;
use App\Http\Requests\Sale\CheckRequest;
use App\Models\Sale;
use App\Library\Builders\Response as ResponseBuilder;

class SalesResourceController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(CheckRequest $request)
    {
        $productName = $request->input('productName');
        $customerName = $request->input('customerName');
        $dtStart = $request->input('dtStart');
        $dtEnd = $request->input('dtEnd');

        return ResponseBuilder::successJSON(
            SaleController::searchSalesToIndex(
                TRUE,
                $request->input('group', 3),
                $customerName,
                $productName,
                $dtStart,
                $dtEnd
            )
        );
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(CheckRequest $request)
    {
        $userID = auth()->user()->id;
        SaleController::storeSales(
            $userID,
            $request->validated('customerID'),
            json_decode($request->input('items'), TRUE)
        );
        return ResponseBuilder::successJSON();
    }

    /**
     * Display the specified resource.
     */
    public function show(CheckRequest $request)
    {
        $saleID = $request->validated('saleID');
        $userID = auth()->user()->id;
        return ResponseBuilder::successJSON(SaleController::organizeSale(
            SaleController::searchSale($userID, $saleID, TRUE)
        ));
    }

    /**
     * Display the products related with sales.
     */
    public function showByProductQty(CheckRequest $request)
    {
        $userID = auth()->user()->id;
        return SaleController::searchByProducts(
            $userID,
            $request->validated('productQty'),
            $request->validated('dtStart')
        );
    }

    /**
     * Display the quantity of 'products' sold and grouped
     */
    public function showProductQty(CheckRequest $request)
    {
        $userID = auth()->user()->id;
        $dtStart = $request->input('dtStart');
        return SaleController::searchProductCount($userID, $dtStart);
    }

    /**
     * Display the customers related with sales.
     */
    public function showCustomerQty(CheckRequest $request)
    {
        $userID = auth()->user()->id;
        $dtStart = $request->input('dtStart');
        return SaleController::searchCustomerCount($userID, $dtStart);
    }

    /**
     * Display the customers related with sales.
     */
    public function showByCustomerQty(CheckRequest $request)
    {
        $userID = auth()->user()->id;
        return SaleController::searchByCustomers(
            $userID,
            $request->validated('customerQty'),
            $request->validated('dtStart')
        );
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(CheckRequest $request)
    {
        $userID = auth()->user()->id;
        $saleID = $request->validated('saleID');
        $customerID = $request->validated('customerID');

        $userItems = json_decode($request->input('items'), TRUE);
        $items = collect($userItems['sales']);
        [
            'allRemoved' => $allRemoved,
            'remain' => $remain
        ] = SaleController::organizeDatabaseInfoToUpdate(
            $saleID,
            $userID,
            $items
        );
        SaleController::runSaleDeletion($allRemoved);
        SaleController::updateSaleRemain($remain, $items, $customerID, $userID, $saleID);
        return response('OK', 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(CheckRequest $request)
    {
        Sale::where('id', $request->validated('saleID'))->delete();
        return response('OK', 200);
    }
}
