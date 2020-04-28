@extends('frontend.master')

@section('main_content')
<div class="container">

    <!-- Heading Row -->
    <div class="row align-items-center my-5">
      <div class="col-lg-7">
        <img class="img-fluid rounded mb-4 mb-lg-0" src="http://placehold.it/900x400" alt="">
      </div>
      <!-- /.col-lg-8 -->
      <div class="col-lg-5">
        <h3 class="font-weight-light">{{$product->name}}</h3>
        <p>{{$product->description}}</p>
        <p><strong>Price: {{$product->price}} tk</strong></p>
        <form action="{{route('cart.add')}}" method="POST">
            @csrf
            <input type="hidden" value="{{$product->id}}" name="product_id">
             <button type="submit" class="btn btn-sm btn-outline-secondary">Add to cart</button>
        </form>
      </div>
      <!-- /.col-md-4 -->
    </div>
  </div>

@endsection
