<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\User\Product;
use Gloudemans\Shoppingcart\Facades\Cart;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Validator;

class CartController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('user.cart.index');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $duplicata = Cart::search(function($cartItem , $rowId) use ($request){
            return $cartItem->id == $request->product_id;
        });
        if ($duplicata->isNotEmpty()) {
            return redirect()->back()->with('error','Le produit a deja ete ajouter');
        }
        $product = Product::find($request->product_id);
        Cart::add($product->id,$product->title,1,$product->price)
            ->associate(Product::class);
        return redirect()->back()->with('success','Le produit a bien ete ajouter');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
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
    public function update(Request $request, $rowId)
    {
        $data  = $request->json()->all();
        $validator = Validator::make($request->all() ,[
            'qty' => 'required|numeric'
            // 'qty' => 'required|numeric|between:1,6'
        ]);
        if ($validator->fails()) {
            Session::flash('error' , 'La quantite du produit ne doit pas depasser 6 ');
            return response()->json(['error' => 'Cart Quantity Has Not Been Updated']);
        }
        if ($data['qty'] > $data['stock']) {
            Session::flash('error' , 'La quantite de ce produit n\'est pas disponible ');
            return response()->json(['error' => 'Product Quantity Not Available']);
        }
        Cart::update($rowId, $data['qty']);
        Session::flash('success' , 'La quantite du produit est passe a ' . $data['qty']. '.');
        return response()->json(['success' => 'Cart Quantity Has Been Updated']);
    }

    

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($rowId)
    {
        Cart::remove($rowId);
        return back()->with('product.index')->with('success','Le produit a ete supprimer');
    }
}
