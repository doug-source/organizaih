<?php

namespace App\Http\Controllers;

use App\Models\InventoryItem;
use App\Models\Sale;
use App\Models\SaleItem;
use ArrayObject;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\DB;

class SaleController
{
    /**
     * Return the date pattern based on current locale_code
     *
     * @return string
     */
    public static function getDatePattern()
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
    public static function formatDateString(string $text, string $pattern)
    {
        return date_create_from_format(
            'Y-m-d H:i:s',
            $text
        )->format($pattern);
    }

    /**
     * Storage the sales instance and sale_items instances related
     *
     * @param  int  $userID
     * @param  int  $customerID
     * @param  array  $userItems
     * @param  App\Models\Sale  $sale optional
     */
    public static function storeSales(int $userID, int $customerID, array $userItems, ?Sale $sale = NULL)
    {
        if (is_null($sale)) {
            $sale = Sale::make();
            $sale->user_id = $userID;
            $sale->customer_id = $customerID;
            $sale->save();
        }

        foreach ($userItems['sales'] as $saleData) {
            $productID = $saleData['id'];
            self::storeItem(
                $saleData['qty'],
                $saleData['price'],
                $sale->id,
                $productID,
                $userID
            );
        }
    }

    /**
     * Storage the sale_items instance and the inventory_item_sale_item
     * instances related
     *
     * @param  int  $qty
     * @param  float  $price
     * @param  int  $saleID
     * @param  int  $productID
     * @param  int  $userID
     */
    public static function storeItem($qty, $price, $saleID, $productID, $userID)
    {
        $saleItem = SaleItem::make();
        $saleItem->qty = $qty;
        $saleItem->price = $price;
        $saleItem->sale_id = $saleID;
        $saleItem->product_id = $productID;
        $saleItem->save();

        self::storeItemDependencies($userID, [$productID], $qty, $saleItem);
    }

    /**
     * Storage the sale_items instance and the inventory_item_sale_item
     * instances related to
     *
     * @param  int  $userID
     * @param  array  $productListID
     * @param  int  $totalQty
     * @param  App\Models\SaleItem  $saleItem
     */
    private static function storeItemDependencies($userID, $productListID, $totalQty, $saleItem)
    {
        $inventoryIt = (new ArrayObject(
            InventoriesController::searchInventoryItemsUsable($userID, $productListID)->toArray()
        ))->getIterator();
        while ($totalQty > 0 && $inventoryIt->valid()) {
            $inventoryData = $inventoryIt->current();
            $inventoryItem = InventoryItem::find($inventoryData->id);
            $qtyToSave = $inventoryItem->qty - $inventoryData->qty_used;

            if ($qtyToSave <= $totalQty) {
                $totalQty -= $qtyToSave;
            } else {
                $qtyToSave = $totalQty;
                $totalQty = 0;
            }
            $saleItemFromDB = $inventoryItem->sale_items()->find($saleItem->id);
            if (is_null($saleItemFromDB)) {
                $inventoryItem->sale_items()->save($saleItem, [
                    'qty_used' => $qtyToSave
                ]);
            } else {
                $currentQty = $saleItemFromDB->pivot->qty_used;
                $inventoryItem->sale_items()->updateExistingPivot(
                    $saleItem->id,
                    ['qty_used' => $qtyToSave + $currentQty]
                );
            }

            $inventoryIt->next();
        }
    }

    /**
     * Search from database the updating data e compare with same data from user
     * separating removable and updatable sale_items.
     * Used during the sale update feature.
     *
     * @param  int  $productID
     * @param  int  $userID
     * @param  Illuminate\Database\Eloquent\Collection  $userItems
     */
    public static function organizeDatabaseInfoToUpdate($saleID, $userID, $userItems)
    {
        return collect(self::organizeSale(
            self::searchSale(
                $userID,
                $saleID,
                TRUE
            )
        )['products'])->reduce(function ($acc, $next) use ($userItems) {
            if (!$userItems->some(fn ($value) => $value['id'] == $next['productID'])) {
                return ['allRemoved' => [...$acc['allRemoved'], $next], 'remain' => $acc['remain']];
            }
            return ['allRemoved' => $acc['allRemoved'], 'remain' => [...$acc['remain'], $next]];
        }, ['allRemoved' => [], 'remain' => []]);
    }

