<?php

namespace App\Http\Requests\Inventory\Strategy\Put;

use App\Http\Requests\Checker;
use App\Rules\BelongsToUser;
use App\Rules\InventoryItemsJson;
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
            'inventoryItemID' => $formRequest->route('inventoryItemID'),
        ];
    }

    public function rules(): array
    {
        return [
            'inventoryItemID' => [
                'required',
                'exists:inventory_items,id',
                new BelongsToUser('inventory_items', [
                    [
                        'inventories',
                        ['inventory_items.inventory_id', '=', 'inventories.id']
                    ]
                ])
            ],
            'items' => [
                'required',
                new InventoryItemsJson()
            ]
        ];
    }

    public function messages(): array
    {
        return [
            'inventoryItemID.required' => Str::of(__('validation-required'))->ucfirst(),
            'inventoryItemID.exists' => Str::of(__('validation-invalid-male', ['subject' => __('validation-inventory-subject')]))->ucfirst(),
            'items.required' => Str::of(__('validation-required'))->ucfirst(),
        ];
    }
}
