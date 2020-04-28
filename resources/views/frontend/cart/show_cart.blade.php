@extends('frontend.master')

@section('main_content')
   <div class="container">
       <div class="row">
           <div class="col-12">
                <h6 class="text-center text-success pt-5">
                    @if(session()->has('message'))
                        {{session()->get('message')}}
                    @endif
                </h6>
           </div>
           @if(!empty($cart))
           <div class="col-12">
                <h3 class="text-center text-dark pt-5">Show your cart</h3>
           </div>
           <div class="col-12">
               <table class="table table-bordered">
                   <tr>
                       <th>Serial no</th>
                       <th>Product</th>
                       <th>Quantity</th>
                       <th>Unit price</th>
                       <th>Total price per item</th>
                       <th>Action</th>
                   </tr>
                   <tbody>
                       @php $i=1; @endphp
                       @foreach ($cart as $key => $product)
                           <tr>
                                <td>{{$i++}}</td>
                                <td>{{$product['name']}}</td>
                                <td>{{$product['quantity']}}</td>
                                <td>{{$product['unit_price']}}</td>
                                <td>{{$product['total_price']}}</td>
                                <td>
                                    <form action="{{route('cart.remove')}}" method="post">
                                        @csrf
                                        <input type="hidden" value="{{$key}}" name="product_id">
                                        <button type="submit" class="btn btn-danger btn-sm">Remove</button>
                                    </form>
                                </td>
                           </tr>
                       @endforeach
                       <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><strong>Grant total</strong></td>
                            <td>{{$grant_total}}</td>
                            <td>
                                <a href="{{route('cart.clear')}}">Clear cart</a>
                            </td>
                         </tr>
                   </tbody>
               </table>
           </div>
           @else
                <div>
                    <h3 class="text-danger text-center"> No product added to cart yet</h3>
                </div>
           @endif

       </div>
   </div>
@endsection
