<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Exception;
use Illuminate\Http\Request;

class CartController extends Controller
{
    public function addCart(Request $request){
        try{
            $request->validate([
                'product_id' => 'required|numeric',
            ]);
        }catch(Exception $e){
            return redirect()->route('/');
        }

        $cart = [];

        $product = Product::findOrFail($request->input('product_id'));
        $unit_price = ($product->sale_price != null && $product->sale_price > 0) ? $product->sale_price : $product->price;

        $cart = session()->has('cart') ? session()->get('cart') : [];
        if (array_key_exists($product->id, $cart)) {
            $cart[$product->id]['quantity']++;
            $cart[$product->id]['total_price'] = $cart[$product->id]['quantity'] * $cart[$product->id]['unit_price'];
        } else {
            $cart[$product->id] = [
                'name' => $product->name,
                'quantity' => 1,
                'unit_price' => $unit_price,
                'total_price' => $unit_price,
            ];
        }

        session(['cart'=>$cart]);
        session()->flash('message', 'Product added to cart successfully');
        return redirect()->route('/');
    }

    public function showcart(){
        $data = [];
        $data['cart'] = session()->has('cart') ? session()->get('cart') : [];
        $data['grant_total']=array_sum(array_column($data['cart'], 'total_price'));
        return view('frontend.cart.show_cart', $data);
    }

    public function removeCart(Request $request){
        try{
            $request->validate([
                'product_id' => 'required|numeric',
            ]);
        }catch(Exception $e){
            return redirect()->route('cart.show');
        }
        $cart = session()->has('cart') ? session()->get('cart') : [];

        unset($cart[$request->input('product_id')]);
        session(['cart'=>$cart]);
        session()->flash('message', 'Item removed from cart successfuly');
        return redirect()->back();
    }
    public function clearCart(){
        session(['cart'=>[] ]);
        return redirect()->route('/');
    }
}
