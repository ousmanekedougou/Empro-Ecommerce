@extends('user.layouts.app',['title' => 'acceuil'])
@section('head')
	<script src="{{asset('user/js/ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js')}}"></script>
	<link rel="stylesheet" href="{{asset('user/css/themes/theme_ecolife_marketplace1/assets/cache/theme-9c04a516.css')}}"
		type="text/css" media="all">
		
	<script type="text/javascript">
		var CLOSE = "Close Categories";
		var MORE = "More Categories";
		var catSelected = 3;
		var id_lang = 1;
		var poscompare = { "nbProducts": 0, "IdProducts": null };
		var possearch_image = 1;
		var possearch_number = 10;
		var prestashop = { "cart": { "products": [], "totals": { "total": { "type": "total", "label": "Total", "amount": 0, "value": "\u20ac0.00" }, "total_including_tax": { "type": "total", "label": "Total (tax incl.)", "amount": 0, "value": "\u20ac0.00" }, "total_excluding_tax": { "type": "total", "label": "Total (tax excl.)", "amount": 0, "value": "\u20ac0.00" } }, "subtotals": { "products": { "type": "products", "label": "Subtotal", "amount": 0, "value": "\u20ac0.00" }, "discounts": null, "shipping": { "type": "shipping", "label": "Shipping", "amount": 0, "value": "Free" }, "tax": { "type": "tax", "label": "Taxes", "amount": 0, "value": "\u20ac0.00" } }, "products_count": 0, "summary_string": "0 items", "vouchers": { "allowed": 0, "added": [] }, "discounts": [], "minimalPurchase": 0, "minimalPurchaseRequired": "" }, "currency": { "name": "Euro", "iso_code": "EUR", "iso_code_num": "978", "sign": "\u20ac" }, "customer": { "lastname": null, "firstname": null, "email": null, "birthday": null, "newsletter": null, "newsletter_date_add": null, "optin": null, "website": null, "company": null, "siret": null, "ape": null, "is_logged": false, "gender": { "type": null, "name": null }, "addresses": [] }, "language": { "name": "English (English)", "iso_code": "en", "locale": "en-US", "language_code": "en-us", "is_rtl": "0", "date_format_lite": "m\/d\/Y", "date_format_full": "m\/d\/Y H:i:s", "id": 1 }, "page": { "title": "", "canonical": null, "meta": { "title": "Fila Locker Room Varsity Jacket", "description": "\r\nCreate a cool and sporty look with the FILA\u00ae Locker Room Varsity Jacket.\r\n\r\n\r\nComfortable cotton-blend fabrication.\r\n\r\n\r\nClassic varsity jacket features brand details throughout.\r\n\r\n\r\nFlat knit collar.\r\n\r\n", "keywords": null, "robots": "index" }, "page_name": "product", "body_classes": { "lang-en": true, "lang-rtl": false, "country-US": true, "currency-EUR": true, "layout-full-width": true, "page-product": true, "tax-display-disabled": true, "product-id-13": true, "product-Fila Locker Room Varsity Jacket": true, "product-id-category-112": true, "product-id-manufacturer-2": true, "product-id-supplier-0": true, "product-available-for-order": true }, "admin_notifications": [] }, "shop": { "name": "Ecolife  Responsive Prestashop Theme", "logo": "\/pos_ecolife_marketplace\/img\/ecolife-marketplace1-logo-16055143891.jpg", "stores_icon": "\/pos_ecolife_marketplace\/img\/logo_stores.png", "favicon": "\/pos_ecolife_marketplace\/img\/favicon.ico" }, "urls": { "base_url": "http:\/\/demo.posthemes.com\/pos_ecolife_marketplace\/", "current_url": "http:\/\/demo.posthemes.com\/pos_ecolife_marketplace\/en\/houseware-\/13-brown-bear-vector-graphics.html", "shop_domain_url": "http:\/\/demo.posthemes.com", "img_ps_url": "http:\/\/demo.posthemes.com\/pos_ecolife_marketplace\/img\/", "img_cat_url": "http:\/\/demo.posthemes.com\/pos_ecolife_marketplace\/img\/c\/", "img_lang_url": "http:\/\/demo.posthemes.com\/pos_ecolife_marketplace\/img\/l\/", "img_prod_url": "http:\/\/demo.posthemes.com\/pos_ecolife_marketplace\/img\/p\/", "img_manu_url": "http:\/\/demo.posthemes.com\/pos_ecolife_marketplace\/img\/m\/", "img_sup_url": "http:\/\/demo.posthemes.com\/pos_ecolife_marketplace\/img\/su\/", "img_ship_url": "http:\/\/demo.posthemes.com\/pos_ecolife_marketplace\/img\/s\/", "img_store_url": "http:\/\/demo.posthemes.com\/pos_ecolife_marketplace\/img\/st\/", "img_col_url": "http:\/\/demo.posthemes.com\/pos_ecolife_marketplace\/img\/co\/", "img_url": "http:\/\/demo.posthemes.com\/pos_ecolife_marketplace\/themes\/theme_ecolife_marketplace1\/assets\/img\/", "css_url": "http:\/\/demo.posthemes.com\/pos_ecolife_marketplace\/themes\/theme_ecolife_marketplace1\/assets\/css\/", "js_url": "http:\/\/demo.posthemes.com\/pos_ecolife_marketplace\/themes\/theme_ecolife_marketplace1\/assets\/js\/", "pic_url": "http:\/\/demo.posthemes.com\/pos_ecolife_marketplace\/upload\/", "pages": { "address": "http:\/\/demo.posthemes.com\/pos_ecolife_marketplace\/en\/address", "addresses": "http:\/\/demo.posthemes.com\/pos_ecolife_marketplace\/en\/addresses", "authentication": "http:\/\/demo.posthemes.com\/pos_ecolife_marketplace\/en\/login", "cart": "http:\/\/demo.posthemes.com\/pos_ecolife_marketplace\/en\/cart", "category": "http:\/\/demo.posthemes.com\/pos_ecolife_marketplace\/en\/index.php?controller=category", "cms": "http:\/\/demo.posthemes.com\/pos_ecolife_marketplace\/en\/index.php?controller=cms", "contact": "http:\/\/demo.posthemes.com\/pos_ecolife_marketplace\/en\/contact-us", "discount": "http:\/\/demo.posthemes.com\/pos_ecolife_marketplace\/en\/discount", "guest_tracking": "http:\/\/demo.posthemes.com\/pos_ecolife_marketplace\/en\/guest-tracking", "history": "http:\/\/demo.posthemes.com\/pos_ecolife_marketplace\/en\/order-history", "identity": "http:\/\/demo.posthemes.com\/pos_ecolife_marketplace\/en\/identity", "index": "http:\/\/demo.posthemes.com\/pos_ecolife_marketplace\/en\/", "my_account": "http:\/\/demo.posthemes.com\/pos_ecolife_marketplace\/en\/my-account", "order_confirmation": "http:\/\/demo.posthemes.com\/pos_ecolife_marketplace\/en\/order-confirmation", "order_detail": "http:\/\/demo.posthemes.com\/pos_ecolife_marketplace\/en\/index.php?controller=order-detail", "order_follow": "http:\/\/demo.posthemes.com\/pos_ecolife_marketplace\/en\/order-follow", "order": "http:\/\/demo.posthemes.com\/pos_ecolife_marketplace\/en\/order", "order_return": "http:\/\/demo.posthemes.com\/pos_ecolife_marketplace\/en\/index.php?controller=order-return", "order_slip": "http:\/\/demo.posthemes.com\/pos_ecolife_marketplace\/en\/credit-slip", "pagenotfound": "http:\/\/demo.posthemes.com\/pos_ecolife_marketplace\/en\/page-not-found", "password": "http:\/\/demo.posthemes.com\/pos_ecolife_marketplace\/en\/password-recovery", "pdf_invoice": "http:\/\/demo.posthemes.com\/pos_ecolife_marketplace\/en\/index.php?controller=pdf-invoice", "pdf_order_return": "http:\/\/demo.posthemes.com\/pos_ecolife_marketplace\/en\/index.php?controller=pdf-order-return", "pdf_order_slip": "http:\/\/demo.posthemes.com\/pos_ecolife_marketplace\/en\/index.php?controller=pdf-order-slip", "prices_drop": "http:\/\/demo.posthemes.com\/pos_ecolife_marketplace\/en\/prices-drop", "product": "http:\/\/demo.posthemes.com\/pos_ecolife_marketplace\/en\/index.php?controller=product", "search": "http:\/\/demo.posthemes.com\/pos_ecolife_marketplace\/en\/search", "sitemap": "http:\/\/demo.posthemes.com\/pos_ecolife_marketplace\/en\/sitemap", "stores": "http:\/\/demo.posthemes.com\/pos_ecolife_marketplace\/en\/stores", "supplier": "http:\/\/demo.posthemes.com\/pos_ecolife_marketplace\/en\/supplier", "register": "http:\/\/demo.posthemes.com\/pos_ecolife_marketplace\/en\/login?create_account=1", "order_login": "http:\/\/demo.posthemes.com\/pos_ecolife_marketplace\/en\/order?login=1" }, "alternative_langs": { "en-us": "http:\/\/demo.posthemes.com\/pos_ecolife_marketplace\/en\/houseware-\/13-brown-bear-vector-graphics.html", "fr-fr": "http:\/\/demo.posthemes.com\/pos_ecolife_marketplace\/fr\/houseware\/13-brown-bear-vector-graphics.html" }, "theme_assets": "\/pos_ecolife_marketplace\/themes\/theme_ecolife_marketplace1\/assets\/", "actions": { "logout": "http:\/\/demo.posthemes.com\/pos_ecolife_marketplace\/en\/?mylogout=" }, "no_picture_image": { "bySize": { "small_default": { "url": "http:\/\/demo.posthemes.com\/pos_ecolife_marketplace\/img\/p\/en-default-small_default.jpg", "width": 98, "height": 98 }, "cart_default": { "url": "http:\/\/demo.posthemes.com\/pos_ecolife_marketplace\/img\/p\/en-default-cart_default.jpg", "width": 125, "height": 125 }, "home_default": { "url": "http:\/\/demo.posthemes.com\/pos_ecolife_marketplace\/img\/p\/en-default-home_default.jpg", "width": 360, "height": 360 }, "medium_default": { "url": "http:\/\/demo.posthemes.com\/pos_ecolife_marketplace\/img\/p\/en-default-medium_default.jpg", "width": 452, "height": 452 }, "large_default": { "url": "http:\/\/demo.posthemes.com\/pos_ecolife_marketplace\/img\/p\/en-default-large_default.jpg", "width": 800, "height": 800 } }, "small": { "url": "http:\/\/demo.posthemes.com\/pos_ecolife_marketplace\/img\/p\/en-default-small_default.jpg", "width": 98, "height": 98 }, "medium": { "url": "http:\/\/demo.posthemes.com\/pos_ecolife_marketplace\/img\/p\/en-default-home_default.jpg", "width": 360, "height": 360 }, "large": { "url": "http:\/\/demo.posthemes.com\/pos_ecolife_marketplace\/img\/p\/en-default-large_default.jpg", "width": 800, "height": 800 }, "legend": "" } }, "configuration": { "display_taxes_label": false, "display_prices_tax_incl": false, "is_catalog": false, "show_prices": true, "opt_in": { "partner": true }, "quantity_discount": { "type": "discount", "label": "Discount" }, "voucher_enabled": 0, "return_enabled": 0 }, "field_required": [], "breadcrumb": { "links": [{ "title": "Home", "url": "http:\/\/demo.posthemes.com\/pos_ecolife_marketplace\/en\/" }, { "title": "Houseware", "url": "http:\/\/demo.posthemes.com\/pos_ecolife_marketplace\/en\/112-houseware-" }, { "title": "Fila Locker Room Varsity Jacket", "url": "http:\/\/demo.posthemes.com\/pos_ecolife_marketplace\/en\/houseware-\/13-brown-bear-vector-graphics.html" }], "count": 3 }, "link": { "protocol_link": "http:\/\/", "protocol_content": "http:\/\/" }, "time": 1616511842, "static_token": "203b2fb46b107eabda9dd64ae8ebc173", "token": "8a63cbe677b7087ba4e0b652bdb05340" };
		var xip_base_dir = "13-brown-bear-vector-graphics.html\/\/demo.posthemes.com\/pos_ecolife_marketplace\/";
	</script>



	<style type="text/css">
		.animation9 {
			-webkit-transition-duration: 500ms !important;
			-moz-transition-duration: 500ms !important;
			-o-transition-duration: 500ms !important;
			transition-duration: 500ms !important;
		}
	</style>
