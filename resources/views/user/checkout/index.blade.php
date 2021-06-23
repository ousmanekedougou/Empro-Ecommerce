@extends('user.layouts.app',['title' => 'acceuil'])
    @section('extra-meta')
    <meta name="csrf-token" content="{{ csrf_token() }}">
    @endsection
    @section('body')
        <body itemscope itemtype="http://schema.org/WebPage" id="index category product cart"
        class="lang-en country-us currency-usd layout-full-width page-index tax-display-disabled">
    @endsection

   
@section('main-content')

@section('extra-script')
 <script src="https://js.stripe.com/v3/"></script>
@endsection

    



    	<aside id="notifications">
			<div class="container">



			</div>
		</aside>


		<div class="breadcrumb_container " data-depth="1">
			<div class="container">
				<nav data-depth="1" class="breadcrumb">
					<ol itemscope itemtype="http://schema.org/BreadcrumbList">


						<li itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">
							<a itemprop="item" href="index.html">
								<span itemprop="name">Home</span>
							</a>
							<meta itemprop="position" content="1">
						</li>


					</ol>
				</nav>
			</div>
		</div>


		<div id="wrapper">

			<div class="container">
				<div class="row">



					<div id="content-wrapper" class="col-xs-12">



						<section id="main">
							<div class="cart-grid row">

                                <div class="cart-grid-body col-xs-12 col-lg-3">
                                </div>

								<!-- Left Block: cart product informations & shpping -->
								<div class="cart-grid-body col-xs-12 col-lg-8">

									<!-- cart products detailed -->
									<div class="card cart-container">
										<div class="card-block">
											<h1 class="h1">Page de paiement</h1>
										</div>



										<div class="cart-overview js-cart" >
											<div class="row">
                                                <div class="col-md-6">
                                                    <form  action="{{ route('checkout.store') }}" method="post" id="payment-form" style="margin-top: 10px;">
                                                        @csrf
                                                        <div id="card-element" style="margin-bottom: 10px;">
                                                            <!-- Elements will create input elements here -->
                                                        </div>

                                                        <div class="row">
                                                            <label for="option" style="margin-right: 10px;"> <input type="radio" name="option" class="@error('option') is-invalid @enderror" value="{{ old('option') ?? 1 }} id
                                                            option"> Option de livraison </label>
                                                            <label for="option" style="margin-left: 10px;"> <input type="radio" name="option" class="@error('option') is-invalid @enderror" value="{{ old('option') ?? 2 }} id
                                                            option"> Souhaite recupere </label>
                                                            <p>
                                                                 @error('option')
                                                                    <span class="invalid-feedback" role="alert">
                                                                        <strong>{{ $message }}</strong>
                                                                    </span>
                                                                @enderror
                                                            </p>
                                                        </div>

                                                        <!-- We'll put the error messages in this element -->
                                                        <div id="card-errors" role="alert"></div>


                                                        <button class="btn btn-success" style="margin-top: 10px;" id="submit">Proceder au paiement de <strong>({{getPrice(Cart::total())}})</strong></button>
                                                    </form>
                                                </div>
                                            </div>
										</div>


									</div>


									<a class="label" href="{{ route('product.index') }}">
										<i class="material-icons">chevron_left</i>Continuer vos achats
									</a>


									<!-- shipping informations -->



								</div>

								<!-- Right Block: cart subtotal & cart total -->
								<div class="cart-grid-right col-xs-12 col-lg-1">
									<!-- <div class="card cart-summary">







										<div class="cart-detailed-totals">

											<div class="card-block">
												<div class="cart-summary-line" id="cart-subtotal-products">
													<span class="label js-subtotal">
														0 items
													</span>
													<span class="value">$0.00</span>
												</div>
												<div class="cart-summary-line" id="cart-subtotal-shipping">
													<span class="label">
														Shipping
													</span>
													<span class="value">Free</span>
													<div><small class="value"></small></div>
												</div>
											</div>



											<hr class="separator">

											<div class="card-block">
												<div class="cart-summary-line cart-total">
													<span class="label">Total (tax excl.)</span>
													<span class="value">$0.00</span>
												</div>

												<div class="cart-summary-line">
													<small class="label">Taxes</small>
													<small class="value">$0.00</small>
												</div>
											</div>

											<hr class="separator">
										</div>




										<div class="checkout text-sm-center card-block">
											<button type="button" class="btn btn-primary disabled"
												disabled>Checkout</button>
										</div>


									</div> -->
								</div>

							</div>
						</section>




					</div>



				</div>

			</div>


		</div>

@endsection

@section('footersection')
    <script>
        var stripe = Stripe('pk_test_TYooMQauvdEDq54NiTphI7jx');
        var elements = stripe.elements();
        var style = {
            base: {
            color: "#32325d",
            fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
            fontSmoothing: "antialiased",
            fontSize: "16px",
            "::placeholder": {
                color: "#aab7c4"
            }
            },
            invalid: {
            color: "#fa755a",
            iconColor: "#fa755a"
            }
        };
        var card = elements.create("card", { style: style });
        card.mount("#card-element");

        // Affichage des herreures
        card.on('change', ({error}) => {
            let displayError = document.getElementById('card-errors');
            if (error) {
                displayError.classList.add('alert','alert-warning');
                displayError.textContent = error.message;
            } else {
                displayError.classList.remove('alert','alert-warning');
                displayError.textContent = '';
            }
        });

        // La partie de la soumission

        var submitButton = document.getElementById('submit');  
        submitButton.addEventListener('click', function(ev) {
        ev.preventDefault();
        submitButton.desabled = true;
        // If the client secret was rendered server-side as a data-secret attribute
        // on the <form> element, you can retrieve it here by calling `form.dataset.secret`
        stripe.confirmCardPayment("{{$clientSecret}}", {
            payment_method: {
                card: card
            }
        }).then(function(result) {
            if (result.error) {
                // Show error to your customer (e.g., insufficient funds)
                submitButton.desabled = false;
                console.log(result.error.message);
                } else {
                    // The payment has been processed!
                    if (result.paymentIntent.status === 'succeeded') {
                        var paymentIntent = result.paymentIntent;
                        var token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
                        var form = document.getElementById('payment-form');
                        var url = form.action;
                       

                        fetch
                        (
                            url,
                            {
                                headers: {
                                    "Content-Type": "application/json",
                                    "Accept": "application/json, text-plain, */*",
                                    "X-Requested-With": "XMLHttpRequest",
                                    "X-CSRF-TOKEN": token
                                },
                                method:'POST',
                                body: JSON.stringify({
                                    paymentIntent: paymentIntent
                                })
                            }
                        ).then((data) => {
                            if (data.status == 400) {
                                 var redirect = '/product';
                            }else{
                                 var redirect = '/checkout/create';
                            }
                            // console.log(data);
                            // form.reset();
                            window.location.href = redirect;
                        }).catch((error) => {
                            console.log(error);
                        })
                        
                        console.log(result.paymentIntent);
                    }
                }
            });
        });
    </script>
@endsection