    /**
     *  Organize the sale_items info (free and used) from database fetch to be used
     *
     * @param  int  $userID
     * @param  int  $saleID
     * @return  \Illuminate\Database\Query\Builder
     */
    public static function searchSale($userID, $saleID, $grouped = FALSE)
    {
        $fields = [
            'sales.created_at',
            'sales.id AS saleID',
            'sale_items.id AS saleItemID',
            'sale_items.price',
            'customers.id AS customerID',
            'customers.name AS customerName',
            'customers.photo AS customerPhoto',
            'products.id AS productID',
            'products.name AS productName',
            'products.photo AS productPhoto',
            'inventory_item_sale_item.qty_used'
        ];
        if ($grouped) {
            $fields[count($fields) - 1] = DB::raw('SUM(inventory_item_sale_item.qty_used) AS qty_used');
        }

        $query = DB::table('sales')
            ->select($fields)
            ->join('sale_items', function ($join) {
                $join->on(
                    'sales.id',
                    '=',
                    'sale_items.sale_id'
                );
            })
            ->join('inventory_item_sale_item', function ($join) {
                $join->on(
                    'sale_items.id',
                    '=',
                    'inventory_item_sale_item.sale_item_id',
                );
            })
            ->join('customers', function ($join) {
                $join->on(
                    'customers.id',
                    '=',
                    'sales.customer_id'
                );
            })
            ->join('products', function ($join) {
                $join->on(
                    'products.id',
                    '=',
                    'sale_items.product_id'
                );
            })->where([
                ['sales.id', $saleID],
                ['sales.user_id', $userID]
            ]);

        if ($grouped) {
            $query = $query->groupBy([
                'created_at',
                'customerID',
                'customerName',
                'customerPhoto',

                'saleID',
                'saleItemID',
                'productID',
                'productName',
                'productPhoto',
                'price'
            ]);
        }

        return $query->get();
    }

    /**
     *  Receives a date in 'Y-m' format and returns the month's last day
     *  in last hour, minute and second too
     *
     * @param  string  $dtStart
     * @return  string
     */
    private static function dettachEndDate($dtStart)
    {
        [$year, $month] = explode('-', $dtStart);
        $days = cal_days_in_month(CAL_GREGORIAN, $month, $year);
        return "$dtStart-$days 23:59:59";
    }

    /**
     *  Query info in database tables about 'sales' and 'products'
     *  with the greatest qty in desc order
     *
     * @param  int  $userID
     * @param  int  $qty
     * @param  ?string  $dtStart
     * @return  \Illuminate\Database\Eloquent\Collection
     */
    public static function searchByProducts($userID, $qty = NULL, $dtStart = NULL)
    {
        $whereClauses = [
            ['sales.user_id', $userID]
        ];
        $query = DB::table('sales')
            ->select([
                'products.name',
                DB::raw('CAST(SUM(sale_items.qty) AS UNSIGNED) AS qty')
            ])
            ->join('sale_items', function ($join) {
                $join->on(
                    'sales.id',
                    '=',
                    'sale_items.sale_id'
                );
            })
            ->join('products', function ($join) {
                $join->on(
                    'products.id',
                    '=',
                    'sale_items.product_id'
                );
            });

        if (!is_null($qty)) {
            $query = $query->limit($qty);
        }
        if (!is_null($dtStart)) {
            $whereClauses[] = ['sales.created_at', '>=', "$dtStart-01 00:00:00"];
            $whereClauses[] = ['sales.created_at', '<=', self::dettachEndDate($dtStart)];
        }

        return $query->where(
            $whereClauses
        )->groupBy('name')->orderBy('qty', 'desc')->get();
    }

