<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\User\Category;
use Illuminate\Http\Request;
use App\Models\User\Product;
class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        if (request()->sous_categorie) {
            $products = Product::with('sous_categories')->whereHas('sous_categories', function ($query){
                $query->where('slug',request()->sous_categorie);
            })->orderBy('created_at','DESC')->get();
        }else{
            $products = Product::with('sous_categories')->orderBy('created_at','DESC')->get();
        }
        return view('user.product.index',compact('products'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        request()->validate([
            'q' => 'required|min:3'
        ]);
        $q = request()->input('q');
        $products = Product::where('title','like',"%$q%")->orWhere('description','like',"%$q%")->get();
        return view('user.product.index',compact('products'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($slug)
    {
        $product = Product::where('slug',$slug)->firstOrfail();
        $autres = Product::where('slug','!=',$slug)->orderBy('created_at','DESC')->limit(16);
        if (request()->sous_categorie) {
            $meme_categorys = Product::with('sous_categories')->whereHas('sous_categories', function ($query){
                $query->where('slug',request()->sous_categorie);
            })->orderBy('created_at','DESC')->get();
        }else{
            $meme_categorys = Product::with('sous_categories')->orderBy('created_at','DESC')->get();
        }
        $stock = $product->stock < 1 ? 'Indisponible' : 'Disponible';
        return view('user.product.show',compact('product','stock','meme_categorys','autres'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
