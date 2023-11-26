<?php

use App\Http\Controllers\ImageController;
use App\Http\Controllers\PasswordController;
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

$registerFormUrl = config('app.routes.urls.register_user_form');
Route::get($registerFormUrl, [UserController::class, 'register']);

$registerRequestFormUrl = config('app.routes.urls.register_request_form');
Route::get($registerRequestFormUrl, [UserController::class, 'registerRequest']);

Route::middleware('auth')->group(function () {
    $oneYearDuration = 365 * 24 * 60 * 1;
    Route::get('/language/{locale}', function ($locale) use ($oneYearDuration) {
        Session::put('locale', $locale);
        Cookie::queue('locale', $locale, $oneYearDuration);
        return redirect()->back();
    });
    Route::get('/theme/{themingKey}', function ($themingKey) use ($oneYearDuration) {
        Session::put('theme', $themingKey);
        Cookie::queue('theme', $themingKey, $oneYearDuration);
        return response('OK', 200);
    });

    Route::post('/logout', [UserController::class, 'logout'])->name('logout.page');
    Route::get('/logout', [UserController::class, 'logout'])->name('log-out.page');

    Route::get('/storage/app/{folder}/{filename}', [ImageController::class, 'find']);

    Route::get('/email/verify', [UserController::class, 'emailVerify'])->name('verification.notice');
});

Route::get('/email/verify/{id}/{hash}', [UserController::class, 'emailVerifyFinal'])->middleware(['auth', 'signed'])->name('verification.verify');
Route::post('/email/verification-notification', [UserController::class, 'emailVerifyResend'])->middleware(['auth', 'throttle:6,1'])->name('verification.send');

Route::middleware('guest')->group(function () {
    Route::get('/forgot-password', [PasswordController::class, 'forgotPasswordBefore'])->name('password.request');
    Route::post('/forgot-password', [PasswordController::class, 'forgotPasswordAfter'])->name('password.email');
    Route::get('/reset-password/{token}', [PasswordController::class, 'resetPassword'])->name('password.reset');
    Route::post('/reset-password', [PasswordController::class, 'updatePassword'])->name('password.update');
});
