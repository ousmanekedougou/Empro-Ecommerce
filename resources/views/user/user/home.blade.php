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
						<div class="col-lg-4">
							<div class="card mb-4">
								<div class="card-body">

									<h5 class="mb-3">Votre Profile</h5>

									<ul class="list-group list-group-flush">
										<li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
											Nom complet
											<span>{{$user->name}}</span>
										</li>
										<li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
											E-mail
											<span>{{$user->email}}</span>
										</li>
										<li class="list-group-item d-flex justify-content-between align-items-center px-0">
											Telephone
											<span>{{$user->phone}}</span>
										</li>
										<li class="list-group-item d-flex justify-content-between align-items-center px-0">
											Adresse
											<span>{{$user->address}}</span>
										</li>
									
									</ul>

								<a href="{{ route('product.index') }}" class="btn btn-primary btn-block waves-effect waves-light"><i class="fas fa-cart-plus"></i> nouvelles commande</a>
								<a href="#update_profile_user" class="btn btn-success btn-block waves-effect waves-light mt-3"><i class="fas fa-edit"></i> nouvelles commande</a>

								</div>
							</div>

							<a href="#!" onclick=" if(confirm('Etes Vous sure de supprimer votre compte ?')){  event.preventDefault();document.getElementById('delete-user-compte-{{$user->id}}').submit();
	
								}else{event.preventDefault();} " type="button" class="card-link-secondary small text-uppercase btn btn-danger btn-block waves-effect waves-light mt-3"><i
								class="fas fa-trash-alt mr-1"></i> Supprimer votre compte </a>
							<form id="delete-user-compte-{{$user->id}}" action="{{ route('client.delete_compte',$user->id) }}"  method="post">
								@csrf
								@method('DELETE')
							</form>

						</div> 
						<!--Grid column-->
						<!--Grid column-->
						<div class="col-lg-8">

							<!-- Card -->
							@foreach($orders as $order)
							<div class="card wish-list mb-4">
								<div class="card-body">
								<h5 class="mb-3">Votre Commamnde du 
										@if($order->payment_created_at == null)
											{{$order->created_at}} 
										@else
											{{$order->payment_created_at}} 
										@endif
										(<span>2</span> produits) </h5>

									<ul class="list-group list-group-flush" style="font-weight: bold;">
										
										@if(getPrice($order->amount) <= 0 && $order->status == 2)
											<li class="list-group-item d-flex justify-content-between text-danger align-items-center px-0 pb-0">
												Status de la commande
												<span>Non Payer</span>
											</li>
										@else
											<li class="list-group-item d-flex text-success justify-content-between align-items-center px-0 pb-0">
												Status de la commande
												<span>Payer</span>
											</li>
										@endif
										<li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
											Methode de paiment
											@if(getPrice($order->amount) <= 0 && $order->status == 2)
												<span>A la livraison</span>
											@else
												<span>En ligne avec Stripe</span>
											@endif
										</li>
										<li class="list-group-item d-flex justify-content-between text-bold align-items-center border-0 px-0 pb-0">
											@if(getPrice($order->amount) <= 0 && $order->status == 2)
												Somme total a payer
												<span>{{ getPrice($order->amount_livraison) }}</span>
											@else
												Somme total payer
												<span>{{ getPrice($order->amount) }}</span>
											@endif
										</li>
										<li class="list-group-item d-flex justify-content-between text-bold align-items-center border-0 px-0 ">
											@if(getPrice($order->amount) <= 0 && $order->status == 2)
												<a href="#!" onclick=" if(confirm('Etes Vous sure d\'anuller la commande ?')){  event.preventDefault();document.getElementById('delete-form-{{$order->id}}').submit();
										
												}else{event.preventDefault();} " type="button" class="card-link-secondary small text-uppercase mr-3 bg-danger text-white" style="padding:8px;border-radius:5px;text-decoration:none;"><i
												class="fas fa-trash-alt mr-1"></i> Annuler la commande </a>
												<form id="delete-form-{{$order->id}}" action="{{ route('client.destroy',$order->id) }}"  method="post">
													@csrf
													@method('DELETE')
												</form>
											@endif
										</li>
										
									</ul>
								<hr class="mb-4">
								<h6>Detail de la commande</h6>
									@foreach(unserialize($order->products) as $product)
										<div class="row mb-4">
											<div class="col-md-5 col-lg-3 col-xl-3">
												<div class="view zoom overlay z-depth-1 rounded mb-3 mb-md-0">
													<img class="img-fluid w-100"
														src="{{  Storage::url($product[0]) }}" alt="Sample">
													<a href="#!">
														<div class="mask waves-effect waves-light">
														<img class="img-fluid w-100"
															src="{{  Storage::url($product[0])}}">
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
			
								</div>
							</div>
							<hr class="mb-4">
							@endforeach
							<!-- Card -->

							@if(count(Auth::user()->orders) <= 0)
								<!-- Card -->
								<div class="card mb-4">
									<div class="card-body">
										<div class="row ">
											<div class="col-lg-4">
												<img src="{{ asset('user/img/panier-vide.webp') }}" alt="" srcset="">
											</div>
											<div class="col-lg-8" style="padding: 60px 0;">
												<p class="text-center" style="font-size: 1.3em; font-weight:900;">
													Vous n'avez commander auccun produit
												</p>
												<p class="text-center">
													<a class="btn btn-primary" href="{{ route('product.index') }}">Commander ici</a>
												</p>
												
											</div>
										</div>
									</div>
								</div>
								<!-- Card -->
							@endif

							<div class="card mb-4" id="update_profile_user">
								<div class="card-body">
									<h6>Modifier vos informations</h6>
									<div class="mt-3">
										<div class="md-form md-outline mb-0">
											<form action="{{ route('client.update',$user->id) }}" method="post">
												@csrf
												{{method_field('PUT')}}
												<input type="hidden" name="option" value="1">
												<p>
													<input type="text" id="discount-code" class="form-control font-weight-light @error('name') is-invalid @enderror"  value="{{ old('name') ?? $user->name  }}" name="name" placeholder="">
													@error('name')
														<div class="invalid-feedback" role="alert">
															<strong>{{ $message }}</strong>
														</div>
													@enderror
												</p>
												<p>
													<input type="email" id="discount-code" class="form-control font-weight-light @error('email') is-invalid @enderror"  value="{{ old('email') ?? $user->email  }}" name="email" placeholder="">
													@error('email')
														<div class="invalid-feedback" role="alert">
															<strong>{{ $message }}</strong>
														</div>
													@enderror
												</p>
												<p>
													<input type="number" id="discount-code" class="form-control font-weight-light @error('phone') is-invalid @enderror"  value="{{ old('phone') ?? $user->phone  }}" name="phone" placeholder="">
													@error('phone')
														<div class="invalid-feedback" role="alert">
															<strong>{{ $message }}</strong>
														</div>
													@enderror
												</p>
												<p>
													<input type="text" id="discount-code" class="form-control font-weight-light @error('address') is-invalid @enderror"  value="{{ old('address') ?? $user->address  }}" name="address" placeholder="">
													@error('address')
														<div class="invalid-feedback" role="alert">
															<strong>{{ $message }}</strong>
														</div>
													@enderror
												</p>
												<div class="row">
													<div class="col-md-6">
														<button type="submit" class="btn btn-block btn-success">Enregistre les modification</button>
													</div>
													<div class="col-md-6">
														<button type="reset" class="btn btn-block btn-primary">Reinitialiser</button>
													</div>
												</div>
											</form>
										</div>
									</div>
								</div>
							</div>

							<div class="card mb-4" id="update_profile_user">
								<div class="card-body">
									<h6>Modifier votre mot de passe</h6>
									<div class="mt-3">
										<div class="md-form md-outline mb-0">
											<form action="{{ route('client.update',$user->id) }}" method="post">
												@csrf
												{{method_field('PUT')}}
												<input type="hidden" name="option" value="2">
												<input type="password"  id="discount-code" class="form-control font-weight-light @error('password') is-invalid @enderror" value="{{ old('password') }}" id="password" name="password" placeholder="Nouveau mot de passe">
												@error('password')
													<div class="invalid-feedback" role="alert">
														<strong>{{ $message }}</strong>
													</div>
												@enderror
												<input type="password"  id="discount-code" class="form-control font-weight-light @error('password') is-invalid @enderror" value="{{ old('password-confirm') }}" name="password_confirmation" id="password-confirm" placeholder="Confirmer le nouveau mot de passe">
												<div class="row">
													<div class="col-md-6">
														<button type="submit" class="btn btn-block btn-success">Enregistre les modification</button>
													</div>
													<div class="col-md-6">
														<button type="reset" class="btn btn-block btn-primary">Reinitialiser</button>
													</div>
												</div>
											</form>
										</div>
									</div>
								</div>
							</div>
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
