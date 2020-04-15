<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    protected $guarded  =['remember_token'];
    protected $hidden =['password', 'remember_token'];

    public function orders(){
        return $this->hasMany(Order::class);
    }
}
