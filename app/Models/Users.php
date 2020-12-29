<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;

class Users extends Authenticatable
{

    protected $fillable = ['first_name', 'last_name', 'email', 'password', 'document', 'phone', 'cellphone'];
    protected $hidden   = ['password'];

    public function categories()
    {
        return $this->belongsToMany(Categories::class)->withTimestamps();
    }

    public function files()
    {
        return $this->belongsToMany(Files::class)->withTimestamps()->with('fileGallery');
    }
}
