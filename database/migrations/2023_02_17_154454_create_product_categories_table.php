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
        Schema::create('product_categories', function (Blueprint $table) {
            $table->id();
            $table->string(
                'name',
                intval(config('database.column-sizes.product-category.name'))
            )->unique()->nullable(FALSE);
            $table->string(
                'description',
                intval(config('database.column-sizes.product-category.description'))
            )->nullable()->default('');
            $table->text('obs')->nullable();
            $table->timestamps();
        });
        DB::insert(
            'INSERT INTO
                    product_categories (name, created_at, updated_at)
                VALUES
                    (?, now(), now())',
            ["product-category-default"]
        );
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('product_categories');
    }
};
