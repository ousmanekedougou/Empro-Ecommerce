<?php

namespace App\Models\User;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User\Category;
use App\Models\User\Product;
class SousCategory extends Model
{
    use HasFactory;

     public function category(){
        return $this->belongsTo(Category::class);
    }

      public function products()
    {
        return $this->belongsToMany(Product::class,'sous_category_products');
    }
}


