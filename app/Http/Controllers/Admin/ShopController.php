<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\User\Shop;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ShopController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        if (request()->slug) {
            $admin = User::where('slug',request()->slug)->first();
            $shops = Shop::where('user_id',$admin->id)->orderBy('created_at','DESC')->paginate(10);
        }else{
            define('ADMIN',1);
            if (Auth::user()->status !== ADMIN) {
                $shops = Shop::where('user_id',Auth::user()->id)->orderBy('created_at','DESC')->paginate(10);
            }else{
                $shops = Shop::orderBy('created_at','DESC')->paginate(10);
            }
        }
        return view('admin.shop.index',compact('shops'));
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
          $this->validate($request,[
            'name' => 'required|string',
            'boutique' => 'required|string',
            'email' => 'required|string|unique:users',
            'phone' => 'required|string|unique:users',
            'address' => 'required|string',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg,webp',
        ]);
        $imageName = '';
        $add_shop = new Shop();
        $add_shop->owner_name = $request->name;
        $add_shop->owner_email = $request->email;
        $add_shop->owner_phone = $request->phone;
        $add_shop->owner_address = $request->address;
        $add_shop->owner_shop_name = $request->boutique;
        $add_shop->user_id = Auth::user()->id;
        $add_shop->slug = $request->name .'\ EMPEO_SHOP /'. $request->boutique . ' ' . $request->address;
         if($request->hasFile('image'))
        
        {
            $imageName = $request->image->store('public/Shops');
        }
        $add_shop->owner_image =  $imageName;
        $add_shop->save();
        return back()->with('success','Votre boutique a ete ajouter');
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
        $this->validate($request,[
            'name' => 'required|string',
            'boutique' => 'required|string',
            'email' => 'required|string',
            'phone' => 'required|string',
            'address' => 'required|string',
        ]);
        $imageName = '';
        $update_shop = Shop::where('id',$id)->first();
        $update_shop->owner_name = $request->name;
        $update_shop->owner_email = $request->email;
        $update_shop->owner_phone = $request->phone;
        $update_shop->owner_address = $request->address;
        $update_shop->owner_shop_name = $request->boutique;
        $update_shop->user_id = Auth::user()->id;

        if($request->hasFile('image'))
        {
            $imageName = $request->image->store('public/Shops');
        }else{
            $imageName = $update_shop->owner_image;
        }
        $update_shop->owner_image =  $imageName;
        $update_shop->save();
        return back()->with('success','Votre boutique a ete mise a jour');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Shop::find($id)->delete();
        return back()->with('success','Cette boutique a ete supprimer');
    }
}
