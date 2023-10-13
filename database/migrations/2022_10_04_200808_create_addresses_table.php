<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('addresses', function (Blueprint $table) {
            $table->id();
            $table->string(
                'street',
                intval(config('database.column-sizes.address.street'))
            );
            $table->bigInteger('number')->unsigned();
            $table->string(
                'district',
                intval(config('database.column-sizes.address.district'))
            );
            $table->foreignId('city_id')->constrained();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('addresses', function (Blueprint $table) {
            $table->dropForeign(['city_id']);
        });
        Schema::dropIfExists('addresses');
    }
};
