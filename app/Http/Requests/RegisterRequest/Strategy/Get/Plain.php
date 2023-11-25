<?php

namespace App\Http\Requests\RegisterRequest\Strategy\Get;

use App\Http\Requests\Checker;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Str;

class Plain implements Checker
{
    /** @var int */
    private $registerRequestEmailMaxSize = 0;

    public function __construct()
    {
        $this->registerRequestEmailMaxSize = config('database.column-sizes.user.email');
    }

    /**
     * Get all of the input and files for the request and organize the fields
     * to be validated.
     *
     * @param  Illuminate\Foundation\Http\FormRequest  $formRequest
     * @param  array  $requestInputs
     * @return array
     */
    public function all(FormRequest $formRequest, array $requestInputs): array
    {
        return [
            ...$requestInputs,
            'page' => $formRequest->query('page'),
            'group' => $formRequest->query('group'),
            'email' => $formRequest->query('email'),
        ];
    }

    public function rules(): array
    {
        return [
            'page' => 'required|integer|min:1',
            'group' => 'required|integer|min:1',
            'email' => "nullable|string|max:{$this->registerRequestEmailMaxSize}"
        ];
    }

    public function messages(): array
    {
        return [
            'page.required' => Str::of(__('validation-required'))->ucfirst(),
            'page.integer' => Str::of(__('validation-integer'))->ucfirst(),
            'page.min' => Str::of(__('validation-min', ['size' => '1']))->ucfirst(),

            'group.required' => Str::of(__('validation-required'))->ucfirst(),
            'group.integer' => Str::of(__('validation-integer'))->ucfirst(),
            'group.min' => Str::of(__('validation-min', ['size' => '1']))->ucfirst(),

            'email.string' => Str::of(__('validation-invalid-male', ['subject' => __('type')]))->ucfirst(),
            'email.max' => Str::of(__('validation-max', ['size' => $this->registerRequestEmailMaxSize]))->ucfirst()
        ];
    }
}
