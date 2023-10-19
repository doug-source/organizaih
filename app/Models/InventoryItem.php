<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class InventoryItem extends Model
{
    use HasFactory;

    public $timestamps = FALSE;

    protected $fillable = ['qty'];

    public function inventory()
    {
        return $this->belongsTo(Inventory::class);
    }

    public function sale_items()
    {
        return $this->belongsToMany(SaleItem::class)->withPivot('qty_used');
    }

    /**
     * Return the product related with this instance.
     *
     * @return Illuminate\Database\Query\Builder
     */
    public function product()
    {
        return $this->belongsTo(Product::class);
    }
}
