<?php

namespace App\Http\Requests\User\Strategy;

use App\Http\Requests\Checker;
use App\Http\Requests\CheckerFactoryScheme;
use Illuminate\Foundation\Http\FormRequest;

use App\Http\Requests\User\Strategy\{
    Get\Plain as GetPlain,
    Get\Show as GetShow,
    Post\Plain as PostPlain
};

class CheckerFactory implements CheckerFactoryScheme
{
    /**
     * Returns the Checker instance based on FormRequest instance
     *
     * @param  \Illuminate\Foundation\Http\FormRequest  $formRequest
     * @return App\Http\Requests\Checker
     */
    public function getChecker(FormRequest $formRequest): Checker
    {
        if ($formRequest->isMethod('GET')) {
            return self::selectGetChecker($formRequest);
        }
        return new PostPlain();
    }

    /**
     * Return the Checker instance from GET method context
     *
     * @param  \Illuminate\Foundation\Http\FormRequest  $formRequest
     * @return App\Http\Requests\Checker
     */
    private static function selectGetChecker(FormRequest $formRequest): ?Checker
    {
        $path = $formRequest->decodedPath();
        if (preg_match('|^api\/v\d+\/users\/\d+$|', $path) === 1) {
            return new GetShow();
        }
        return new GetPlain();
    }
}
