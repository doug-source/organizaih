<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\State;
use App\Library\Builders\Response as ResponseBuilder;

class StatesResourceController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return ResponseBuilder::successJSON(State::select(
            'id',
            'acronym',
            'name'
        )->get());
    }
}
