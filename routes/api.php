<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\CustomersResourceController;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\CitiesResourceController;
use App\Http\Controllers\Api\InventoriesResourceController;
use App\Http\Controllers\Api\ProductCategoriesResourceController;
use App\Http\Controllers\Api\ProductsResourceController;
use App\Http\Controllers\Api\SalesResourceController;
use App\Http\Controllers\Api\StatesResourceController;
use App\Http\Controllers\Api\UsersResourceController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::prefix('v1')->group(function () {
    Route::post('/login', [AuthController::class, 'login']);
    Route::post('/logout', [AuthController::class, 'logout'])->middleware('auth:sanctum');

    $routeRegister = config('app.url_register_user');
    Route::post($routeRegister, [UsersResourceController::class, 'store']);
});

Route::middleware('auth:sanctum')->group(function () {
    Route::prefix('v1')->group(function () {
        Route::prefix('customers')->group(function () {
            Route::get('/', [CustomersResourceController::class, 'index']);
            Route::post('/', [CustomersResourceController::class, 'store']);
            Route::get('{customerID}', [CustomersResourceController::class, 'show']);
            Route::delete('{customerID}', [CustomersResourceController::class, 'destroy']);
            Route::put('{customerID}', [CustomersResourceController::class, 'update']);
        });
        Route::get('state/{stateID}/cities', [CitiesResourceController::class, 'index']);
        Route::get('states', [StatesResourceController::class, 'index']);
        Route::prefix('products')->group(function () {
            Route::get('/', [ProductsResourceController::class, 'index']);
            Route::post('/', [ProductsResourceController::class, 'store']);
            Route::get('{productID}', [ProductsResourceController::class, 'show']);
            Route::put('{productID}', [ProductsResourceController::class, 'update']);
            Route::delete('{productID}', [ProductsResourceController::class, 'destroy']);
        });
        Route::prefix('product-categories')->group(function () {
            Route::get('/', [ProductCategoriesResourceController::class, 'index']);
            Route::post('/', [ProductCategoriesResourceController::class, 'store']);
            Route::get('{productCategoryID}', [ProductCategoriesResourceController::class, 'show']);
            Route::put('{productCategoryID}', [ProductCategoriesResourceController::class, 'update']);
            Route::delete('{productCategoryID}', [ProductCategoriesResourceController::class, 'destroy']);
        });
        Route::prefix('inventories')->group(function () {
            Route::get('/', [InventoriesResourceController::class, 'index']);
            Route::get('/summary/{productID}', [InventoriesResourceController::class, 'summary']);
            Route::get('{productID}', [InventoriesResourceController::class, 'show']);
            Route::get('/item/{inventoryItemID}', [InventoriesResourceController::class, 'showItem']);
            Route::post('/', [InventoriesResourceController::class, 'store']);
            Route::put('/item/{inventoryItemID}', [InventoriesResourceController::class, 'update']);
            Route::delete('{productID}', [InventoriesResourceController::class, 'destroy']);
            Route::delete('/item/{inventoryItemID}', [InventoriesResourceController::class, 'destroyItem']);
        });
        Route::prefix('sales')->group(function () {
            Route::get('/', [SalesResourceController::class, 'index']);
            Route::get('/products/count', [SalesResourceController::class, 'showProductQty']);
            Route::get('/products/{qty}', [SalesResourceController::class, 'showByProductQty'])->where([
                'qty' => '[1-9][0-9]*'
            ]);
            Route::get('/customers/count', [SalesResourceController::class, 'showCustomerQty']);
            Route::get('/customers/{qty}', [SalesResourceController::class, 'showByCustomerQty'])->where([
                'qty' => '[1-9][0-9]*'
            ]);
            Route::get('{saleID}', [SalesResourceController::class, 'show']);
            Route::post('/', [SalesResourceController::class, 'store']);
            Route::put('{saleID}', [SalesResourceController::class, 'update']);
            Route::delete('{saleID}', [SalesResourceController::class, 'destroy']);
        });
    });
});
