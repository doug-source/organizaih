<?php

namespace App\Http\Requests;

use App\Http\Requests\Checker;
use Illuminate\Foundation\Http\FormRequest;

interface CheckerFactoryScheme
{
    function getChecker(FormRequest $formRequest): ?Checker;
}
