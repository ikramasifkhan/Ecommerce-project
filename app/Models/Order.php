<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    protected $guarded=[];

    public function user(){
        return $this->belongsTo(User::class);
    }

    public function procesor(){
        return $this->hasOne(User::class, 'processed_by');
    }

    public function products(){
        return $this->hasMany(Product::class);
    }
}
