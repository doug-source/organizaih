<?php

namespace App\Http\Requests\Inventory\Strategy;

use App\Http\Requests\Checker;
use App\Http\Requests\CheckerFactoryScheme;
use App\Http\Requests\Inventory\Strategy\{
    Get\Plain,
    Get\Summary,
    Get\Show,
    Get\ShowItem,
    Delete\Plain as DeletePlain,
    Delete\DestroyItem,
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
    public function getChecker(FormRequest $formRequest): Checker
    {
        if ($formRequest->isMethod('GET')) {
            return self::selectGetChecker($formRequest);
        }
        if ($formRequest->isMethod('DELETE')) {
            return self::selectDeleteChecker($formRequest);
        }
        if ($formRequest->isMethod('PUT')) {
            return new PutPlain();
        }
        return new PostPlain();
    }

    /**
     * Return the Checker instance from GET method context
     *
     * @param  \Illuminate\Foundation\Http\FormRequest  $formRequest
     * @return App\Http\Requests\Checker
     */
    private static function selectGetChecker(FormRequest $formRequest): Checker
    {
        $path = $formRequest->decodedPath();
        if (preg_match('|^api\/v\d+\/inventories\/item\/\d+$|', $path) === 1) {
            return new ShowItem();
        }
        if (preg_match('|^api\/v\d+\/inventories\/summary\/\d+$|', $path) === 1) {
            return new Summary();
        }
        if (preg_match('|^api\/v\d+\/inventories\/\d+$|', $path) === 1) {
            return new Show();
        }
        return new Plain();
    }

    /**
     * Return the Checker instance from DELETE method context
     *
     * @param  \Illuminate\Foundation\Http\FormRequest  $formRequest
     * @return App\Http\Requests\Checker
     */
    private static function selectDeleteChecker(FormRequest $formRequest): Checker
    {
        $path = $formRequest->decodedPath();
        if (preg_match('|^api\/v\d+\/inventories\/item\/\d+$|', $path) === 1) {
            return new DestroyItem();
        }
        return new DeletePlain();
    }
}
