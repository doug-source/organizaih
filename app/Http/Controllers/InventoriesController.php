<?php

namespace App\Http\Controllers;

use App\Models\InventoryItem;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\DB;

class InventoriesController
{
    /**
     * Return the date pattern based on current locale_code
     *
     * @return string
     */
    private static function getDatePattern()
    {
        $locale = App::getLocale();
        if ($locale === 'pt_BR') {
            return 'd/m/Y';
        }
        return 'm/d/Y';
    }

    /**
     * Convert the string based on date pattern
     *
     * @param  string  $text
     * @param  string  $pattern
     * @return  string
     */
    private static function formatDateString(string $text, string $pattern)
    {
        return date_create_from_format(
            'Y-m-d H:i:s',
            $text
        )->format($pattern);
    }

    /**
     * Search by inventory_items free to bind with some future sale_items.
     * Used by App\Http\Controllers\SaleController->storeItemDependencies
     *
     * @param  int  $userID
     * @param  array  $productListID
     * @return  \Illuminate\Database\Query\Builder
     */
    public static function searchInventoryItemsUsable($userID, $productListID = [])
    {
        $subQuery = DB::table('inventory_items')
            ->select([
                'inventory_items.id',
                'inventory_items.qty',
                'inventories.created_at',
                'products.id AS productID',
                DB::raw('
                    SUM(
                        CASE
                            WHEN `inventory_item_sale_item`.`qty_used` IS NULL THEN 0
                            ELSE `inventory_item_sale_item`.`qty_used`
                        END
                    ) AS qty_used
                ')
            ])
            ->join('products', function ($join) {
                $join->on(
                    'inventory_items.product_id',
                    '=',
                    'products.id'
                );
            })
            ->join('inventories', function ($join) {
                $join->on(
                    'inventory_items.inventory_id',
                    '=',
                    'inventories.id'
                );
            })
            ->leftJoin('inventory_item_sale_item', function ($join) {
                $join->on(
                    'inventory_items.id',
                    '=',
                    'inventory_item_sale_item.inventory_item_id'
                );
            })
            ->where([
                ['products.user_id', $userID]
            ])
            ->groupBy([
                'id', 'qty', 'productID', 'created_at'
            ]);

        if (count($productListID) > 0) {
            $subQuery->whereIn('products.id', $productListID);
        }

        return DB::query()->fromSub($subQuery, 'All')->select([
            'created_at',
            'id',
            'qty',
            'qty_used'
        ])
            ->orderBy('All.created_at')
            ->orderBy('All.qty')
            ->whereRaw('All.qty <> All.qty_used')
            ->get();
    }

    /**
     *  Search by inventory_items free and product information to be used
     *  by Inventory List (index action).
     *  Used by App\Http\Controllers\Api\InventoriesResourceController->index
     *
     * @param  int  $userID
     * @param  array  $productListID
     * @return  \Illuminate\Database\Query\Builder
     */
    public static function searchInventoryProductSummary($userID, $productListID = [])
    {
        $subQuery = DB::table('inventory_items')
            ->select([
                'inventory_items.id',
                'inventory_items.qty',
                'products.id AS productID',
                'products.name AS productName',
                'products.photo AS productPhoto',
                DB::raw('
                    SUM(
                        CASE
                            WHEN `inventory_item_sale_item`.`qty_used` IS NULL THEN 0
                            ELSE `inventory_item_sale_item`.`qty_used`
                        END
                    ) AS qtyUsed
                ')
            ])
            ->join('products', function ($join) {
                $join->on(
                    'inventory_items.product_id',
                    '=',
                    'products.id'
                );
            })
            ->leftJoin('inventory_item_sale_item', function ($join) {
                $join->on(
                    'inventory_items.id',
                    '=',
                    'inventory_item_sale_item.inventory_item_id'
                );
            })
            ->where([
                ['products.user_id', $userID]
            ])
            ->groupBy([
                'id', 'qty', 'productID', 'productName', 'productPhoto'
            ]);

        if (count($productListID) > 0) {
            $subQuery->whereIn('products.id', $productListID);
        }

        return DB::query()->fromSub($subQuery, 'All')->select([
            'productID', 'productName', 'productPhoto', DB::raw('
                CAST(SUM(qty - qtyUsed) AS UNSIGNED) AS qty
            ')
        ])
            ->whereRaw('All.qty > All.qtyUsed')
            ->groupBy([
                'productID', 'productName', 'productPhoto'
            ]);
    }

    /**
     *  Search the inventory_items data in database.
     *  Used by App\Http\Controllers\Api\InventoriesResourceController->show
     *
     * @param  Illuminate\Database\Eloquent\Collection  $collection
     * @return  array
     */
    public static function searchInventoryShow($productListID = [])
    {
        $subQuery = DB::table('inventory_items')
            ->select([
                'inventory_items.id',
                'inventory_items.qty',
                'inventory_items.cost',
                'inventories.created_at',
                'products.id AS productID',
                'products.name AS productName',
                'products.photo AS productPhoto',
                DB::raw('CAST(
                    SUM(
                        CASE
                            WHEN `inventory_item_sale_item`.`qty_used` IS NULL THEN 0
                            ELSE `inventory_item_sale_item`.`qty_used`
                        END
                    ) AS UNSIGNED) AS qtyUsed
                ')
            ])
            ->join('products', function ($join) {
                $join->on(
                    'inventory_items.product_id',
                    '=',
                    'products.id'
                );
            })
            ->join('inventories', function ($join) {
                $join->on(
                    'inventory_items.inventory_id',
                    '=',
                    'inventories.id'
                );
            })
            ->leftJoin('inventory_item_sale_item', function ($join) {
                $join->on(
                    'inventory_items.id',
                    '=',
                    'inventory_item_sale_item.inventory_item_id'
                );
            })
            ->where([
                ['products.user_id', auth()->user()->id]
            ])
            ->orderBy('inventories.created_at')
            ->groupBy([
                'id', 'qty', 'cost', 'productID', 'productName', 'productPhoto'
            ]);

        if (count($productListID) > 0) {
            $subQuery->whereIn('products.id', $productListID);
        }

        return DB::query()->fromSub($subQuery, 'All')->select([
            'id',
            'productID',
            'productName',
            'productPhoto',
            'created_at',
            'qtyUsed AS utilization',
            DB::raw('(qty - qtyUsed) as remain'),
            'cost'
        ])
            ->whereRaw('All.qty <> All.qtyUsed')
            ->get();
    }

    /**
     *  Organize the inventory_items from database fetch.
     *  Used by App\Http\Controllers\Api\InventoriesResourceController->show
     *
     * @param  Illuminate\Database\Eloquent\Collection  $collection
     * @return  array
     */
    public static function organizeInventoryShow($collection)
    {
        $pattern = self::getDatePattern();
        return $collection->reduce(function ($carry, $data) use ($pattern) {
            if (is_null($carry)) {
                $carry = [
                    'id' => $data->productID,
                    'name' => $data->productName,
                    'photo' => $data->productPhoto,
                    'entries' => []
                ];
            }
            $created_at = self::formatDateString($data->created_at, $pattern);
            if (!key_exists($created_at, $carry['entries'])) {
                $carry['entries'][$created_at] = [];
            }
            $inventoryItemID = $data->id;

            $carry['entries'][$created_at][] = [
                'id' => $inventoryItemID,
                'utilization' => $data->utilization,
                'remain' => $data->remain,
                'cost' => $data->cost
            ];
            return $carry;
        }, NULL);
    }

    /**
     *  Remove all necessary inventory_items
     *  Used by App\Http\Controllers\Api\InventoriesResourceController->destroy
     *
     * @param  int  $userID
     * @param  array  $productListID
     */
    public static function offInventoryItems($userID, $productListID = [])
    {
        $inventoryItemListDB = DB::table('inventory_items')
            ->join('inventories', function ($join) {
                $join->on(
                    'inventory_items.inventory_id',
                    '=',
                    'inventories.id'
                );
            })
            ->join('products', function ($join) {
                $join->on(
                    'inventory_items.product_id',
                    '=',
                    'products.id'
                );
            })
            ->where('inventories.user_id', $userID)
            ->whereIn('inventory_items.product_id', $productListID)
            ->select(['inventory_items.id AS ii_id', 'inventories.id AS i_id'])
            ->get();

        $inventoryListID = [];

        $inventoryItemListDB->each(function ($item) use (&$inventoryListID) {
            $inventoryItem = InventoryItem::find($item->ii_id);
            self::destroyInventoryItem($inventoryItem, FALSE);
            if (!in_array($item->i_id, $inventoryListID)) {
                $inventoryListID[] = $item->i_id;
            }
        });

        DB::table('inventories')
            ->leftJoin('inventory_items', function ($join) {
                $join->on(
                    'inventory_items.inventory_id',
                    '=',
                    'inventories.id'
                );
            })
            ->whereNull('inventory_items.inventory_id')
            ->whereIn('inventories.id', $inventoryListID)
            ->delete();
    }

    /**
     *  Execute the remotion of one InventoryItem (if it is not used by any sales)
     *  Used by App\Http\Controllers\Api\InventoriesResourceController->destroyItem
     *
     * @param  int  $inventoryItemID
     * @param  bool  $checkEmptyInventory
     */
    public static function destroyInventoryItem(InventoryItem $inventoryItem, $checkEmptyInventory = TRUE)
    {
        $qtyUsed = $inventoryItem->sale_items()->select('id')->get()->reduce(function ($acc, $saleItem) {
            return $acc + $saleItem->pivot->qty_used;
        }, 0);
        if ($qtyUsed == 0) {
            $inventoryItem->delete();
            if ($checkEmptyInventory) {
                $inventory = $inventoryItem->inventory;
                $hasItems = $inventory->inventory_items()->count() > 0;
                if (!$hasItems) {
                    $inventory->delete();
                }
            }
        } else {
            $inventoryItem->update(['qty' => $qtyUsed]);
        }
    }
}
