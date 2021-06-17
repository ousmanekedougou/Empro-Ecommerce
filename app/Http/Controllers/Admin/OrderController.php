<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User\Order;
use Illuminate\Http\Request;
use Carbon\Carbon;
use DateTime;
class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $orders = Order::where('created_at','<=',Carbon::today())->orderBy('created_at','DESC')->get();
        return view('admin.orders.index',compact('orders'));
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
        //
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
        define('STATUS',1);
        $payment_livraison = Order::where('id',$id)->first();
        if ($payment_livraison->status != STATUS && $payment_livraison->amount <= 0) {
            $payment_livraison->amount = $request->amount_livraison;
            $payment_livraison->status = STATUS;
            $payment_livraison->payment_created_at = (new DateTime());
            $payment_livraison->save();
            return back()->with('success','Votre commande a ete payer');
        }else
        {
            return back()->with('error','Cette commande a ete deja regler');
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
        Order::find($id)->delete();
        return back()->with('success','Votre commande a ete supprimer avec succes');
    }
}
