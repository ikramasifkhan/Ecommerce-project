<?php

use Illuminate\Support\Facades\Route;

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

// Route::get('/', function () {
//     return view('welcome');
// });


Route::namespace('Frontend')->group(function () {
    Route::get('/', [
        'uses'=>'SmartShopController@index',
        'as'=>'/'
    ]);
    Route::get('/product/details/{slug}',[
        'uses'=>'ProductController@showDetails',
        'as'=>'product.details'
    ]);
    Route::post('/cart/add', [
        'uses'=>'CartController@addCart',
        'as'=>'cart.add'
    ]);
    Route::get('/cart',[
        'uses'=>'CartController@showcart',
        'as'=>'cart.show'
    ]);

    Route::post('/cart/remove',[
        'uses'=>'CartController@removeCart',
        'as'=>'cart.remove'
    ]);

    Route::get('/cart/clear', [
        'uses'=>'CartController@clearCart',
        'as'=>'cart.clear'
    ]);
});
