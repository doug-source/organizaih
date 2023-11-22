<?php

namespace App\Policies;

use App\Models\Role;
use App\Models\User;

class UserPolice
{
    public function isSuperAdmin(User $user)
    {
        return $user->roles->contains(fn (Role $role) => $role->name === 'super-admin');
    }
}
