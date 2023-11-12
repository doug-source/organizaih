<?php

namespace App\Http\Requests\Email\Strategy;

use App\Http\Requests\Checker;
use Illuminate\Foundation\Http\FormRequest;
use App\Http\Requests\Email\Strategy\{
    Get\Plain as GetPlain,
    Post\Plain as PostPlain
};
use App\Http\Requests\CheckerFactoryScheme;

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
            return new GetPlain();
        }
        return new PostPlain();
    }
}
