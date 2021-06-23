<?php

use App\Models\User\Category;

function getPrice($priceInDecimals)
{
    $price = floatval($priceInDecimals) / 100;
    return number_format($price,3, '.',' '). ' f';
}

if(! function_exists('all_category')){
    function all_category()
    {
        $category = Category::all();
        return $category;
    }
}