    /**
     *  Query info in database tables about quantity of 'products' sold and grouped
     *
     * @param  int  $userID
     * @param  ?string  $dtStart
     * @return  \Illuminate\Database\Eloquent\Collection
     */
    public static function searchProductCount($userID, $dtStart = NULL)
    {
        $whereClauses = [
            ['sales.user_id', $userID]
        ];
        $query = DB::table('sales')
            ->select([
                DB::raw('COUNT(DISTINCT products.name) AS qty')
            ])
            ->join('sale_items', function ($join) {
                $join->on(
                    'sales.id',
                    '=',
                    'sale_items.sale_id'
                );
            })
            ->join('products', function ($join) {
                $join->on(
                    'products.id',
                    '=',
                    'sale_items.product_id'
                );
            });

        if (!is_null($dtStart)) {
            $whereClauses[] = ['sales.created_at', '>=', "$dtStart-01 00:00:00"];
            $whereClauses[] = ['sales.created_at', '<=', self::dettachEndDate($dtStart)];
        }
        return $query->where($whereClauses)->value('qty');
    }

    /**
     *  Query info in database tables about 'sales' and 'customers'
     *  with the greatest qty in desc order
     *
     * @param  int  $userID
     * @param  int  $qty
     * @param  ?string  $dtStart
     * @return  \Illuminate\Database\Eloquent\Collection
     */
    public static function searchByCustomers($userID, $qty = NULL, $dtStart = NULL)
    {
        $whereClauses = [
            ['sales.user_id', $userID]
        ];
        $query = DB::table('sales')
            ->select([
                'customers.name',
                DB::raw('CAST(SUM(sale_items.qty) AS UNSIGNED) AS qty')
            ])
            ->join('sale_items', function ($join) {
                $join->on(
                    'sales.id',
                    '=',
                    'sale_items.sale_id'
                );
            })
            ->join('customers', function ($join) {
                $join->on(
                    'customers.id',
                    '=',
                    'sales.customer_id'
                );
            });

        if (!is_null($qty)) {
            $query = $query->limit($qty);
        }
        if (!is_null($dtStart)) {
            $whereClauses[] = ['sales.created_at', '>=', "$dtStart-01 00:00:00"];
            $whereClauses[] = ['sales.created_at', '<=', self::dettachEndDate($dtStart)];
        }

        return $query->where(
            $whereClauses
        )->groupBy('name')->orderBy('qty', 'desc')->get();
    }

    /**
     *  Query info in database tables about quantity of 'customers buyer' and grouped
     *
     * @param  int  $userID
     * @param  ?string  $dtStart
     * @return  \Illuminate\Database\Eloquent\Collection
     */
    public static function searchCustomerCount($userID, $dtStart = NULL)
    {
        $whereClauses = [
            ['sales.user_id', $userID]
        ];
        $query = DB::table('sales')
            ->select([
                DB::raw('COUNT(DISTINCT customers.name) AS qty')
            ])
            ->join('customers', function ($join) {
                $join->on(
                    'customers.id',
                    '=',
                    'sales.customer_id'
                );
            });

        if (!is_null($dtStart)) {
            $whereClauses[] = ['sales.created_at', '>=', "$dtStart-01 00:00:00"];
            $whereClauses[] = ['sales.created_at', '<=', self::dettachEndDate($dtStart)];
        }
        return $query->where($whereClauses)->value('qty');
    }

    /**
     * Query info in database tables about 'sales', optionally based in:
     * - Customer
     * - Product/ProductCategory
     * - User logged
     *
     * @param  bool  $pagination
     * @param  ?string  $customerName
     * @param  ?string  $productName
     * @param  ?string  $dtStart
     * @param  ?string  $dtEnd
     * @return  \Illuminate\Database\Eloquent\Collection
     */
    public static function searchSalesToIndex($pagination = FALSE, $perPage = 3, $customerName = NULL, $productName = NULL, $dtStart = NULL, $dtEnd = NULL)
    {
        $query = DB::table('sales')
            ->join('sale_items', function ($join) {
                $join->on(
                    'sales.id',
                    '=',
                    'sale_items.sale_id'
                );
            })
            ->join('customers', function ($join) {
                $join->on(
                    'customers.id',
                    '=',
                    'sales.customer_id'
                );
            })
            ->join('products', function ($join) {
                $join->on(
                    'products.id',
                    '=',
                    'sale_items.product_id'
                );
            });

        $fields = [
            'sales.id',
            'sales.created_at',
            'customers.id AS customerID',
            'customers.name AS customerName',
            'customers.photo AS customerPhoto',
        ];
        $whereClauses = [['sales.user_id', auth()->user()->id]];

        if ($customerName) {
            $whereClauses[] = ['customers.name', 'like', "%{$customerName}%"];
        }
        if ($productName) {
            $whereClauses[] = ['products.name', 'like', "%{$productName}%"];
        }
        if ($dtStart) {
            $whereClauses[] = ['sales.created_at', '>=', $dtStart];
        }
        if ($dtEnd) {
            $whereClauses[] = ['sales.created_at', '<=', "$dtEnd 23:59:59"];
        }
        $query = $query->select($fields)->where($whereClauses)->groupBy('id');

        if ($pagination) {
            return $query->paginate($perPage);
        }
        return $query->get();
    }

