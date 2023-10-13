<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

abstract class VerifyRequest extends FormRequest
{

    /** @var App\Http\Requests\CheckerFactoryScheme  */
    protected CheckerFactoryScheme $factory;

    /** @var App\Http\Requests\Checker */
    protected Checker $checker;

    /** @var bool */
    protected $stopOnFirstFailure = true;

    public function __construct(CheckerFactoryScheme $factory)
    {
        $this->factory = $factory;
    }

    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public abstract function authorize();

    /**
     * Initialize the Checker private property if necessary and return it.
     *
     * @return App\Http\Requests\Checker
     */
    protected function getChecker()
    {
        if (!isset($this->checker)) {
            $this->checker = $this->factory->getChecker($this);
        }
        return $this->checker;
    }

    /**
     * Used by access the url argument 'customerID' (if present) included
     * on the url to validate it
     *
     * @param array|mixed|null $keys
     * @return array
     */
    public function all($keys = NULL)
    {
        $request = parent::all($keys);
        return $this->checker->all($this, $request);
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return $this->getChecker()->rules();
    }

    /**
     * Get the validation messages that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function messages()
    {
        return $this->getChecker()->messages();
    }
}
