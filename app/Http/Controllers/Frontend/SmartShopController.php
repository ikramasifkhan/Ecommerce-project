<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;

class SmartShopController extends Controller
{
    public function index(){
       $products = Product::select(['id', 'name', 'slug', 'price', 'sale_price'])
            ->where('publication_status', 1)
            ->paginate(9);
        return view('frontend.home.home', ['products'=>$products]);
    }
}
