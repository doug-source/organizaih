<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('abilities', function (Blueprint $table) {
            $table->id();
            $table->string('name', 50);
            $table->timestamps();
        });
        DB::table('abilities')->insert([
            ['name' => 'login'],
            ['name' => 'settings'],
            ['name' => 'logout'],
            ['name' => 'menu'],
            ['name' => 'customer-screen'],
            ['name' => 'product-screen'],
            ['name' => 'inventory-screen'],
            ['name' => 'sale-screen'],
            ['name' => 'graphic-screen'],
        ]);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('abilities');
    }
};
