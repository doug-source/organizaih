<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\CustomersResourceController;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\CitiesResourceController;
use App\Http\Controllers\Api\ProductCategoriesResourceController;
use App\Http\Controllers\Api\ProductsResourceController;
use App\Http\Controllers\Api\StatesResourceController;

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
    });
});
