<?php

use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Cookie;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', [UserController::class, 'login'])->name('login.page');
Route::post('/auth', [UserController::class, 'auth'])->name('auth.user');
Route::get('/logout', [UserController::class, 'logout'])->name('logout.page');

Route::get('/language/{locale}', function ($locale) {
    $oneYearDuration = 365 * 24 * 60 * 1;
    Session::put('locale', $locale);
    Cookie::queue('locale', $locale, $oneYearDuration);
    return redirect()->back();
});
