<?php

namespace App\Http\Requests\Customer\Strategy\Post;

use App\Http\Requests\Checker;
use App\Rules\StateCityRelation;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Str;

class Plain implements Checker
{
    /** @var int */
    private $city;

    /** @var int */
    private $customerNameMaxSize = 0;

    /** @var int */
    private $addressStreetMaxSize = 0;

    /** @var int */
    private $addressDistrictMaxSize = 0;

    public function __construct(FormRequest $formRequest)
    {
        $this->city = $formRequest->input('city');

        $this->customerNameMaxSize = config('database.column-sizes.customer.name');
        $this->addressStreetMaxSize = config('database.column-sizes.address.street');
        $this->addressDistrictMaxSize = config('database.column-sizes.address.district');
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
            ...$requestInputs
        ];
    }

    public function rules(): array
    {
        return [
            'name' => "required|string|max:{$this->customerNameMaxSize}",
            'photo' => 'nullable|mimes:jpeg,jpg,png|max:1024',
            'sex' => 'required|in:M,F',

            'phone_1' => [
                'nullable',
                'regex:/\d{2}\s?(\d{4}[\s-]?\d{4}|\d{5}[\s-]?\d{4})$/'
            ],
            'phone_2' => [
                'nullable',
                'regex:/\d{2}\s?(\d{4}[\s-]?\d{4}|\d{5}[\s-]?\d{4})$/'
            ],

            'birthday' => [
                'nullable',
                'date_format:Y-m-d',
            ],

            'city' => [
                'required',
                'integer',
                'min:1',
                'exists:cities,id'
            ],

            'state' => [
                'required',
                'integer',
                'min:1',
                'exists:states,id',
                new StateCityRelation($this->city)
            ],

            'street' => "required|string|max:{$this->addressStreetMaxSize}",

            'number' => [
                'required',
                'integer',
                'min:1'
            ],

            'district' => "required|string|max:{$this->addressDistrictMaxSize}"
        ];
    }

    public function messages(): array
    {
        return [
            'name.required' => Str::of(__('validation-required'))->ucfirst(),
            'name.string' => Str::of(__('validation-invalid-male', ['subject' => __('type')]))->ucfirst(),
            'name.max' => Str::of(__('validation-max', ['size' => $this->customerNameMaxSize]))->ucfirst(),

            'photo.mimes' => Str::of(__('validation-mimes', ['mimes' => 'jpeg, jpg ' . __('or') . ' png']))->ucfirst(),
            'photo.max' => Str::of(__('validation-profile-photo-size', ['size' => '1Mb']))->ucfirst(),

            'sex.required' => Str::of(__('validation-required'))->ucfirst(),
            'sex.in' => Str::of(__('validation-radiobutton-keys', ['keys' => "M " . __('or') . " F"]))->ucfirst(),

            'phone_1.regex' => Str::of(__('validation-invalid-male', ['subject' => __('phone')]))->ucfirst(),
            'phone_2.regex' => Str::of(__('validation-invalid-male', ['subject' => __('phone')]))->ucfirst(),

            'birthday.date_format' => Str::of(__('validation-invalid-female', ['subject' => __('date')]))->ucfirst(),

            'city.required' => Str::of(__('validation-required'))->ucfirst(),
            'city.integer' => Str::of(__('validation-integer'))->ucfirst(),
            'city.min' => Str::of(__('validation-min', ['size' => '1']))->ucfirst(),
            'city.exists' => Str::of(__('validation-invalid-female', ['subject' => __('city')]))->ucfirst(),

            'state.required' => Str::of(__('validation-required'))->ucfirst(),
            'state.integer' => Str::of(__('validation-integer'))->ucfirst(),
            'state.min' => Str::of(__('validation-min', ['size' => '1']))->ucfirst(),
            'state.exists' => Str::of(__('validation-invalid-male', ['subject' => __('state')]))->ucfirst(),

            'street.required' => Str::of(__('validation-required'))->ucfirst(),
            'street.string' => Str::of(__('validation-invalid-male', ['subject' => __('type')]))->ucfirst(),
            'street.max' => Str::of(__('validation-max', ['size' => $this->addressStreetMaxSize]))->ucfirst(),

            'number.required' => Str::of(__('validation-required'))->ucfirst(),
            'number.integer' => Str::of(__('validation-integer'))->ucfirst(),
            'number.min' => Str::of(__('validation-min', ['size' => '1']))->ucfirst(),

            'district.required' => Str::of(__('validation-required'))->ucfirst(),
            'district.string' => Str::of(__('validation-invalid-male', ['subject' => __('type')]))->ucfirst(),
            'district.max' => Str::of(__('validation-max', ['size' => $this->addressDistrictMaxSize]))->ucfirst()
        ];
    }
}
