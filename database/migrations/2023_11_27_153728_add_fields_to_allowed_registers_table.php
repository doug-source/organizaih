<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('allowed_registers', function (Blueprint $table) {
            $table->string(
                'phone',
                intval(config('database.column-sizes.allowed-register.phone'))
            )->nullable(TRUE);
            $table->string(
                'token',
                intval(config('database.column-sizes.allowed-register.token'))
            )->nullable(FALSE);
            $table->timestamp("expiration_data")->nullable(FALSE);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('allowed_registers', function (Blueprint $table) {
            $table->dropColumn(['phone']);
        });
    }
};
