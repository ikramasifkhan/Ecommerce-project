<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;
use Spatie\MediaLibrary\HasMedia\HasMedia;
use Spatie\MediaLibrary\HasMedia\HasMediaTrait;
class Product extends Model implements HasMedia
{
    use HasMediaTrait;
    protected $guarded=[];
    /**
     * The "booted" method of the model.
     *
     * @return void
     */
    protected static function booted()
    {
        static::creating(function($product){
            $product->slug= Str::slug($product->name);
        });
    }

    public function category(){
        return $this->hasOne(Product::class);
    }
}
