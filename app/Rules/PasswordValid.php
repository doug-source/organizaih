<?php

namespace App\Rules;

use Closure;
use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Support\Str;

class PasswordValid implements ValidationRule
{
    /**
     * Define numeric rule's quantity digits.
     *
     * @var boolean
     */
    protected $qtySpecialChars = 1;

    /**
     * Define numeric rule's quantity digits.
     *
     * @var boolean
     */
    protected $qtyDigits = 1;

    /**
     * Define uppercase rule's quantity letters.
     *
     * @var boolean
     */
    protected $qtyLetters = 1;

    /**
     * Define uppercase rule's quantity uppercase letters.
     *
     * @var boolean
     */
    protected $qtyUppercase = 1;

    /**
     * Define lowercase rule's quantity lowercase letters.
     *
     * @var boolean
     */
    protected $qtyLowercase = 1;

    /**
     * Define length rule's minimum size.
     *
     * @var boolean
     */
    protected $minSize = 8;

    /**
     * Run the validation rule.
     *
     * @param  \Closure(string): \Illuminate\Translation\PotentiallyTranslatedString  $fail
     */
    public function validate(string $attribute, mixed $value, Closure $fail): void
    {
        if (Str::length($value) < $this->minSize) {
            $fail(Str::of(__('validation-min', [
                'size' => $this->minSize
            ]))->ucfirst());
        } elseif (!((bool) preg_match('/[A-Za-z]/', $value))) {
            $fail(Str::of(__('min-letters', [
                'min' => $this->qtyLetters
            ]))->ucfirst());
        } elseif (Str::lower($value) === $value) {
            $fail(Str::of(__('min-uppercases', [
                'min' => $this->qtyUppercase
            ]))->ucfirst());
        } elseif (Str::upper($value) === $value) {
            $fail(Str::of(__('min-lowercases', [
                'min' => $this->qtyLowercase
            ]))->ucfirst());
        } elseif (!((bool) preg_match('/[0-9]/', $value))) {
            $fail(Str::of(__('min-digits', [
                'min' => $this->qtyDigits
            ]))->ucfirst());
        } elseif (!((bool) preg_match('/[^A-Za-z0-9]/', $value))) {
            $fail(Str::of(__('min-special-char', [
                'min' => $this->qtySpecialChars
            ]))->ucfirst());
        }
    }
}
