<?php

namespace App\Models;

use App\Models\User\Category;
use App\Models\User\Order;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use  App\Models\User\CategoryFather;
use App\Models\User\Product;

class User extends Authenticatable
{
    use HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'email',
        'phone',
        'status',
        'password',
        'image',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function orders(){
        return $this->hasMany(Order::class);
    }

     public function products(){
        return $this->hasMany(Product::class);
    }

    public function categories(){
        return $this->hasMany(Category::class);
    }

     public function category_fathers(){
        return $this->hasMany(CategoryFather::class);
    }
}
