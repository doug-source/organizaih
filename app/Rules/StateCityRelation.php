<?php

namespace App\Rules;

use Closure;
use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class StateCityRelation implements ValidationRule
{
    /** @var int */
    protected $stateID;

    /**
     * Create a new rule instance.
     *
     * @return void
     */
    public function __construct($cityID)
    {
        $this->stateID = DB::table('cities')->select('state_id')->where('id', $cityID)->value('state_id');
    }

    /**
     * Run the validation rule.
     *
     * @param  \Closure(string): \Illuminate\Translation\PotentiallyTranslatedString  $fail
     */
    public function validate(string $attribute, mixed $value, Closure $fail): void
    {
        if (intval($value) !== $this->stateID) {
            $fail(Str::of(__('validation-invalid-male', [
                'subject' => __('state')
            ]))->ucfirst());
        }
    }
}
