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
        Schema::create('inventory_items', function (Blueprint $table) {
            $table->id();
            $table->integer('qty', FALSE, TRUE)->nullable(FALSE);
            $table->float(
                'cost',
                intval(config('database.columns-precisions.inventory.cost')),
                intval(config('database.columns-scales.inventory.cost')),
                TRUE
            )->nullable(FALSE);
            $table->foreignId('inventory_id')->constrained();
            $table->foreignId('product_id')->constrained();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('inventory_items', function (Blueprint $table) {
            $table->dropForeign(['inventory_id']);
            $table->dropForeign(['product_id']);
        });
        Schema::dropIfExists('inventory_items');
    }
};
