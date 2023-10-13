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
        Schema::create('customers', function (Blueprint $table) {
            $table->id();
            $table->string(
                'name',
                intval(config('database.column-sizes.customer.name'))
            )->nullable(FALSE);
            $table->char('sex', 1)->nullable(FALSE)->default('M');
            $table->string(
                'phone_1',
                intval(config('database.column-sizes.customer.phone'))
            )->nullable(FALSE);
            $table->string(
                'phone_2',
                intval(config('database.column-sizes.customer.phone'))
            )->nullable(TRUE);
            $table->dateTime('birthday')->nullable(FALSE);
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
        Schema::dropIfExists('customers');
    }
};
