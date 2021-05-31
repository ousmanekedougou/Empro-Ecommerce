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



							<header class="page-header">
								<h1>
									Connectez-vous à votre compte
								</h1>
							</header>
							<section id="content" class="page-content card card-block">
								<section class="login-form">
									<form id="login-form" action="{{route('login')}}" method="post">
										@csrf
										<section>
											<input type="hidden" name="back" value="my-account">
											<div class="form-group row ">
												<label class="col-md-3 form-control-label required">
													Email
												</label>
												<div class="col-md-6">
													  <input class="form-control @error('email') is-invalid @enderror" value="{{ old('email') }}" name="email" type="email"  autocomplete="email">
														@error('email')
															<div class="invalid-feedback" role="alert">
																<strong>{{ $message }}</strong>
															</div>
														@enderror
												</div>

												<div class="col-md-3 form-control-comment">
												</div>
											</div>

											<div class="form-group row ">
												<label class="col-md-3 form-control-label required">
													Password
												</label>
												<div class="col-md-6">
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

												<div class="col-md-3 form-control-comment">
												</div>
											</div>

											<div class="forgot-password">
												<a href="password-recovery.html" rel="nofollow">
													Forgot your password?
												</a>
											</div>
										</section>
										
										<footer class="form-footer text-sm-center clearfix">
											<input type="hidden" name="submitLogin" value="1">

											<button id="submit-login" class="btn btn-primary" data-link-action="sign-in"
												type="submit" class="form-control-submit">
												Se Connecter
											</button>

										</footer>


									</form>


								</section>
								<hr />



								<div class="no-account">
									<a href="loginca5f.html?create_account=1" data-link-action="display-register-form">
										No account? Create one here
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
