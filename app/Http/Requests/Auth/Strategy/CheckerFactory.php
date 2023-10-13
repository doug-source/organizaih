<?php

namespace App\Http\Requests\Auth\Strategy;

use App\Http\Requests\Checker;
use Illuminate\Foundation\Http\FormRequest;
use App\Http\Requests\Auth\Strategy\{
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
        return new PostPlain($formRequest);
    }
}
