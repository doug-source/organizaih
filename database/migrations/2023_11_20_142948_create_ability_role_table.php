<?php

use App\Models\Role;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    private function attachInitialAbilities($roleName, $abilityNameList)
    {
        $roleID = DB::table('roles')->where('name', $roleName)->value('id');
        $abilitiesIDs = DB::table('abilities')->whereIn('name', $abilityNameList)->pluck('id')->toArray();
        Role::find($roleID)->abilities()->attach($abilitiesIDs);
    }

    private function attachSuperAdminInitialAbilities()
    {
        $this->attachInitialAbilities('super-admin', [
            'login',
            'settings',
            'logout',
            'menu',
            'user-screen',
            'register-request-screen'
        ]);
    }

    private function attachAdminInitialAbilities()
    {
        $this->attachInitialAbilities('admin', [
            'login',
            'settings',
            'logout',
            'menu',
            'customer-screen',
            'product-screen',
            'inventory-screen',
            'sale-screen',
            'graphic-screen'
        ]);
    }

    private function attachSellerInitialAbilities()
    {
        $this->attachInitialAbilities('seller', [
            'login',
            'settings',
            'logout',
            'menu',
            'customer-screen',
            'product-screen',
            'inventory-screen',
            'sale-screen',
            'graphic-screen'
        ]);
    }

    private function attachGuestInitialAbilities()
    {
        $this->attachInitialAbilities('guest', ['login']);
    }

    private function populateDatabase()
    {
        $this->attachSuperAdminInitialAbilities();
        $this->attachAdminInitialAbilities();
        $this->attachSellerInitialAbilities();
        $this->attachGuestInitialAbilities();
    }

    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('ability_role', function (Blueprint $table) {
            $table->id();
            $table->foreignId('ability_id')->constrained()->onDelete('CASCADE');
            $table->foreignId('role_id')->constrained()->onDelete('CASCADE');
            $table->unique(['ability_id', 'role_id']);
            $table->timestamps();
        });
        $this->populateDatabase();
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('ability_role');
    }
};
