<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User\Category;
use App\Models\User\SousCategory;
use App\Models\User\Product;
use App\Models\User\Shop;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;
class ProductController extends Controller
{
    

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
         define('STATUS',1);
        if (Auth::user()->status == STATUS ) {
           
            if (request()->sous_categorie) {
                $products = Product::with('sous_categories')->whereHas('sous_categories', function ($query){
                    $query->where('slug',request()->sous_categorie);
                })->orderBy('created_at','DESC')->paginate(10);
            }else if (request()->slug_shop) {
                $shop_id = Shop::where('slug',request()->slug_shop)->first();
                $products = Product::where('shop_id',$shop_id->id)->orderBy('created_at','DESC')->paginate(10);
             }
            else{
                $products = Product::with('sous_categories')->orderBy('created_at','DESC')->paginate(10);
            }
        }else {
             if (request()->sous_categorie) {
                    $products = Product::with('sous_categories')->whereHas('sous_categories', function ($query){
                    $query->where('slug',request()->sous_categorie);
                })->where('user_id',Auth::user()->id)->orderBy('created_at','DESC')->paginate(10);
            }
            else if (request()->slug_shop) {
                $shop_id = Shop::where('slug',request()->slug_shop)->first();
                $products = Product::where('shop_id',$shop_id->id)->orderBy('created_at','DESC')->paginate(10);
             }
            else{
                $products = Product::with('sous_categories')->where('user_id',Auth::user()->id)->orderBy('created_at','DESC')->paginate(10);
            }
        }
            return view('admin.product.index',compact('products'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
         define('CREATER',1);
        if (Auth::user()->status == CREATER) {
            $categorys = Category::all();
            $shops = Shop::all();
        }else {
            $categorys = Category::where('user_id',Auth::user()->id)->get();
            $shops = Shop::where('user_id',Auth::user()->id)->get();
        }
        return view('admin.product.create',compact('categorys','shops'));
    }

    public function search(){
        define('SEARCH',1);
        request()->validate([
            'q' => 'required|min:3'
        ]);
        $q = request()->input('q');
        if (Auth::user()->status == SEARCH) {
            $products = Product::where('title','like',"%$q%")->orWhere('description','like',"%$q%")->paginate(10);
        }else {
            $products = Product::where('user_id',Auth::user()->id)->where('title','like',"%$q%")->orWhere('description','like',"%$q%")->paginate(10);
        }
        return view('admin.product.index',compact('products'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate($request,[
            'name' => 'required|string',
            'sous_name' => 'required|string',
            'slug' => 'required|string',
            'prix' => 'required|numeric',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg,webp',
            'description' => 'required|string',
            'shop' => 'required|numeric',
            'stock' => 'required|numeric',
        ]);

        $add_product = new Product();
        if($request->hasFile('image'))
        
        {
            $imageName = $request->image->store('public/Products');
        }

        if ($request->slug == '') {
            $slug = $request->name;
        }elseif ($request->slug != '') {
            $slug = $request->slug;
        }

        $add_product->title = $request->name;
        $add_product->subtitle = $request->sous_name;
        $add_product->slug = $slug;
        $add_product->price = $request->prix;
        $add_product->image =  $imageName;
        $add_product->description = $request->description;
        $add_product->shop_id = $request->shop;
        $add_product->stock = $request->stock;
        $add_product->user_id = Auth::user()->id;
         $add_product->save();
        $add_product->sous_categories()->sync($request->category);
        // $add_product->sous_categories()->attach($request->category);
        Session::flash('success' , 'Le produit a bien ete ajouter');
        return redirect()->route('admin.product.index')->with('success','Le produit a bien ete ajouter');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($slug)
    {
        define('SHOWED',1);
        if (Auth::user()->status == SHOWED) {
            $categorys = Category::all();
            $product = Product::where('slug',$slug)->firstOrfail();
        }else {
            $categorys = Category::where('user_id',Auth::user()->id)->get();
            $product = Product::where('slug',$slug)->where('user_id',Auth::user()->id)->firstOrfail();
        }
        return view('admin.product.show',compact('product','categorys'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        define('EDIDTED',1);
        if (Auth::user()->status == EDIDTED) {
            $shops = Shop::all();
            $categorys = Category::all();
            $edit_product = Product::where('id',$id)->first();
        }else {
            $categorys = Category::where('user_id',Auth::user()->id)->get();
            $edit_product = Product::where('id',$id)->where('user_id',Auth::user()->id)->first();
            $shops = Shop::where('user_id',Auth::user()->id)->get();
        }
        return view('admin.product.edit',compact('edit_product','categorys','shops'));
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
        $update_product = Product::where('id',$id)->first();
          $this->validate($request,[
            'name' => 'required|string',
            'sous_name' => 'required|string',
            'slug' => 'required|string',
            'prix' => 'required|numeric',
            'description' => 'required|string',
            'shop' => 'required|numeric',
            'stock' => 'required|numeric',
        ]);
        if ($request->image  == '') {
            $imageName = $update_product->image;
        }
        elseif ($request->hasFile('image'))
        {
            $imageName = $request->image->store('public/Products');
        }

        if ($request->slug == '') {
            $slug = $request->name;
        }elseif ($request->slug != '') {
            $slug = $request->slug;
        }
        $update_product->title = $request->name;
        $update_product->subtitle = $request->sous_name;
        $update_product->slug = $slug;
        $update_product->price = $request->prix;
        $update_product->image =  $imageName;
        $update_product->description = $request->description;
        $update_product->shop_id = $request->shop;
        $update_product->stock = $request->stock;
        $update_product->save();
        $update_product->sous_categories()->sync($request->category);
        Session::flash('success' , 'Le produit a bien ete mise a jour');
        return redirect()->route('admin.product.index')->with('success','Le produit a bien ete ajouter');

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Product::find($id)->delete();
        return redirect()->route('admin.product.index')->with('success','Le produit a bien ete supprimer');
    }
}




