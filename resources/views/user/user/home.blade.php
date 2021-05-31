@extends('user.layouts.app',['title' => 'acceuil'])
	@section('extra-meta')
    	<meta name="csrf-token" content="{{ csrf_token() }}">
    @endsection

	@section('head')
		<!-- <link rel="stylesheet" href="{{asset('user/css/card-bootstrap/cart-bootstrap.min.css')}}" type="text/css" 	media="all">
		<link rel="stylesheet" href="{{asset('user/css/card-bootstrap/fontawsom.min.css')}}" type="text/css" 	media="all"> -->
		<link rel="stylesheet" href="{{asset('user/css2/mb-pro.min.css')}}" type="text/css" 	media="all"> 
		<link rel="stylesheet" href="{{asset('user/css2/bootstrap.min.css')}}" type="text/css" 	media="all"> 
		<link rel="stylesheet" href="{{asset('user/css2/all.css')}}" type="text/css" 	media="all"> 
		<style>
			.boutton-variante{
			   font-size: 1rem;
				line-height: 1.5;
				text-align: left;
				font-family: Roboto,sans-serif;
				color: #4f4f4f;
				word-wrap: break-word;
				font-weight: 300;
				box-sizing: border-box;
				width: 100%!important;
				margin-bottom: 0!important;
				border: 1px solid #ced4da;
				border-radius: .25rem;
			}
			.boutton-variante .ajout{
				    word-wrap: break-word;
					box-sizing: border-box;
					border-radius: 0;
					font-family: inherit;
					font-size: inherit;
					line-height: inherit;
					overflow: visible;
					text-transform: none;
					-webkit-appearance: none;
					background-color: transparent;
					border: none;
					-webkit-box-align: center;
					align-items: center;
					-webkit-box-pack: center;
					justify-content: center;
					cursor: pointer;
					margin: 0;
					position: relative;
					width: 2.5rem;
					height: .7rem;
					padding-left: 10px;
			}
			.boutton-variante .input-number{
			  word-wrap: break-word;
			box-sizing: border-box;
			margin: 0;
			font-family: inherit;
			line-height: inherit;
			overflow: visible;
			-moz-appearance: textfield;
			text-align: center;
			max-width: 3rem;
			padding: .5rem;
			border: 1px solid #ced4da;
			border-width: 0 1px;
			font-size: 1rem;
			height: 2rem;
			color: #495057;
			}
			.boutton-variante .input-number::-webkit-outer-spin-button,
			.boutton-variante .input-number::-webkit-inner-spin-button{
				-webkit-appearance: none;
			}
			.card-body-header h5{
				padding: 10px 5px;
				background-color: silver;
				border-radius: 8px;
			}
		</style>
	@endsection

	@section('body')
	<body itemscope itemtype="http://schema.org/WebPage" id="cart"
	class="lang-en country-us currency-usd layout-full-width page-cart tax-display-disabled cart-empty">
    @endsection


	@section('main-content')



		 <!--Main layout-->
  <main>
    <div class="container">

			<div class="panier">
					<!--Section: Block Content-->
				<section class="mt-5 mb-4 ">

					<!--Grid row-->
					<div class="row">
							<!--Grid column-->
						<div class="col-lg-3">
							<div class="card mb-4">
								<div class="card-body">

									<h5 class="mb-3">The total amount of</h5>

									<ul class="list-group list-group-flush">
									<li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
										Temporary amount
										<span>$53.98</span>
									</li>
									<li class="list-group-item d-flex justify-content-between align-items-center px-0">
										Shipping
										<span>Gratis</span>
									</li>
									<li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
										<div>
										<strong>The total amount of</strong>
										<strong>
											<p class="mb-0">(including VAT)</p>
										</strong>
										</div>
										<span><strong>$53.98</strong></span>
									</li>
									</ul>

									<button type="button" class="btn btn-primary btn-block waves-effect waves-light">go to
									checkout</button>

								</div>
							</div>

							<div class="card mb-4">
								<div class="card-body">

									<a class="dark-grey-text d-flex justify-content-between" data-toggle="collapse" href="#collapseExample"
									aria-expanded="false" aria-controls="collapseExample">
									Add a discount code (optional)
									<span><i class="fas fa-chevron-down pt-1"></i></span>
									</a>

									<div class="collapse" id="collapseExample">
									<div class="mt-3">
										<div class="md-form md-outline mb-0">
										<input type="text" id="discount-code" class="form-control font-weight-light"
											placeholder="Enter discount code">
										</div>
									</div>
									</div>
								</div>
							</div>

						</div> 
						<!--Grid column-->
						<!--Grid column-->
						<div class="col-lg-8">

							<!-- Card -->
							@foreach($orders as $order)
							<div class="card wish-list mb-4">
								<div class="card-body">

									<div class="card-body-header">
										<h5 class="mb-4">Votre Commamnde du {{$order->payment_created_at}} (<span>2</span> produits) </h5>
									</div>

									@foreach(unserialize($order->products) as $product)
										<div class="row mb-4">
											<div class="col-md-5 col-lg-3 col-xl-3">
												<div class="view zoom overlay z-depth-1 rounded mb-3 mb-md-0">
													<img class="img-fluid w-100"
														src="{{ $product[0] }}" alt="Sample">
													<a href="#!">
														<div class="mask waves-effect waves-light">
														<img class="img-fluid w-100"
															src="{{ $product[0] }}">
														<div class="mask rgba-black-slight waves-effect waves-light"></div>
														</div>
													</a>
												</div>
											</div>
											
											<div class="col-md-7 col-lg-9 col-xl-9">
												<div>
													<div class="d-flex justify-content-between">
														<div>
															<h6>{{ $product[1] }}</h6>
															<p class="mb-3 text-muted text-lowercase small">{{ $product[2] }}</p>
															<p class="mb-2 text-muted text-lowercase small">Categories:
															</p>
														</div>
														<div>
															<div class="">
																<!-- <span>{{ $product[3] }}</span> -->
															</div>
															<small id="passwordHelpBlock" class="form-text text-muted text-center">
																{{ $product[3] }} unite(s)
															</small>
														</div>
													</div>
													<div class="d-flex justify-content-between align-items-center">
														<div>
															<a href="#!" style="opacity: 0;" type="button" class="card-link-secondary small text-uppercase mr-3"><i
																class="fas fa-trash-alt mr-1"></i> Retirer </a>
																
															<a href="#!" style="opacity: 0;" type="button" class="card-link-secondary small text-uppercase"><i
																class="fas fa-heart mr-1"></i> Move to wish list </a>
														</div>
														<p class="mb-0"><span><strong>{{ getPrice($product[4]) }}</strong></span></p>
													</div>
												</div>
											</div>
										</div>
									<hr class="mb-4">
									@endforeach
									<!-- <div class="row mb-4">
										<div class="col-md-5 col-lg-3 col-xl-3">
											<div class="view zoom overlay z-depth-1 rounded mb-3 mb-md-0">
											<img class="img-fluid w-100"
												src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13a.jpg" alt="Sample">
											<a href="#!">
												<div class="mask waves-effect waves-light">
												<img class="img-fluid w-100"
													src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13.jpg">
												<div class="mask rgba-black-slight waves-effect waves-light"></div>
												</div>
											</a>
											</div>
										</div>
										<div class="col-md-7 col-lg-9 col-xl-9">
											<div>
											<div class="d-flex justify-content-between">
												<div>
												<h5>Red hoodie</h5>
												<p class="mb-3 text-muted text-uppercase small">Hoodie - red</p>
												<p class="mb-2 text-muted text-uppercase small">Color: red</p>
												<p class="mb-3 text-muted text-uppercase small">Size: M</p>
												</div>
												<div>
												<div class="def-number-input number-input safari_only mb-0 w-100">
													<button onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
													class="minus"></button>
													<input class="quantity" min="0" name="quantity" value="1" type="number">
													<button onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
													class="plus"></button>
												</div>
												</div>
											</div>
											<div class="d-flex justify-content-between align-items-center">
												<div>
												<a href="#!" type="button" class="card-link-secondary small text-uppercase mr-3"><i
													class="fas fa-trash-alt mr-1"></i> Remove item </a>
												<a href="#!" type="button" class="card-link-secondary small text-uppercase"><i
													class="fas fa-heart mr-1"></i> Move to wish list </a>
												</div>
												<p class="mb-0"><span><strong>$35.99</strong></span></p>
											</div>
											</div>
										</div>
									</div> -->
									<p class="text-primary mb-0"><i class="fas fa-info-circle mr-1"></i> Ne retardez pas l'achat, ajouter des articles à votre panier ne signifie pas les réserver.</p>

								</div>
							</div>
							<hr class="mb-4">
							@endforeach
							<!-- Card -->

								<!-- Card -->
							<!-- <div class="card mb-4">
								<div class="card-body">
									<div class="row py-5 p-4 bg-white rounded shadow-sm">
										<div class="col-lg-12">
											<div class="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">Detail de la commande </div>
											<div class="p-4">
												<p class="font-italic mb-4">Shipping and additional costs are calculated based on values you have entered.</p>
												<ul class="list-unstyled mb-4">
													<li class="d-flex justify-content-between py-3 border-bottom"><strong class="text-muted">Sous-total </strong><strong>{{ getPrice(Cart::subtotal()) }}</strong></li>
													<li class="d-flex justify-content-between py-3 border-bottom"><strong class="text-muted">Shipping and handling</strong><strong>$10.00</strong></li>
													<li class="d-flex justify-content-between py-3 border-bottom"><strong class="text-muted">Taxe</strong><strong>{{ getPrice(Cart::tax()) }}</strong></li>
													<li class="d-flex justify-content-between py-3 border-bottom"><strong class="text-muted">Total</strong>
														<h5 class="font-weight-bold">{{ getPrice(Cart::total()) }}</h5>
													</li>
												</ul>
												
											</div>
										</div>
										<div class="col-lg-12">
											<div class="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">Coupon code</div>
											<div class="p-4">
												<p class="font-italic mb-4">If you have a coupon code, please enter it in the box below</p>
												<div class="input-group mb-4 border rounded-pill p-2">
													<input type="text" placeholder="Apply coupon" aria-describedby="button-addon3" class="form-control border-0">
													<div class="input-group-append border-0">
														<button id="button-addon3" type="button" class="btn btn-dark px-4 rounded-pill"><i class="fa fa-gift mr-2"></i>Apply coupon</button>
													</div>
												</div>
											</div>
											<div class="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">Instructions for seller</div>
											<div class="p-4">
												<p class="font-italic mb-4">If you have some information for the seller you can leave them in the box below</p>
												<textarea name="" cols="30" rows="2" class="form-control"></textarea>
											</div>
											<a href="{{ route('checkout.index') }}" class="btn btn-success rounded-pill py-2 btn-block">Passer a la caisse</a>
										</div>
									</div>
								</div>
							</div> -->
							<!-- Card -->
							

						</div>
						
						<!--Grid column-->
					

					</div>
					<!--Grid row-->

				</section>
				<!--Section: Block Content-->
			</div>

    </div>
  </main>
  <!--Main layout-->

	@endsection


	@section('footer')
	<!-- Pour le panier un -->
		<!-- <script>
		 var selects = document.querySelectorAll('#qty');
		 Array.from(selects).forEach((element) => {
			 element.addEventListener('change' , function() {
				 var rowId = element.getAttribute('data-id');
				 var stock = element.getAttribute('data-stock');
				 var token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
				 fetch(
					 `/panier/${rowId}`,
					 {
						 headers: {
							"Content-Type": "application/json",
							"Accept": "application/json, text-plain, */*",
							"X-Requested-With": "XMLHttpRequest",
							"X-CSRF-TOKEN": token
						 },
						 method: 'PATCH',
						 body: JSON.stringify({
							 qty: this.value,
							 stock: stock
						 })
					 }
				 ).then((data) => {
					 console.log(data);
					 location.reload();
				 }).catch((error) => {
					 console.log(error);
				 })
			 });
		 });
		</script>
		<script src="{{asset('user/css/card-bootstrap/build.min.js')}}"></script>
		<script src="{{asset('user/css/card-bootstrap/jquery.min.js')}}"></script> -->
	<!-- Fin pour le panier un -->
	

		<script>
		 var selects = document.querySelectorAll('#qty');
		 Array.from(selects).forEach((element) => {
			 element.addEventListener('change' , function() {
				 var rowId = element.getAttribute('data-id');
				 var stock = element.getAttribute('data-stock');
				 var token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
				 fetch(
					 `/panier/${rowId}`,
					 {
						 headers: {
							"Content-Type": "application/json",
							"Accept": "application/json, text-plain, */*",
							"X-Requested-With": "XMLHttpRequest",
							"X-CSRF-TOKEN": token
						 },
						 method: 'PATCH',
						 body: JSON.stringify({
							 qty: this.value,
							 stock: stock
						 })
					 }
				 ).then((data) => {
					 console.log(data);
					 location.reload();
				 }).catch((error) => {
					 console.log(error);
				 })
			 });
		 });
		</script>
	@endsection
