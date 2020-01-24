<?php

namespace Tests\Unit;

use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

use App\Vehicle;

class VehicleTest extends TestCase
{
    // use DatabaseTransaction;
    /**
     * A basic test example.
     *
     * @return void
     */
    public function testBasicTest()
    {
        //given 

        //when 
        $vehicle = Vehicle::pluck('name')->toArray();

        //then 
        $this->assertEquals( [
            "Closed Body Pickup",
            "OpenBody Pickup",
          ], $vehicle
        );
    }
}
