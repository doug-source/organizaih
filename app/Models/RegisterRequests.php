<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use Illuminate\Support\Facades\App;

class RegisterRequests extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'email',
        'phone'
    ];

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
}
