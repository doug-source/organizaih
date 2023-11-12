<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Cookie;

class ThemeServiceProvider extends ServiceProvider
{
    /** @var array The key list of views */
    private array $viewList = [
        'login.auth',
        'app.main',
        'register.main',
        'auth.forgot-password',
        'auth.reset-password'
    ];

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
        view()->composer($this->viewList, function ($view) {
            $view->with([
                'themeKey' => json_encode(Cookie::get('theme') ?? config('app.theming_key'))
            ]);
        });
    }
}