    /**
     *  Organize the sale_items and products from database fetch
     *
     * @param  Illuminate\Database\Eloquent\Collection  $collection
     * @return  array
     */
    public static function organizeSale($collection)
    {
        $pattern = self::getDatePattern();
        return $collection->reduce(function ($acc, $next) use ($pattern) {
            $createdAt = self::formatDateString($next->created_at, $pattern);
            if (is_null($acc)) {
                $acc = [
                    'createdAt' => $createdAt,
                    'customerID' => $next->customerID,
                    'customerName' => $next->customerName,
                    'customerPhoto' => $next->customerPhoto,
                    'products' => []
                ];
            }
            $acc['products'][] = [
                'saleItemID' => $next->saleItemID,
                'productID' => $next->productID,
                'productName' => $next->productName,
                'productPhoto' => $next->productPhoto,
                'qty' => $next->qty_used,
                'price' => $next->price
            ];
            return $acc;
        }, NULL);
    }

    /**
     *  Remove sale_item instances informed inside $items array
     *
     * @param  array  $items
     */
    public static function runSaleDeletion($items)
    {
        $saleItemListID = collect($items)->map(fn ($item) => $item['saleItemID'])->values()->all();
        DB::table('sale_items')->whereIn('id', $saleItemListID)->delete();
    }

    /**
     *  Execute modification of quantities of current and new
     *
     * @param  array  $databaseList
     * @param  Illuminate\Database\Eloquent\Collection  $userItems
     * @param  int  $customerID
     * @param  int  $userID
     * @param  int  $saleID
     */
    public static function updateSaleRemain($databaseList, $userItems, $customerID, $userID, $saleID)
    {
        [
            'userItems' => $userItems, // also filtered
            'lowerList' => $qtyLowerList,
            'upperList' => $qtyUpperList
        ] = self::separateSaleRemain($databaseList, $userItems);

        if (count($qtyLowerList) > 0) {
            $databaseLowerList = self::searchDatabaseSaleFiltered($qtyLowerList);
            self::updateSaleRemainQtyLower($qtyLowerList, $databaseLowerList);
        }
        if (count($qtyUpperList) > 0) {
            $databaseUpperList = self::searchDatabaseSaleFiltered($qtyUpperList);
            self::updateSaleRemainQtyUpper($userID, $qtyUpperList, $databaseUpperList);
        }

        // Remain of $userItems: new products to current sale
        $remainToCreate = $userItems->values()->all();
        foreach ($remainToCreate as $data) {
            self::storeSales(
                $userID,
                $customerID,
                ['sales' => [$data]],
                Sale::find($saleID)
            );
        }
    }

    /**
     *  Execute the separation between sale_items considering
     *  if item was removed (or not) by user
     *
     * @param  array  $databaseList
     * @param  Illuminate\Database\Eloquent\Collection  $userItems
     * @return array
     */
    private static function separateSaleRemain($databaseList, $userItems)
    {
        return collect($databaseList)->reduce(function ($acc, $next) {
            $found = NULL;
            $acc['userItems'] = $acc['userItems']->filter(function ($value) use (&$found, $next) {
                $cond = $value['id'] != $next['productID'];
                if (!$cond) {
                    $found = $value;
                }
                return $cond;
            });

            $foundQty = intval($found['qty']);
            if ($foundQty < $next['qty']) { // if new qty <
                $acc['lowerList'][] = $found;
            } else if ($foundQty > $next['qty']) { // if new qty >
                $acc['upperList'][] = $found;
            }
            return $acc;
        }, [
            'lowerList' => [], 'upperList' => [],
            'userItems' => $userItems
        ]);
    }

