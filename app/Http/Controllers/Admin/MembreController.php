<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
class MembreController extends Controller
{
    

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $admins = User::all();
        return view('admin.admin.index',compact('admins'));
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
            'email' => 'required|string|unique:users',
            'phone' => 'required|string|unique:users',
            'password' => 'required|string|confirmed|min:8',
            'radio' => 'required|integer',
            'slug' => 'required|string|unique:users',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg,webp',
        ]);

        $add_membre = new User();
        $imageName = '';
        if($request->hasFile('image'))
        
        {
            $imageName = $request->image->store('public/Admins');
        }
        $add_membre->name = $request->name;
        $add_membre->email = $request->email;
        $add_membre->phone = $request->phone;
        $add_membre->password = Hash::make($request->password);
        $add_membre->image = $imageName;
        $add_membre->status = $request->radio;
        $add_membre->slug = $request->slug;
        $add_membre->save();
        return back();
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
            'radio' => 'required|integer',
        ]);
        $update_admin = User::find($id);
        $update_admin->status = $request->radio;
        $update_admin->save();
        return back();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        User::find($id)->delete();
        return back();
    }
}
