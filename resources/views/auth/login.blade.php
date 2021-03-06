


{{--
<!doctype html>
<html lang="en">
	<head>
        
        <meta charset="utf-8" />
        <title>Login | Skote</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta content="Premium Multipurpose Admin & Dashboard Template" name="description" />
        <meta content="Themesbrand" name="author" />
        <!-- App favicon -->
        <link rel="shortcut icon" href="{{asset('admin/assets/images/favicon.ico')}}">

        <!-- Bootstrap Css -->
        <link href="{{asset('admin/assets/css/bootstrap.min.css')}}" id="bootstrap-style" rel="stylesheet" type="text/css" />
        <!-- Icons Css -->
        <link href="{{asset('admin/assets/css/icons.min.css')}}" rel="stylesheet" type="text/css" />
        <!-- App Css-->
        <link href="{{asset('admin/assets/css/app.min.css')}}" id="app-style" rel="stylesheet" type="text/css" />

    </head>

    <body>
        <div class="account-pages my-5 pt-sm-5">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-8 col-lg-6 col-xl-5">
                        <div class="card overflow-hidden">
                            <div class="bg-primary bg-soft">
                                <div class="row">
                                    <div class="col-7">
                                        <div class="text-primary p-4">
                                            <h5 class="text-primary">Bienvenue !</h5>
                                            <p>Se connecter sur votre compte</p>
                                        </div>
                                    </div>
                                    <div class="col-5 align-self-end">
                                        <img src="{{asset('admin/assets/images/profile-img.png')}}" alt="" class="img-fluid">
                                    </div>
                                </div>
                            </div>
                            <div class="card-body pt-0"> 
                                <div class="auth-logo">
                                    <a href="{{ route('home.index') }}" class="auth-logo-light">
                                        <div class="avatar-md profile-user-wid mb-4">
                                            <span class="avatar-title rounded-circle bg-light">
                                                <img src="{{asset('admin/assets/images/logo-light.svg')}}" alt="" class="rounded-circle" height="34">
                                            </span>
                                        </div>
                                    </a>

                                    <a href="{{ route('home.index') }}" class="auth-logo-dark">
                                        <div class="avatar-md profile-user-wid mb-4">
                                            <span class="avatar-title rounded-circle bg-light">
                                                <img src="{{asset('admin/assets/images/logo.svg')}}" alt="" class="rounded-circle" height="34">
                                            </span>
                                        </div>
                                    </a>
                                </div>
                                <div class="p-2">
                                    <form class="form-horizontal" action="{{ route('login') }}" method="post">
										@csrf
                                        <div class="mb-3">
                                            <label for="username" class="form-label">Adresse email</label>
                                            <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email" autofocus>
											@error('password')
												<span class="invalid-feedback" role="alert">
													<strong>{{ $message }}</strong>
												</span>
											@enderror
										</div>
                
                                        <div class="mb-3">
                                            <label class="form-label">Mot de passe</label>
                                            <div class="input-group auth-pass-inputgroup">
												<input type="password" id="password" name="password" class="form-control @error('password') is-invalid @enderror" placeholder="Enter password" aria-label="Password" aria-describedby="password-addon">
                                                <button class="btn btn-light"  type="button" id="password-addon"><i class="mdi mdi-eye-outline"></i></button>

												@error('password')
													<span class="invalid-feedback" role="alert">
														<strong>{{ $message }}</strong>
													</span>
												@enderror
                                            </div>
                                        </div>

                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" id="remember-check">
                                            <label class="form-check-label" for="remember-check">
                                                Se souvenire
                                            </label>
                                        </div>
                                        
                                        <div class="mt-3 d-grid">
                                            <button class="btn btn-primary waves-effect waves-light" type="submit">Se Connecter</button>
                                        </div>
            
                                        <div class="mt-4 text-center">
                                            <h5 class="font-size-14 mb-3">Se connecter avec</h5>
            
                                            <ul class="list-inline">
                                                <li class="list-inline-item">
                                                    <a href="javascript::void()" class="social-list-item bg-primary text-white border-primary">
                                                        <i class="mdi mdi-facebook"></i>
                                                    </a>
                                                </li>
                                                <li class="list-inline-item">
                                                    <a href="javascript::void()" class="social-list-item bg-info text-white border-info">
                                                        <i class="mdi mdi-twitter"></i>
                                                    </a>
                                                </li>
                                                <li class="list-inline-item">
                                                    <a href="javascript::void()" class="social-list-item bg-danger text-white border-danger">
                                                        <i class="mdi mdi-google"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>

                                        <div class="mt-4 text-center">
                                            <a href="" class="text-muted"><i class="mdi mdi-lock me-1"></i> Mot de passe oublier ?</a>
                                        </div>
                                    </form>
                                </div>
            
                            </div>
                        </div>
                        <div class="mt-5 text-center">
                            
                            <div>
                                <p>Vous n'avez pas de compte? <a href="{{ route('client.register') }}" class="fw-medium text-primary"> Creer votre compte </a> </p>
                                <p>?? <script>document.write(new Date().getFullYear())</script> B-SHOP. Develope <i class="mdi mdi-heart text-danger"></i> par EMPRO</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <!-- end account-pages -->

        <!-- JAVASCRIPT -->
        <script src="{{asset('admin/assets/libs/jquery/jquery.min.js')}}"></script>
        <script src="{{asset('admin/assets/libs/bootstrap/js/bootstrap.bundle.min.js')}}"></script>
        <script src="{{asset('admin/assets/libs/metismenu/metisMenu.min.js')}}"></script>
        <script src="{{asset('admin/assets/libs/simplebar/simplebar.min.js')}}"></script>
        <script src="{{asset('admin/assets/libs/node-waves/waves.min.js')}}"></script>
        
        <!-- App js -->
        <script src="{{asset('admin/assets/js/app.js')}}"></script>
    </body>
</html>
--}}




