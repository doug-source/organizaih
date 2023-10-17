<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\App;

class ProductCategory extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var string[]
     */
    protected $fillable = [
        'name',
        'description',
        'obs'
    ];

    public function getCreatedAtFormattedAttribute()
    {
        $locale = App::getLocale();
        if ($locale === 'pt_BR') {
            return $this->created_at->format('d/m/Y');
        }
        return $this->created_at->format('m/d/Y');
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    use HasFactory;
}
