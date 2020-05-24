@extends('frontend.master')
@section('main_content')
   <div class="container">
       <div class="row">
           <div class="col-12">
                <h3 class="text-center text-primary pt-5">Registration</h3>
           </div>
           <div class="col-12">
                <p class="text-primary pt-5">
                    @include('frontend.partials._message')
                </p>
           </div>

           <div class="col-12">
                 <form action="{{route('register.process')}}" method="POST">
                        @csrf
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="inputName">Full name</label>
                                <input type="text" name="name" class="form-control" id="inputName" placeholder="Full name" value="{{old('name')}}">
                            </div>

                            <div class="form-group col-md-6">
                                <label for="inputEmail">Email</label>
                                <input type="Email" name="email" class="form-control" id="inputEmail" placeholder="Email" value="{{old('email')}}">
                            </div>

                            <div class="form-group col-md-6">
                                <label for="phoneNumber">Phone number</label>
                                <input type="text" name="phone_number" class="form-control" id="phoneNumber" placeholder="Phone number" value="{{old('phone_number')}}">
                            </div>

                            <div class="form-group col-md-6">
                                <label for="password">Password</label>
                                <input type="password" name="password" class="form-control" id="password" placeholder="Password" value="{{old('password')}}">
                            </div>

                            <div class="form-group col-md-6">
                                <label for="passwordConfirm">Confirm password</label>
                                <input type="Password" name="password_confirmation" class="form-control" id="passwordConfirm" placeholder="Confirm password">
                            </div>
                        </div>
                        <button type="submit" class="btn btn-primary">Sign in</button>
                    </div>
                </form>
                {{-- <div class="col-md-6 pt-5">
                     <a href="{{route('facebook.login')}}" class="btn btn-primary btn-block">Create account with facebook</a>
                </div> --}}
           </div>
       </div>
   </div>
@endsection