@extends('user.layouts.app',['title' => 'acceuil'])
    @section('extra-meta')
    <meta name="csrf-token" content="{{ csrf_token() }}">
    @endsection
    @section('body')
       <body itemscope itemtype="http://schema.org/WebPage" id="authentication"  class="lang-en country-us currency-usd layout-full-width page-authentication tax-display-disabled page-customer-account">
    @endsection

   
	@section('main-content')

	@section('extra-script')
	<script src="https://js.stripe.com/v3/"></script>
	@endsection


	<div id="wrapper">

		<div class="container">
			<div class="row">



				<div id="content-wrapper" class="col-xs-12">



					<section id="main">



						<header class="page-header" >
							<h1 style="text-align: center;">
								Connectez-vous ?? votre compte
							</h1>
						</header>
						<section id="content" class="page-content card card-block">
							<section class="login-form">
								<form id="login-form" action="{{route('login')}}" method="post">
									@csrf
									<div class="row">
										<div class="col-md-4"></div>
										<div class="col-md-4">
                                            <section>
                                                <div class="form-group row ">
                                                    <div class="col-md-12">
                                                        Email
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
                                                        Password
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
                                                </div>

                                                <div class="forgot-password">
                                                    <a href="password-recovery.html" rel="nofollow">
                                                        Mot de passe oubli???
                                                    </a>
                                                </div>

                                                <footer class="form-footer text-sm-center clearfix">
                                                    <input type="hidden" name="submitLogin" value="1">

                                                    <button id="submit-login" class="btn btn-primary" data-link-action="sign-in"
                                                        type="submit" class="form-control-submit">
                                                        Se Connecter
                                                    </button>

                                                </footer>
                                            </section>
										</div>
										<div class="col-md-4"></div>
									</div>
									
									
								


								</form>


							</section>
							<hr />



							<div class="no-account">
								<a href="{{ route('register') }}" data-link-action="display-register-form">
									Pas de compte? Cr??ez-en un ici
								</a>
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