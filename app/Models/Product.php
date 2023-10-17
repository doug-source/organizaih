<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\App;

class Product extends Model
{
    use HasFactory;

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

    public function getUpdatedAtFormattedAttribute()
    {
        $locale = App::getLocale();
        if ($locale === 'pt_BR') {
            return $this->updated_at->format('d/m/Y');
        }
        return $this->updated_at->format('m/d/Y');
    }

    public function getCreatedAtFormattedAttribute()
    {
        $locale = App::getLocale();
        if ($locale === 'pt_BR') {
            return $this->created_at->format('d/m/Y');
        }
        return $this->created_at->format('m/d/Y');
    }

    /**
     * Product's relationship definition with ProductCategory
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function product_category()
    {
        return $this->belongsTo(ProductCategory::class);
    }
}
