<?php

namespace App\Models\User;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SousCategoryProduct extends Model
{
    use HasFactory;

        protected $fillable = [
        'sous_category_id',
        'product_id'
    ];
}
