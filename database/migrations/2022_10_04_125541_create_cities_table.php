<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
// use Illuminate\Support\Facades\DB;
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
        Schema::create('cities', function (Blueprint $table) {
            $table->id();
            $table->string('name', 50);
            $table->foreignId('state_id')->constrained();
            $table->timestamps();
        });

        // $str = file_get_contents('https://raw.githubusercontent.com/felipefdl/cidades-estados-brasil-json/master/Cidades.json');
        // $cities = json_decode($str, TRUE);

        // foreach ($cities as ['Nome' => $name, 'Estado' => $state_id, ]) {
        //     DB::insert(
        //         'INSERT INTO
        //             cities (name, state_id, created_at, updated_at)
        //         VALUES
        //             (?, ?, now(), now())',
        //         [$name, $state_id]
        //     );
        // }
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('cities', function (Blueprint $table) {
            $table->dropForeign(['state_id']);
        });
        Schema::dropIfExists('cities');
    }
};
