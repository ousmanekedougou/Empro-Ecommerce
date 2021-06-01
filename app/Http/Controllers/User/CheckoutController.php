<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\User\Order;
use App\Models\User\Product;
use DateTime;
use Gloudemans\Shoppingcart\Facades\Cart;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;
use Stripe\PaymentIntent;
use Stripe\Stripe;

class CheckoutController extends Controller
{
    
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function __construct()
    {
        $this->middleware('auth');
    }
    
    public function index()
    {
       if (Cart::count() <= 0) {
           return redirect()->route('product.index');
       }else{
        Stripe::setApiKey('sk_test_4eC39HqLyjWDarjtT1zdp7dc');
        $intent = PaymentIntent::create([
            'amount' => round(Cart::total()),
            'currency' => 'eur',
        ]);
        $clientSecret = Arr::get($intent,'client_secret');
        return view('user.checkout.index',compact('clientSecret'));
       }
     
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Session::has('success') ? view('user.checkout.redirect') : redirect()->route('product.index')
            ->with('error' , 'Votre commande n\'a pas ete tarite ');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        if ($this->checkIfNotAvailable()) {
             Session::flash('error', 'Un produit dans votre panier n\'est plus disponible');
             return response()->json(['success' => false], 400);
        }
        $data = $request->json()->all();

        $order = new Order();
        $order->payment_intent_id = $data['paymentIntent']['id'];
        $order->amount = $data['paymentIntent']['amount'];
        $order->payment_created_at = (new DateTime())
            ->setTimestamp($data['paymentIntent']['created'])
            ->format('Y-m-d H:i:s');
        
        $products = [];
        $i = 0;

        foreach (Cart::content() as $product) {
            $products['product_' . $i ][] = $product->model->image;
            $products['product_' . $i ][] = $product->model->title;
            $products['product_' . $i ][] = $product->model->subtitle;
            $products['product_' . $i ][] = $product->qty;
            $products['product_' . $i ][] = $product->model->price;
            $i++;
        }

        $order->products = serialize($products);

        $order->user_id = Auth::user()->id;


        $order->save();

        if ($data['paymentIntent']['status'] === 'succeeded') {
            $this->updateStock();
            Cart::destroy();
            Session::flash('success', 'Votre commande a ete traite avec succes.');
            return response()->json(['success' => 'Payment Intent succeeded']);
        }else{
             return response()->json(['error' => 'Payment Intent Not succeeded']);
        }

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

    private function checkIfNotAvailable(){
        foreach (Cart::content() as $item) {
            $product = Product::find($item->model->id);
            if ($product->stock < $item->qty) {
                return true;
            }
        }
        return false;
    }

    private function updateStock(){
        foreach (Cart::content() as $item) {
            $product = Product::find($item->model->id);
            $product->update(['stock' => $product->stock - $item->qty]);
        }
    }

    
}
