<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Admin\Info;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
class InfoController extends Controller
{
   

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        if (Auth::user()->status == 1) {
            $info = Info::first();
        return view('admin.info.index',compact('info'));
        }
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
            'email' => 'required|string',
            'first_phone' => 'required|string',
            'second_phone' => 'required|string',
            'adresse' => 'required|string',
        ]);

        $add_info = new Info();
        $add_info->email = $request->email;
        $add_info->first_phone = $request->first_phone;
        $add_info->second_phone = $request->second_phone;
        $add_info->adresse = $request->adresse;
        $add_info->save();
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
        $update_info = Info::where('id',$id)->first();
        $update_info->email = $request->email;
        $update_info->first_phone = $request->first_phone;
        $update_info->second_phone = $request->second_phone;
        $update_info->adresse = $request->adresse;
        $update_info->save();
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
        Info::find($id)->delete();
        return back();
    }
}
