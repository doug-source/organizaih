<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\Session;
use Illuminate\Http\Request;

class ThemeChoice
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
        if (!Cookie::has('theme')) {
            $themingKey = Session::get('theme', config('app.fallback_theming_key'));
            if (!in_array($themingKey, config('app.available_themes'))) {
                $themingKey = config('app.fallback_theming_key');
            }
            Cookie::queue('theme', $themingKey, self::ONE_YEAR);
        }

        return $next($request);
    }
}
