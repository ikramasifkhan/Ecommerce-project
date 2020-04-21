<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function showDetails($slug){
        $product = Product::where('slug', $slug)->where('publication_status',1)->first();

        if($product==null){
           return redirect()->reoute('/');
        }
        return view('frontend.product.show_details', ['product'=>$product]);
    }
}
