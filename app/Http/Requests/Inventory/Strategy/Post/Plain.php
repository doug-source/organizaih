<?php

namespace App\Http\Requests\Inventory\Strategy\Post;

use App\Http\Requests\Checker;
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
        ];
    }

    public function rules(): array
    {
        return [
            'items' => [
                'required',
                new InventoryItemsJson()
            ]
        ];
    }

    public function messages(): array
    {
        return [
            'items.required' => Str::of(__('validation-required'))->ucfirst()
        ];
    }
}
