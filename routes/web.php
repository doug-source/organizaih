<?php

use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Response;

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

$registerUrl = config('app.routes.urls.register_form');

Route::get('/', [UserController::class, 'login'])->name('login.page');
Route::post('/auth', [UserController::class, 'auth'])->name('auth.user');
Route::get($registerUrl, [UserController::class, 'register']);

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

    Route::get('/storage/app/{folder}/{filename}', function ($folder, $filename) {
        $path = storage_path() . "/app/$folder/$filename";
        if (!File::exists($path)) {
            return response()->json(['message' => 'Image not found.'], 404);
        }
        $file = File::get($path);
        $type = File::mimeType($path);
        $response = Response::make($file, 200);
        $response->header('Content-Type', $type);
        return $response;
    });
});
