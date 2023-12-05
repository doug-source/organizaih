<?php

namespace App\Http\Requests\User\Strategy\Post;

use App\Http\Requests\Checker;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Str;

class UserSelf implements Checker
{

    /** @var int */
    private $userNameMaxSize = 0;

    public function __construct(FormRequest $formRequest)
    {
        $this->userNameMaxSize = config('database.column-sizes.user.name');
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
        ];
    }

    public function rules(): array
    {
        return [
            'name' => "required|string|max:{$this->userNameMaxSize}",
            'photo' => 'nullable|mimes:jpeg,jpg,png|max:1024',
            'phone' => [
                'nullable',
                'regex:/\d{2}\s?(\d{4}[\s-]?\d{4}|\d{5}[\s-]?\d{4})$/'
            ]
        ];
    }

    public function messages(): array
    {
        return [
            'name.required' => Str::of(__('validation-required'))->ucfirst(),
            'name.string' => Str::of(__('validation-invalid-male', ['subject' => __('type')]))->ucfirst(),
            'name.max' => Str::of(__('validation-size', ['size' => $this->userNameMaxSize]))->ucfirst(),

            'photo.mimes' => Str::of(__('validation-mimes', ['mimes' => 'jpeg, jpg ' . __('or') . ' png']))->ucfirst(),
            'photo.max' => Str::of(__('validation-profile-photo-size', ['size' => '1Mb']))->ucfirst(),

            'phone.regex' => Str::of(__('validation-invalid-male', ['subject' => __('phone')]))->ucfirst(),
        ];
    }
}
