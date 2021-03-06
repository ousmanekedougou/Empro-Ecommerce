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
        define('ISACTIVE',1);
        $add_client = new User();
        $add_client->name = $request->name;
        $add_client->email = $request->email;
        $add_client->phone = intval($request->indicatif).''.$request->phone;
        $add_client->address = $request->address;
        $add_client->password = Hash::make($request->password);
        $add_client->status = STATUS;
        $add_client->isActive = ISACTIVE;
        $add_client->isAdmin = 0;
        $add_client->save();
        if (Auth::attempt(['email' => $request->email,'password' => $request->password])) {
            if (Cart::total() > 0) {
                return redirect()->route('checkout.index');
            }
            return redirect()->route('client.home');
        }
    }

    public function home(){
        $user = Auth::user();
        $orders = Order::where('user_id',Auth::user()->id)
        ->orderBy('created_at','DESC')
        ->get();
        return view('user.user.home',compact('orders','user'));
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
        if ($request->option == 1) {
            $this->validate($request,[
                'name' => 'required|string',
                'email' => 'required|string|email',
                'phone' => 'required|numeric',
                'address' => 'required|string',
            ]);
            $update_info_user = User::where('id',$id)->first();
            $update_info_user->name = $request->name;
            $update_info_user->email = $request->email;
            $update_info_user->phone = $request->phone;
            $update_info_user->address = $request->address;
            $update_info_user->save();
            return back()->with('success','Votre profil a ete mise a jour');

        }
        elseif ($request->option == 2) {
             $this->validate($request,[
                'password' => 'required|string|confirmed',
            ]);
            $update_password_user = User::where('id',$id)->first();
            $update_password_user->password = Hash::make($request->password);
            $update_password_user->save();
            return back()->with('success','Votre mot de passe a ete mise a jour');
        }
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

    public function delete_compte($id)
    {
        User::find($id)->delete();
        return redirect()->route('register')->with('success','Votre compte a ete supprimer');
    }
}
