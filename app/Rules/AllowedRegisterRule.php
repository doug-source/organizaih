<?php

namespace App\Rules;

use Carbon\Carbon;
use Closure;
use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class AllowedRegisterRule implements ValidationRule
{
    /** @var \Illuminate\Database\Eloquent\Model|object|static|null */
    protected $allowed;

    /** @var string */
    protected $token;

    /**
     * Create a new rule instance.
     *
     * @return void
     */
    public function __construct($email, $token)
    {
        $this->allowed = DB::table('allowed_registers')->where('email', $email)->first();
        $this->token = $token;
    }

    /**
     * Run the validation rule.
     *
     * @param  \Closure(string): \Illuminate\Translation\PotentiallyTranslatedString  $fail
     */
    public function validate(string $attribute, mixed $value, Closure $fail): void
    {
        if (Carbon::now()->greaterThan(Carbon::parse($this->allowed->expiration_data))) {
            $fail(Str::of(__('registration-expired'))->ucfirst());
        }
        if ($this->allowed->token !== $this->token) {
            $fail(Str::of(__('registration-invalid-token'))->ucfirst());
        }
    }
}
