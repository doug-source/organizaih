<?php

namespace App\Rules;

use Closure;
use Illuminate\Contracts\Validation\ValidationRule;
use App\Models\Product;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class InventoryItemsJson implements ValidationRule
{
    private $errorMsg;

    /**
     * Run the validation rule.
     *
     * @param  \Closure(string): \Illuminate\Translation\PotentiallyTranslatedString  $fail
     */
    public function validate(string $attribute, mixed $value, Closure $fail): void
    {
        if (!Str::isJson($value)) {
            $fail(Str::of(__('validation-invalid-male', [
                'subject' => __('format')
            ]))->ucfirst());
        }
        $data = json_decode($value, TRUE);
        if (!is_array($data) || !array_key_exists('products', $data)) {
            $fail(Str::of(__('validation-invalid-male', [
                'subject' => __('format')
            ]))->ucfirst());
        }
        if (!is_array($data['products'])) {
            $fail(Str::of(__('validation-invalid-male', [
                'subject' => __('format')
            ]))->ucfirst());
        }
        if (count($data['products']) < 1) {
            $fail(Str::of(__('validation-invalid-male', [
                'subject' => __('format')
            ]))->ucfirst());
        }
        $userID = auth()->user()->id;
        foreach ($data['products'] as $product) {
            if (!$this->isValidID($product)) {
                $fail($this->errorMsg);
            } elseif (!$this->isFromRightOwner($product['id'], $userID)) {
                $fail($this->errorMsg);
            } elseif (!$this->isValidQty($product)) {
                $fail($this->errorMsg);
            } elseif (!$this->idValidCost($product)) {
                $fail($this->errorMsg);
            }
        }
    }

    /**
     * Check if product->id is valid.
     * Otherwise, it also define error message.
     *
     * @param array $product
     * @return bool
     */
    private function isValidID(array $product)
    {
        if (!array_key_exists('id', $product)) {
            $this->errorMsg = Str::of(__('validation-required'))->ucfirst();
            return FALSE;
        }
        if (!is_integer($product['id'])) {
            $this->errorMsg = Str::of(__('validation-integer'))->ucfirst();
            return FALSE;
        }
        if (!DB::table('products')->where('id', $product['id'])->exists()) {
            $this->errorMsg = Str::of(__('validation-invalid-male', ['subject' => __('product')]))->ucfirst();
            return FALSE;
        }
        return TRUE;
    }

    /**
     * Check if product is from current user logged.
     * Otherwise, it also define error message.
     *
     * @param int $productID
     * @param int $userID
     * @return bool
     */
    private function isFromRightOwner($productID, $userID)
    {
        if ($userID !== Product::find($productID)->user_id) {
            $this->errorMsg = Str::of(__('forbidden-access'))->ucfirst();
            return FALSE;
        }
        return TRUE;
    }

    /**
     * Check if product->qty is valid.
     * Otherwise, it also define error message.
     *
     * @param array $product
     * @return bool
     */
    private function isValidQty(array $product)
    {
        if (!array_key_exists('qty', $product)) {
            $this->errorMsg = Str::of(__('validation-required'))->ucfirst();
            return FALSE;
        }
        $qty = $product['qty'];
        if (!is_integer($qty)) {
            $this->errorMsg = Str::of(__('validation-integer'))->ucfirst();
            return FALSE;
        }
        if ($qty < 1) {
            $this->errorMsg = Str::of(__('validation-min', ['size' => '1']))->ucfirst();
            return FALSE;
        }
        $maxQty = intval(config('database.column-sizes.inventory.qty'));
        if ($qty > $maxQty) {
            $this->errorMsg = Str::of(__('validation-max', ['size' => $maxQty]))->ucfirst();
            return FALSE;
        }
        return TRUE;
    }

    /**
     * Check if product->cost is valid.
     * Otherwise, it also define error message.
     *
     * @param array $product
     * @return bool
     */
    private function idValidCost(array $product)
    {
        if (!array_key_exists('cost', $product)) {
            $this->errorMsg = Str::of(__('validation-required'))->ucfirst();
            return FALSE;
        }
        $cost = $product['cost'];
        if (!is_numeric($cost)) {
            $this->errorMsg = Str::of(__('validation-numeric'))->ucfirst();
            return FALSE;
        }
        if ($cost < 0) {
            $this->errorMsg = Str::of(__('validation-min', ['size' => '0']))->ucfirst();
            return FALSE;
        }
        $maxPrecision = intval(config('database.columns-precisions.inventory.cost'));
        $maxScale = intval(config('database.columns-scales.inventory.cost'));
        $integerDigits = floor(log10($cost)) + 1;
        if ($integerDigits > ($maxPrecision - $maxScale)) {
            $this->errorMsg = Str::of(__('validation-invalid-male', ['subject' => __('cost')]))->ucfirst();
            return FALSE;
        }
        $decimalDigits = strlen(substr(strrchr("$cost", "."), 1));
        if ($decimalDigits > $maxScale) {
            $this->errorMsg = Str::of(__('validation-invalid-male', ['subject' => __('cost')]))->ucfirst();
            return FALSE;
        }
        return TRUE;
    }
}
