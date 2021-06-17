@extends('user.layouts.app',['title' => 'acceuil'])
@section('body')
	<body itemscope itemtype="http://schema.org/WebPage" id="index"
	class="lang-en country-us currency-usd layout-full-width page-index tax-display-disabled">
@endsection
@section('main-content')

		<div class=" pos_bannerslide">
			<div class=" container-fluid">
				<div class=" row">
					<div class="col-left col-sm-12 col-xl-3">
					</div>
					<div class="col-right col-xl-9 col-sm-12 position-static">
						<div class="slideshow_container" data-speed="600" data-time="6000" data-nav="false"
							data-pag="true" data-pausehover="hover">
							<div class="pos-slideshow">
								<div class="flexslider ma-nivoslider">
									<div class="pos-loading"><span></span><img
											src="{{asset('user/modules/posslideshows/images/sample-1.jpg')}}" alt="" /></div>
									<div id="pos-slideshow-home" class="slides">

										<a href="{{ route('product.index') }}" title="slide show1"><img
												style="display:none" src="{{asset('user/modules/posslideshows/images/sample-1.jpg')}}"
												data-thumb="{{asset('user/modules/posslideshows/images/sample-1.jpg')}}"
												alt="" title="#htmlcaption1" /> </a>
										<a href="{{ route('product.index') }}" title="slide show2"><img
												style="display:none" src="{{asset('user/modules/posslideshows/images/sample-2.jpg')}}"
												data-thumb="{{asset('user/modules/posslideshows/images/sample-2.jpg')}}"
												alt="" title="#htmlcaption2" /> </a>
									</div>
									<div id="htmlcaption1" class="pos-slideshow-caption nivo-html-caption nivo-caption">
										<div class="timethai" style=" 
								position:absolute;
								top:0;
								left:0;
								z-index:8;
								background-color: rgba(49, 56, 72, 0.298);
								height:5px;
								-webkit-animation: myfirst 6000ms ease-in-out;
								-moz-animation: myfirst 6000ms ease-in-out;
								-ms-animation: myfirst 6000ms ease-in-out;
								animation: myfirst 6000ms ease-in-out;
							
							">
										</div>
										<div class="banner7-des">
											<div class="container">
												<div class="desc_slideshow desc_slideshow_0 position_left">
													<div class="info">

														<h5 data-animation="animated fadeInDown "
															class="transition_slide_0">Prix 5.000 f</h5>


														<h2 data-animation="animated fadeInLeft "
															class="transition_slide_1">samsung gear S3</h2>


														<h3 data-animation="animated fadeInRight "
															class="transition_slide_2">Classique & amp; Frontière</h3>


														<p data-animation="animated fadeInUp "
															class="transition_slide_3">Construire pour un esprit pionnier</p>


														<a href="{{ route('product.index') }}"
															data-animation="animated zoomIn"
															class="readmore transition_slide_4">Achetez maintenant</a>

													</div>
												</div>
											</div>
										</div>
									</div>
									<div id="htmlcaption2" class="pos-slideshow-caption nivo-html-caption nivo-caption">
										<div class="timethai" style=" 
								position:absolute;
								top:0;
								left:0;
								z-index:8;
								background-color: rgba(49, 56, 72, 0.298);
								height:5px;
								-webkit-animation: myfirst 6000ms ease-in-out;
								-moz-animation: myfirst 6000ms ease-in-out;
								-ms-animation: myfirst 6000ms ease-in-out;
								animation: myfirst 6000ms ease-in-out;
							
							">
										</div>
										<div class="banner7-des">
											<div class="container">
												<div class="desc_slideshow desc_slideshow_1 position_left">
													<div class="info">

														<h5 data-animation="animated fadeInRight "
															class="transition_slide_0">Anker soundcode</h5>


														<h2 data-animation="animated fadeInUp "
															class="transition_slide_1">Spirit Mpow X2</h2>


														<h3 data-animation="animated fadeInLeft "
															class="transition_slide_2">Véritables écouteurs sans fil</h3>


														<p data-animation="animated fadeInDown "
															class="transition_slide_3">Qualité sonore HD. À l'aise Porter équilibré</p>


														<a href="{{ route('product.index') }}"
															data-animation="animated zoomIn"
															class="readmore transition_slide_4">Achetez maintenant</a>

													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						<script type="text/javascript">
							$(document).ready(function () {
								//Function to animate slider captions 
								function doAnimations(elems) {
									//Cache the animationend event in a variable
									var animEndEv = 'webkitAnimationEnd animationend';

									elems.each(function () {
										var $this = $(this),
											$animationType = $this.data('animation');
										$this.addClass($animationType).one(animEndEv, function () {
											$this.removeClass($animationType);
										});
									});
								}
								//Variables on page load 
								var $myCarousel = $('.ma-nivoslider'),
									$firstAnimatingElems = $myCarousel.find('.nivo-caption').find("[data-animation ^= 'animated']");
								//Animate captions in first slide on page load 
								doAnimations($firstAnimatingElems);

							});
						</script>
					</div>

				</div>
			</div>
		</div>


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






							<section id="content" class="page-home">

								<div class="static_cms">
									<div class="row">
										<div class="col-cms">
											<div class="box_cms"><img src="{{asset('user/img/cms/icon_cms1.png')}}" alt=""
													class="img-responsive" />
												<div class="txt_cms">
													<h2>Livraison gratuite</h2>
													<p>Sur toutes les commandes de plus de 2000 f</p>
												</div>
											</div>
										</div>
										<div class="col-cms">
											<div class="box_cms"><img src="{{asset('user/img/cms/icon_cms2.png')}}" alt=""
													class="img-responsive" />
												<div class="txt_cms">
													<h2>Retours sans frais</h2>
													<p>Les retours sont gratuits sous 9 jours</p>
												</div>
											</div>
										</div>
										<div class="col-cms">
											<div class="box_cms"><img src="{{asset('user/img/cms/icon_cms3.png')}}" alt=""
													class="img-responsive" />
												<div class="txt_cms">
													<h2>Paiement 100% sécurisé</h2>
													<p>Votre paiement est en sécurité avec nous.</p>
												</div>
											</div>
										</div>
										<div class="col-cms">
											<div class="box_cms"><img src="{{asset('user/img/cms/icon_cms4.png')}}" alt=""
													class="img-responsive" />
												<div class="txt_cms">
													<h2>Assistance 24/7</h2>
													<p>Contactez-nous 24h / 24</p>
												</div>
											</div>
										</div>
										<div class="col-cms">
											<div class="box_cms"><img src="{{asset('user/img/cms/icon_cms5.png')}}" alt=""
													class="img-responsive" />
												<div class="txt_cms">
													<h2>Rabais pour les membres</h2>
													<p>Chaque commande de plus de 2000 f</p>
												</div>
											</div>
										</div>
									</div>
								</div>
								<!-- Popular Categories -->
								<div class="poslistcategories">
									<div class="pos_title">
										<h2>Catégories populaires</h2>
									</div>
									<div class="row pos_content">
										<div class="block_content owl-carousel">
											@foreach($populars as $bolck_poupulars)
												<div class="item-listcategories">
													@foreach($bolck_poupulars as $popular)
														<div class="list-categories">
															<div class="thumb-category">
																<a href="{{ route('product.index', ['categorie'
																=> $popular->slug]) }}"><img
																		src="{{Storage::url($popular->image)}}"
																		alt="" /></a>
															</div>
															<div class="desc-listcategoreis">
																<div class="name_categories">
																	<h4>{{$popular->name}}</h4>
																</div>
																<div class="number_product">{{ count($popular->categories) }} Produits</div>
																<div class="view-more"><a href="{{ route('product.index', ['categorie'
															=> $popular->slug]) }}"> Boutique À présent</a></div>
															</div>

														</div>


														<!-- <div class="list-categories">
															<div class="thumb-category">
																<a href="{{ route('product.index', ['categorie'
																=> $popular->slug]) }}"><img
																		src="{{$popular->image}}"
																		alt="" /></a>
															</div>
															<div class="desc-listcategoreis">
																<div class="name_categories">
																	<h4>{{$popular->name}}</h4>
																</div>
																<div class="number_product">{{ count($popular->categories) }} Produits</div>
																<div class="view-more"><a href="{{ route('product.index', ['categorie'
															=> $popular->slug]) }}"> Boutique À présent</a></div>
															</div>

														</div> -->
													@endforeach
												</div>
											@endforeach
										</div>
									</div>
								</div>
								<!-- end Popular Categories -->
								<script type="text/javascript">
									$(document).ready(function () {
										var poslistcategories = $(".poslistcategories .block_content");
										poslistcategories.owlCarousel({
											autoplay: false,
											smartSpeed: 1000,
											nav: true,
											dots: false,
											responsive: {
												0: {
													items: 1,
												},
												360: {
													items: 1,
												},
												576: {
													items: 2,

												},
												768: {
													items: 2,
												},
												992: {
													items: 3,
												},
												1600: {
													items: 4,
												}
											}
										});
										checkClasses();
										poslistcategories.on('translated.owl.carousel', function (event) {
											checkClasses();
										});

										function checkClasses() {
											var total = $('.poslistcategories .item-listcategories .owl-stage .owl-item.active').length;
											$('.poslistcategories ').each(function () {
												$(this).find('.owl-item').removeClass('firstActiveItem');
												$(this).find('.owl-item').removeClass('lastActiveItem');
												$(this).find('.owl-item.active').each(function (index) {
													if (index === 0) { $(this).addClass('firstActiveItem'); }
													if (index === total - 1 && total > 1) {
														$(this).addClass('lastActiveItem');
													}
												})
											});
										}
									});
								</script>
								<!-- 	Hot Deals -->
									<div class="pos-special-products " data-items="6" data-speed="1000" data-autoplay="0"
										data-time="3000" data-arrow="1" data-pagination="0" data-move="1"
										data-pausehover="0" data-lg="4" data-md="3" data-sm="2" data-xs="1" data-xxs="1">
										<div class="pos_title">
											<h2>
												
											Bonnes affaires
											</h2>

										</div>
										<div class="row pos_content">
											<div class="special-item owl-carousel">

											@foreach($products as $product)
												<div class="item-product">
													<article
														class="style_product_default product-miniature js-product-miniature item_in"
														data-id-product="1" data-id-product-attribute="1" itemscope
														itemtype="http://schema.org/Product">
														<div class="img_block">

															<a href="{{ route('product.show',$product->slug) }}"
																class="thumbnail product-thumbnail">
																<img class="first-image "
																	src="{{Storage::url($product->image)}}"
																	alt="Originals Kaval Windbreaker..."
																	data-full-size-image-url="{{Storage::url($product->image)}}">
																<img class="img-responsive second-image animation9"
																	src="{{Storage::url($product->image)}}"
																	alt="" itemprop="image" />

															</a>

															<div class="quick-view">

																<a class="quick_view" href="{{ route('product.show',$product->slug) }}" data-link-action="quickview"
																	title="Quick view">
																	<span>Quick view</span>
																</a>

															</div>


															<ul class="product-flag">
																<li class="discount"><span>-10%</span></li>
																<li class="new"><span>New</span></li>
															</ul>

															<div class="countdown">
																<div class="title_countdown">:</div>
																<div class='time_count_down' data-years="Years"
																	data-year="Year" data-months="Months" data-month="Month"
																	data-weeks="Weeks" data-week="Week" data-days="Days"
																	data-day="Day" data-hours="Hours" data-hour="Hour"
																	data-minutes="Mins" data-minute="Min"
																	data-seconds="Secs" data-second="Sec">
																	<span class="future_date_109_1 time_countdown"
																		data-date-y='2025' data-date-m='02' data-date-d='19'
																		data-date-h='00' data-date-mi='00' data-date-s='00'>
																	</span>
																</div>
															</div>



															<span id="future_date_109_1" class="id_countdown"></span>
															<div class="clearfix"></div>
														</div>
														<div class="product_desc">
															<div class="inner_desc">
																<div class="manufacturer"><a
																		href="{{ route('product.show',$product->slug) }}">{{$product->subtitle}}</a></div>

																<h3 itemprop="name"><a
																		href="{{ route('product.show',$product->slug) }}"
																		class="product_name one_line"
																		title="Originals Kaval Windbreaker Winter Jacket">{{ $product->title }}</a></h3>


																<div class="hook-reviews">
																	<div class="comments_note" itemprop="aggregateRating"
																		itemscope
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
																		<span class="nb-comments"><span
																				itemprop="reviewCount">2</span>
																			Review(s)</span>
																	</div>

																</div>


																<div class="product-price-and-shipping">


																	<span class="sr-only">Regular price</span>
																	<span class="regular-price">$23.90</span>



																	<span class="sr-only">Prix</span>
																	<span itemprop="price"
																		class="price price-sale">{{ $product->getPrice() }} </span>



																	<span
																		class="discount-percentage discount-product">-10%</span>
																</div>


																<ul class="add-to-links">
																	<li class="cart">
																		<div class="product-add-to-cart">
																			<form action="{{route('panier.store')}}" method="post" class="add-to-cart-or-refresh">
																				@csrf
																				<input type="hidden" name="product_id" value="{{ $product->id }}">
																				<button
																					class="button ajax_add_to_cart_button add-to-cart btn-default"
																					
																					type="submit">
																					<i class="fab fa-shopping-cart"></i>Ajouter
																				</button>
																			</form>
																		</div>
																	</li>
																	<li>

																		<a class="addToWishlist wishlistProd_1"
																			title="Add to wishlist" href="#" data-rel="1"
																			onclick="WishlistCart('wishlist_block_list', 'add', '1', false, 1); return false;">
																			Add to wishlist
																		</a>


																	</li>

																	<li class="compare">
																		<a href="#"
																			class="poscompare-add compare-button js-poscompare-add"
																			data-id_product="1"
																			onclick="posCompare.addCompare($(this),1); return false;"
																			title="Add to compare"><span>Add to
																				compare</span></a>
																	</li>

																</ul>
															</div>
															<div class="availability">
																<div class="availability-list in-stock">Availability:
																	<span>299 In Stock</span></div>

															</div>


															<div class="product-desc" itemprop="description">
																<ul>
																	<li>
																		<div>Block out the haters with the fresh adidas®
																			Originals Kaval Windbreaker Jacket.</div>
																	</li>
																	<li>
																		<div><em>Part of the Kaval Collection.</em></div>
																	</li>
																	<li>
																		<div>Regular fit is eased, but not sloppy, and
																			perfect for any activity.</div>
																	</li>
																	<li>
																		<div>Plain-woven jacket specifically constructed for
																			freedom of movement.</div>
																	</li>
																</ul>
															</div>


															<div class="variant-links">

																<div class="variant-links">
																	<a href="{{ route('product.show',$product->slug) }}"
																		class="color" title="White"
																		style="background-color: #ffffff"><span
																			class="sr-only">White</span></a>
																	<a href="{{ route('product.show',$product->slug) }}"
																		class="color" title="Black"
																		style="background-color: #434A54"><span
																			class="sr-only">Black</span></a>
																	<span class="js-count count"></span>
																</div>

															</div>

														</div>
													</article>
												</div>
											@endforeach

											</div>
										</div>
									</div>
								<!-- end 	Hot Deals -->
							</section>



							<footer class="page-footer">

								<!-- Footer content -->

							</footer>


						</section>



					</div>



				</div>

			</div>
			<div class="container">
				<div class="home-banner">
					<div class="row">
						<div class="col col-md-6 col-xs-12">
							<div class="banner-box"><a href="{{ route('product.index') }}"><img src="{{asset('user/img/cms/1_1.jpg')}}" alt="" /></a></div>
						</div>
						<div class="col col-md-6 col-xs-12">
							<div class="banner-box"><a href="{{ route('product.index') }}"><img src="{{asset('user/img/cms/2_1.jpg')}}" alt="" /></a></div>
						</div>
					</div>
				</div>
				<!-- Best Sellers -->
				<div class="pos_bestsellers_product  product_block_container" data-items="4" data-speed="1000"
					data-autoplay="0" data-time="3000" data-arrow="1" data-pagination="0" data-move="1"
					data-pausehover="0" data-lg="3" data-md="2" data-sm="2" data-xs="1" data-xxs="1">
					<div class="pos_title">
						<h2>
							Meilleurs vente
						</h2>

					</div>

					<div class="row pos_content">
						<div class="bestsellerSlide owl-carousel ">
							@foreach($hotdeals as $block_products)
								<div class="item-product">
									@foreach($block_products as $product)
									<article class="style_product_default product-miniature js-product-miniature item_in"
										data-id-product="12" data-id-product-attribute="0" itemscope
										itemtype="http://schema.org/Product">
										<div class="img_block">

											<a href="{{ route('product.show',$product->slug) }}"
												class="thumbnail product-thumbnail">
												<img class="first-image "
													src="{{ Storage::url($product->image) }}"
													alt="Juicy Couture Tricot Logo..."
													data-full-size-image-url="{{ Storage::url($product->image) }}">

											</a>

											<div class="quick-view">

												<a class="quick_view" href="{{ route('product.show',$product->slug) }}" data-link-action="quickview"
													title="Aperçu rapide">
													<span>Aperçu rapide</span>
												</a>

											</div>
										</div>
										<div class="product_desc">
											<div class="manufacturer"><a
													href="{{ route('product.show',$product->slug) }}">{{ $product->subtitle}}</a>
											</div>

											<h3 itemprop="name"><a
													href="{{ route('product.show',$product->slug) }}"
													class="product_name one_line"
													title="Juicy Couture Tricot Logo Stripe Jacket">{{ $product->title}}</a></h3>


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
														<meta itemprop="ratingValue" content="5" />
														<meta itemprop="bestRating" content="5" />
													</div>
													<span class="nb-comments"><span itemprop="reviewCount">1</span>
														Review(s)</span>
												</div>

											</div>


											<div class="product-price-and-shipping">



												<span class="sr-only">Prix</span>
												<span itemprop="price" class="price ">{{ $product->getPrice() }}</span>



											</div>


										</div>
									</article>


									<article class="style_product_default product-miniature js-product-miniature item_in"
										data-id-product="12" data-id-product-attribute="0" itemscope
										itemtype="http://schema.org/Product">
										<div class="img_block">

											<a href="{{ route('product.show',$product->slug) }}"
												class="thumbnail product-thumbnail">
												<img class="first-image "
													src="{{ Storage::url($product->image) }}"
													alt="Juicy Couture Tricot Logo..."
													data-full-size-image-url="{{ Storage::url($product->image) }}">

											</a>

											<div class="quick-view">

												<a class="quick_view" href="{{ route('product.show',$product->slug) }}" data-link-action="quickview"
													title="Aperçu rapide">
													<span>Aperçu rapide</span>
												</a>

											</div>
										</div>
										<div class="product_desc">
											<div class="manufacturer"><a
													href="{{ route('product.show',$product->slug) }}">{{ $product->subtitle}}</a>
											</div>

											<h3 itemprop="name"><a
													href="{{ route('product.show',$product->slug) }}"
													class="product_name one_line"
													title="Juicy Couture Tricot Logo Stripe Jacket">{{ $product->title}}</a></h3>


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
														<meta itemprop="ratingValue" content="5" />
														<meta itemprop="bestRating" content="5" />
													</div>
													<span class="nb-comments"><span itemprop="reviewCount">1</span>
														Review(s)</span>
												</div>

											</div>


											<div class="product-price-and-shipping">



												<span class="sr-only">Prix</span>
												<span itemprop="price" class="price ">{{ $product->getPrice() }}</span>



											</div>


										</div>
									</article>
									@endforeach
								</div>
							@endforeach
						</div>
					</div>
				</div>

				<!-- Debut des electronic -->
				<div class="poslistcateproduct poslistcateproduct_0 product_container" data-items="5" data-speed="1000"
					data-autoplay="0" data-time="0" data-arrow="1" data-pagination="0" data-move="0" data-pausehover="0"
					data-lg="3" data-md="2" data-sm="2" data-xs="2" data-xxs="1">
					<div class="pos_title">
						<h2>
							<span>Electronics</span>
						</h2>
					</div>
					<div class="row">
						<div class="col-left col-xs-12 col-md-6 col-lg-5 col-xl-4">
							<div class="banner-box">
								<a href="{{ route('product.index') }}"><img
										src="{{asset('user/modules/poslistcateproduct/images/thumb-1.jpg')}}" alt="" /></a>
							</div>
						</div>
						<div class="col-right col-xs-12 col-md-6 col-lg-7 col-xl-8">
							<div class="listcateproduct-products">
								<div class="row pos_content">
									<div class="listcateSlide owl-carousel">
										@foreach($products as $product)
										<div class="item-product">
											<article
												class="style_product_default product-miniature js-product-miniature item_in"
												data-id-product="7" data-id-product-attribute="0" itemscope
												itemtype="{{ route('product.show',$product->slug) }}">
												<div class="img_block">

													<a href="{{ route('product.show',$product->slug) }}"
														class="thumbnail product-thumbnail">
														<img class="first-image "
															src="{{ Storage::url($product->image) }}"
															alt="Trans-Weight Hooded Wind..."
															data-full-size-image-url="{{ Storage::url($product->image) }}">
														<img class="img-responsive second-image animation9"
															src="{{ Storage::url($product->image) }}"
															alt="" itemprop="image" />

													</a>

													<div class="quick-view">

														<a class="quick_view" href="{{ route('product.show',$product->slug) }}" data-link-action="quickview"
															title="Aperçu rapide">
															<span>Aperçu rapide</span>
														</a>

													</div>


													<ul class="product-flag">
														<li class="new"><span>New</span></li>
													</ul>

												</div>
												<div class="product_desc">
													<div class="inner_desc">
														<div class="manufacturer"><a
																href="{{ route('product.show',$product->slug) }}">{{$product->subtitle}}</a></div>

														<h3 itemprop="name"><a
																href="{{ route('product.show',$product->slug) }}"
																class="product_name one_line"
																title="Trans-Weight Hooded Wind and Water Resistant Shell">{{$product->title}}</a></h3>


														<div class="hook-reviews">
															<div class="comments_note" itemprop="aggregateRating"
																itemscope itemtype="https://schema.org/AggregateRating">
																<div class="star_content clearfix">
																	<div class="star star_on"></div>
																	<div class="star star_on"></div>
																	<div class="star star_on"></div>
																	<div class="star star_on"></div>
																	<div class="star"></div>
																	<meta itemprop="worstRating" content="0" />
																	<meta itemprop="ratingValue" content="4" />
																	<meta itemprop="bestRating" content="5" />
																</div>
																<span class="nb-comments"><span
																		itemprop="reviewCount">1</span> Review(s)</span>
															</div>

														</div>


														<div class="product-price-and-shipping">



															<span class="sr-only">Prix</span>
															<span itemprop="price" class="price ">{{ $product->getPrice() }}</span>



														</div>


														<ul class="add-to-links">
															<li class="cart">
																<div class="product-add-to-cart">
																	<form action="{{route('panier.store')}}" method="post" class="add-to-cart-or-refresh">
																		@csrf
																		<input type="hidden" name="product_id" value="{{ $product->id }}">
																		<button
																			class="button ajax_add_to_cart_button add-to-cart btn-default"
																			
																			type="submit">
																			<i class="fab fa-shopping-cart"></i>Ajouter
																		</button>
																	</form>
																	
																</div>
															</li>
															<li>

																<a class="addToWishlist wishlistProd_7"
																	title="Add to wishlist" href="#" data-rel="7"
																	onclick="WishlistCart('wishlist_block_list', 'add', '7', false, 1); return false;">
																	Add to wishlist
																</a>


															</li>

															<li class="compare">
																<a href="#"
																	class="poscompare-add compare-button js-poscompare-add"
																	data-id_product="7"
																	onclick="posCompare.addCompare($(this),7); return false;"
																	title="Add to compare"><span>Add to
																		compare</span></a>
															</li>

														</ul>
													</div>
													<div class="availability">
														<div class="availability-list in-stock">Availability: <span>300
																In Stock</span></div>

													</div>

													<div class="product-desc" itemprop="description">
														<ul>
															<li>
																<div>Keep the elements away and warmth priority number
																	one in this Nautica® Trans-Weight Hooded Wind and
																	Water Resistant Shell.</div>
															</li>
															<li>
																<div>Hooded collar with a high collar for maximum
																	coverage.</div>
															</li>
															<li>
																<div>Long sleeves with banded collars.</div>
															</li>
															<li>
																<div>Zip front closure.</div>
															</li>
														</ul>
													</div>


													<div class="variant-links">


													</div>

												</div>
											</article>
										</div>
										@endforeach

									</div>
								</div>
							</div>
						</div>
					</div>

				</div>
				<!-- Fin des electronic  -->
				<!-- Debut des Funiture & Lights -->
				<div class="poslistcateproduct poslistcateproduct_0 product_container" data-items="5" data-speed="1000"
					data-autoplay="0" data-time="0" data-arrow="1" data-pagination="0" data-move="0" data-pausehover="0"
					data-lg="3" data-md="2" data-sm="2" data-xs="2" data-xxs="1">
					<div class="pos_title">
						<h2>
							<span>Funiture & Lights</span>
						</h2>
					</div>
					<div class="row">
						<div class="col-left col-xs-12 col-md-6 col-lg-5 col-xl-4">
							<div class="banner-box">
								<a href="{{ route('product.index') }}"><img
										src="{{asset('user/modules/poslistcateproduct/images/thumb-2.jpg')}}" alt="" /></a>
							</div>
						</div>
						<div class="col-right col-xs-12 col-md-6 col-lg-7 col-xl-8">
							<div class="listcateproduct-products">
								<div class="row pos_content">
									<div class="listcateSlide owl-carousel">
										@foreach($products as $product)
										<div class="item-product">
											<article
												class="style_product_default product-miniature js-product-miniature item_in"
												data-id-product="7" data-id-product-attribute="0" itemscope
												itemtype="http://schema.org/Product">
												<div class="img_block">

													<a href="{{ route('product.show',$product->slug) }}"
														class="thumbnail product-thumbnail">
														<img class="first-image "
															src="{{ Storage::url($product->image) }}"
															alt="Trans-Weight Hooded Wind..."
															data-full-size-image-url="{{ Storage::url($product->image) }}">
														<img class="img-responsive second-image animation9"
															src="{{ Storage::url($product->image) }}"
															alt="" itemprop="image" />

													</a>

													<div class="quick-view">

														<a class="quick_view" href="{{ route('product.show',$product->slug) }}" data-link-action="quickview"
															title="Aperçu rapide">
															<span>Aperçu rapide</span>
														</a>

													</div>


													<ul class="product-flag">
														<li class="new"><span>New</span></li>
													</ul>

												</div>
												<div class="product_desc">
													<div class="inner_desc">
														<div class="manufacturer"><a
																href="{{ route('product.show',$product->slug) }}">{{$product->subtitle}}</a></div>

														<h3 itemprop="name"><a
																href="{{ route('product.show',$product->slug) }}"
																class="product_name one_line"
																title="Trans-Weight Hooded Wind and Water Resistant Shell">{{$product->title}}</a></h3>


														<div class="hook-reviews">
															<div class="comments_note" itemprop="aggregateRating"
																itemscope itemtype="https://schema.org/AggregateRating">
																<div class="star_content clearfix">
																	<div class="star star_on"></div>
																	<div class="star star_on"></div>
																	<div class="star star_on"></div>
																	<div class="star star_on"></div>
																	<div class="star"></div>
																	<meta itemprop="worstRating" content="0" />
																	<meta itemprop="ratingValue" content="4" />
																	<meta itemprop="bestRating" content="5" />
																</div>
																<span class="nb-comments"><span
																		itemprop="reviewCount">1</span> Review(s)</span>
															</div>

														</div>


														<div class="product-price-and-shipping">



															<span class="sr-only">Prix</span>
															<span itemprop="price" class="price ">{{ $product->getPrice() }}</span>



														</div>


														<ul class="add-to-links">
															<li class="cart">
																<div class="product-add-to-cart">
																	<form action="{{route('panier.store')}}" method="post" class="add-to-cart-or-refresh">
																		@csrf
																		<input type="hidden" name="product_id" value="{{ $product->id }}">
																		<button
																			class="button ajax_add_to_cart_button add-to-cart btn-default"
																			
																			type="submit">
																			<i class="fab fa-shopping-cart"></i>Ajouter
																		</button>
																	</form>
																</div>
															</li>
															<li>

																<a class="addToWishlist wishlistProd_7"
																	title="Add to wishlist" href="#" data-rel="7"
																	onclick="WishlistCart('wishlist_block_list', 'add', '7', false, 1); return false;">
																	Add to wishlist
																</a>


															</li>

															<li class="compare">
																<a href="#"
																	class="poscompare-add compare-button js-poscompare-add"
																	data-id_product="7"
																	onclick="posCompare.addCompare($(this),7); return false;"
																	title="Add to compare"><span>Add to
																		compare</span></a>
															</li>

														</ul>
													</div>
													<div class="availability">
														<div class="availability-list in-stock">Availability: <span>300
																In Stock</span></div>

													</div>

													<div class="product-desc" itemprop="description">
														<ul>
															<li>
																<div>Keep the elements away and warmth priority number
																	one in this Nautica® Trans-Weight Hooded Wind and
																	Water Resistant Shell.</div>
															</li>
															<li>
																<div>Hooded collar with a high collar for maximum
																	coverage.</div>
															</li>
															<li>
																<div>Long sleeves with banded collars.</div>
															</li>
															<li>
																<div>Zip front closure.</div>
															</li>
														</ul>
													</div>


													<div class="variant-links">


													</div>

												</div>
											</article>
										</div>
										@endforeach

									</div>
								</div>
							</div>
						</div>
					</div>

				</div>
				<!-- Fin des Funiture & Lights -->
				<!-- Debut des Fashion  -->
				<div class="poslistcateproduct poslistcateproduct_0 product_container" data-items="5" data-speed="1000"
					data-autoplay="0" data-time="0" data-arrow="1" data-pagination="0" data-move="0" data-pausehover="0"
					data-lg="3" data-md="2" data-sm="2" data-xs="2" data-xxs="1">
					<div class="pos_title">
						<h2>
							<span>Fashion</span>
						</h2>
					</div>
					<div class="row">
						<div class="col-left col-xs-12 col-md-6 col-lg-5 col-xl-4">
							<div class="banner-box">
								<a href="{{ route('product.index') }}"><img
										src="{{asset('user/modules/poslistcateproduct/images/thumb-3.jpg')}}" alt="" /></a>
							</div>
						</div>
						<div class="col-right col-xs-12 col-md-6 col-lg-7 col-xl-8">
							<div class="listcateproduct-products">
								<div class="row pos_content">
									<div class="listcateSlide owl-carousel">
										@foreach($products as $product)
										<div class="item-product">
											<article
												class="style_product_default product-miniature js-product-miniature item_in"
												data-id-product="7" data-id-product-attribute="0" itemscope
												itemtype="http://schema.org/Product">
												<div class="img_block">

													<a href="{{ route('product.show',$product->slug) }}"
														class="thumbnail product-thumbnail">
														<img class="first-image "
															src="{{ Storage::url($product->image) }}"
															alt="Trans-Weight Hooded Wind..."
															data-full-size-image-url="{{ Storage::url($product->image) }}">
														<img class="img-responsive second-image animation9"
															src="{{ Storage::url($product->image) }}"
															alt="" itemprop="image" />

													</a>

													<div class="quick-view">

														<a class="quick_view" href="{{ route('product.show',$product->slug) }}" data-link-action="quickview"
															title="Aperçu rapide">
															<span>Aperçu rapide</span>
														</a>

													</div>


													<ul class="product-flag">
														<li class="new"><span>New</span></li>
													</ul>

												</div>
												<div class="product_desc">
													<div class="inner_desc">
														<div class="manufacturer"><a
																href="{{ route('product.show',$product->slug) }}">{{$product->subtitle}}</a></div>

														<h3 itemprop="name"><a
																href="{{ route('product.show',$product->slug) }}"
																class="product_name one_line"
																title="Trans-Weight Hooded Wind and Water Resistant Shell">{{$product->title}}</a></h3>


														<div class="hook-reviews">
															<div class="comments_note" itemprop="aggregateRating"
																itemscope itemtype="https://schema.org/AggregateRating">
																<div class="star_content clearfix">
																	<div class="star star_on"></div>
																	<div class="star star_on"></div>
																	<div class="star star_on"></div>
																	<div class="star star_on"></div>
																	<div class="star"></div>
																	<meta itemprop="worstRating" content="0" />
																	<meta itemprop="ratingValue" content="4" />
																	<meta itemprop="bestRating" content="5" />
																</div>
																<span class="nb-comments"><span
																		itemprop="reviewCount">1</span> Review(s)</span>
															</div>

														</div>


														<div class="product-price-and-shipping">



															<span class="sr-only">Prix</span>
															<span itemprop="price" class="price ">{{ $product->getPrice() }}</span>



														</div>


														<ul class="add-to-links">
															<li class="cart">
																<div class="product-add-to-cart">
																	<form action="{{route('panier.store')}}" method="post" class="add-to-cart-or-refresh">
																		@csrf
																		<input type="hidden" name="product_id" value="{{ $product->id }}">
																		<button
																			class="button ajax_add_to_cart_button add-to-cart btn-default"
																			
																			type="submit">
																			<i class="fab fa-shopping-cart"></i>Ajouter
																		</button>
																	</form>
																</div>
															</li>
															<li>

																<a class="addToWishlist wishlistProd_7"
																	title="Add to wishlist" href="#" data-rel="7"
																	onclick="WishlistCart('wishlist_block_list', 'add', '7', false, 1); return false;">
																	Add to wishlist
																</a>


															</li>

															<li class="compare">
																<a href="#"
																	class="poscompare-add compare-button js-poscompare-add"
																	data-id_product="7"
																	onclick="posCompare.addCompare($(this),7); return false;"
																	title="Add to compare"><span>Add to
																		compare</span></a>
															</li>

														</ul>
													</div>
													<div class="availability">
														<div class="availability-list in-stock">Availability: <span>300
																In Stock</span></div>

													</div>

													<div class="product-desc" itemprop="description">
														<ul>
															<li>
																<div>Keep the elements away and warmth priority number
																	one in this Nautica® Trans-Weight Hooded Wind and
																	Water Resistant Shell.</div>
															</li>
															<li>
																<div>Hooded collar with a high collar for maximum
																	coverage.</div>
															</li>
															<li>
																<div>Long sleeves with banded collars.</div>
															</li>
															<li>
																<div>Zip front closure.</div>
															</li>
														</ul>
													</div>


													<div class="variant-links">


													</div>

												</div>
											</article>
										</div>
										@endforeach

									</div>
								</div>
							</div>
						</div>
					</div>

				</div>
				<!-- Fin des Fashion -->
				<div class="pos_logo product_block_container">
					<div class="row pos_content">
						<div class="logo-slider owl-carousel">
							<div>
								<div class="item-banklogo">
									<a href="">
										<img class="replace-2x img-responsive" src="{{asset('user/img/blocklogo/1.jpg')}}"
											alt="Logo" />
									</a>
								</div>
							</div>
							<div>
								<div class="item-banklogo">
									<a href="">
										<img class="replace-2x img-responsive" src="{{asset('user/img/blocklogo/2.jpg')}}"
											alt="Logo" />
									</a>
								</div>
							</div>
							<div>
								<div class="item-banklogo">
									<a href="">
										<img class="replace-2x img-responsive" src="{{asset('user/img/blocklogo/3.jpg')}}"
											alt="Logo" />
									</a>
								</div>
							</div>
							<div>
								<div class="item-banklogo">
									<a href="">
										<img class="replace-2x img-responsive" src="{{asset('user/img/blocklogo/4.jpg')}}"
											alt="Logo" />
									</a>
								</div>
							</div>
							<div>
								<div class="item-banklogo">
									<a href="">
										<img class="replace-2x img-responsive" src="{{asset('user/img/blocklogo/5.jpg')}}"
											alt="Logo" />
									</a>
								</div>
							</div>
							<div>
								<div class="item-banklogo">
									<a href="">
										<img class="replace-2x img-responsive" src="{{asset('user/img/blocklogo/6.jpg')}}"
											alt="Logo" />
									</a>
								</div>
							</div>
							<div>
								<div class="item-banklogo">
									<a href="">
										<img class="replace-2x img-responsive" src="{{asset('user/img/blocklogo/7.jpg')}}"
											alt="Logo" />
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="row">
					<div class="col-xs-12 col-xl-6">
						<div class="testimonials_container">
							<div class="pos_title">
								<h2>Témoignages clients</h2>
							</div>
							<div class=" row pos_content">
								<div class="testimonialsSlide owl-carousel">
									<div class="item-testimonials">

										<div class="item">
											<div class="content_author">
												<div class="img"><img src="{{asset('user/img/postestimonial/sample1.png')}}"
														alt="Image Testimonial"></div>
												<div class="content_test">
													<div class="des_testimonial">Tout est parfait !! J'ai trois sites avec
														prestashop, ce thème est le meilleur !! Excellent support,
														package d'installation de thème de conseil, désolé pour l'anglais, sont
														Italien mais je n'ai eu aucun problème !! Merci !</div>
													<div class="des_inner">
														<p class="des_namepost"><span>Ramatoulaye Diallo</span></p>
														<p class="des_email">ramatou@gmail.com</p>
													</div>
												</div>
											</div>
										</div>

										<div class="item">
											<div class="content_author">
												<div class="img"><img src="{{asset('user/img/postestimonial/sample2.png')}}"
														alt="Image Testimonial"></div>
												<div class="content_test">
													<div class="des_testimonial">Des thèmes parfaits et le meilleur de tout ça
														vous avez de nombreuses options à choisir! Meilleure équipe d'assistance de tous les temps!
														réponse rapide et experts dans leurs domaines! Merci beaucoup
														beaucoup!</div>
													<div class="des_inner">
														<p class="des_namepost"><span>Mariama Toure</span></p>
														<p class="des_email">mariama@gmail.com</p>
													</div>
												</div>
											</div>
										</div>

										<div class="item">
											<div class="content_author">
												<div class="img"><img src="{{asset('user/img/postestimonial/sample3.png')}}"
														alt="Image Testimonial"></div>
												<div class="content_test">
													<div class="des_testimonial">Le code, le modèle et d'autres sont très
														bien. Le soutien m'a servi immédiatement et a résolu mon
														problèmes lorsque j'ai besoin d'aide. Sont à féliciter. Att Renan
														Andrade</div>
													<div class="des_inner">
														<p class="des_namepost"><span>Awa Ndiaye</span></p>
														<p class="des_email">awa@gmail.com</p>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<script type="text/javascript">
						$(document).ready(function () {
							var testi = $(".testimonialsSlide");
							testi.owlCarousel({
								autoplay: false,
								autoplayHoverPause: true,
								smartSpeed: 1000,
								nav: false,
								dots: true,
								responsiveClass: true,
								responsive: {
									0: {
										items: 1,
									},
									360: {
										items: 1,
									},
									576: {
										items: 1,
									},
									768: {
										items: 1,
									},
									992: {
										items: 1,
									},
									1200: {
										items: 1,
									}
								}
							});
						});


					</script>

					<div class="blog-post-block col-xs-12 col-xl-6">
						<div class="home_blog_post_area general">
							<div class=" pos_title">
								<h2>
									Derniers Articles

								</h2>
								<div class=" desc_title">

								</div>
							</div>

							<div class="home_blog_post_inner">
								<div class="row pos_content">
									<div class="blog_slider owl-carousel">
										<div class="item">

											<article class="blog_post">
												<div class="blog_post_content_top">
													<div class="post_thumbnail">
														<a href=""
															class="img_content"><img class="xipblog_img img-responsive"
																src="{{asset('user/modules/xipblog/img/home_default-blog2.jpg')}}"
																alt="This is Secound Post For XipBlog"></a>
														<div class="meta_category">
															<a
																href="">Fashion</a>
														</div>
													</div>
												</div>
												<div class="post_content">
													<div class="content-inner">

														<h4 class="post_title"><a
																href="">This
																is Secound Post For XipBlog</a></h4>
														<div class="post_meta clearfix">
															<p class="meta_author">
																Posted by
																<span>Demo Posthemes</span>
															</p>
															<p class="meta_date">
																Nov 20TH, 2020
															</p>

														</div>
														<p class="post_description">
															Lorem Ipsum is simply dummy text of the printing and
															typesetting industry. Lorem Ipsum has been the industrys ...
														</p>
														<div class="read_more"><a
																href="">Read
																More</a></div>

													</div>
												</div>
											</article>

											<article class="blog_post">
												<div class="blog_post_content_top">
													<div class="post_thumbnail">
														<a href=""
															class="img_content"><img class="xipblog_img img-responsive"
																src="{{asset('user/modules/xipblog/img/home_default-blog3.jpg')}}"
																alt="This is Third Post For XipBlog"></a>
														<div class="meta_category">
															<a
																href="">Fashion</a>
														</div>
													</div>
												</div>
												<div class="post_content">
													<div class="content-inner">

														<h4 class="post_title"><a
																href="">This
																is Third Post For XipBlog</a></h4>
														<div class="post_meta clearfix">
															<p class="meta_author">
																Posted by
																<span>Demo Posthemes</span>
															</p>
															<p class="meta_date">
																Nov 20TH, 2020
															</p>

														</div>
														<p class="post_description">
															Lorem Ipsum is simply dummy text of the printing and
															typesetting industry. Lorem Ipsum has been the industrys ...
														</p>
														<div class="read_more"><a
																href="">Read
																More</a></div>

													</div>
												</div>
											</article>
										</div>
										<div class="item">

											<article class="blog_post">
												<div class="blog_post_content_top">
													<div class="post_thumbnail">
														<a href=""
															class="img_content"><img class="xipblog_img img-responsive"
																src="{{asset('user/modules/xipblog/img/home_default-blog4.jpg')}}"
																alt="This is Fourth Post For XipBlog"></a>
														<div class="meta_category">
															<a
																href="">Fashion</a>
														</div>
													</div>
												</div>
												<div class="post_content">
													<div class="content-inner">

														<h4 class="post_title"><a
																href="">This
																is Fourth Post For XipBlog</a></h4>
														<div class="post_meta clearfix">
															<p class="meta_author">
																Posted by
																<span>Demo Posthemes</span>
															</p>
															<p class="meta_date">
																Nov 20TH, 2020
															</p>

														</div>
														<p class="post_description">
															Lorem Ipsum is simply dummy text of the printing and
															typesetting industry. Lorem Ipsum has been the industrys ...
														</p>
														<div class="read_more"><a
																href="">Read
																More</a></div>

													</div>
												</div>
											</article>

											<article class="blog_post">
												<div class="blog_post_content_top">
													<div class="post_thumbnail">
														<a href=""
															class="img_content"><img class="xipblog_img img-responsive"
																src="{{asset('user/modules/xipblog/img/home_default-blog5.jpg')}}"
																alt="This is the fifth post for XipBlog"></a>
														<div class="meta_category">
															<a
																href="">Fashion</a>
														</div>
													</div>
												</div>
												<div class="post_content">
													<div class="content-inner">

														<h4 class="post_title"><a
																href="">This
																is the fifth post for XipBlog</a></h4>
														<div class="post_meta clearfix">
															<p class="meta_author">
																Posted by
																<span>Demo Posthemes</span>
															</p>
															<p class="meta_date">
																Nov 20TH, 2020
															</p>

														</div>
														<p class="post_description">
															Lorem Ipsum is simply dummy text of the printing and
															typesetting industry. Lorem Ipsum has been the industrys ...
														</p>
														<div class="read_more"><a
																href="">Read
																More</a></div>

													</div>
												</div>
											</article>
										</div>
										<div class="item">

											<article class="blog_post">
												<div class="blog_post_content_top">
													<div class="post_thumbnail">
														<a href=""
															class="img_content"><img class="xipblog_img img-responsive"
																src="{{asset('user/modules/xipblog/img/home_default-blog6.jpg')}}"
																alt="This is the sixth post for XipBlog"></a>
														<div class="meta_category">
															<a
																href="">Fashion</a>
														</div>
													</div>
												</div>
												<div class="post_content">
													<div class="content-inner">

														<h4 class="post_title"><a
																href="">This
																is the sixth post for XipBlog</a></h4>
														<div class="post_meta clearfix">
															<p class="meta_author">
																Posted by
																<span>Demo Posthemes</span>
															</p>
															<p class="meta_date">
																Nov 20TH, 2020
															</p>

														</div>
														<p class="post_description">
															Lorem Ipsum is simply dummy text of the printing and
															typesetting industry. Lorem Ipsum has been the industrys ...
														</p>
														<div class="read_more"><a
																href="">Read
																More</a></div>

													</div>
												</div>
											</article>

											<article class="blog_post">
												<div class="blog_post_content_top">
													<div class="post_thumbnail">
														<a href=""
															class="img_content"><img class="xipblog_img img-responsive"
																src="{{asset('user/modules/xipblog/img/home_default-blog1.jpg')}}"
																alt="This is First Post For XipBlog"></a>
														<div class="meta_category">
															<a
																href="">Fashion</a>
														</div>
													</div>
												</div>
												<div class="post_content">
													<div class="content-inner">

														<h4 class="post_title"><a
																href="">This
																is First Post For XipBlog</a></h4>
														<div class="post_meta clearfix">
															<p class="meta_author">
																Posted by
																<span>Demo Posthemes</span>
															</p>
															<p class="meta_date">
																Nov 20TH, 2020
															</p>

														</div>
														<p class="post_description">
															Lorem Ipsum is simply dummy text of the printing and
															typesetting industry. Lorem Ipsum has been the industrys ...
														</p>
														<div class="read_more"><a
																href="">Read
																More</a></div>

													</div>
												</div>
											</article>
										</div>
									</div>
								</div>
							</div>

						</div>
					</div>

				</div>
			</div>
		</div>
@endsection