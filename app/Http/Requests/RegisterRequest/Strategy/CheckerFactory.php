<?php

namespace App\Http\Requests\RegisterRequest\Strategy;

use App\Http\Requests\Checker;
use App\Http\Requests\CheckerFactoryScheme;
use App\Http\Requests\RegisterRequest\Strategy\{
    Get\Plain as GetPlain,
    Get\Show as GetShow,
};
use Illuminate\Foundation\Http\FormRequest;

class CheckerFactory implements CheckerFactoryScheme
{
    /**
     * Returns the Checker instance based on FormRequest instance
     *
     * @param  \Illuminate\Foundation\Http\FormRequest  $formRequest
     * @return \App\Http\Requests\Checker
     */
    public function getChecker(FormRequest $formRequest): Checker
    {
        return self::selectGetChecker($formRequest);
    }

    /**
     * Return the Checker instance from GET method context
     *
     * @param  \Illuminate\Foundation\Http\FormRequest  $formRequest
     * @return \App\Http\Requests\Checker
     */
    private static function selectGetChecker(FormRequest $formRequest): ?Checker
    {
        $path = $formRequest->decodedPath();
        if (preg_match('|^api\/v\d+\/register\/requests\/\d+$|', $path) === 1) {
            return new GetShow();
        }
        return new GetPlain();
    }
}
