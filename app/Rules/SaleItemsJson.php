<?php

namespace App\Rules;

use Closure;
use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;
use App\Models\SaleItem;

class SaleItemsJson implements ValidationRule
{
    /** @var string */
    private $action;

    /** @var string */
    private $errorMsg;

    /** @var string */
    private $errorMsgDefault;

    /**
     * Create a new rule instance.
     *
     * @return void
     */
    public function __construct($action = 'store')
    {
        $this->action = $action;
        $this->errorMsgDefault = Str::of(__('validation-invalid-male', [
            'subject' => __('format')
        ]))->ucfirst();
    }

    /**
     * Run the validation rule.
     *
     * @param  \Closure(string): \Illuminate\Translation\PotentiallyTranslatedString  $fail
     */
    public function validate(string $attribute, mixed $value, Closure $fail): void
    {
        $valid = TRUE;
        if ($this->action === 'store') {
            $valid = self::check($value, $this->errorMsg);
        } elseif ($this->action === 'update') {
            $valid = self::checkUpdate($value, $this->errorMsg);
        }
        if (!$valid) {
            $fail($this->errorMsg ?? $this->errorMsgDefault);
        }
    }

    /**
     * Execute the validation on 'store' request
     *
     * @param  mixed  $value
     * @param  mixed  $errorMsg
     * @return  bool
     */
    private static function checkUpdate($value, &$errorMsg)
    {
        return self::check($value, $errorMsg, function ($sale, &$errorMsg) {
            if (array_key_exists('saleItemID', $sale)) {
                if (is_null($sale['saleItemID'])) {
                    return FALSE;
                }
                if (!is_integer($sale['saleItemID'])) {
                    return TRUE;
                }
                $saleItem = SaleItem::find($sale['saleItemID']);
                if (is_null($saleItem)) {
                    return TRUE;
                }
                if ($saleItem->sale->user_id !== auth()->user()->id) {
                    $errorMsg = Str::of(__('forbidden-access'))->ucfirst();
                    return TRUE;
                }
            }
            return FALSE;
        });
    }

    /**
     * Execute the validation on 'store' request
     *
     * @param  mixed  $value
     * @param  mixed  $errorMsg
     * @param  ?callable  $checkMore
     * @return  bool
     */
    private static function check($value, &$errorMsg, callable $checkMore = NULL)
    {
        if (!Str::isJson($value)) {
            return FALSE;
        }
        $data = json_decode($value, TRUE);
        if (!is_array($data) || !array_key_exists('sales', $data)) {
            return FALSE;
        }
        if (!is_array($data['sales'])) {
            return FALSE;
        }
        $maxPrecision = intval(config('database.columns-precisions.sale.price'));
        $maxScale = intval(config('database.columns-scales.sale.price'));
        $fieldsinvalid = collect($data['sales'])->contains(function ($sale) use ($checkMore, $maxPrecision, $maxScale, &$errorMsg) {
            if (!is_array($sale) || !array_key_exists('id', $sale)) {
                return TRUE;
            }
            $productID = $sale['id'] ?? NULL;
            if (!is_integer($productID)) {
                return TRUE;
            }
            $userID = DB::table('products')->where('id', $productID)->value('user_id');
            if (auth()->user()->id !== $userID) {
                $errorMsg = Str::of(__('forbidden-access'))->ucfirst();;
                return TRUE;
            }
            if (!array_key_exists('qty', $sale) || !array_key_exists('price', $sale)) {
                return TRUE;
            }
            if (!is_integer($sale['qty'] ?? NULL) || !is_numeric($sale['price'] ?? NULL)) {
                return TRUE;
            }
            $qty = $sale['qty'];
            $price = $sale['price'];
            if ($qty <= 0 || $price < 0) {
                return TRUE;
            }
            $maxQty = intval(config('database.column-sizes.sale.qty'));
            if ($qty > $maxQty) {
                $errorMsg = Str::of(__('validation-max', ['size' => $maxQty]))->ucfirst();
                return TRUE;
            }
            $integerDigits = floor(log10($price)) + 1;
            if ($integerDigits > ($maxPrecision - $maxScale)) {
                $errorMsg = Str::of(__('validation-invalid-male', ['subject' => __('price')]))->ucfirst();;
                return TRUE;
            }
            $decimalDigits = strlen(substr(strrchr("$price", "."), 1));
            if ($decimalDigits > $maxScale) {
                $errorMsg = Str::of(__('validation-invalid-male', ['subject' => __('price')]))->ucfirst();;
                return TRUE;
            }
            if ($checkMore) {
                return $checkMore($sale, $errorMsg);
            }
            return FALSE;
        });
        return !$fieldsinvalid;
    }
}
