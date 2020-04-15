<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;
class Category extends Model
{
    protected $guarded=[];

    /**
     * The "booted" method of the model.
     *
     * @return void
     */
    protected static function booted()
    {
        static::creating(function ($category) {
            $category->slug = Str::slug($category->name);
        });
    }

    public function child_category(){
        return $this->hasMany(__CLASS__);
    }

    public function parent_category(){
        return $this->belongsTo(__CLASS__);
    }

    public function product(){
        return $this->hasMany(Category::class);
    }
}
