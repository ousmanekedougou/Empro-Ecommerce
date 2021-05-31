@extends('user.layouts.app',['title' => 'acceuil'])

    @section('body')
<body itemscope itemtype="http://schema.org/WebPage" id="authentication"
	class="lang-en country-us currency-usd layout-full-width page-authentication tax-display-disabled page-customer-account">
    @endsection
    @section('main-content')
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">{{ __('Register') }}</div>

                    <div class="card-body">
                        <form method="POST" action="{{ route('register') }}">
                            @csrf

                            <div class="form-group row">
                                <label for="name" class="col-md-4 col-form-label text-md-right">{{ __('Name') }}</label>

                                <div class="col-md-6">
                                    <input id="name" type="text" class="form-control @error('name') is-invalid @enderror" name="name" value="{{ old('name') }}" required autocomplete="name" autofocus>

                                    @error('name')
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                    @enderror
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="email" class="col-md-4 col-form-label text-md-right">{{ __('E-Mail Address') }}</label>

                                <div class="col-md-6">
                                    <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email">

                                    @error('email')
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                    @enderror
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="password" class="col-md-4 col-form-label text-md-right">{{ __('Password') }}</label>

                                <div class="col-md-6">
                                    <input id="password" type="password" class="form-control @error('password') is-invalid @enderror" name="password" required autocomplete="new-password">

                                    @error('password')
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                    @enderror
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="password-confirm" class="col-md-4 col-form-label text-md-right">{{ __('Confirm Password') }}</label>

                                <div class="col-md-6">
                                    <input id="password-confirm" type="password" class="form-control" name="password_confirmation" required autocomplete="new-password">
                                </div>
                            </div>

                            <div class="form-group row mb-0">
                                <div class="col-md-6 offset-md-4">
                                    <button type="submit" class="btn btn-primary">
                                        {{ __('Register') }}
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

        <!-- <div id="wrapper">

			<div class="container">
				<div class="row">
					<div id="content-wrapper" class="col-xs-12">
						<section id="main">
							<header class="page-header">
								<h1>
									Creer votre compte
								</h1>
							</header>
							<section id="content" class="page-content card card-block">
								<section class="register-form">
									<p>Already have an account? <a href="login.html">Log in instead!</a></p>
									<form action="{{ route('register') }}" id="customer-form" class="js-customer-form" method="post">
                                        @csrf
										<section>
											<input type="hidden" name="id_customer" value="">
											<div class="form-group row ">
												<label class="col-md-3 form-control-label">
													Civilite
												</label>
												<div class="col-md-6 form-control-valign">
													<label class="radio-inline">
														<span class="custom-radio">
															<input name="genre" type="radio" value="1">
															<span></span>
														</span>
														Homme
													</label>
													<label class="radio-inline" style="margin-left: 15px;">
														<span class="custom-radio">
															<input name="genre" type="radio" value="2">
															<span></span>
														</span>
														Femme
													</label>
												</div>

												<div class="col-md-3 form-control-comment">


												</div>
											</div>
											<div class="form-group row ">
												<label class="col-md-3 form-control-label required">
													Votre prenom et  nom
												</label>
												<div class="col-md-6">
													    <input id="name" type="text" class="form-control @error('name') is-invalid @enderror" name="name" value="{{ old('name') }}" required autocomplete="name" autofocus>

                                                        @error('name')
                                                            <span class="invalid-feedback" role="alert">
                                                                <strong>{{ $message }}</strong>
                                                            </span>
                                                        @enderror
												</div>

												<div class="col-md-3 form-control-comment">
												</div>
											</div>
											
											<div class="form-group row ">
												<label class="col-md-3 form-control-label required">
													Votre adresse email
												</label>
												<div class="col-md-6">
                                                    <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email">

                                                    @error('email')
                                                        <span class="invalid-feedback" role="alert">
                                                            <strong>{{ $message }}</strong>
                                                        </span>
                                                    @enderror
												</div>

												<div class="col-md-3 form-control-comment">


												</div>
											</div>
											<div class="form-group row ">
												<label class="col-md-3 form-control-label required">
													Mot de passe
												</label>
												<div class="col-md-6">
													<div class="input-group js-parent-focus">
                                                           <input id="password" type="password" pattern=".{5,}" class="form-control js-child-focus js-visible-password @error('password') is-invalid @enderror" name="password" required autocomplete="new-password">

                                                            @error('password')
                                                                <span class="invalid-feedback" role="alert">
                                                                    <strong>{{ $message }}</strong>
                                                                </span>
                                                            @enderror
														<span class="input-group-btn">
															<button class="btn" type="button"
																data-action="show-password" data-text-show="Show"
																data-text-hide="Hide">
																Show
															</button>
														</span>
													</div>
												</div>

												<div class="col-md-3 form-control-comment">


												</div>
											</div>
                                            <div class="form-group row ">
												<label class="col-md-3 form-control-label required">
													Confirmer le mot de passe
												</label>
												<div class="col-md-6">
													<div class="input-group js-parent-focus">
                                                           <input id="password-confirm" type="password" pattern=".{5,}" class="form-control js-child-focus js-visible-password @error('password') is-invalid @enderror" name="password_confirmation" required autocomplete="new-password">

														<span class="input-group-btn">
															<button class="btn" type="button"
																data-action="show-password" data-text-show="Show"
																data-text-hide="Hide">
																Show
															</button>
														</span>
													</div>
												</div>

												<div class="col-md-3 form-control-comment">


												</div>
											</div>
											<div class="form-group row ">
												<label class="col-md-3 form-control-label">
													Birthdate
												</label>
												<div class="col-md-6">
													<input class="form-control" name="birthday" type="text" value=""
														placeholder="MM/DD/YYYY">
													<span class="form-control-comment">
														(E.g.: 05/31/1970)
													</span>
												</div>

												<div class="col-md-3 form-control-comment">

													Optional

												</div>
											</div>
											<div class="form-group row ">
												<label class="col-md-3 form-control-label">
												</label>
												<div class="col-md-6">
													<span class="custom-checkbox">
														<label>
															<input name="optin" type="checkbox" value="1">
															<span><i
																	class="material-icons rtl-no-flip checkbox-checked">&#xE5CA;</i></span>
															Receive offers from our partners
														</label>
													</span>
												</div>

												<div class="col-md-3 form-control-comment">


												</div>
											</div>
											<div class="form-group row ">
												<label class="col-md-3 form-control-label">
												</label>
												<div class="col-md-6">
													<span class="custom-checkbox">
														<label>
															<input name="newsletter" type="checkbox" value="1">
															<span><i
																	class="material-icons rtl-no-flip checkbox-checked">&#xE5CA;</i></span>
															Sign up for our newsletter<br><em>You may unsubscribe at any
																moment. For that purpose, please find our contact info
																in the legal notice.</em>
														</label>
													</span>
												</div>

												<div class="col-md-3 form-control-comment">


												</div>
											</div>
											<div class="form-group row ">
												<label class="col-md-3 form-control-label required">
												</label>
												<div class="col-md-6">
													<span class="custom-checkbox">
														<label>
															<input name="psgdpr" type="checkbox" value="1" required>
															<span><i
																	class="material-icons rtl-no-flip checkbox-checked">&#xE5CA;</i></span>
															I agree to the terms and conditions and the privacy policy
														</label>
													</span>
												</div>

												<div class="col-md-3 form-control-comment">


												</div>
											</div>

										</section>

										<footer class="form-footer clearfix">
											<input type="hidden" name="submitCreate" value="1">

											<button class="btn btn-primary form-control-submit float-xs-right"
												data-link-action="save-customer" type="submit">
												Save
											</button>

										</footer>


									</form>


								</section>


							</section>



							<footer class="page-footer">


							</footer>


						</section>



					</div>



				</div>

			</div>


		</div> -->
@endsection
