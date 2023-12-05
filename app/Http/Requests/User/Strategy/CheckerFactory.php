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
use App\Http\Requests\User\Strategy\Get\RegisterForm;
use App\Http\Requests\User\Strategy\Post\UserSelf;

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
        if ($formRequest->isMethod('GET')) {
            return self::selectGetChecker($formRequest);
        }
        return $this->selectPostChecker($formRequest);
    }

    /**
     * Return the Checker instance from POST method context
     *
     * @param  \Illuminate\Foundation\Http\FormRequest  $formRequest
     * @return \App\Http\Requests\Checker
     */
    private static function selectPostChecker(FormRequest $formRequest): Checker
    {
        $path = $formRequest->decodedPath();
        if (preg_match('|^api\/v\d+\/users\/self\/update$|', $path) === 1) {
            return new UserSelf($formRequest);
        }
        return new PostPlain($formRequest);
    }

    /**
     * Return the Checker instance from GET method context
     *
     * @param  \Illuminate\Foundation\Http\FormRequest  $formRequest
     * @return \App\Http\Requests\Checker
     */
    private static function selectGetChecker(FormRequest $formRequest): Checker
    {
        $path = $formRequest->decodedPath();

        if (preg_match('|^api\/v\d+\/users\/\d+$|', $path) === 1) {
            return new GetShow();
        }
        if (preg_match('|^register-user$|', $path) === 1) {
            return new RegisterForm();
        }
        return new GetPlain();
    }
}
