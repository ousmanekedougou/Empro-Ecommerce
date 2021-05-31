<?php

namespace App\Models\User;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User\Product;
use App\Models\User;
use  App\Models\User\SousCategory;
use  App\Models\User\CategoryFather;
class Category extends Model
{
    use HasFactory;

    public function products()
    {
        return $this->belongsToMany(Product::class);
    }

    public function user(){
        return $this->belongsTo(User::class);
    }

     public function category_father(){
        return $this->belongsTo(CategoryFather::class);
    }

     public function sous_categories(){
        return $this->hasMany(SousCategory::class);
    }

}


