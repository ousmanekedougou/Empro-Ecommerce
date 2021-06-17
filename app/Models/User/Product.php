<?php

namespace App\Models\User;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User\Category;
use App\Models\User;
use App\Models\User\SousCategory;
class Product extends Model
{
    use HasFactory;

    protected $fillable = ['stock']; 
    public function getPrice(){
        $price = $this->price / 100 ;
    
        return number_format($price,3, '.',' '). ' f';
    }

     public function categories()
    {
        return $this->belongsToMany(Category::class);
    }

    public function sous_categories()
    {
        return $this->belongsToMany(SousCategory::class,'sous_category_products');
    }

    public function user(){
        return $this->belongsTo(User::class);
    }
}


