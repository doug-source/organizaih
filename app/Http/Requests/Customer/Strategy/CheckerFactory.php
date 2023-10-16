<?php

namespace App\Http\Requests\Customer\Strategy;

use App\Http\Requests\Checker;
use App\Http\Requests\CheckerFactoryScheme;
use App\Http\Requests\Customer\Strategy\{
    Get\Plain,
    Get\Show,
    Delete\Plain as DeletePlain,
    Put\Plain as PutPlain,
    Post\Plain as PostPlain
};
use Illuminate\Foundation\Http\FormRequest;

class CheckerFactory implements CheckerFactoryScheme
{
    /**
     * Return the Checker instance based on FormRequest instance
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
     * Return the Checker instance from GET method context
     *
     * @param  \Illuminate\Foundation\Http\FormRequest  $formRequest
     * @return App\Http\Requests\Checker
     */
    private static function selectGetChecker(FormRequest $formRequest): ?Checker
    {
        $path = $formRequest->decodedPath();
        if (preg_match('|^api\/v\d+\/customers\/\d+$|', $path) === 1) {
            return new Show();
        }
        return new Plain();
    }
}
