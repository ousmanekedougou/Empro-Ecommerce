		<header id="header">


			<div class="header-banner">

			</div>



			<nav class="header-nav">
				<div class="container-fluid">
					<div class="hidden-md-down">

						<div class="col-footer social_follow ">
							<ul>
								<li class="facebook"><a href="https://www.facebook.com/posthemes"
										target="_blank">Facebook</a></li>
								<li class="twitter"><a href="https://twitter.com/posthemes" target="_blank">Twitter</a>
								</li>
								<li class="youtube"><a href="https://www.youtube.com/user/posthemes"
										target="_blank">YouTube</a></li>
								<!-- <li class="googleplus"><a href="https://plus.google.com/100616268634541521861/posts"
										target="_blank">Google +</a></li>
								<li class="instagram"><a href="https://www.instagram.com/posthemes9234"
										target="_blank">Instagram</a></li> -->
							</ul>
						</div>

						<div id="_desktop_static">
							<div class="static-nav">Bienvenue dans empro-commerce</div>
						</div>
						<!-- <div id="_desktop_language_selector">
							<div class="language-selector-wrapper selector-block hidden-md-down">
								<span id="language-selector-label" class=" selector-label hidden-lg-down">Language
									:</span>
								<div class="language-selector localiz_block  dropdown js-dropdown">
									<button data-toggle="dropdown" class=" btn-unstyle" aria-haspopup="true"
										aria-expanded="false" aria-label="Language dropdown">
										<img src="{{asset('user/img/l/1.jpg')}}" alt="" width="16" height="11" />
										<span class="expand-more">English</span>
										<i class="material-icons">expand_more</i>
									</button>
									<ul class="dropdown-menu" aria-labelledby="language-selector-label">
										<li class="current">
											<a href="" class="dropdown-item"><img src="{{asset('user/img/l/1.jpg')}}" alt=""
													width="16" height="11" />English</a>
										</li>
										<li>
											<a href=""
												class="dropdown-item"><img src="{{asset('user/img/l/2.jpg')}}" alt="" width="16"
													height="11" />Français</a>
										</li>
									</ul>
								</div>
							</div>
							<div class="language-selector-wrapper hidden-lg-up">
								<div class="selector-mobile dropdown js-dropdown">
									<button data-toggle="dropdown" class=" btn-unstyle" aria-haspopup="true"
										aria-expanded="false" aria-label="Language dropdown">
										<img src="{{asset('user/img/l/1.jpg')}}" alt="" width="16" height="11" />
										<span class="expand-more">English</span>
										<i class="material-icons">expand_more</i>
									</button>
									<ul class="dropdown-menu" aria-labelledby="language-selector-label">
										<li class="current">
											<a href="" class="dropdown-item"><img src="{{asset('user/img/l/1.jpg')}}" alt=""
													width="16" height="11" />English</a>
										</li>
										<li>
											<a href=""
												class="dropdown-item"><img src="{{asset('user/img/l/2.jpg')}}" alt="" width="16"
													height="11" />Français</a>
										</li>
									</ul>
								</div>
							</div>
						</div> -->
						<!-- <div id="_desktop_currency_selector">
							<div class="currency-selector-wrapper selector-block hidden-md-down">
								<span id="currency-selector-label" class=" selector-label hidden-lg-down">Currency
									:</span>
								<div class="currency-selector localiz_block dropdown js-dropdown">
									<button data-target="#" data-toggle="dropdown" class=" btn-unstyle"
										aria-haspopup="true" aria-expanded="false" aria-label="Currency dropdown">
										<span class="expand-more _gray-darker">USD $</span>
										<i class="material-icons">expand_more</i>
									</button>
									<ul class="dropdown-menu" aria-labelledby="currency-selector-label">
										<li>
											<a title="Euro" rel="nofollow"
												href=""
												class="dropdown-item">EUR €</a>
										</li>
										<li class="current">
											<a title="US Dollar" rel="nofollow"
												href=""
												class="dropdown-item">USD $</a>
										</li>
									</ul>
								</div>
							</div>
							<div class="currency-selector-wrapper hidden-lg-up">
								<div class="selector-mobile dropdown js-dropdown">
									<button data-target="#" data-toggle="dropdown" class=" btn-unstyle"
										aria-haspopup="true" aria-expanded="false" aria-label="Currency dropdown">
										<span class="expand-more _gray-darker">USD $</span>
										<i class="material-icons">expand_more</i>
									</button>
									<ul class="dropdown-menu" aria-labelledby="currency-selector-label">
										<li>
											<a title="Euro" rel="nofollow"
												href="index6edc.html?SubmitCurrency=1&amp;id_currency=2"
												class="dropdown-item">EUR €</a>
										</li>
										<li class="current">
											<a title="US Dollar" rel="nofollow"
												href="indexe3c8.html?SubmitCurrency=1&amp;id_currency=1"
												class="dropdown-item">USD $</a>
										</li>
									</ul>
								</div>
							</div>
						</div> -->
						<div id="_desktop_user_info">
							<div class="user-info-block selector-block">
								<div class="currency-selector localiz_block dropdown js-dropdown">
									<button data-target="#" data-toggle="dropdown" class=" btn-unstyle hidden-md-down">
										@guest
										<span class="expand-more">Réglage</span>
										@else
										<span class="expand-more">{{ Auth::user()->name }}</span>
										@endguest
										<i class="material-icons">expand_more</i>
									</button>
									<button data-target="#" data-toggle="dropdown" class=" btn-unstyle hidden-lg-up">
										<i class="ion-ios-contact"></i>
									</button>
									<ul class="dropdown-menu">
										<!-- <li>
											<a href="" rel="nofollow" class="dropdown-item">My account</a>
										</li>
										<li>
											<a href="" class="dropdown-item">Checkout</a>
										</li> -->
										<li>
											@guest
												<a href="{{ route('login') }}" title="Log in to your customer account"
													rel="nofollow" class="dropdown-item">
													<span>Se Connecter</span>
												</a>
													<a href="{{ route('register') }}" title="Log in to your customer account"
													rel="nofollow" class="dropdown-item">
													<span>S'inscrire</span>
												</a>
											@else
												<a href="#" title="Log in to your customer account"
													rel="nofollow" class="dropdown-item"
													onclick="event.preventDefault();
														document.getElementById('logout-form').submit();"
													>
													<span>Se Deconnecter</span>
												</a>
												<form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">
													@csrf
												</form>
											@endguest
										</li>
									</ul>
								</div>
							</div>

						</div>

					</div>
				</div>
				<div class="container">
					<div class="hidden-lg-up  mobile">
						<div id="_mobile_static"></div>
						<div class="row row-mobile">
							<div class="col-mobile col-md-4 col-xs-4">
								<div class="float-xs-left" id="menu-icon">
									<i class="ion-android-menu"></i>
								</div>
								<div id="mobile_top_menu_wrapper" class="row hidden-lg-up" style="display:none;">
									<div class="top-header-mobile">
										<div id="_mobile_compare"></div>
										<div id="_mobile_wishtlist"></div>
									</div>
									<div id="_mobile_currency_selector"></div>
									<div id="_mobile_language_selector"></div>
									<div class="menu-close">
										menu <i class="material-icons float-xs-right">arrow_back</i>
									</div>
									<div class="menu-tabs">
										<div class="js-top-menu-bottom">
											<div id="_mobile_megamenu"></div>
											<div id="_mobile_vegamenu"></div>

										</div>

									</div>
								</div>
							</div>
							<div class="col-mobile col-md-4 col-xs-4 mobile-center">
								<div class="top-logo" id="_mobile_logo"></div>
							</div>
							<div class="col-mobile col-md-4 col-xs-4 mobile-right">
								<div id="_mobile_cart_block"></div>
								<div id="_mobile_user_info"></div>
							</div>
						</div>
						<div id="_mobile_search_category"></div>
					</div>
				</div>
			</nav>



			<div class="header-top top_bg hidden-md-down">
				<div class="container-fluid">
					<div class="row">
						<div class="col col-left col col-md-3 col-xl-2" id="_desktop_logo">
							<a href="/">
								<img class="logo img-responsive" src="{{asset('user/img/B-shop2.png')}}"
									alt="Ecolife  Responsive Prestashop Theme">
							</a>

						</div>
						<div class=" col position-static">
							<div id="_desktop_megamenu" class="use-sticky megamenu_center">
								<div class="pos-menu-horizontal">
									<ul class="menu-content">

										<li class="home menu-item menu-item1   ">

											<a href="/">

												<span>Acceuil</span>
											</a>
										</li>


										<li class=" menu-item menu-item11   ">

											<a href="">

												<span>À propos</span>
											</a>
										</li>

										<li class=" menu-item menu-item7   ">

											<a href="{{ route('product.index') }}">

												<span>Produits</span>
											</a>
										</li>

										<!-- <li class=" menu-item menu-item7   ">

											<a href="">

												<span>Livraison</span>
											</a>
										</li> -->

										<li class=" menu-item menu-item8   ">

											<a href="">

												<span>Mention légale</span>
											</a>
										</li>

										<li class=" menu-item menu-item9   ">

											<a href="">

												<span>Paiement sécurisé</span>
											</a>
										</li>

										<li class=" menu-item menu-item10   ">

											<a href="">

												<span>Contactez-nous</span>
											</a>
										</li>

									</ul>

								</div>
							</div>
						</div>
						<div class=" col col-right col-xl-2 col-md-3 col-sm-12 position-static">
							<div id="_desktop_cart_block">
								<div class="blockcart cart-preview"
									data-refresh-url="/"
									data-cartitems="0">
									<div class="button_cart">
										<a rel="nofollow" href="{{ route('panier.index') }}"
											class="desktop hidden-md-down">
											@if(Cart::count() > 0)
											<span class="item_count">{{ Cart::count() }}</span>
											<span class="item_total">{{ getPrice(Cart::total()) }}</span>
											@else
											<span class="item_count">{{ Cart::count() }}</span>
											@endif
										</a>
										<a rel="nofollow" href="{{ route('panier.index') }}" class="mobile hidden-lg-up">
											<span class="item_count">{{ Cart::count() }}</span>
										</a>
									</div>
									<div class="popup_cart">
										<div class="content-cart">
											<div class="mini_cart_arrow"></div>
											<ul>
											</ul>
											<div class="price_content">
												<div class="cart-subtotals">
													<div class="products price_inline">
														<span class="label">Subtotal</span>
														<span class="value">{{ getPrice(Cart::total()) }}</span>
													</div>
													<div class=" price_inline">
														<span class="label"></span>
														<span class="value"></span>
													</div>
													<div class="shipping price_inline">
														<span class="label">Shipping</span>
														<span class="value">Free</span>
													</div>
													<div class="tax price_inline">
														<span class="label">Taxes</span>
														<span class="value">$0.00</span>
													</div>
												</div>
												<div class="cart-total price_inline">
													<span class="label">Total</span>
													<span class="value">$0.00</span>
												</div>
											</div>
											<div class="checkout">
												<a href="cart75f4.html?action=show" class="btn btn-primary">Checkout</a>
											</div>
										</div>
									</div>
								</div>
							</div>
							<script type="text/javascript">
								var wishlistProductsIds = '';
								var baseDir = 'http://demo.posthemes.com/pos_ecolife_marketplace/';
								var static_token = '203b2fb46b107eabda9dd64ae8ebc173';
								var isLogged = '0';
								var loggin_required = 'You must be logged in to manage your wishlist.';
								var added_to_wishlist = 'The product was successfully added to your wishlist.';
								var mywishlist_url = 'login7c96.html';
								var isLoggedWishlist = false;
							</script>
							<!-- <div id="_desktop_wishtlist">
								<div class="wishtlist_top">
									<a class="" href="login7c96.html">
										<i class="ion-android-favorite-outline"></i>
										<span class="txt_wishlist">Wishlist</span>
										(<span class="cart-wishlist-number">0</span>)
									</a>
								</div>
							</div>
							<div id="_desktop_compare">
								<div class="compare_top">
									<a
										href="http://demo.posthemes.com/pos_ecolife_marketplace/module/poscompare/comparePage">
										<i class="ion-ios-shuffle-strong"></i> <span>Compare (<span
												id="poscompare-nb"></span>)</span>
									</a>
								</div>
							</div> -->
							<script type="text/javascript">
								var baseDir = 'http://demo.posthemes.com/pos_ecolife_marketplace/';
							</script>

						</div>

					</div>

				</div>

			</div>

			<div class="header-bottom bottom_bg hidden-md-down">
				<div class="container-fluid">
					<div class="row">
						<div class="col-left col-sm-12 col-md-3">
							<div id="_desktop_vegamenu">
								<div class="pos-menu-vertical" data-more-less="11">
									<h3 class="title_vertical hidden-md-down">Toutes les Categories </h3>
									<ul class="menu-content">
											@foreach(App\Models\User\CategoryFather::all() as $category_father)
												<li class="menu-item menu-item3  hasChild ">

													<a href="">

														<i class="ion-ios-printer-outline"></i>
														<span>{{$category_father->name}}</span>
														<i class="hidden-md-down icon_sub ion-ios-arrow-right"></i> </a>

													<span class="icon-drop-mobile"><i class="material-icons add">add </i><i
															class="material-icons remove">remove </i></span>
													<div class="pos-sub-menu menu-dropdown col-xs-12 col-lg-  menu_slideup">
														<div class="popup_vertical">
															<div class="pos-menu-row row ">
															@foreach($category_father->categories as $category)
																<div class="pos-menu-col col-xs-12 col-lg-4  ">
																	<ul class="ul-column ">
																		
																		<li class="submenu-item ">
																			<a href="">{{$category->name}}</a>
																			<span class="icon-drop-mobile"><i
																					class="material-icons add">add </i><i
																					class="material-icons remove">remove
																				</i></span>
																			<ul class="category-sub-menu">
																				@foreach($category->sous_categories as $sous_category)
																					<li>
																						<a href="{{ route('product.index', ['sous-categorie'=> $sous_category->slug]) }}">{{$sous_category->name}}</a>
																					</li>
																				@endforeach
																				<!-- <li>
																					<a href="76-batteries.html">Batteries</a>
																				</li>
																				<li>
																					<a href="77-chargers.html">Chargers</a>
																				</li>
																				<li>
																					<a href="78-bags-cases.html">Bags &amp;
																						Cases</a>
																				</li>
																				<li>
																					<a href="79-electronic-cigarettes.html">Electronic
																						Cigarettes</a>
																				</li> -->
																			</ul>
																		</li>
																	
																		<!-- <li class="submenu-item ">
																			<a href="70-audio-video.html">Audio &amp; Video</a>
																			<span class="icon-drop-mobile"><i
																					class="material-icons add">add </i><i
																					class="material-icons remove">remove
																				</i></span>
																			<ul class="category-sub-menu">
																				<li>
																					<a
																						href="80-televisions.html">Televisions</a>
																				</li>
																				<li>
																					<a href="81-tv-receivers.html">TV
																						Receivers</a>
																				</li>
																				<li>
																					<a href="82-projectors.html">Projectors</a>
																				</li>
																				<li>
																					<a href="83-audio-amplifier-boards.html">Audio
																						Amplifier Boards</a>
																				</li>
																				<li>
																					<a href="84-tv-sticks.html">TV Sticks</a>
																				</li>
																			</ul>
																		</li> -->
																	</ul>
																	<hr>
																</div>
															@endforeach
																<!-- <div class="pos-menu-col col-xs-12 col-lg-4  ">
																	<ul class="ul-column ">
																		<li class="submenu-item ">
																			<a href="70-audio-video.html">Audio &amp; Video</a>
																			<span class="icon-drop-mobile"><i
																					class="material-icons add">add </i><i
																					class="material-icons remove">remove
																				</i></span>
																			<ul class="category-sub-menu">
																				<li>
																					<a
																						href="80-televisions.html">Televisions</a>
																				</li>
																				<li>
																					<a href="81-tv-receivers.html">TV
																						Receivers</a>
																				</li>
																				<li>
																					<a href="82-projectors.html">Projectors</a>
																				</li>
																				<li>
																					<a href="83-audio-amplifier-boards.html">Audio
																						Amplifier Boards</a>
																				</li>
																				<li>
																					<a href="84-tv-sticks.html">TV Sticks</a>
																				</li>
																			</ul>
																		</li>
																		<li class="submenu-item ">
																			<a href="73-smart-electronics.html">Smart
																				Electronics</a>
																			<span class="icon-drop-mobile"><i
																					class="material-icons add">add </i><i
																					class="material-icons remove">remove
																				</i></span>
																			<ul class="category-sub-menu">
																				<li>
																					<a href="95-wearable-devices.html">Wearable
																						Devices</a>
																				</li>
																				<li>
																					<a href="96-smart-home-appliances.html">Smart
																						Home Appliances</a>
																				</li>
																				<li>
																					<a href="97-smart-remote-controls.html">Smart
																						Remote Controls</a>
																				</li>
																				<li>
																					<a href="98-smart-watches.html">Smart
																						Watches</a>
																				</li>
																				<li>
																					<a href="99-smart-wristbands.html">Smart
																						Wristbands</a>
																				</li>
																			</ul>
																		</li>
																	</ul>
																</div>
																<div class="pos-menu-col col-xs-12 col-lg-4  ">
																	<ul class="ul-column ">
																		<li class="submenu-item ">
																			<a href="72-portable-audio-video.html">Portable
																				Audio &amp; Video</a>
																			<span class="icon-drop-mobile"><i
																					class="material-icons add">add </i><i
																					class="material-icons remove">remove
																				</i></span>
																			<ul class="category-sub-menu">
																				<li>
																					<a href="90-headphones.html">Headphones</a>
																				</li>
																				<li>
																					<a href="91-speakers.html">Speakers</a>
																				</li>
																				<li>
																					<a href="92-mp3-players.html">MP3
																						Players</a>
																				</li>
																				<li>
																					<a href="93-vrar-devices.html">VR/AR
																						Devices</a>
																				</li>
																				<li>
																					<a
																						href="94-microphones.html">Microphones</a>
																				</li>
																			</ul>
																		</li>
																		<li class="submenu-item ">
																			<a href="#"><img src="{{asset('user/img/cms/banner-vega.jpg')}}"
																					alt="" /></a>
																		</li>
																	</ul>
																</div> -->
															</div>

														</div>
													</div>
											</li>
										@endforeach
					
									</ul>

								</div>
							</div>
						</div>
						<div class="col-right col-md-9 col-sm-12 position-static">
							<!-- pos search module TOP -->
							<div id="_desktop_search_category">
								<div class="dropdown js-dropdown">
									<span class="search-icon" data-toggle="dropdown"><i
											class="ion-ios-search-strong"></i></span>
									<div id="pos_search_top" class="dropdown-menu">
										@include('user/partials.search')
									</div>
								</div>
							</div>

							<!-- /pos search module TOP -->

						</div>
					</div>
				</div>
			</div>



		</header>

		{{-- @if(request()->input())
			<h6>{{ $products->total() }} resultat(s) pour la recherche "{{request()->q}}"</h6>
		@endif --}}

		@if(session('success'))
		<div class="row">
			<div class=" col-lg-3"></div>
			<div class=" col-lg-6 alert alert-success" style="border-radius: 8px;padding:10px;font-size:16px;font-weight:600;">{{ session('success') }}</div>
			<div class=" col-lg-3"></div>

		</div>
		@endif

		@if(session('error'))
		<div class="row">
				<div class=" col-lg-3"></div>
			<div class=" col-lg-6 alert alert-success" style="border-radius: 8px;padding:10px;font-size:16px;font-weight:600;">{{ session('error') }}</div>
			<div class=" col-lg-3"></div>
		</div>
		@endif

		{{-- @if(count($errors) > 0)
			<div class="alert alert-danger">
				<ul class="mb-0 mt-0">
					@foreach($errors->all() as $error)
						<li>{{ $error }}</li>
					@endforeach
				</ul>
			</div>
		@endif --}}