<?php

namespace App\Http\Requests\Sale\Strategy;

use App\Http\Requests\Checker;
use App\Http\Requests\CheckerFactoryScheme;
use App\Http\Requests\Sale\Strategy\Get\{
    Plain,
    Show,
    ShowByCustomerQty,
    ShowProductQty,
    ShowByProductQty,
    ShowCustomerQty
};
use App\Http\Requests\Sale\Strategy\Delete\Plain as DeletePlain;
use App\Http\Requests\Sale\Strategy\Put\Plain as PutPlain;
use App\Http\Requests\Sale\Strategy\Post\Plain as PostPlain;
use Illuminate\Foundation\Http\FormRequest;

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
        if ($formRequest->isMethod('DELETE')) {
            return new DeletePlain();
        }
        if ($formRequest->isMethod('PUT')) {
            return new PutPlain();
        }
        return new PostPlain();
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
        if (preg_match('|^api\/sales\/products\/\d+$|', $path) === 1) {
            return new ShowByProductQty();
        }
        if (preg_match('|^api\/sales\/products\/count$|', $path) === 1) {
            return new ShowProductQty();
        }
        if (preg_match('|^api\/sales\/customers\/\d+$|', $path) === 1) {
            return new ShowByCustomerQty();
        }
        if (preg_match('|^api\/sales\/customers\/count$|', $path) === 1) {
            return new ShowCustomerQty();
        }
        if (preg_match('|^api\/sales\/\d+$|', $path) === 1) {
            return new Show();
        }
        return new Plain();
    }
}
