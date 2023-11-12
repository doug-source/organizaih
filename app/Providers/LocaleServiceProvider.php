<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\App;

class LocaleServiceProvider extends ServiceProvider
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
     * Define the current locale code
     *
     * @return string
     */
    private function pickLocale(): string
    {
        $locale = Session::get('locale');
        if (!$locale) {
            $locale = Cookie::get('locale');
        }
        return htmlentities($locale ?? App::getLocale());
    }

    /**
     * Filter for a locale available
     *
     * @param string $locale The locale code to filter
     * @return string
     */
    private function filterLocale(string $locale): string
    {
        $availableLocales = array_values(config('app.available_locales'));
        if (!in_array($locale, $availableLocales)) {
            return config('app.fallback_locale');
        }
        return $locale;
    }

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
        $localeKey = $this->filterLocale($this->pickLocale());

        view()->composer($this->viewList, function ($view) use ($localeKey) {
            $view->with([
                'locales' => json_encode(config('app.available_locales')),
                'localeKey' => $localeKey,
                'localeData' => file_get_contents(resource_path() . "/lang/{$localeKey}.json")
            ]);
        });
    }
}
