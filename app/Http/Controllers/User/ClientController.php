<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\User\Order;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Gloudemans\Shoppingcart\Facades\Cart;
class ClientController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth')->except(['index','store','create']);
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('user.user.register');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
         return view('user.user.login');
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
            'email' => 'required|string|email|unique:users',
            'indicatif' => 'required|numeric',
            'phone' => 'required|numeric|unique:users',
            'address' => 'required|string',
            'password' => 'required|string|confirmed',
        ]);

        define('STATUS',4);
        $add_client = new User();
        $add_client->name = $request->name;
        $add_client->email = $request->email;
        $add_client->phone = intval($request->indicatif).''.$request->phone;
        $add_client->address = $request->address;
        $add_client->password = Hash::make($request->password);
        $add_client->status = STATUS;
        $add_client->save();
        if (Auth::attempt(['email' => $request->email,'password' => $request->password])) {
            if (Cart::total() > 0) {
                return redirect()->route('checkout.index');
            }
            return redirect()->route('client.home');
        }
    }

    public function home(){
        $orders = Order::where('user_id',Auth::user()->id)
        ->orderBy('created_at','DESC')
        ->get();
        return view('user.user.home',compact('orders'));
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
}
