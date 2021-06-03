@extends('user.layouts.app',['title' => 'acceuil'])
    @section('extra-meta')
    <meta name="csrf-token" content="{{ csrf_token() }}">

    @endsection
    @section('body')
       <body itemscope itemtype="http://schema.org/WebPage" id="authentication"  class="lang-en country-us currency-usd layout-full-width page-authentication tax-display-disabled page-customer-account">
    @endsection

   
@section('main-content')

@section('extra-script')
<style>
    .invalid-feedback{
        color: red;
    }
    .error-indicatif{
        font-size: 12px;
    }
</style>
 <script src="https://js.stripe.com/v3/"></script>
@endsection


<div id="wrapper">

			<div class="container">
				<div class="row">



					<div id="content-wrapper" class="col-xs-12">



						<section id="main">



							<header class="page-header">
								<h1 style="text-align: center;">
									Creer votre compte client
								</h1>
							</header>




							<section id="content" class="page-content card card-block">
                                <div class="row">
                                    <div class="col-md-2"></div>
                                    <div class="col-md-8">
                                        <section class="login-form">
                                            <form id="login-form" action="{{route('client.store')}}" method="post">
                                                @csrf
                                                <section>
                                                    <div class="form-group row ">
                                                        <div class="col-md-6">
                                                            <label> Votre nomm complet </label>
                                                            <input class="form-control @error('name') is-invalid @enderror" value="{{ old('name') }}" name="name" type="text"  autocomplete="name">
                                                            @error('name')
                                                                <div class="invalid-feedback" role="alert">
                                                                    <strong>{{ $message }}</strong>
                                                                </div>
                                                            @enderror
                                                        </div>
                                                        <div class="col-md-6">
                                                            <label> Votre adress Email </label>
                                                             <input class="form-control @error('email') is-invalid @enderror" value="{{ old('email') }}" name="email" type="email"  autocomplete="email">
                                                            @error('email')
                                                                <div class="invalid-feedback" role="alert">
                                                                    <strong>{{ $message }}</strong>
                                                                </div>
                                                            @enderror
                                                        </div>
                                                    </div>

                                                    <div class="form-group row ">
                                                        <div class="col-md-12">
                                                        <div class="row d-flex">
                                                            <div class="col-md-2">
                                                                <label>Indicatif </label>
                                                                   <input class="form-control @error('indicatif') is-invalid @enderror" value="{{ old('indicatif') }}" name="indicatif" type="number"  autocomplete="indicatif" placeholder="+221">
                                                                    @error('indicatif')
                                                                        <div class="invalid-feedback error-indicatif" role="alert">
                                                                            <strong>{{ $message }}</strong>
                                                                        </div>
                                                                    @enderror
                                                            </div>
                                                            <div class="col-md-5">
                                                                <label> Votre  numero de telephone </label>
                                                                <input class="form-control @error('phone') is-invalid @enderror" value="{{ old('phone') }}" name="phone" type="number"  autocomplete="phone" placeholder="( Exp : 77 000 00 00 )">
                                                                    @error('phone')
                                                                        <div class="invalid-feedback" role="alert">
                                                                            <strong>{{ $message }}</strong>
                                                                        </div>
                                                                    @enderror
                                                            </div>
                                                             <div class="col-md-5">
                                                                 <label> Votre  adresse </label>
                                                                    <input class="form-control @error('address') is-invalid @enderror" value="{{ old('address') }}" name="address" type="text"  autocomplete="address" placeholder="">
                                                                    @error('address')
                                                                        <div class="invalid-feedback" role="alert">
                                                                            <strong>{{ $message }}</strong>
                                                                        </div>
                                                                    @enderror
                                                            </div>
                                                        </div>
                                                            
                                                        </div>
                                                    </div>

                                                    <div class="form-group row ">
                                                        <div class="col-md-6">
                                                            <label> Password </label>
                                                            <div class="input-group js-parent-focus">
                                                                <input class="form-control js-child-focus js-visible-password @error('password') is-invalid @enderror" value="{{ old('password') }}" id="password"
                                                                    name="password" type="password" value="" pattern=".{5,}" >
                                                                <span class="input-group-btn">
                                                                    <button class="btn" type="button"
                                                                        data-action="show-password" data-text-show="Afficher"
                                                                        data-text-hide="Cacher">
                                                                        Afficher
                                                                    </button>
                                                                </span>
                                                               
                                                            </div>
                                                              @error('password')
                                                                    <div class="invalid-feedback" role="alert">
                                                                        <strong>{{ $message }}</strong>
                                                                    </div>
                                                                @enderror
                                                        </div>
                                                         <div class="col-md-6">
                                                            <label> Confirmation Password </label>
                                                            <div class="input-group js-parent-focus">
                                                                <input class="form-control js-child-focus js-visible-password @error('password') is-invalid @enderror" value="{{ old('password-confirm') }}"
                                                                    name="password_confirmation" id="password-confirm" type="password" pattern=".{5,}"
                                                                    >
                                                                <span class="input-group-btn">
                                                                    <button class="btn" type="button"
                                                                        data-action="show-password" data-text-show="Afficher"
                                                                        data-text-hide="Cacher">
                                                                        Afficher
                                                                    </button>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="row">
                                                        <div class="col-lg-12">
                                                            <footer class="form-footer text-sm-center clearfix">

                                                                <div class="row">
                                                                    <div class="col-lg-6">
                                                                        <button id="submit-login" class="btn btn-success btn-block" data-link-action="sign-in"
                                                                            type="submit" class="form-control-submit">
                                                                            S'inscrire
                                                                        </button>
                                                                    </div>
                                                                    <div class="col-lg-6">
                                                                        <button class="btn btn-info btn-block" data-link-action="sign-in"
                                                                            type="reset" class="form-control-reset">
                                                                            Reinitialiser
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                                
                                                                 

                                                            </footer>
                                                        </div>
                                                    </div>

                                                    <!-- <div class="form-group row">
                                                        <div class="forgot-password col-md-6">
                                                            <a href="password-recovery.html" rel="nofollow">
                                                                Forgot your password?
                                                            </a>
                                                        </div>
                                                    </div> -->
                                                </section>
                                                
                                            </form>
                                        </section>
                                    </div>
                                    <div class="col-2"></div>
                                </div>
								

							</section>



							<footer class="page-footer">

								<!-- Footer content -->

							</footer>


						</section>



					</div>



				</div>

			</div>


		</div>


@endsection
