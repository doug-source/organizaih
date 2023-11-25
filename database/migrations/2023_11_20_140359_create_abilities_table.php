<?php

use App\Models\Ability;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    private $abilityNames = [
        'login',
        'settings',
        'logout',
        'menu',
        'customer-screen',
        'product-screen',
        'inventory-screen',
        'sale-screen',
        'graphic-screen',
        'user-screen',
        'register-request-screen'
    ];

    private function populateDatabase()
    {
        foreach ($this->abilityNames as $abilityName) {
            (new Ability([
                'name' => $abilityName
            ]))->save();
        }
    }

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
        $this->populateDatabase();
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('abilities');
    }
};
