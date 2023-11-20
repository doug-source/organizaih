<?php

use App\Models\Role;
use App\Models\User;
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
        Schema::create('role_user', function (Blueprint $table) {
            $table->id();
            $table->foreignId('role_id')->constrained()->onDelete('CASCADE');
            $table->foreignId('user_id')->constrained()->onDelete('CASCADE');
            $table->unique('role_id', 'user_id');
            $table->timestamps();
        });
        $userID = DB::table('users')->where('email', config('app.super_admin_mail'))->value('id');
        if ($userID) {
            $user = User::find($userID);
            $roleID = DB::table('roles')->where('name', 'super-admin')->value('id');
            $role = Role::find($roleID);
            $user->roles()->save($role);
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('role_user');
    }
};
