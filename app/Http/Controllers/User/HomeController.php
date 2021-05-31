<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\User\CategoryFather;
use App\Models\User\Product;
use Illuminate\Http\Request;

class HomeController extends Controller
{

     public function index()
    {
        $products = Product::take(12)->get();

        $hotdeals = [];
       
            for ($i=0; $i < count($products); $i++) { 
                $hotdeals[] = [
                    $products[$i],
                    $products[++$i]
                ];
            }
        
        $category_fathers = CategoryFather::limit(12)->get();
          for ($i=0; $i < count($category_fathers); $i++) { 
                $populars[] = [
                    $category_fathers[$i],
                    $category_fathers[++$i]
                ];
            }
        return view('user.index',compact('products','hotdeals','populars'));
    }
}
