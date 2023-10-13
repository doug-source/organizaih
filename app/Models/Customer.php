<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Str;

class Customer extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var string[]
     */
    protected $fillable = [
        'name',
        'sex',
        'phone_1',
        'phone_2',
        'birthday',
        'photo'
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array
     */
    protected $casts = [
        'birthday' => 'datetime',
    ];

    public function getPhone1Attribute()
    {
        if (!$this->attributes['phone_1']) {
            return '--';
        }
        return sprintf(
            '(%s) %s',
            substr($this->attributes['phone_1'], 0, 2),
            substr($this->attributes['phone_1'], 2),
        );
    }

    public function getRawPhone1Attribute()
    {
        return $this->attributes['phone_1'];
    }

    public function getPhone2Attribute()
    {
        if (!$this->attributes['phone_2']) {
            return '--';
        }
        return sprintf(
            '(%s) %s',
            substr($this->attributes['phone_2'], 0, 2),
            substr($this->attributes['phone_2'], 2),
        );
    }

    public function getRawPhone2Attribute()
    {
        return $this->attributes['phone_2'];
    }

    public function getSexAttribute($sex)
    {
        return $sex === 'M' ? Str::of(__('male'))->ucfirst() : Str::of(__('female'))->ucfirst();
    }

    public function getRawSexAttribute()
    {
        return $this->attributes['sex'];
    }

    public function getBirthdayFormattedAttribute()
    {
        if (!$this->birthday) {
            return '--';
        }
        return $this->birthday->format('d/m/Y');
    }

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

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function address()
    {
        return $this->belongsTo(Address::class);
    }
}
