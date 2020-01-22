<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Vehicle;

class VehicleController extends Controller
{
    //

    public function index()
    {
        $vehicles = Vehicle::all();

        return response()->json($vehicles);
    }

}
