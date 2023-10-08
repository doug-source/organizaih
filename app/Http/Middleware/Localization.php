<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\Session;
use Locale;

class Localization
{
    const ONE_MINUTE = 1;

    const ONE_HOUR = 60 * self::ONE_MINUTE;

    const ONE_DAY = 24 * self::ONE_HOUR;

    const ONE_YEAR = 365 * self::ONE_DAY;

    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {
        if (!Cookie::has('locale')) {
            $locale = Session::get('locale') ?? Locale::acceptFromHttp($_SERVER['HTTP_ACCEPT_LANGUAGE']);
            if (!in_array($locale, config('app.available_locales'))) {
                $locale = config('app.fallback_locale');
            }
            App::setLocale($locale);
            Cookie::queue('locale', $locale, self::ONE_YEAR);
        } else {
            App::setLocale(Cookie::get('locale'));
        }

        return $next($request);
    }
}
