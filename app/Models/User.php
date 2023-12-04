<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Support\Facades\App;

class User extends Authenticatable implements MustVerifyEmail
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'phone',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];

    /**
     * Format the email_verified_at to view
     *
     * @return string
     */
    public function getEmailVerifiedAtFormattedAttribute()
    {
        $locale = App::getLocale();
        if ($locale === 'pt_BR') {
            return $this->email_verified_at ? $this->email_verified_at->format('d/m/Y') : '--';
        }
        return $this->email_verified_at ? $this->email_verified_at->format('m/d/Y') : '--';
    }

    /**
     * Format the created_at to view
     *
     * @return string
     */
    public function getCreatedAtFormattedAttribute()
    {
        $locale = App::getLocale();
        if ($locale === 'pt_BR') {
            return $this->created_at->format('d/m/Y');
        }
        return $this->created_at->format('m/d/Y');
    }

    /**
     * Format the updated_at to view
     *
     * @return string
     */
    public function getUpdatedAtFormattedAttribute()
    {
        $locale = App::getLocale();
        if ($locale === 'pt_BR') {
            return $this->updated_at->format('d/m/Y');
        }
        return $this->updated_at->format('m/d/Y');
    }

    /**
     * Many-to-many relationship with roles
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function roles()
    {
        return $this->belongsToMany(Role::class)->withTimestamps();
    }
}
