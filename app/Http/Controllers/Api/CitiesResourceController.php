<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\City;
use App\Models\State;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use App\Library\Builders\Response as ResponseBuilder;

class CitiesResourceController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param int $stateID
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request, $stateID)
    {
        $request->merge(['stateID' => $stateID])->validate([
            'stateID' => 'required|integer|min:1|exists:states,id'
        ], [
            'stateID.required' => Str::of(__('validation-required'))->ucfirst(),
            'stateID.integer' => Str::of(__('validation-integer'))->ucfirst(),
            'stateID.min' => Str::of(__('validation-min', ['size' => '1']))->ucfirst(),
            'stateID.exists' => Str::of(__('validation-invalid-male', ['subject' => __('state')]))->ucfirst()
        ]);

        $stateEntity = State::find($stateID);
        return ResponseBuilder::successJSON(City::select(
            'id',
            'name',
            'state_id'
        )->where('state_id', $stateEntity->id)->get());
    }
}
