<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateVehiclesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('vehicles', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name');
            $table->timestamps();
        });

        DB::table ('vehicles')->insert(
            array(
            ['name' =>'Closed Body Pickup'],
            ['name' =>'OpenBody Pickup'],
            ['name' =>'3 Tonne Open Truck'],
            ['name' =>'7.5 Tonne Side Loader Truck'],
            ['name' =>'10 Tonne Open Truck'],
            ['name' =>'10 Tonne Closed Truck']
            )
            );
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('vehicles');
    }
}
