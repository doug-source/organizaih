<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
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
        Schema::create('states', function (Blueprint $table) {
            $table->id();
            $table->char('acronym', 2)->nullable(FALSE);
            $table->string('name', 30)->nullable(FALSE);
            $table->timestamps();
        });

        $str = file_get_contents('https://raw.githubusercontent.com/felipefdl/cidades-estados-brasil-json/master/Estados.json');
        $states = json_decode($str, TRUE);

        foreach ($states as ['Sigla' => $acronym, 'Nome' => $name]) {
            DB::insert(
                'INSERT INTO
                    states (acronym, name, created_at, updated_at)
                VALUES
                    (?, ?, now(), now())',
                [$acronym, $name]
            );
        }
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('states');
    }
};
