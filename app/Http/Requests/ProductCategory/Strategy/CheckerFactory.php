<?php

namespace App\Http\Requests\ProductCategory\Strategy;

use App\Http\Requests\Checker;
use App\Http\Requests\CheckerFactoryScheme;
use Illuminate\Foundation\Http\FormRequest;
use App\Http\Requests\ProductCategory\Strategy\{
    Get\Show,
    Get\Plain,
    Delete\Plain as DeletePlain,
    Put\Plain as PutPlain,
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
    public function getChecker(FormRequest $formRequest): ?Checker
    {
        if ($formRequest->isMethod('GET')) {
            return self::selectGetChecker($formRequest);
        }
        if ($formRequest->isMethod('DELETE')) {
            return new DeletePlain();
        }
        if ($formRequest->isMethod('PUT')) {
            return new PutPlain($formRequest);
        }
        return new PostPlain($formRequest);
    }

    /**
     * Returns the Checker instance from GET method context
     *
     * @param  \Illuminate\Foundation\Http\FormRequest  $formRequest
     * @return App\Http\Requests\Checker
     */
    private static function selectGetChecker(FormRequest $formRequest): Checker
    {
        $path = $formRequest->decodedPath();
        if (preg_match('|^api\/v\d+\/product\-categories\/\d+$|', $path) === 1) {
            return new Show();
        }
        return new Plain();
    }
}