    /**
     *  Execute the sale_items qty updating when the new quantity is
     *  upper then current quantity
     *
     * @param  int  $userID
     * @param  array  $qtyUpperList
     * @param  Illuminate\Database\Eloquent\Collection  $databaseUpperList
     */
    private static function updateSaleRemainQtyUpper($userID, $qtyUpperList, $databaseUpperList)
    {
        foreach ($qtyUpperList as $upperItem) {
            $saleItemID = $upperItem['saleItemID'];
            $saleItem = SaleItem::find($saleItemID);
            $currentQty = $upperItem['qty']; // chosen by user
            $saleItem->qty = $currentQty;
            $saleItem->save();

            $qtyUsed = $databaseUpperList->filter(
                fn ($item) => $item->sale_item_id === $saleItemID
            )->reduce(fn ($acc, $next) => $acc + $next->qty_used, 0);

            $diff = $currentQty - $qtyUsed;
            $productID = $upperItem['id'];
            self::storeItemDependencies($userID, [$productID], $diff, $saleItem);
        }
    }

    /**
     *  Search the information about inventory_item_sale_item based on
     *  sale_items information
     *
     * @param  array  $itemList
     * @return  Illuminate\Database\Eloquent\Collection
     */
    private static function searchDatabaseSaleFiltered($itemList)
    {
        $saleItemListID = collect($itemList)->map(fn ($item) => $item['saleItemID']);
        return self::searchDatabaseSale($saleItemListID);
    }

    /**
     *  Search the information about inventory_item_sale_item based on
     *  sale_items information
     *
     * @param  array  $saleItemListID
     * @return  Illuminate\Database\Eloquent\Collection
     */
    private static function searchDatabaseSale($saleItemListID)
    {
        return DB::table('sale_items')
            ->select([
                'inventory_item_sale_item.sale_item_id',
                'inventory_item_sale_item.inventory_item_id',
                'inventory_item_sale_item.qty_used'
            ])
            ->join('sales', function ($join) {
                $join->on(
                    'sale_items.sale_id',
                    '=',
                    'sales.id'
                );
            })
            ->join('inventory_item_sale_item', function ($join) {
                $join->on(
                    'sale_items.id',
                    '=',
                    'inventory_item_sale_item.sale_item_id'
                );
            })
            ->whereIn('sale_items.id', $saleItemListID)
            ->orderBy('sales.created_at')
            ->get();
    }

    /**
     *  Execute the sale_items qty updating when the new quantity is
     *  lower then current quantity
     *
     * @param  array  $qtyLowerList
     * @param  Illuminate\Database\Eloquent\Collection  $databaseLowerList
     */
    private static function updateSaleRemainQtyLower($qtyLowerList, $databaseLowerList)
    {
        foreach ($qtyLowerList as $lowerItem) {
            $saleItemID = $lowerItem['saleItemID'];
            $listFiltered = $databaseLowerList->filter(
                fn ($item) => $item->sale_item_id === $saleItemID
            );
            $databaseQtyUsed = $listFiltered->reduce(fn ($acc, $next) => $acc + $next->qty_used);
            $dataList = $listFiltered->values()->all();

            $saleItem = SaleItem::find($saleItemID);
            $saleItem->qty = $lowerItem['qty'];
            $saleItem->save();
            $qtyToRemove = $databaseQtyUsed - $lowerItem['qty'];
            $i = 0;
            do {
                $item = $dataList[$i++];
                if ($item->qty_used <= $qtyToRemove) {
                    $qtyToRemove -= $item->qty_used;
                    $saleItem->inventory_items()->detach($item->inventory_item_id);
                } else {
                    $remain = $item->qty_used - $qtyToRemove;
                    $qtyToRemove = 0;
                    $saleItem->inventory_items()->updateExistingPivot(
                        $item->inventory_item_id,
                        ['qty_used' => $remain]
                    );
                }
            } while ($qtyToRemove > 0);
        }
    }
}