@endsection
@section('body')
<body itemscope itemtype="http://schema.org/WebPage" id="product"
	class="lang-en country-us currency-eur layout-full-width page-product tax-display-disabled product-id-13 product-fila-locker-room-varsity-jacket product-id-category-112 product-id-manufacturer-2 product-id-supplier-0 product-available-for-order">
@endsection
@section('main-content')
		<aside id="notifications">
			<div class="container">



			</div>
		</aside>


		<div class="breadcrumb_container " data-depth="3">
			<div class="container">
				<nav data-depth="3" class="breadcrumb">
					<ol itemscope itemtype="">


						<li itemprop="itemListElement" itemscope itemtype="">
							<a itemprop="item" href="/">
								<span itemprop="name">Acceuil</span>
							</a>
							<meta itemprop="position" content="1">
						</li>


						<li itemprop="itemListElement" itemscope itemtype="">
							<a itemprop="item" href="{{ route('product.index') }}">
								<span itemprop="name">Produits</span>
							</a>
							<meta itemprop="position" content="2">
						</li>


						<li itemprop="itemListElement" itemscope itemtype="">
							<a itemprop="item" href="{{ route('product.index') }}">
								<span itemprop="name">{{$product->title}}</span>
							</a>
							<meta itemprop="position" content="3">
						</li>


					</ol>
				</nav>
			</div>
		</div>


		<div id="wrapper">

			<div class="container">
				<div class="row">



					<div id="content-wrapper" class="col-xs-12">



						<section id="main" itemscope itemtype="https://schema.org/Product">
							<meta itemprop="url"
								content="http://demo.posthemes.com/pos_ecolife_marketplace/en/electronics/12-juicy-couture-tricot-logo-stripe-jacket.html">

							<div class="row">
								<div class="col-md-5 ">

									<section class="page-content" id="content">



										<div class="images-container">

											<div class="product-view_content">

												<ul class="product-flag">
													<li class=" new">New</li>
												</ul>

												<div class="product-cover slider-for">
													<div class="thumb-item">
														<div class="easyzoom easyzoom--overlay">
															<a
																href="{{$product->image}}">
																<img class="" style="width:100%;"
																	src="{{ $product->image }}"
																	alt="" title="" itemprop="image">
															</a>
														</div>

													</div>
													<div class="thumb-item">
														<div class="easyzoom easyzoom--overlay">
															<a
																href="{{ $product->image }}">
																<img class="" style="width:100%;"
																	src="{{ $product->image }}"
																	alt="" title="" itemprop="image">
															</a>
														</div>

													</div>
													<div class="thumb-item">
														<div class="easyzoom easyzoom--overlay">
															<a
																href="{{$product->image}}">
																<img class="" style="width:100%;"
																	src="{{$product->image}}"
																	alt="" title="" itemprop="image">
															</a>
														</div>

													</div>
													<div class="thumb-item">
														<div class="easyzoom easyzoom--overlay">
															<a
																href="{{ $product->image }}">
																<img class="" style="width:100%;"
																	src="{{ $product->image }}"
																	alt="" title="" itemprop="image">
															</a>
														</div>

													</div>
												</div>
											</div>



											<ul class="product-images slider-nav">
												<div class="thumb-container">
													<div>
														<img class="thumb js-thumb"
															src="{{ $product->image }}"
															alt="" title="" width="100" itemprop="image">
													</div>
												</div>
												<div class="thumb-container">
													<div>
														<img class="thumb js-thumb  selected "
															src="{{ $product->image }}"
															alt="" title="" width="100" itemprop="image">
													</div>
												</div>
												<div class="thumb-container">
													<div>
														<img class="thumb js-thumb "
															src="{{ $product->image }}"
															alt="" title="" width="100" itemprop="image">
													</div>
												</div>
												<div class="thumb-container">
													<div>
														<img class="thumb js-thumb "
															src="{{ $product->image }}"
															alt="" title="" width="100" itemprop="image">
													</div>
												</div>
											</ul>


										</div>



										<script type="text/javascript">
											$(document).ready(function () {
												$('.images-container .slider-for').slick({
													slidesToShow: 1,
													slidesToScroll: 1,
													focusOnSelect: true,
													arrows: true,
													fade: true,
													infinite: true,
													lazyLoad: 'ondemand',
													asNavFor: '.slider-nav'
												});
												if (0 == 0) {
													$('.images-container .slider-nav').slick({
														slidesToShow: 4,
														slidesToScroll: 1,
														asNavFor: '.slider-for',
														dots: false,
														arrows: true,
														infinite: true,
														focusOnSelect: true
													});
												} else {
													$('.images-container .slider-nav').slick({
														slidesToShow: 4,
														slidesToScroll: 1,
														asNavFor: '.slider-for',
														vertical: true,
														dots: false,
														arrows: true,
														infinite: true,
														focusOnSelect: true,
														responsive: [
															{
																breakpoint: 991,
																settings: {
																	slidesToShow: 2,
																	slidesToScroll: 1,
																}
															},
															{
																breakpoint: 767,
																settings: {
																	slidesToShow: 4,
																	slidesToScroll: 1,
																}
															},
															{
																breakpoint: 543,
																settings: {
																	slidesToShow: 3,
																	slidesToScroll: 1,
																}
															},
															{
																breakpoint: 399,
																settings: {
																	slidesToShow: 2,
																	slidesToScroll: 1,
																}
															}
														]
													});
												}

												$('.images-container .slider-for').slickLightbox({
													src: 'src',
													itemSelector: '.thumb-item img'
												});
												if ($(window).width() >= 992) {
													var $easyzoom = $('.images-container .easyzoom').easyZoom();
												}
												$(window).resize(function () {
													if ($(window).width() >= 992) {
														var $easyzoom = $('.images-container .easyzoom').easyZoom();
														$('.easyzoom--overlay').addClass('easyzoom');
													}
													else {
														$('.easyzoom--overlay').removeClass('easyzoom');
													}
												});
											});
										</script>

									</section>

								</div>
								<div class="col-md-7 ">
									<div class="content_info">


										<h1 class="h1 namne_details" itemprop="name">{{ $product->title }}</h1>


										<p class="reference btn btn-info btn-xs">Sotcke : le Produit est {{ $stock }} ( {{$product->stock}} )</p>
										<div id="product_comments_block_extra" class="no-print"
											itemprop="aggregateRating" itemscope
											itemtype="https://schema.org/AggregateRating">
											<div class="comments_note clearfix">
												<span>Rating&nbsp;</span>
												<div class="star_content clearfix">

													<div class="star star_on"></div>

													<div class="star star_on"></div>

													<div class="star star_on"></div>

													<div class="star star_on"></div>

													<div class="star star_on"></div>
													<meta itemprop="worstRating" content="0" />
													<meta itemprop="ratingValue" content="5" />
													<meta itemprop="bestRating" content="5" />
												</div>
											</div> <!-- .comments_note -->

											<ul class="comments_advices">
												<li>
													<a href="#idTab5" class="reviews">
														Lire les avis (<span itemprop="reviewCount">1</span>)
													</a>
												</li>
												<li>
													<a class="open-comment-form">
														Donne votre avis
													</a>
												</li>
											</ul>
										</div>
										<!--  /Module ProductComments -->


										<div class="product-prices">
											<div class="product-price h5 " itemprop="offers" itemscope
												itemtype="https://schema.org/Offer">
												<link itemprop="availability" href="https://schema.org/InStock" />
												<meta itemprop="priceCurrency" content="EUR">

												<div class="current-price">
													<span itemprop="price" content="9">{{ $product->getPrice() }}</span>

												</div>



											</div>
											<div class="tax-shipping-delivery-label">


											</div>
										</div>


										<div class="product-information">

											<div id="product-description-short-12" class="product-description-short"
												itemprop="description">
												<ul>
													<li>
														<div>{{ $product->description }}</div>
													</li>
												</ul>
											</div>



											@if($stock == 'Disponible')

												<div class="product-actions">
													<form action="{{route('panier.store')}}" method="post" id="add-to-cart-or-refresh">
														@csrf
														<input type="hidden" name="product_id" value="{{ $product->id }}">


														<div class="product-variants">
														</div>

														<section class="product-discounts">
														</section>

														<div class="product-add-to-cart">
															<span class="control-label">Quantity</span>


															<div class="product-quantity clearfix">
																<div class="qty">
																	<input type="text" name="qty" id="quantity_wanted"
																		 class="input-group" min="1"
																		aria-label="Quantity">
																</div>

																<div class="add">
																	
																	<button class="btn btn-primary add-to-cart"
																		type="submit">
																		<i class="material-icons shopping-cart">&#xE547;</i>
																		Ajouter au panier
																	</button>
																</div>
															</div>



															<span id="product-availability">
															</span>



															<p class="product-minimal-quantity">
															</p>

														</div>



														<div class="product-additional-info">
															<!-- <p class="panel-product-line panel-product-actions">
																<a id="wishlist_button" href="#"
																	onclick="WishlistCart('wishlist_block_list', 'add', '12', $('#idCombination').val(), document.getElementById('quantity_wanted').value); return false;"
																	rel="nofollow" title="Add to my wishlist">
																	<i class="ion-android-favorite-outline"></i>Add to
																	wishlist
																</a>
															</p>
															<p class="panel-product-line panel-product-actions">
																<button href="#"
																	class="poscompare-add compare-button js-poscompare-add"
																	data-id_product="12" ;
																	onclick="posCompare.addCompare($(this),12); return false;"
																	title="Add to compare"><i
																		class="ion-ios-shuffle-strong"></i>Add to
																	compare</button>
															</p> -->

															<div class="social-sharing">
																<span>Share</span>
																<ul>
																	<li class="facebook"><a
																			href="http://www.facebook.com/sharer.php?u=http://demo.posthemes.com/pos_ecolife_marketplace/en/electronics/12-juicy-couture-tricot-logo-stripe-jacket.html"
																			title="Share" target="_blank">Share</a></li>
																	<li class="twitter"><a
																			href="https://twitter.com/intent/tweet?text=Juicy%20Couture%20Tricot%20Logo%20Stripe%20Jacket%20http://demo.posthemes.com/pos_ecolife_marketplace/en/electronics/12-juicy-couture-tricot-logo-stripe-jacket.html"
																			title="Tweet" target="_blank">Tweet</a></li>
																	<li class="googleplus"><a
																			href="https://plus.google.com/share?url=http://demo.posthemes.com/pos_ecolife_marketplace/en/electronics/12-juicy-couture-tricot-logo-stripe-jacket.html"
																			title="Google+" target="_blank">Google+</a></li>
																	<li class="pinterest"><a
																			href="http://www.pinterest.com/pin/create/button/?media=http://demo.posthemes.com/pos_ecolife_marketplace/255/juicy-couture-tricot-logo-stripe-jacket.jpg&amp;url=http://demo.posthemes.com/pos_ecolife_marketplace/en/electronics/12-juicy-couture-tricot-logo-stripe-jacket.html"
																			title="Pinterest" target="_blank">Pinterest</a>
																	</li>
																</ul>
															</div>


														</div>



													</form>
												</div>

											@endif


											<div id="block-reassurance">
												<ul>
													<li>
														<div class="block-reassurance-item">
															<img src="{{asset('user/modules/blockreassurance/img/ic_verified_user_black_36dp_1x.png')}}"
																alt="Security policy (edit with Customer reassurance module)">
															<span class="h6">Security policy (edit with Customer
																reassurance module)</span>
														</div>
													</li>
													<li>
														<div class="block-reassurance-item">
															<img src="{{asset('user/modules/blockreassurance/img/ic_local_shipping_black_36dp_1x.png')}}"
																alt="Delivery policy (edit with Customer reassurance module)">
															<span class="h6">Delivery policy (edit with Customer
																reassurance module)</span>
														</div>
													</li>
													<li>
														<div class="block-reassurance-item">
															<img src="{{asset('user/modules/blockreassurance/img/ic_swap_horiz_black_36dp_1x.png')}}"
																alt="Return policy (edit with Customer reassurance module)">
															<span class="h6">Return policy (edit with Customer
																reassurance module)</span>
														</div>
													</li>
												</ul>
											</div>


										</div>
									</div>
								</div>
							</div>
							<div class="row">
								<div class="col-xs-12">

									<div class="tabs ">
										<ul class="nav nav-tabs" role="tablist">
											<li class="nav-item">
												<a class="nav-link active" data-toggle="tab" href="#description"
													role="tab" aria-controls="description"
													aria-selected="true">Description</a>
											</li>
											<li class="nav-item">
												<a class="nav-link" data-toggle="tab" href="#product-details" role="tab"
													aria-controls="product-details">Product Details</a>
											</li>
											<li class="nav-item">
												<a class="nav-link" data-toggle="tab" href="#idTab5">Reviews</a>
											</li>

										</ul>

										<div class="tab-content" id="tab-content">
											<div class="tab-pane fade in active" id="description" role="tabpanel">

												<div class="product-description">
													<ul>
														<li>
															<div>Freshen up your look with the Juicy Couture™ Tricot
																Logo Stripe Jacket.</div>
														</li>
														<li>
															<div>Polyester fabrication flaunts stripe and brand logo
																detail at sleeves.</div>
														</li>
														<li>
															<div>Stand collar.</div>
														</li>
														<li>
															<div>Front-zipper closure.</div>
														</li>
														<li>
															<div>Long sleeves.</div>
														</li>
														<li>
															<div>Straight hemline with elastic hemline.</div>
														</li>
														<li>
															<div>100% polyester.</div>
														</li>
														<li>
															<div>Machine wash, tumble dry.</div>
														</li>
														<li>
															<div>Imported.</div>
														</li>
														<li>
															<div>Product measurements were taken using size SM (US 2-4).
																Please note that measurements may vary by size.</div>
														</li>
													</ul>
												</div>

											</div>


											<div class="tab-pane fade" id="product-details"
												data-product="{&quot;id_shop_default&quot;:&quot;1&quot;,&quot;id_manufacturer&quot;:&quot;2&quot;,&quot;id_supplier&quot;:&quot;0&quot;,&quot;reference&quot;:&quot;demo_18&quot;,&quot;is_virtual&quot;:&quot;1&quot;,&quot;delivery_in_stock&quot;:null,&quot;delivery_out_stock&quot;:null,&quot;id_category_default&quot;:&quot;68&quot;,&quot;on_sale&quot;:&quot;0&quot;,&quot;online_only&quot;:&quot;0&quot;,&quot;ecotax&quot;:0,&quot;minimal_quantity&quot;:&quot;1&quot;,&quot;low_stock_threshold&quot;:null,&quot;low_stock_alert&quot;:&quot;0&quot;,&quot;price&quot;:&quot;\u20ac9.00&quot;,&quot;unity&quot;:null,&quot;unit_price_ratio&quot;:&quot;0.000000&quot;,&quot;additional_shipping_cost&quot;:&quot;0.00&quot;,&quot;customizable&quot;:&quot;0&quot;,&quot;text_fields&quot;:&quot;0&quot;,&quot;uploadable_files&quot;:&quot;0&quot;,&quot;redirect_type&quot;:&quot;301-category&quot;,&quot;id_type_redirected&quot;:&quot;0&quot;,&quot;available_for_order&quot;:&quot;1&quot;,&quot;available_date&quot;:&quot;0000-00-00&quot;,&quot;show_condition&quot;:&quot;0&quot;,&quot;condition&quot;:&quot;new&quot;,&quot;show_price&quot;:&quot;1&quot;,&quot;indexed&quot;:&quot;1&quot;,&quot;visibility&quot;:&quot;both&quot;,&quot;cache_default_attribute&quot;:&quot;0&quot;,&quot;advanced_stock_management&quot;:&quot;0&quot;,&quot;date_add&quot;:&quot;2018-12-26 08:59:38&quot;,&quot;date_upd&quot;:&quot;2020-11-24 04:09:55&quot;,&quot;pack_stock_type&quot;:&quot;3&quot;,&quot;meta_description&quot;:null,&quot;meta_keywords&quot;:null,&quot;meta_title&quot;:null,&quot;link_rewrite&quot;:&quot;juicy-couture-tricot-logo-stripe-jacket&quot;,&quot;name&quot;:&quot;Juicy Couture Tricot Logo Stripe Jacket&quot;,&quot;description&quot;:&quot;&lt;ul&gt;&lt;li&gt;\r\n&lt;div&gt;Freshen up your look with the Juicy Couture\u2122 Tricot Logo Stripe Jacket.&lt;\/div&gt;\r\n&lt;\/li&gt;\r\n&lt;li&gt;\r\n&lt;div&gt;Polyester fabrication flaunts stripe and brand logo detail at sleeves.&lt;\/div&gt;\r\n&lt;\/li&gt;\r\n&lt;li&gt;\r\n&lt;div&gt;Stand collar.&lt;\/div&gt;\r\n&lt;\/li&gt;\r\n&lt;li&gt;\r\n&lt;div&gt;Front-zipper closure.&lt;\/div&gt;\r\n&lt;\/li&gt;\r\n&lt;li&gt;\r\n&lt;div&gt;Long sleeves.&lt;\/div&gt;\r\n&lt;\/li&gt;\r\n&lt;li&gt;\r\n&lt;div&gt;Straight hemline with elastic hemline.&lt;\/div&gt;\r\n&lt;\/li&gt;\r\n&lt;li&gt;\r\n&lt;div&gt;100% polyester.&lt;\/div&gt;\r\n&lt;\/li&gt;\r\n&lt;li&gt;\r\n&lt;div&gt;Machine wash, tumble dry.&lt;\/div&gt;\r\n&lt;\/li&gt;\r\n&lt;li&gt;\r\n&lt;div&gt;Imported.&lt;\/div&gt;\r\n&lt;\/li&gt;\r\n&lt;li&gt;\r\n&lt;div&gt;Product measurements were taken using size SM (US 2-4). Please note that measurements may vary by size.&lt;\/div&gt;\r\n&lt;\/li&gt;\r\n&lt;\/ul&gt;&quot;,&quot;description_short&quot;:&quot;&lt;ul&gt;&lt;li&gt;\r\n&lt;div&gt;Freshen up your look with the Juicy Couture\u2122 Tricot Logo Stripe Jacket.&lt;\/div&gt;\r\n&lt;\/li&gt;\r\n&lt;li&gt;\r\n&lt;div&gt;Polyester fabrication flaunts stripe and brand logo detail at sleeves.&lt;\/div&gt;\r\n&lt;\/li&gt;\r\n&lt;li&gt;\r\n&lt;div&gt;Stand collar.&lt;\/div&gt;\r\n&lt;\/li&gt;\r\n&lt;li&gt;\r\n&lt;div&gt;Front-zipper closure.&lt;\/div&gt;\r\n&lt;\/li&gt;\r\n&lt;li&gt;\r\n&lt;div&gt;100% polyester.&lt;\/div&gt;\r\n&lt;\/li&gt;\r\n&lt;\/ul&gt;&quot;,&quot;available_now&quot;:null,&quot;available_later&quot;:null,&quot;id&quot;:12,&quot;id_product&quot;:12,&quot;out_of_stock&quot;:1,&quot;new&quot;:1,&quot;id_product_attribute&quot;:&quot;0&quot;,&quot;quantity_wanted&quot;:1,&quot;extraContent&quot;:[],&quot;allow_oosp&quot;:1,&quot;category&quot;:&quot;electronics&quot;,&quot;category_name&quot;:&quot;Electronics&quot;,&quot;link&quot;:&quot;http:\/\/demo.posthemes.com\/pos_ecolife_marketplace\/en\/electronics\/12-juicy-couture-tricot-logo-stripe-jacket.html&quot;,&quot;attribute_price&quot;:0,&quot;price_tax_exc&quot;:9,&quot;price_without_reduction&quot;:9,&quot;reduction&quot;:0,&quot;specific_prices&quot;:[],&quot;quantity&quot;:300,&quot;quantity_all_versions&quot;:300,&quot;id_image&quot;:&quot;en-default&quot;,&quot;features&quot;:[{&quot;name&quot;:&quot;Compositions&quot;,&quot;value&quot;:&quot;Polyester&quot;,&quot;id_feature&quot;:&quot;1&quot;,&quot;position&quot;:&quot;0&quot;},{&quot;name&quot;:&quot;Paper Type&quot;,&quot;value&quot;:&quot;Ruled&quot;,&quot;id_feature&quot;:&quot;2&quot;,&quot;position&quot;:&quot;1&quot;},{&quot;name&quot;:&quot;Color&quot;,&quot;value&quot;:&quot;White&quot;,&quot;id_feature&quot;:&quot;3&quot;,&quot;position&quot;:&quot;2&quot;},{&quot;name&quot;:&quot;Size&quot;,&quot;value&quot;:&quot;S&quot;,&quot;id_feature&quot;:&quot;4&quot;,&quot;position&quot;:&quot;3&quot;},{&quot;name&quot;:&quot;Frame Size&quot;,&quot;value&quot;:&quot;60x90cm&quot;,&quot;id_feature&quot;:&quot;5&quot;,&quot;position&quot;:&quot;4&quot;}],&quot;attachments&quot;:[],&quot;virtual&quot;:1,&quot;pack&quot;:0,&quot;packItems&quot;:[],&quot;nopackprice&quot;:0,&quot;customization_required&quot;:false,&quot;rate&quot;:0,&quot;tax_name&quot;:&quot;&quot;,&quot;ecotax_rate&quot;:0,&quot;unit_price&quot;:&quot;&quot;,&quot;customizations&quot;:{&quot;fields&quot;:[]},&quot;id_customization&quot;:0,&quot;is_customizable&quot;:false,&quot;show_quantities&quot;:true,&quot;quantity_label&quot;:&quot;Items&quot;,&quot;quantity_discounts&quot;:[],&quot;customer_group_discount&quot;:0,&quot;images&quot;:[{&quot;bySize&quot;:{&quot;small_default&quot;:{&quot;url&quot;:&quot;http:\/\/demo.posthemes.com\/pos_ecolife_marketplace\/254-small_default\/juicy-couture-tricot-logo-stripe-jacket.jpg&quot;,&quot;width&quot;:98,&quot;height&quot;:98},&quot;cart_default&quot;:{&quot;url&quot;:&quot;http:\/\/demo.posthemes.com\/pos_ecolife_marketplace\/254-cart_default\/juicy-couture-tricot-logo-stripe-jacket.jpg&quot;,&quot;width&quot;:125,&quot;height&quot;:125},&quot;home_default&quot;:{&quot;url&quot;:&quot;http:\/\/demo.posthemes.com\/pos_ecolife_marketplace\/254-home_default\/juicy-couture-tricot-logo-stripe-jacket.jpg&quot;,&quot;width&quot;:360,&quot;height&quot;:360},&quot;medium_default&quot;:{&quot;url&quot;:&quot;http:\/\/demo.posthemes.com\/pos_ecolife_marketplace\/254-medium_default\/juicy-couture-tricot-logo-stripe-jacket.jpg&quot;,&quot;width&quot;:452,&quot;height&quot;:452},&quot;large_default&quot;:{&quot;url&quot;:&quot;http:\/\/demo.posthemes.com\/pos_ecolife_marketplace\/254-large_default\/juicy-couture-tricot-logo-stripe-jacket.jpg&quot;,&quot;width&quot;:800,&quot;height&quot;:800}},&quot;small&quot;:{&quot;url&quot;:&quot;http:\/\/demo.posthemes.com\/pos_ecolife_marketplace\/254-small_default\/juicy-couture-tricot-logo-stripe-jacket.jpg&quot;,&quot;width&quot;:98,&quot;height&quot;:98},&quot;medium&quot;:{&quot;url&quot;:&quot;http:\/\/demo.posthemes.com\/pos_ecolife_marketplace\/254-home_default\/juicy-couture-tricot-logo-stripe-jacket.jpg&quot;,&quot;width&quot;:360,&quot;height&quot;:360},&quot;large&quot;:{&quot;url&quot;:&quot;http:\/\/demo.posthemes.com\/pos_ecolife_marketplace\/254-large_default\/juicy-couture-tricot-logo-stripe-jacket.jpg&quot;,&quot;width&quot;:800,&quot;height&quot;:800},&quot;legend&quot;:null,&quot;cover&quot;:null,&quot;id_image&quot;:&quot;254&quot;,&quot;position&quot;:&quot;1&quot;,&quot;associatedVariants&quot;:[]},{&quot;bySize&quot;:{&quot;small_default&quot;:{&quot;url&quot;:&quot;http:\/\/demo.posthemes.com\/pos_ecolife_marketplace\/255-small_default\/juicy-couture-tricot-logo-stripe-jacket.jpg&quot;,&quot;width&quot;:98,&quot;height&quot;:98},&quot;cart_default&quot;:{&quot;url&quot;:&quot;http:\/\/demo.posthemes.com\/pos_ecolife_marketplace\/255-cart_default\/juicy-couture-tricot-logo-stripe-jacket.jpg&quot;,&quot;width&quot;:125,&quot;height&quot;:125},&quot;home_default&quot;:{&quot;url&quot;:&quot;http:\/\/demo.posthemes.com\/pos_ecolife_marketplace\/255-home_default\/juicy-couture-tricot-logo-stripe-jacket.jpg&quot;,&quot;width&quot;:360,&quot;height&quot;:360},&quot;medium_default&quot;:{&quot;url&quot;:&quot;http:\/\/demo.posthemes.com\/pos_ecolife_marketplace\/255-medium_default\/juicy-couture-tricot-logo-stripe-jacket.jpg&quot;,&quot;width&quot;:452,&quot;height&quot;:452},&quot;large_default&quot;:{&quot;url&quot;:&quot;http:\/\/demo.posthemes.com\/pos_ecolife_marketplace\/255-large_default\/juicy-couture-tricot-logo-stripe-jacket.jpg&quot;,&quot;width&quot;:800,&quot;height&quot;:800}},&quot;small&quot;:{&quot;url&quot;:&quot;http:\/\/demo.posthemes.com\/pos_ecolife_marketplace\/255-small_default\/juicy-couture-tricot-logo-stripe-jacket.jpg&quot;,&quot;width&quot;:98,&quot;height&quot;:98},&quot;medium&quot;:{&quot;url&quot;:&quot;http:\/\/demo.posthemes.com\/pos_ecolife_marketplace\/255-home_default\/juicy-couture-tricot-logo-stripe-jacket.jpg&quot;,&quot;width&quot;:360,&quot;height&quot;:360},&quot;large&quot;:{&quot;url&quot;:&quot;http:\/\/demo.posthemes.com\/pos_ecolife_marketplace\/255-large_default\/juicy-couture-tricot-logo-stripe-jacket.jpg&quot;,&quot;width&quot;:800,&quot;height&quot;:800},&quot;legend&quot;:null,&quot;cover&quot;:&quot;1&quot;,&quot;id_image&quot;:&quot;255&quot;,&quot;position&quot;:&quot;2&quot;,&quot;associatedVariants&quot;:[]},{&quot;bySize&quot;:{&quot;small_default&quot;:{&quot;url&quot;:&quot;http:\/\/demo.posthemes.com\/pos_ecolife_marketplace\/256-small_default\/juicy-couture-tricot-logo-stripe-jacket.jpg&quot;,&quot;width&quot;:98,&quot;height&quot;:98},&quot;cart_default&quot;:{&quot;url&quot;:&quot;http:\/\/demo.posthemes.com\/pos_ecolife_marketplace\/256-cart_default\/juicy-couture-tricot-logo-stripe-jacket.jpg&quot;,&quot;width&quot;:125,&quot;height&quot;:125},&quot;home_default&quot;:{&quot;url&quot;:&quot;http:\/\/demo.posthemes.com\/pos_ecolife_marketplace\/256-home_default\/juicy-couture-tricot-logo-stripe-jacket.jpg&quot;,&quot;width&quot;:360,&quot;height&quot;:360},&quot;medium_default&quot;:{&quot;url&quot;:&quot;http:\/\/demo.posthemes.com\/pos_ecolife_marketplace\/256-medium_default\/juicy-couture-tricot-logo-stripe-jacket.jpg&quot;,&quot;width&quot;:452,&quot;height&quot;:452},&quot;large_default&quot;:{&quot;url&quot;:&quot;http:\/\/demo.posthemes.com\/pos_ecolife_marketplace\/256-large_default\/juicy-couture-tricot-logo-stripe-jacket.jpg&quot;,&quot;width&quot;:800,&quot;height&quot;:800}},&quot;small&quot;:{&quot;url&quot;:&quot;http:\/\/demo.posthemes.com\/pos_ecolife_marketplace\/256-small_default\/juicy-couture-tricot-logo-stripe-jacket.jpg&quot;,&quot;width&quot;:98,&quot;height&quot;:98},&quot;medium&quot;:{&quot;url&quot;:&quot;http:\/\/demo.posthemes.com\/pos_ecolife_marketplace\/256-home_default\/juicy-couture-tricot-logo-stripe-jacket.jpg&quot;,&quot;width&quot;:360,&quot;height&quot;:360},&quot;large&quot;:{&quot;url&quot;:&quot;http:\/\/demo.posthemes.com\/pos_ecolife_marketplace\/256-large_default\/juicy-couture-tricot-logo-stripe-jacket.jpg&quot;,&quot;width&quot;:800,&quot;height&quot;:800},&quot;legend&quot;:null,&quot;cover&quot;:null,&quot;id_image&quot;:&quot;256&quot;,&quot;position&quot;:&quot;3&quot;,&quot;associatedVariants&quot;:[]},{&quot;bySize&quot;:{&quot;small_default&quot;:{&quot;url&quot;:&quot;http:\/\/demo.posthemes.com\/pos_ecolife_marketplace\/257-small_default\/juicy-couture-tricot-logo-stripe-jacket.jpg&quot;,&quot;width&quot;:98,&quot;height&quot;:98},&quot;cart_default&quot;:{&quot;url&quot;:&quot;http:\/\/demo.posthemes.com\/pos_ecolife_marketplace\/257-cart_default\/juicy-couture-tricot-logo-stripe-jacket.jpg&quot;,&quot;width&quot;:125,&quot;height&quot;:125},&quot;home_default&quot;:{&quot;url&quot;:&quot;http:\/\/demo.posthemes.com\/pos_ecolife_marketplace\/257-home_default\/juicy-couture-tricot-logo-stripe-jacket.jpg&quot;,&quot;width&quot;:360,&quot;height&quot;:360},&quot;medium_default&quot;:{&quot;url&quot;:&quot;http:\/\/demo.posthemes.com\/pos_ecolife_marketplace\/257-medium_default\/juicy-couture-tricot-logo-stripe-jacket.jpg&quot;,&quot;width&quot;:452,&quot;height&quot;:452},&quot;large_default&quot;:{&quot;url&quot;:&quot;http:\/\/demo.posthemes.com\/pos_ecolife_marketplace\/257-large_default\/juicy-couture-tricot-logo-stripe-jacket.jpg&quot;,&quot;width&quot;:800,&quot;height&quot;:800}},&quot;small&quot;:{&quot;url&quot;:&quot;http:\/\/demo.posthemes.com\/pos_ecolife_marketplace\/257-small_default\/juicy-couture-tricot-logo-stripe-jacket.jpg&quot;,&quot;width&quot;:98,&quot;height&quot;:98},&quot;medium&quot;:{&quot;url&quot;:&quot;http:\/\/demo.posthemes.com\/pos_ecolife_marketplace\/257-home_default\/juicy-couture-tricot-logo-stripe-jacket.jpg&quot;,&quot;width&quot;:360,&quot;height&quot;:360},&quot;large&quot;:{&quot;url&quot;:&quot;http:\/\/demo.posthemes.com\/pos_ecolife_marketplace\/257-large_default\/juicy-couture-tricot-logo-stripe-jacket.jpg&quot;,&quot;width&quot;:800,&quot;height&quot;:800},&quot;legend&quot;:null,&quot;cover&quot;:null,&quot;id_image&quot;:&quot;257&quot;,&quot;position&quot;:&quot;4&quot;,&quot;associatedVariants&quot;:[]}],&quot;cover&quot;:{&quot;bySize&quot;:{&quot;small_default&quot;:{&quot;url&quot;:&quot;http:\/\/demo.posthemes.com\/pos_ecolife_marketplace\/255-small_default\/juicy-couture-tricot-logo-stripe-jacket.jpg&quot;,&quot;width&quot;:98,&quot;height&quot;:98},&quot;cart_default&quot;:{&quot;url&quot;:&quot;http:\/\/demo.posthemes.com\/pos_ecolife_marketplace\/255-cart_default\/juicy-couture-tricot-logo-stripe-jacket.jpg&quot;,&quot;width&quot;:125,&quot;height&quot;:125},&quot;home_default&quot;:{&quot;url&quot;:&quot;http:\/\/demo.posthemes.com\/pos_ecolife_marketplace\/255-home_default\/juicy-couture-tricot-logo-stripe-jacket.jpg&quot;,&quot;width&quot;:360,&quot;height&quot;:360},&quot;medium_default&quot;:{&quot;url&quot;:&quot;http:\/\/demo.posthemes.com\/pos_ecolife_marketplace\/255-medium_default\/juicy-couture-tricot-logo-stripe-jacket.jpg&quot;,&quot;width&quot;:452,&quot;height&quot;:452},&quot;large_default&quot;:{&quot;url&quot;:&quot;http:\/\/demo.posthemes.com\/pos_ecolife_marketplace\/255-large_default\/juicy-couture-tricot-logo-stripe-jacket.jpg&quot;,&quot;width&quot;:800,&quot;height&quot;:800}},&quot;small&quot;:{&quot;url&quot;:&quot;http:\/\/demo.posthemes.com\/pos_ecolife_marketplace\/255-small_default\/juicy-couture-tricot-logo-stripe-jacket.jpg&quot;,&quot;width&quot;:98,&quot;height&quot;:98},&quot;medium&quot;:{&quot;url&quot;:&quot;http:\/\/demo.posthemes.com\/pos_ecolife_marketplace\/255-home_default\/juicy-couture-tricot-logo-stripe-jacket.jpg&quot;,&quot;width&quot;:360,&quot;height&quot;:360},&quot;large&quot;:{&quot;url&quot;:&quot;http:\/\/demo.posthemes.com\/pos_ecolife_marketplace\/255-large_default\/juicy-couture-tricot-logo-stripe-jacket.jpg&quot;,&quot;width&quot;:800,&quot;height&quot;:800},&quot;legend&quot;:null,&quot;cover&quot;:&quot;1&quot;,&quot;id_image&quot;:&quot;255&quot;,&quot;position&quot;:&quot;2&quot;,&quot;associatedVariants&quot;:[]},&quot;has_discount&quot;:false,&quot;discount_type&quot;:null,&quot;discount_percentage&quot;:null,&quot;discount_percentage_absolute&quot;:null,&quot;discount_amount&quot;:null,&quot;discount_amount_to_display&quot;:null,&quot;price_amount&quot;:9,&quot;unit_price_full&quot;:&quot;&quot;,&quot;show_availability&quot;:true,&quot;availability_date&quot;:null,&quot;availability_message&quot;:&quot;&quot;,&quot;availability&quot;:&quot;available&quot;}"
												role="tabpanel">

												<div class="product-manufacturer">
													<a href="../brand/2-graphic-corner.html">
														<img src="../../img/m/2.jpg"
															class="img img-thumbnail manufacturer-logo"
															alt="Graphic Corner">
													</a>
												</div>
												<div class="product-reference">
													<label class="label">Reference </label>
													<span itemprop="sku">demo_18</span>
												</div>



												<div class="product-quantities">
													<label class="label">In stock</label>
													<span data-stock="300" data-allow-oosp="1">300 Items</span>
												</div>






												<div class="product-out-of-stock">

												</div>



												<section class="product-features">
													<p class="h6">Data sheet</p>
													<dl class="data-sheet">
														<dt class="name">Compositions</dt>
														<dd class="value">Polyester</dd>
														<dt class="name">Paper Type</dt>
														<dd class="value">Ruled</dd>
														<dt class="name">Color</dt>
														<dd class="value">White</dd>
														<dt class="name">Size</dt>
														<dd class="value">S</dd>
														<dt class="name">Frame Size</dt>
														<dd class="value">60x90cm</dd>
													</dl>
												</section>







											</div>

											<div class="tab-pane fade in" id="idTab5">
												<script type="text/javascript">
													var productcomments_controller_url = '../module/productcomments/default.html';
													var confirm_report_message = 'Are you sure that you want to report this comment?';
													var secure_key = '07238e509f7e60493569ab9b49b66794';
													var productcomments_url_rewrite = '1';
													var productcomment_added = 'Your comment has been added!';
													var productcomment_added_moderation = 'Your comment has been submitted and will be available once approved by a moderator.';
													var productcomment_title = 'New comment';
													var productcomment_ok = 'OK';
													var moderation_active = 1;
												</script>
												<div id="product_comments_block_tab">
													<div class="comment clearfix">
														<div class="comment_author">
															<span>Grade&nbsp</span>
															<div class="star_content clearfix">
																<div class="star star_on"></div>
																<div class="star star_on"></div>
																<div class="star star_on"></div>
																<div class="star star_on"></div>
																<div class="star star_on"></div>
															</div>
															<div class="comment_author_infos">
																<strong>posthemes</strong>
																<em>03/18/2019</em>
															</div>
														</div>
														<div class="comment_details">
															<h4 class="title_block">demo</h4>
															<p>OK !</p>
															<ul>
															</ul>
														</div>
													</div>
													<p class="align_center">
														<a id="new_comment_tab_btn"
															class="open-comment-form btn btn-secondary">Write your
															review !</a>
													</p>

												</div>
												<div class="container">
													<!-- Trigger the modal with a button -->
													<!-- Modal -->
													<div class="modal fade" id="myModal" role="dialog">
														<div class="modal-dialog">
															<!-- Modal content-->
															<div class="modal-content">
																<div class="modal-body">
																	<div id="new_comment_form">
																		<form id="id_new_comment_form" action="#">
																			<h2 class="title">Write your review</h2>
																			<div class="row">
																				<div
																					class="product clearfix col-xs-12 col-sm-6">
																					<img src="{{ Storage::url($product->image) }}"
																						alt="Juicy Couture Tricot Logo Stripe Jacket" />
																					<div class="product_desc">
																						<p class="product_name">
																							<strong>Juicy Couture Tricot
																								Logo Stripe
																								Jacket</strong></p>
																					</div>
																				</div>
																				<div
																					class="new_comment_form_content col-xs-12 col-sm-6">
																					<h2>Write your review</h2>
																					<div id="new_comment_form_error"
																						class="error"
																						style="display:none;padding:15px 25px">
																						<ul></ul>
																					</div>
																					<ul id="criterions_list">
																						<li>
																							<label>Quality</label>
																							<div class="star_content">
																								<input class="star"
																									type="radio"
																									name="criterion[1]"
																									value="1" />
																								<input class="star"
																									type="radio"
																									name="criterion[1]"
																									value="2" />
																								<input class="star"
																									type="radio"
																									name="criterion[1]"
																									value="3" />
																								<input class="star"
																									type="radio"
																									name="criterion[1]"
																									value="4" />
																								<input class="star"
																									type="radio"
																									name="criterion[1]"
																									value="5"
																									checked="checked" />
																							</div>
																							<div class="clearfix"></div>
																						</li>
																					</ul>
																					<label for="comment_title">Title for
																						your review<sup
																							class="required">*</sup></label>
																					<input id="comment_title"
																						name="title" type="text"
																						value="" />
																					<label for="content">Your review<sup
																							class="required">*</sup></label>
																					<textarea id="content"
																						name="content"></textarea>
																					<label>Your name<sup
																							class="required">*</sup></label>
																					<input id="commentCustomerName"
																						name="customer_name" type="text"
																						value="" />
																					<div id="new_comment_form_footer">
																						<input
																							id="id_product_comment_send"
																							name="id_product"
																							type="hidden" value='12' />
																						<p class="fl required"
																							style="margin-bottom:10px;">
																							<sup>*</sup> Required fields
																						</p>
																						<p class="fr">
																							<button
																								id="submitNewMessage"
																								class="btn btn-secondary"
																								name="submitMessage"
																								type="submit">Send</button>
																							&nbsp;
																							or&nbsp;
																							<button type="button"
																								class="closefb btn btn-secondary"
																								data-dismiss="modal"
																								aria-label="Close">
																								<span
																									aria-hidden="true">Cancel</span>
																							</button>
																						</p>
																						<div class="clearfix"></div>
																					</div>
																				</div>
																			</div>
																		</form>
																		<!-- /end new_comment_form_content -->
																	</div>
																</div>
															</div>
														</div>
													</div>
													<div class="modal fade" id="result_comment" role="dialog">
														<div class="modal-dialog">
															<div class="modal-content">
																<div class="modal-body">
																	<h2>Your comment is submitted</h2>
																</div>
															</div>
														</div>
													</div>
												</div>
												<!-- End fancybox -->

											</div>



										</div>
									</div>

								</div>
							</div>

							<div class="modal fade js-product-images-modal" id="product-modal">
								<div class="modal-dialog" role="document">
									<div class="modal-content">
										<div class="modal-body">
											<div class="view-products">
												<figure>
													<img class="js-modal-product-cover product-cover-modal" width="800"
														src="../../255-large_default/juicy-couture-tricot-logo-stripe-jacket.jpg"
														alt="" title="" itemprop="image">
													<figcaption class="image-caption">

														<div id="product-description-short" itemprop="description">
															<ul>
																<li>
																	<div>Freshen up your look with the Juicy Couture™
																		Tricot Logo Stripe Jacket.</div>
																</li>
																<li>
																	<div>Polyester fabrication flaunts stripe and brand
																		logo detail at sleeves.</div>
																</li>
																<li>
																	<div>Stand collar.</div>
																</li>
																<li>
																	<div>Front-zipper closure.</div>
																</li>
																<li>
																	<div>100% polyester.</div>
																</li>
															</ul>
														</div>

													</figcaption>
												</figure>
											</div>
											<aside id="thumbnails_modal">

												<div class="thumb-container">
													<img data-image-large-src="http://demo.posthemes.com/pos_ecolife_marketplace/254-large_default/juicy-couture-tricot-logo-stripe-jacket.jpg"
														class="thumb js-modal-thumb"
														src="../../254-home_default/juicy-couture-tricot-logo-stripe-jacket.jpg"
														alt="" title="" width="360" itemprop="image">
												</div>
												<div class="thumb-container">
													<img data-image-large-src="http://demo.posthemes.com/pos_ecolife_marketplace/255-large_default/juicy-couture-tricot-logo-stripe-jacket.jpg"
														class="thumb js-modal-thumb"
														src="../../255-home_default/juicy-couture-tricot-logo-stripe-jacket.jpg"
														alt="" title="" width="360" itemprop="image">
												</div>
												<div class="thumb-container">
													<img data-image-large-src="http://demo.posthemes.com/pos_ecolife_marketplace/256-large_default/juicy-couture-tricot-logo-stripe-jacket.jpg"
														class="thumb js-modal-thumb"
														src="../../256-home_default/juicy-couture-tricot-logo-stripe-jacket.jpg"
														alt="" title="" width="360" itemprop="image">
												</div>
												<div class="thumb-container">
													<img data-image-large-src="http://demo.posthemes.com/pos_ecolife_marketplace/257-large_default/juicy-couture-tricot-logo-stripe-jacket.jpg"
														class="thumb js-modal-thumb"
														src="../../257-home_default/juicy-couture-tricot-logo-stripe-jacket.jpg"
														alt="" title="" width="360" itemprop="image">
												</div>

											</aside>
										</div>
									</div><!-- /.modal-content -->
								</div><!-- /.modal-dialog -->
							</div><!-- /.modal -->

							<script type="text/javascript">
								$(document).ready(function () {
									$('#product-modal #thumbnails_modal').slick({
										slidesToShow: 1,
										slidesToScroll: 1,
										asNavFor: '.slider-for',
										dots: true,
										focusOnSelect: true
									});

								});
							</script>


							<footer class="page-footer">

								<!-- Footer content -->

							</footer>

							<script>

							</script>
						</section>



					</div>



				</div>

				<section class="products-accessories clearfix">
					<div class="pos_title">
						<h2>vous pourriez aussi aimer</h2>
					</div>
					<div class="row pos_content">
						<div class="product_accessoriesslide owl-carousel">


							<!-- style products default -->
							@foreach($autres as $product_category)
							<article class="style_product_default product-miniature js-product-miniature item_in"
								data-id-product="1" data-id-product-attribute="1" itemscope
								itemtype="http://schema.org/Product">
								<div class="img_block">

									<a href="{{ route('product.show',$product_category->slug) }}"
										class="thumbnail product-thumbnail">
										<img class="first-image "
											src="{{ $product->image }}"
											alt="Originals Kaval Windbreaker..."
											data-full-size-image-url="http://demo.posthemes.com/pos_ecolife_marketplace/298-large_default/originals-kaval-windbreaker-winter-jacket.jpg">
										<img class="img-responsive second-image animation9"
											src="{{ $product->image }}"
											alt="" itemprop="image" />

									</a>

									<div class="quick-view">

										<a class="quick_view" href="{{ route('product.show',$product_category->slug) }}" data-link-action="quickview" title="Quick view">
											<span>Quick view</span>
										</a>

									</div>


									<ul class="product-flag">
										<li class="new"><span>Nouveau</span></li>
									</ul>

								</div>
								<div class="product_desc">
									<div class="inner_desc">
										<div class="manufacturer"><a
												href="{{ route('product.show',$product_category->slug) }}">{{ $product_category->subtitle }}</a>
										</div>

										<h3 itemprop="name"><a
												href="{{ route('product.show',$product_category->slug) }}"
												class="product_name one_line"
												title="Originals Kaval Windbreaker Winter Jacket">{{ $product_category->title }}</a></h3>


										<div class="hook-reviews">
											<div class="comments_note" itemprop="aggregateRating" itemscope
												itemtype="https://schema.org/AggregateRating">
												<div class="star_content clearfix">
													<div class="star star_on"></div>
													<div class="star star_on"></div>
													<div class="star star_on"></div>
													<div class="star star_on"></div>
													<div class="star star_on"></div>
													<meta itemprop="worstRating" content="0" />
													<meta itemprop="ratingValue" content="4.5" />
													<meta itemprop="bestRating" content="5" />
												</div>
												<span class="nb-comments"><span itemprop="reviewCount">2</span>
													Review(s)</span>
											</div>

										</div>


										<div class="product-price-and-shipping">


											<!-- <span class="sr-only">Regular price</span>
											<span class="regular-price">€23.90</span> -->



											<span class="sr-only">Price</span>
											<span itemprop="price" class="price price-sale"> Prix : {{ $product->getPrice() }}</span>



											<!-- <span class="discount-percentage discount-product">-10%</span> -->
										</div>


										<ul class="add-to-links">
											<li class="cart">
												<div class="product-add-to-cart">
													<form action="{{route('panier.store')}}" method="post" id="add-to-cart-or-refresh">
														@csrf
														<input type="hidden" name="product_id" value="{{ $product_category->id }}">
													
														<button
															class="button ajax_add_to_cart_button add-to-cart btn-default"
														 type="submit">
															<i class="fa fa-shopping-cart"></i> + Panier
														</button>
													</form>
												</div>
											</li>
											<li>

												<a class="addToWishlist wishlistProd_1" title="Add to wishlist" href="#"
													data-rel="1"
													onclick="WishlistCart('wishlist_block_list', 'add', '1', false, 1); return false;">
													Add to wishlist
												</a>


											</li>

											<li class="compare">
												<a href="#" class="poscompare-add compare-button js-poscompare-add"
													data-id_product="1"
													onclick="posCompare.addCompare($(this),1); return false;"
													title="Add to compare"><span>Add to compare</span></a>
											</li>

										</ul>
									</div>
									<div class="availability">
										<div class="availability-list in-stock">Availability: <span>299 In Stock</span>
										</div>

									</div>

									<div class="product-desc" itemprop="description">
										<ul>
											<li>
												<div>Block out the haters with the fresh adidas® Originals Kaval
													Windbreaker Jacket.</div>
											</li>
											<li>
												<div><em>Part of the Kaval Collection.</em></div>
											</li>
											<li>
												<div>Regular fit is eased, but not sloppy, and perfect for any activity.
												</div>
											</li>
											<li>
												<div>Plain-woven jacket specifically constructed for freedom of
													movement.</div>
											</li>
										</ul>
									</div>


									<div class="variant-links">

										<div class="variant-links">
											<a href="../automobiles/1-1-originals-kaval-windbreaker-winter-jacket.html#/1-size-s/8-color-white"
												class="color" title="White" style="background-color: #ffffff"><span
													class="sr-only">White</span></a>
											<a href="../automobiles/1-2-originals-kaval-windbreaker-winter-jacket.html#/1-size-s/11-color-black"
												class="color" title="Black" style="background-color: #434A54"><span
													class="sr-only">Black</span></a>
											<span class="js-count count"></span>
										</div>

									</div>

								</div>
							</article>
							@endforeach
							<!-- end style products default -->

				
						</div>
					</div>
				</section>


				<section class="categoryproducts clearfix">
					<div class="pos_title">
						<h2>
							Autres produits dans la même catégorie:
						</h2>
					</div>
					<div class="row pos_content">
						<div class="product_categoryslide owl-carousel">

							<!-- style products default -->
							@foreach($meme_categorys as $meme_category)
							<article class="style_product_default product-miniature js-product-miniature item_in"
								data-id-product="1" data-id-product-attribute="1" itemscope
								itemtype="http://schema.org/Product">
								<div class="img_block">

									<a href="{{ route('product.show',$meme_category->slug) }}"
										class="thumbnail product-thumbnail">
										<img class="first-image "
											src="{{ $meme_category->image }}"
											alt="Originals Kaval Windbreaker..."
											data-full-size-image-url="../../298-large_default/originals-kaval-windbreaker-winter-jacket.jpg">
										<img class="img-responsive second-image animation9"
											src="{{$meme_category->image}}"
											alt="" itemprop="image" />

									</a>

									<div class="quick-view">

										<a class="quick_view" href="#" data-link-action="quickview" title="Quick view">
											<span>Quick view</span>
										</a>

									</div>


									<ul class="product-flag">
										<li class="discount"><span>-10%</span></li>
										<li class="new"><span>New</span></li>
									</ul>

								</div>
								<div class="product_desc">
									<div class="inner_desc">
										<div class="manufacturer"><a
												href="../brand/1-studio-design.html?id_manufacturer=1">Studio Design</a>
										</div>

										<h3 itemprop="name"><a
												href="{{ route('product.show',$meme_category->slug) }}"
												class="product_name one_line"
												title="Originals Kaval Windbreaker Winter Jacket">{{ $meme_category->title }}</a></h3>


										<div class="hook-reviews">
											<div class="comments_note" itemprop="aggregateRating" itemscope
												itemtype="https://schema.org/AggregateRating">
												<div class="star_content clearfix">
													<div class="star star_on"></div>
													<div class="star star_on"></div>
													<div class="star star_on"></div>
													<div class="star star_on"></div>
													<div class="star star_on"></div>
													<meta itemprop="worstRating" content="0" />
													<meta itemprop="ratingValue" content="4.5" />
													<meta itemprop="bestRating" content="5" />
												</div>
												<span class="nb-comments"><span itemprop="reviewCount">2</span>
													Review(s)</span>
											</div>

										</div>


										<div class="product-price-and-shipping">


											<span class="sr-only">Regular price</span>
											<span class="regular-price">€23.90</span>



											<span class="sr-only">Price</span>
											<span itemprop="price" class="price price-sale">€21.51</span>



											<span class="discount-percentage discount-product">-10%</span>
										</div>


										<ul class="add-to-links">
											<li class="cart">
												<div class="product-add-to-cart">
													<form
														action="http://demo.posthemes.com/pos_ecolife_marketplace/en/cart"
														method="post" class="add-to-cart-or-refresh">
														<input type="hidden" name="token"
															value="203b2fb46b107eabda9dd64ae8ebc173">
														<input type="hidden" name="id_product" value="1"
															class="product_page_product_id">
														<input type="hidden" name="qty" value="1">
														<button
															class="button ajax_add_to_cart_button add-to-cart btn-default"
															data-button-action="add-to-cart" type="submit">
															<i class="fa fa-shopping-cart"></i> Add to cart
														</button>
													</form>
												</div>
											</li>
											<li>

												<a class="addToWishlist wishlistProd_1" title="Add to wishlist" href="#"
													data-rel="1"
													onclick="WishlistCart('wishlist_block_list', 'add', '1', false, 1); return false;">
													Add to wishlist
												</a>


											</li>

											<li class="compare">
												<a href="#" class="poscompare-add compare-button js-poscompare-add"
													data-id_product="1"
													onclick="posCompare.addCompare($(this),1); return false;"
													title="Add to compare"><span>Add to compare</span></a>
											</li>

										</ul>
									</div>
									<div class="availability">
										<div class="availability-list in-stock">Availability: <span>299 In Stock</span>
										</div>

									</div>

									<div class="product-desc" itemprop="description">
										<ul>
											<li>
												<div>Block out the haters with the fresh adidas® Originals Kaval
													Windbreaker Jacket.</div>
											</li>
											<li>
												<div><em>Part of the Kaval Collection.</em></div>
											</li>
											<li>
												<div>Regular fit is eased, but not sloppy, and perfect for any activity.
												</div>
											</li>
											<li>
												<div>Plain-woven jacket specifically constructed for freedom of
													movement.</div>
											</li>
										</ul>
									</div>


									<div class="variant-links">

										<div class="variant-links">
											<a href="../automobiles/1-1-originals-kaval-windbreaker-winter-jacket.html#/1-size-s/8-color-white"
												class="color" title="White" style="background-color: #ffffff"><span
													class="sr-only">White</span></a>
											<a href="../automobiles/1-2-originals-kaval-windbreaker-winter-jacket.html#/1-size-s/11-color-black"
												class="color" title="Black" style="background-color: #434A54"><span
													class="sr-only">Black</span></a>
											<span class="js-count count"></span>
										</div>

									</div>

								</div>
							</article>
							@endforeach

						</div>
					</div>
				</section>



			</div>


		</div>


@endsection

@section('footersection')
<script type="text/javascript"
		src="{{asset('user/css/themes/theme_ecolife_marketplace1/assets/cache/bottom-23ed8515.js')}}"></script>
@endsection