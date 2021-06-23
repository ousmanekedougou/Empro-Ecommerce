<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User\Category;
use App\Models\User\CategoryFather;
use App\Models\User\SousCategory;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;
class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
         define('STATUS',1);
        if (Auth::user()->status == STATUS) {
            $categorys = Category::paginate(8);
            $category_fathers = CategoryFather::all();
        }else{
           $categorys = Category::where('user_id',Auth::user()->id)->paginate(8);
           $category_fathers = CategoryFather::where('user_id',Auth::user()->id)->get();
        }
        return view('admin.category.index',compact('categorys','category_fathers'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        define('CREATER',1);
        if (Auth::user()->status == CREATER) {
            $categorys = CategoryFather::all();
        }else{
           $categorys = CategoryFather::where('user_id',Auth::user()->id)->get();
        }
        return view('admin.categoryfather.index',compact('categorys'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
       

        // dd($request->hidden);

        if ($request->hidden == 1) {
            $this->validate($request,[
            'parent' => 'required|string',
            'name' => 'required|string',
            'slug' => 'required|string',
            ]);
            $add_category = new Category();
            $add_category->category_father_id = $request->parent;
            $add_category->name = $request->name;
            $add_category->slug = $request->slug;
            $add_category->auteur = Auth::user()->name;
            $add_category->user_id = Auth::user()->id;
            $add_category->save();
        Session::flash('success' , 'La categorie a bien ete ajouter');
        }elseif ($request->hidden == 2) {
              $this->validate($request,[
            'name' => 'required|string',
            'slug' => 'required|string',
            'sous_categorie' => 'required|integer',
        ]);
            $add_sous_category = new SousCategory();
            $add_sous_category->name = $request->name;
            $add_sous_category->slug = $request->slug;
            $add_sous_category->auteur = Auth::user()->name;
            $add_sous_category->category_id = $request->sous_categorie;
            $add_sous_category->user_id = Auth::user()->id;
            $add_sous_category->save();
            Session::flash('success' , 'La categorie a bien ete ajouter');
        }
        return redirect()->route('admin.category.index')->with('success','La categorie a bien ete ajouter');
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

    public function post(Request $request){
        $this->validate($request,[
            'name' => 'required|string',
            'slug' => 'required|string',
             'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg,webp',
        ]);
        $imageName = '';
        if($request->hasFile('image'))
        
        {
            $imageName = $request->image->store('public/ParentCategory');
        }

        $add_category = new CategoryFather();
        $add_category->name = $request->name;
        $add_category->slug = $request->slug;
        $add_category->auteur = Auth::user()->name;
        $add_category->user_id = Auth::user()->id;
        $add_category->image =  $imageName;
        $add_category->save();
        Session::flash('success' , 'Le parent a bien ete ajouter');
        return redirect()->route('admin.category.create')->with('success','La categorie a bien ete ajouter');
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
        if ($request->sous_categorie  == '') {
            $this->validate($request,[
                'name' => 'required|string',
                'slug' => 'required|string',
            ]);
            $imageName = '';
            $update_category = Category::where('id',$id)->first();
            if (Auth::user()->status == 1) {
                $auteur = Auth::user()->name;
                $user_id = Auth::user()->id;
            }else{
                $auteur = $update_category->name;
                $user_id = $update_category->id;
            }
            if($request->image == '')
            {
                $imageName = $update_category->image;
            }else{

                if($request->hasFile('image'))
                {
                    $imageName = $request->image->store('public/ParentCategory');
                }
            }
            $update_category->name = $request->name;
            $update_category->slug = $request->slug;
            $update_category->auteur = $auteur;
            $update_category->user_id = $user_id;
            $update_category->image =  $imageName;
            $update_category->save();
            Session::flash('success' , 'La categorie a bien ete mise a joure');
        }elseif ($request->sous_categorie != '') {
            $this->validate($request,[
            'name' => 'required|string',
            'slug' => 'required|string',
            'sous_categorie' => 'required|integer',
            ]);

            $update_sous_category = SousCategory::where('id',$id)->first();
            if (Auth::user()->status == 1) {
                $auteur = Auth::user()->name;
                $user_id = Auth::user()->id;
            }else{
                $auteur = $update_sous_category->name;
                $user_id = $update_sous_category->id;
            }
            $update_sous_category->name = $request->name;
            $update_sous_category->slug = $request->slug;
            $update_sous_category->auteur = $auteur;
            $update_sous_category->user_id = $user_id;
            $update_sous_category->category_id = $request->sous_categorie;
            $update_sous_category->save();
            Session::flash('success' , 'La sous-categorie a bien ete mise a joure');
        }
        return redirect()->route('admin.category.index')->with('success','La categorie a bien ete mise a joure');
    }


      public function updated(Request $request, $id)
    {
       
            $this->validate($request,[
                'name' => 'required|string',
                'slug' => 'required|string',
            ]);
            $update_category_parent = CategoryFather::where('id',$id)->first();
             $imageName = '';
            if (Auth::user()->status == 1) {
                $auteur = Auth::user()->name;
                $user_id = Auth::user()->id;
            }else{
                $auteur = $update_category_parent->name;
                $user_id = $update_category_parent->id;
            }
            if($request->image == '')
            {
                $imageName = $update_category_parent->image;
            }else{

                if($request->hasFile('image'))
                {
                    $imageName = $request->image->store('public/ParentCategory');
                }
            }
            $update_category_parent->name = $request->name;
            $update_category_parent->slug = $request->slug;
            $update_category_parent->auteur = $auteur;
            $update_category_parent->user_id = $user_id;
            $update_category_parent->image =  $imageName;
            $update_category_parent->save();
            Session::flash('success' , 'Le parent a bien ete mise a joure');
            return redirect()->route('admin.category.create')->with('success','La categorie a bien ete mise a joure');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request ,$id)
    {
        if ($request->delete == 1) { 
            Category::find($id)->delete();
        }elseif ($request->delete == 2) {
            SousCategory::find($id)->delete();
        }
        elseif ($request->delete == 3) {
            CategoryFather::find($id)->delete();
        return redirect()->route('admin.category.create')->with('success','Le parent a bien ete supprimer');
        }
        return redirect()->route('admin.category.index')->with('success','La categorie a bien ete supprimer');
    }
    
}


