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
        Schema::create('inventory_item_sale_item', function (Blueprint $table) {
            $table->foreignId('sale_item_id')->constrained()->onDelete('cascade');
            $table->foreignId('inventory_item_id')->constrained();
            $table->integer('qty_used')->unsigned();
        });
        DB::statement('ALTER TABLE inventory_item_sale_item ADD PRIMARY KEY (sale_item_id, inventory_item_id)');
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('inventory_item_sale_item', function (Blueprint $table) {
            $table->dropForeign(['sale_item_id']);
            $table->dropForeign(['inventory_item_id']);
        });
        Schema::dropIfExists('inventory_item_sale_item');
    }
};
