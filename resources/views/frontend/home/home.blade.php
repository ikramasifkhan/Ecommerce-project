@extends('frontend.master')

@section('main_content')
@include('frontend.partials._banner')

  <div class="album py-5 bg-light">
    <div class="container">
      <div class="row">
          @foreach ($products as $product)
                <div class="col-md-4">
                    <div class="card mb-4 shadow-sm">
                        <a href="{{route('product.details', $product->slug)}}">
                        <img src="{{$product->getFirstMedia('products')}}" alt="{{$product->name}}">
                        </a>
                        <div class="card-body">
                            <p class="card-text"><a href="{{route('product.details', $product->slug)}}" class="text-dark" style="text-decoration: none">{{$product->name}}</a></p>
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="btn-group">
                                    <button type="button" class="btn btn-sm btn-outline-secondary">Add to cart</button>
                                </div>
                                <strong class="text-muted">BTD {{$product->price}}</strong>
                            </div>
                        </div>
                    </div>
                </div>
            @endforeach
             </div>
             <small class="text-dark">{{$products->links() }}</small>
        </div>
@endsection
