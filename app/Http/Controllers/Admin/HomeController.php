<?php

namespace App\Http\Controllers\Admin;
use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User\Order;
use Carbon\Carbon;

class HomeController extends Controller
{

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        $admin = Auth::user();
        $orders = Order::where('created_at','==',Carbon::today())->orderBy('created_at','DESC')->get();
        return view('admin.home',compact('admin','orders'));
    }
}
