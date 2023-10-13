<?php

namespace App\Rules;

use Closure;
use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class NotLinked implements ValidationRule
{
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
    }

    /**
     * Run the validation rule.
     *
     * @param  \Closure(string): \Illuminate\Translation\PotentiallyTranslatedString  $fail
     */
    public function validate(string $attribute, mixed $value, Closure $fail): void
    {
        $some = FALSE;
        $mainColumn = "{$this->table}.id";
        foreach ($this->joins as $relation) {
            $query = DB::table($this->table)->where($mainColumn, $value);
            $relation = collect($relation);
            $rows = $query->join($relation->first(), function ($join) use ($relation) {
                $join->on(...$relation->last());
            })->count();
            if ($rows > 0) {
                $some = TRUE;
                break;
            }
        }
        if ($some != FALSE) {
            $sentence1 = Str::of(__('item-linked'))->ucfirst();
            $sentence2 = Str::of(__('no-remotion-allowed'))->ucfirst();
            $fail("{$sentence1}. {$sentence2}.");
        }
    }
}
