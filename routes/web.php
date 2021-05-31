<?php

use Gloudemans\Shoppingcart\Facades\Cart;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;
use App\Http\Middleware\ClientMiddleware;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/



Route::get('/', [App\Http\Controllers\User\HomeController::class, 'index'])->name('home.index');

Route::resource('/product', App\Http\Controllers\User\ProductController::class);

Route::get('/client/register', [App\Http\Controllers\User\ClientController::class,'index'])->name('client.index');
Route::post('/client/register', [App\Http\Controllers\User\ClientController::class,'store'])->name('client.store');
Route::get('/client/login', [App\Http\Controllers\User\ClientController::class,'create'])->name('client.login');

Route::resource('/panier', App\Http\Controllers\User\CartController::class); 

Route::get('/vidpanier',function(){
    Cart::destroy();
    return redirect()->route('product.index')->with('success','Votre panier a ete vide');
});
Route::get('/client/home', [App\Http\Controllers\User\ClientController::class,'home'])->name('client.home');
Route::resource('/checkout', App\Http\Controllers\User\CheckoutController::class); 




Auth::routes();



Route::prefix('/admin')->middleware(['auth','isAdmin'])->name('admin.')->group(function() 
{
    Route::get('/home', [App\Http\Controllers\Admin\HomeController::class, 'index'])->name('home');
    Route::resource('/product', App\Http\Controllers\Admin\ProductController::class); 
    Route::resource('/category', App\Http\Controllers\Admin\CategoryController::class); 
    Route::post('/post', [App\Http\Controllers\Admin\CategoryController::class, 'post'])->name('category.post');
    Route::put('/updated{id}', [App\Http\Controllers\Admin\CategoryController::class, 'updated'])->name('category.updated');
    Route::resource('/info', App\Http\Controllers\Admin\InfoController::class); 
    Route::resource('/partener', App\Http\Controllers\Admin\PartnerController::class); 
    Route::resource('/membre', App\Http\Controllers\Admin\MembreController::class); 
    Route::resource('/order', App\Http\Controllers\Admin\OrderController::class); 
    Route::resource('/contact', App\Http\Controllers\Admin\ContactController::class); 
    Route::get('/profil', [App\Http\Controllers\Admin\ProfileController::class,'show'])->name('profil.show'); 
    Route::put('/profil/update/{id}', [App\Http\Controllers\Admin\ProfileController::class,'update'])->name('profil.update'); 
    Route::get('/search', [App\Http\Controllers\Admin\ProductController::class, 'search'])->name('product.search');
});
