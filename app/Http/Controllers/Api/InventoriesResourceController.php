<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Controllers\InventoriesController;
use App\Http\Requests\Inventory\CheckRequest;
use App\Models\{
    Inventory,
    InventoryItem,
};
use App\Library\Builders\Response as ResponseBuilder;

class InventoriesResourceController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param  App\Http\Requests\Inventory\CheckRequest  $request
     */
    public function index(CheckRequest $request)
    {
        $group = $request->input('group', 3);
        $search = $request->input('search');

        $query = InventoriesController::searchInventoryProductSummary(
            auth()->user()->id
        );
        if (!is_null($search)) {
            $query = $query->where('productName', 'like', "%{$search}%");
        }
        return ResponseBuilder::successJSON(
            $query->paginate($group)
        );
    }

    /**
     * Display a complete innventory summary to an only product.
     *
     * @param  App\Http\Requests\Inventory\CheckRequest  $request
     */
    public function summary(CheckRequest $request)
    {
        $productID = $request->productID;
        $summary = InventoriesController::searchInventoryProductSummary(
            auth()->user()->id,
            [$productID]
        )->first();
        if (is_null($summary)) {
            return json_encode($summary);
        }
        return ResponseBuilder::successJSON($summary);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  App\Http\Requests\Inventory\CheckRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(CheckRequest $request)
    {
        $userID = auth()->user()->id;
        $inventory = Inventory::make();
        $inventory->user_id = $userID;
        $inventory->save();

        $items = json_decode($request->input('items'), TRUE);
        foreach ($items['products'] as $product) {
            $inventoryItem = InventoryItem::make();
            $inventoryItem->qty = $product['qty'];
            $inventoryItem->cost = $product['cost'];
            $inventoryItem->product_id = $product['id'];
            $inventoryItem->inventory_id = $inventory->id;
            $inventoryItem->save();
        }

        return response('OK', 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Http\Requests\Inventory\CheckRequest  $request
     */
    public function show(CheckRequest $request)
    {
        return ResponseBuilder::successJSON(
            InventoriesController::organizeInventoryShow(
                InventoriesController::searchInventoryShow([$request->validated('productID')])
            )
        );
    }

    /**
     * Display the specified inventory_items instance.
     *
     * @param  \App\Http\Requests\Inventory\CheckRequest  $request
     */
    public function showItem(CheckRequest $request)
    {
        $inventoryItem = InventoryItem::find($request->validated('inventoryItemID'));
        $qtyUsed = $inventoryItem->sale_items()->select('id')->get()->reduce(function ($acc, $saleItem) {
            return $acc + $saleItem->pivot->qty_used;
        }, 0);
        $product = $inventoryItem->product()->select('id', 'name', 'photo')->first();
        return ResponseBuilder::successJSON(
            [
                'productID' => $product->id,
                'productName' => $product->name,
                'productPhoto' => $product->photo,
                'utilization' => $qtyUsed,
                'remain' => $inventoryItem->qty - $qtyUsed,
                'cost' => $inventoryItem->cost,
            ]
        );
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\Inventory\CheckRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function update(CheckRequest $request)
    {
        $inventoryItem = InventoryItem::find($request->validated('inventoryItemID'));
        $qtyUsed = $inventoryItem->sale_items()->select('id')->get()->reduce(function ($acc, $saleItem) {
            return $acc + $saleItem->pivot->qty_used;
        }, 0);
        $newItemData = collect(json_decode($request->input('items'))->products)->first();

        $qtySentToUser = $inventoryItem->qty - $qtyUsed;
        $qtyReceivedFromUser = $newItemData->qty;

        if ($qtySentToUser > $qtyReceivedFromUser) { // qty decreased
            $inventoryItem->qty -= $qtySentToUser - $qtyReceivedFromUser;
        } else if ($qtySentToUser < $qtyReceivedFromUser) { // qty increased
            $inventoryItem->qty += $qtyReceivedFromUser - $qtySentToUser;
        }
        $inventoryItem->cost = $newItemData->cost;
        $inventoryItem->save();

        return response('OK', 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Http\Requests\Inventory\CheckRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function destroy(CheckRequest $request)
    {
        InventoriesController::offInventoryItems(auth()->user()->id, [$request->validated('productID')]);
        return response('OK', 200);
    }

    /**
     * Remove the specified inventory_items instance from storage.
     *
     * @param  \App\Http\Requests\Inventory\CheckRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function destroyItem(CheckRequest $request)
    {
        $inventoryItemID = $request->validated('inventoryItemID');
        $inventoryItem = InventoryItem::find($inventoryItemID, ['id', 'qty', 'inventory_id']);
        InventoriesController::destroyInventoryItem($inventoryItem);
        return response('OK', 200);
    }
}
