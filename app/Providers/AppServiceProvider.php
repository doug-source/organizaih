<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use DOMDocument;
use Illuminate\Support\Facades\Blade;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Blade::directive('svg', function ($path) {
            $svg = new DOMDocument('1.0', 'UTF-8');
            $path = trim($path, "' ");
            $svg->load(resource_path() . "/img/$path");
            return $svg->saveXML($svg->documentElement);
        });
    }
}
