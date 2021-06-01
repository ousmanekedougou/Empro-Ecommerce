<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User\Category;
use App\Models\User\SousCategory;
use App\Models\User\Product;
use Illuminate\Http\Request;
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
        
        if (request()->sous_categorie) {
            $products = Product::with('sous_categories')->whereHas('sous_categories', function ($query){
                $query->where('slug',request()->sous_categorie);
            })->orderBy('created_at','DESC')->get();
        }else{
            $products = Product::with('sous_categories')->orderBy('created_at','DESC')->get();
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
        $categorys = Category::all();
        return view('admin.product.create',compact('categorys'));

        
    }

    public function search(){
        request()->validate([
            'q' => 'required|min:3'
        ]);
        $q = request()->input('q');
        $products = Product::where('title','like',"%$q%")->orWhere('description','like',"%$q%")->paginate(6);
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
            'image' => 'required|image',
            'description' => 'required|string',
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

        // $imgData[] = '';
        // dd($request->imageFile);
        // if ($request->hasfile('imageFile')) {
        //     foreach ($request->file('imageFile') as $file) {
        //         $name = $file->getClientOriginalName();
        //         $file->move(public_path().'/Product/imageFiles/'.$name);
        //         $imgData[] = $name;
        //     }
        // }

        $add_product->title = $request->name;
        $add_product->subtitle = $request->sous_name;
        $add_product->slug = $slug;
        $add_product->price = $request->prix;
        $add_product->image =  $imageName;
        // $add_product->images = json_encode($imgData);
        $add_product->description = $request->description;
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
        $categorys = Category::all();
        $product = Product::where('slug',$slug)->firstOrfail();
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
        $categorys = Category::all();
        $edit_product = Product::where('id',$id)->first();
        return view('admin.product.edit',compact('edit_product','categorys'));
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




