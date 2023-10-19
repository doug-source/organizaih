<?php

namespace App\Http\Requests\Inventory\Strategy\Delete;

use App\Http\Requests\Checker;
use App\Rules\BelongsToUser;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Str;

class DestroyItem implements Checker
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
            'inventoryItemID' => $formRequest->route('inventoryItemID'),
        ];
    }

    public function rules(): array
    {
        return [
            'inventoryItemID' => [
                'required',
                'integer',
                'min:1',
                'exists:inventory_items,id',
                new BelongsToUser('inventory_items', [
                    [
                        'inventories',
                        ['inventory_items.inventory_id', '=', 'inventories.id']
                    ]
                ])
            ]
        ];
    }

    public function messages(): array
    {
        return [
            'inventoryItemID.required' => Str::of(__('validation-required'))->ucfirst(),
            'inventoryItemID.integer' => Str::of(__('validation-integer'))->ucfirst(),
            'inventoryItemID.min' => Str::of(__('validation-min', ['size' => '1']))->ucfirst(),
            'inventoryItemID.exists' => Str::of(__('validation-invalid-male', ['subject' => __('validation-inventory-subject')]))->ucfirst()
        ];
    }
}
