<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Cookie;

class ThemeServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        view()->composer(['login.auth', 'app.main'], function ($view) {
            $view->with([
                'themeKey' => json_encode(Cookie::get('theme') ?? config('app.theming_key'))
            ]);
        });
    }
}
