<?php

namespace App\Http\Requests\Customer\Strategy\Delete;

use App\Http\Requests\Checker;
use App\Rules\BelongsToUser;
use App\Rules\NotLinked;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Str;

class Plain implements Checker
{
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
            'customerID' => $formRequest->route('customerID'),
        ];
    }

    public function rules(): array
    {
        return [
            'customerID' => [
                'required',
                'integer',
                'min:1',
                'exists:customers,id',
                new BelongsToUser('customers'),
                new NotLinked('customers', [
                    [
                        'sales',
                        ['sales.customer_id', '=', 'customers.id']
                    ]
                ])
            ]
        ];
    }

    public function messages(): array
    {
        return [
            'customerID.required' => Str::of(__('validation-required'))->ucfirst(),
            'customerID.integer' => Str::of(__('validation-integer'))->ucfirst(),
            'customerID.min' => Str::of(__('validation-min', ['size' => '1']))->ucfirst(),
            'customerID.exists' => Str::of(__('validation-invalid-male', ['subject' => __('customer')]))->ucfirst()
        ];
    }
}
