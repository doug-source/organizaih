<?php

namespace App\Rules;

use Closure;
use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class BelongsToUser implements ValidationRule
{
    /** @var int */
    private $userID;

    /** @var string */
    private $table;

    /** @var array */
    private $joins;

    /**
     * Create a new rule instance.
     *
     * @return void
     */
    public function __construct(string $table, array $joins = [])
    {
        $this->table = $table;
        $this->joins = $joins;
        $this->userID = auth()->user()->id;
    }

    /**
     * Run the validation rule.
     *
     * @param  \Closure(string): \Illuminate\Translation\PotentiallyTranslatedString  $fail
     */
    public function validate(string $attribute, mixed $value, Closure $fail): void
    {
        $query = DB::table($this->table)->where("{$this->table}.id", $value);
        $userID = collect($this->joins)->reduce(function ($acc, $next) {
            $next = collect($next);
            return $acc->join($next->first(), function ($join) use ($next) {
                $join->on(...$next->last());
            });
        }, $query)->value('user_id');

        if ($userID !== $this->userID) {
            $sentence1 = Str::of(__('item-linked'))->ucfirst();
            $sentence2 = Str::of(__('no-remotion-allowed'))->ucfirst();
            $fail("{$sentence1}. {$sentence2}.");
        }
    }
}
