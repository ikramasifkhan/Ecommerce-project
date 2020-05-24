@extends('frontend.master')
@section('main_content')
   <div class="container">
       <div class="row">
           <div class="col-12">
                <h3 class="text-center text-primary pt-5">Login from</h3>
           </div>
           <div class="col-12">
                <p class="text-primary pt-5">
                    @include('frontend.partials._message')
                </p>
           </div>

           <div class="offset-4 col-6">
                 <form action="{{route('login.process')}}" method="POST">
                        @csrf
                            <div class="form-group col-md-12">
                                <label for="inputEmail">Email</label>
                                <input type="Email" name="email" class="form-control" id="inputEmail" placeholder="Email" value="{{old('email')}}">
                            </div>

                            <div class="form-group col-md-12">
                                <label for="password">Password</label>
                                <input type="password" name="password" class="form-control" id="password" placeholder="Password" value="{{old('password')}}">
                            </div>
                            <div class="form-group col-md-6">
                                <button type="submit" class="btn btn-primary">login</button>
                            </div>
                </form>
                {{-- <div class="col-md-6 pt-5">
                     <a href="{{route('facebook.login')}}" class="btn btn-primary btn-block">Create account with facebook</a>
                </div> --}}
           </div>
       </div>
   </div>
@endsection
