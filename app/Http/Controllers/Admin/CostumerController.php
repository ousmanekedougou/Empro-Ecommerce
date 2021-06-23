<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
class CostumerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        if (Auth::user()->status == 1) {
            define('STATUS',4);
            $costomers = User::where('status',STATUS)->get();
            return view('admin.costomers.index',compact('costomers'));
        }else {
            return back()->with('error','Acces non autoriser');
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
        $isAcitve = '';
        define('ISACTIVE',1);
        define('DESACTIVE',0);
        $update_costomer = User::where('id',$id)->first();
        if ($request->isActive != Null) {
            $isAcitve = ISACTIVE;
        }else{
            $isAcitve = DESACTIVE;
        }
        $update_costomer->isActive = $isAcitve;
        $update_costomer->save();
        return back()->with('success','Ce Compte a ete mise a jour');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        if (Auth::user()->status == 1) {
            User::find($id)->delete();
            return back()->with('success','Ce client a ete supprimer');
        }else {
            return back()->with('error','Acces non autoriser');
        }
    }
}
