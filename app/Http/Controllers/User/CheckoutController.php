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
        $this->middleware('auth')->except('index');
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
            if(Auth::check()){
                return view('user.checkout.index',compact('clientSecret'));
            }else{
                return redirect()->route('client.login');
            }
        }
     
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Session::has('success') ? redirect()->route('client.home')->with('success','Votre commande a traite avec success') : back()
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
        define('STATUS',1);
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
        $order->status = STATUS;


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

    public function livraison(Request $request){
     

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
        define('LIVRAISON',2);
        $order = new Order();
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
        $order->status = LIVRAISON;
        $order->save();

        Cart::destroy();

        return redirect()->route('client.home');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Order::where('id',$id)->where('user_id',Auth::user()->id)->delete();
        return back();
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
