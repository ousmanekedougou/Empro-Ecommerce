@extends('user.layouts.app',['title' => 'acceuil'])
	@section('body')
		<body itemscope itemtype="http://schema.org/WebPage" id="product"
		class="lang-en country-us currency-usd layout-full-width page-index tax-display-disabled">
	@endsection
@section('main-content')

<aside id="notifications">
	<div class="container">



	</div>
</aside>


<div class="breadcrumb_container " data-depth="2" style="background: url(http://demo.posthemes.com/pos_ecolife_marketplace/c/68-category_default/electronics.jpg" alt="Electronics) no-repeat;">
	<div class="container">
		<div class="name_category">
			<h2>Products</h2>
		</div>
		<nav data-depth="2" class="breadcrumb">
			<ol itemscope itemtype="http://schema.org/BreadcrumbList">


				<li itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">
					<a itemprop="item" href="/">
						<span itemprop="name">Home</span>
					</a>
					<meta itemprop="position" content="1">
				</li>


				<li itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">
					<a itemprop="item" href="{{ route('product.index') }}">
						<span itemprop="name">Products</span>
					</a>
					<meta itemprop="position" content="2">
				</li>


			</ol>
		</nav>
	</div>
</div>


<div id="wrapper">

	<div class="container">
		<div class="row">
			<!-- Debut de la sidebare -->
			<div id="left-column" class="col-xs-12 col-sm-4 col-md-3">


				<div class="block-categories hidden-sm-down">
					<ul class="category-top-menu">
						<!-- <li><a class="text-uppercase h6" href="">Electronics</a></li> -->
						<li><a class="text-uppercase h6" href="">Categories</a></li>
						<li>
							<ul class="category-sub-menu">
								@foreach($categories as $category)
								<li data-depth="0">
									<a  href="{{ route('product.index', ['categorie'
												=> $category->slug]) }}">{{$category->name}}</a>
									<!-- <span> {{$category->name}} </span> -->
									<div class="navbar-toggler collapse-icons" data-toggle="collapse" data-target="#exCollapsingNavbar69-{{ $category->id }}"><i class="material-icons add">&#xE145;</i><i class="material-icons remove">&#xE15B;</i></div>
									<div class="collapse" id="exCollapsingNavbar69-{{ $category->id }}">
										<ul class="category-sub-menu">
											 @foreach($category->sous_categories as $sous_category)
												<li data-depth="0"><a class="category-sub-link" href="{{ route('product.index', ['sous_categorie'
												=> $sous_category->slug]) }}">{{$sous_category->name}}</a></li>
											 @endforeach
										</ul>
									</div>
								</li>
								@endforeach
							
							</ul>
						</li>
					</ul>
				</div>

				<div id="search_filters_wrapper" class="hidden-sm-down">
					<div id="search_filter_controls" class="hidden-md-up">
						<span id="_mobile_search_filters_clear_all"></span>
						<button class="btn btn-secondary ok">
							<i class="material-icons rtl-no-flip">&#xE876;</i>
							OK
						</button>
					</div>
					<div id="search_filters">

						<p class="text-uppercase h6 hidden-sm-down">Filter By</p>





						<section class="facet clearfix">
							<p class="h6 facet-title hidden-sm-down">Categories</p>

							<div class="title hidden-md-up" data-target="#facet_43117" data-toggle="collapse">
								<p class="h6 facet-title">Categories</p>
								<span class="float-xs-right">
									<span class="navbar-toggler collapse-icons">
										<i class="material-icons add">&#xE313;</i>
										<i class="material-icons remove">&#xE316;</i>
									</span>
								</span>
							</div>


							<ul id="facet_43117" class="collapse">

								<li>
									<label class="facet-label" for="facet_input_43117_0">
										<span class="custom-checkbox">
											<input id="facet_input_43117_0" data-search-url="http://demo.posthemes.com/pos_ecolife_marketplace/en/68-electronics?q=Categories-Accessories+%26+Parts" type="checkbox">
											<span class="ps-shown-by-js"><i class="material-icons rtl-no-flip checkbox-checked">&#xE5CA;</i></span>
										</span>

										<a href="68-electronics38d4.html?q=Categories-Accessories+%26+Parts" class="_gray-darker search-link js-search-link" rel="nofollow">
											Accessories &amp; Parts
											<span class="magnitude">(16)</span>
										</a>
									</label>
								</li>

								<li>
									<label class="facet-label" for="facet_input_43117_1">
										<span class="custom-checkbox">
											<input id="facet_input_43117_1" data-search-url="http://demo.posthemes.com/pos_ecolife_marketplace/en/68-electronics?q=Categories-Audio+%26+Video" type="checkbox">
											<span class="ps-shown-by-js"><i class="material-icons rtl-no-flip checkbox-checked">&#xE5CA;</i></span>
										</span>

										<a href="68-electronics19ea.html?q=Categories-Audio+%26+Video" class="_gray-darker search-link js-search-link" rel="nofollow">
											Audio &amp; Video
											<span class="magnitude">(17)</span>
										</a>
									</label>
								</li>

								<li>
									<label class="facet-label" for="facet_input_43117_2">
										<span class="custom-checkbox">
											<input id="facet_input_43117_2" data-search-url="http://demo.posthemes.com/pos_ecolife_marketplace/en/68-electronics?q=Categories-Camera+%26+Photo" type="checkbox">
											<span class="ps-shown-by-js"><i class="material-icons rtl-no-flip checkbox-checked">&#xE5CA;</i></span>
										</span>

										<a href="68-electronics8c61.html?q=Categories-Camera+%26+Photo" class="_gray-darker search-link js-search-link" rel="nofollow">
											Camera &amp; Photo
											<span class="magnitude">(17)</span>
										</a>
									</label>
								</li>

								<li>
									<label class="facet-label" for="facet_input_43117_3">
										<span class="custom-checkbox">
											<input id="facet_input_43117_3" data-search-url="http://demo.posthemes.com/pos_ecolife_marketplace/en/68-electronics?q=Categories-Portable+Audio+%26+Video" type="checkbox">
											<span class="ps-shown-by-js"><i class="material-icons rtl-no-flip checkbox-checked">&#xE5CA;</i></span>
										</span>

										<a href="68-electronics25b0.html?q=Categories-Portable+Audio+%26+Video" class="_gray-darker search-link js-search-link" rel="nofollow">
											Portable Audio &amp; Video
											<span class="magnitude">(17)</span>
										</a>
									</label>
								</li>

								<li>
									<label class="facet-label" for="facet_input_43117_4">
										<span class="custom-checkbox">
											<input id="facet_input_43117_4" data-search-url="http://demo.posthemes.com/pos_ecolife_marketplace/en/68-electronics?q=Categories-Smart+Electronics" type="checkbox">
											<span class="ps-shown-by-js"><i class="material-icons rtl-no-flip checkbox-checked">&#xE5CA;</i></span>
										</span>

										<a href="68-electronicsacd0.html?q=Categories-Smart+Electronics" class="_gray-darker search-link js-search-link" rel="nofollow">
											Smart Electronics
											<span class="magnitude">(17)</span>
										</a>
									</label>
								</li>

								<li>
									<label class="facet-label" for="facet_input_43117_5">
										<span class="custom-checkbox">
											<input id="facet_input_43117_5" data-search-url="http://demo.posthemes.com/pos_ecolife_marketplace/en/68-electronics?q=Categories-Video+Games" type="checkbox">
											<span class="ps-shown-by-js"><i class="material-icons rtl-no-flip checkbox-checked">&#xE5CA;</i></span>
										</span>

										<a href="68-electronicsf142.html?q=Categories-Video+Games" class="_gray-darker search-link js-search-link" rel="nofollow">
											Video Games
											<span class="magnitude">(17)</span>
										</a>
									</label>
								</li>
							</ul>


						</section>
						<section class="facet clearfix">
							<p class="h6 facet-title hidden-sm-down">Price</p>

							<div class="title hidden-md-up" data-target="#facet_74598" data-toggle="collapse">
								<p class="h6 facet-title">Price</p>
								<span class="float-xs-right">
									<span class="navbar-toggler collapse-icons">
										<i class="material-icons add">&#xE313;</i>
										<i class="material-icons remove">&#xE316;</i>
									</span>
								</span>
							</div>


							<ul id="facet_74598" class="faceted-slider" data-slider-min="9" data-slider-max="34" data-slider-id="74598" data-slider-values="null" data-slider-unit="€" data-slider-label="Price" data-slider-specifications="{&quot;symbol&quot;:[&quot;.&quot;,&quot;,&quot;,&quot;;&quot;,&quot;%&quot;,&quot;-&quot;,&quot;+&quot;,&quot;E&quot;,&quot;\u00d7&quot;,&quot;\u2030&quot;,&quot;\u221e&quot;,&quot;NaN&quot;],&quot;currencyCode&quot;:&quot;EUR&quot;,&quot;currencySymbol&quot;:&quot;\u20ac&quot;,&quot;positivePattern&quot;:&quot;\u00a4#,##0.00&quot;,&quot;negativePattern&quot;:&quot;-\u00a4#,##0.00&quot;,&quot;maxFractionDigits&quot;:2,&quot;minFractionDigits&quot;:2,&quot;groupingUsed&quot;:true,&quot;primaryGroupSize&quot;:3,&quot;secondaryGroupSize&quot;:3}" data-slider-encoded-url="http://demo.posthemes.com/pos_ecolife_marketplace/en/68-electronics">
								<li>
									<p id="facet_label_74598">
										€9.00 - €34.00
									</p>

									<div id="slider-range_74598"></div>
								</li>
							</ul>

						</section>
						<section class="facet clearfix">
							<p class="h6 facet-title hidden-sm-down">Size</p>

							<div class="title hidden-md-up" data-target="#facet_46741" data-toggle="collapse">
								<p class="h6 facet-title">Size</p>
								<span class="float-xs-right">
									<span class="navbar-toggler collapse-icons">
										<i class="material-icons add">&#xE313;</i>
										<i class="material-icons remove">&#xE316;</i>
									</span>
								</span>
							</div>


							<ul id="facet_46741" class="collapse">

								<li>
									<label class="facet-label" for="facet_input_46741_0">
										<span class="custom-checkbox">
											<input id="facet_input_46741_0" data-search-url="http://demo.posthemes.com/pos_ecolife_marketplace/en/68-electronics?q=Size-S" type="checkbox">
											<span class="ps-shown-by-js"><i class="material-icons rtl-no-flip checkbox-checked">&#xE5CA;</i></span>
										</span>

										<a href="68-electronicsb9ad.html?q=Size-S" class="_gray-darker search-link js-search-link" rel="nofollow">
											S
											<span class="magnitude">(4)</span>
										</a>
									</label>
								</li>

								<li>
									<label class="facet-label" for="facet_input_46741_1">
										<span class="custom-checkbox">
											<input id="facet_input_46741_1" data-search-url="http://demo.posthemes.com/pos_ecolife_marketplace/en/68-electronics?q=Size-M" type="checkbox">
											<span class="ps-shown-by-js"><i class="material-icons rtl-no-flip checkbox-checked">&#xE5CA;</i></span>
										</span>

										<a href="68-electronics7b6e.html?q=Size-M" class="_gray-darker search-link js-search-link" rel="nofollow">
											M
											<span class="magnitude">(4)</span>
										</a>
									</label>
								</li>

								<li>
									<label class="facet-label" for="facet_input_46741_2">
										<span class="custom-checkbox">
											<input id="facet_input_46741_2" data-search-url="http://demo.posthemes.com/pos_ecolife_marketplace/en/68-electronics?q=Size-L" type="checkbox">
											<span class="ps-shown-by-js"><i class="material-icons rtl-no-flip checkbox-checked">&#xE5CA;</i></span>
										</span>

										<a href="68-electronics1bb9.html?q=Size-L" class="_gray-darker search-link js-search-link" rel="nofollow">
											L
											<span class="magnitude">(4)</span>
										</a>
									</label>
								</li>

								<li>
									<label class="facet-label" for="facet_input_46741_3">
										<span class="custom-checkbox">
											<input id="facet_input_46741_3" data-search-url="http://demo.posthemes.com/pos_ecolife_marketplace/en/68-electronics?q=Size-XL" type="checkbox">
											<span class="ps-shown-by-js"><i class="material-icons rtl-no-flip checkbox-checked">&#xE5CA;</i></span>
										</span>

										<a href="68-electronics828e.html?q=Size-XL" class="_gray-darker search-link js-search-link" rel="nofollow">
											XL
											<span class="magnitude">(4)</span>
										</a>
									</label>
								</li>
							</ul>


						</section>
						<section class="facet clearfix">
							<p class="h6 facet-title hidden-sm-down">Color</p>

							<div class="title hidden-md-up" data-target="#facet_67233" data-toggle="collapse">
								<p class="h6 facet-title">Color</p>
								<span class="float-xs-right">
									<span class="navbar-toggler collapse-icons">
										<i class="material-icons add">&#xE313;</i>
										<i class="material-icons remove">&#xE316;</i>
									</span>
								</span>
							</div>


							<ul id="facet_67233" class="collapse">

								<li>
									<label class="facet-label" for="facet_input_67233_0">
										<span class="custom-checkbox">
											<input id="facet_input_67233_0" data-search-url="http://demo.posthemes.com/pos_ecolife_marketplace/en/68-electronics?q=Color-Grey" type="checkbox">
											<span class="color" style="background-color:#AAB2BD;"></span>
										</span>

										<a href="68-electronics4434.html?q=Color-Grey" class="_gray-darker search-link js-search-link" rel="nofollow">
											Grey
											<span class="magnitude">(2)</span>
										</a>
									</label>
								</li>

								<li>
									<label class="facet-label" for="facet_input_67233_1">
										<span class="custom-checkbox">
											<input id="facet_input_67233_1" data-search-url="68-electronics2a6d.html?q=Color-White" type="checkbox">
											<span class="color" style="background-color:#ffffff;"></span>
										</span>

										<a href="68-electronics2a6d.html?q=Color-White" class="_gray-darker search-link js-search-link" rel="nofollow">
											White
											<span class="magnitude">(5)</span>
										</a>
									</label>
								</li>

								<li>
									<label class="facet-label" for="facet_input_67233_2">
										<span class="custom-checkbox">
											<input id="facet_input_67233_2" data-search-url="68-electronics057e.html?q=Color-Black" type="checkbox">
											<span class="color" style="background-color:#434A54;"></span>
										</span>

										<a href="68-electronics057e.html?q=Color-Black" class="_gray-darker search-link js-search-link" rel="nofollow">
											Black
											<span class="magnitude">(5)</span>
										</a>
									</label>
								</li>

								<li>
									<label class="facet-label" for="facet_input_67233_3">
										<span class="custom-checkbox">
											<input id="facet_input_67233_3" data-search-url="68-electronics16fb.html?q=Color-Camel" type="checkbox">
											<span class="color" style="background-color:#C19A6B;"></span>
										</span>

										<a href="68-electronics16fb.html?q=Color-Camel" class="_gray-darker search-link js-search-link" rel="nofollow">
											Camel
											<span class="magnitude">(2)</span>
										</a>
									</label>
								</li>
							</ul>


						</section>
						<section class="facet clearfix">
							<p class="h6 facet-title hidden-sm-down">Brand</p>

							<div class="title hidden-md-up" data-target="#facet_90512" data-toggle="collapse">
								<p class="h6 facet-title">Brand</p>
								<span class="float-xs-right">
									<span class="navbar-toggler collapse-icons">
										<i class="material-icons add">&#xE313;</i>
										<i class="material-icons remove">&#xE316;</i>
									</span>
								</span>
							</div>


							<ul id="facet_90512" class="collapse">

								<li>
									<label class="facet-label" for="facet_input_90512_0">
										<span class="custom-checkbox">
											<input id="facet_input_90512_0" data-search-url="68-electronics4316.html?q=Brand-Studio+Design" type="checkbox">
											<span class="ps-shown-by-js"><i class="material-icons rtl-no-flip checkbox-checked">&#xE5CA;</i></span>
										</span>

										<a href="68-electronics4316.html?q=Brand-Studio+Design" class="_gray-darker search-link js-search-link" rel="nofollow">
											Studio Design
											<span class="magnitude">(10)</span>
										</a>
									</label>
								</li>

								<li>
									<label class="facet-label" for="facet_input_90512_1">
										<span class="custom-checkbox">
											<input id="facet_input_90512_1" data-search-url="68-electronics85e5.html?q=Brand-Graphic+Corner" type="checkbox">
											<span class="ps-shown-by-js"><i class="material-icons rtl-no-flip checkbox-checked">&#xE5CA;</i></span>
										</span>

										<a href="68-electronics85e5.html?q=Brand-Graphic+Corner" class="_gray-darker search-link js-search-link" rel="nofollow">
											Graphic Corner
											<span class="magnitude">(7)</span>
										</a>
									</label>
								</li>
							</ul>


						</section>
						<section class="facet clearfix">
							<p class="h6 facet-title hidden-sm-down">Dimension</p>

							<div class="title hidden-md-up" data-target="#facet_11931" data-toggle="collapse">
								<p class="h6 facet-title">Dimension</p>
								<span class="float-xs-right">
									<span class="navbar-toggler collapse-icons">
										<i class="material-icons add">&#xE313;</i>
										<i class="material-icons remove">&#xE316;</i>
									</span>
								</span>
							</div>


							<ul id="facet_11931" class="collapse">

								<li>
									<label class="facet-label" for="facet_input_11931_0">
										<span class="custom-checkbox">
											<input id="facet_input_11931_0" data-search-url="68-electronics48c1.html?q=Dimension-40x60cm" type="checkbox">
											<span class="ps-shown-by-js"><i class="material-icons rtl-no-flip checkbox-checked">&#xE5CA;</i></span>
										</span>

										<a href="68-electronics48c1.html?q=Dimension-40x60cm" class="_gray-darker search-link js-search-link" rel="nofollow">
											40x60cm
											<span class="magnitude">(5)</span>
										</a>
									</label>
								</li>

								<li>
									<label class="facet-label" for="facet_input_11931_1">
										<span class="custom-checkbox">
											<input id="facet_input_11931_1" data-search-url="68-electronics701b.html?q=Dimension-60x90cm" type="checkbox">
											<span class="ps-shown-by-js"><i class="material-icons rtl-no-flip checkbox-checked">&#xE5CA;</i></span>
										</span>

										<a href="68-electronics701b.html?q=Dimension-60x90cm" class="_gray-darker search-link js-search-link" rel="nofollow">
											60x90cm
											<span class="magnitude">(5)</span>
										</a>
									</label>
								</li>

								<li>
									<label class="facet-label" for="facet_input_11931_2">
										<span class="custom-checkbox">
											<input id="facet_input_11931_2" data-search-url="68-electronicsd3b7.html?q=Dimension-80x120cm" type="checkbox">
											<span class="ps-shown-by-js"><i class="material-icons rtl-no-flip checkbox-checked">&#xE5CA;</i></span>
										</span>

										<a href="68-electronicsd3b7.html?q=Dimension-80x120cm" class="_gray-darker search-link js-search-link" rel="nofollow">
											80x120cm
											<span class="magnitude">(5)</span>
										</a>
									</label>
								</li>
							</ul>


						</section>
					</div>

				</div>

				<!-- Block tags module -->
				<div id="tags_block">
					<h2>tags</h2>
					<ul class="tags_block">

						<li>
							<a href="search0c35.html?tag=Cookware" title="More about Cookware" class="tag_level1 first_item">Cookware</a>
						</li>
						<li>
							<a href="searchd30f.html?tag=Appliances" title="More about Appliances" class="tag_level1 item">Appliances</a>
						</li>
						<li>
							<a href="search6357.html?tag=Kitchenware" title="More about Kitchenware" class="tag_level1 item">Kitchenware</a>
						</li>
						<li>
							<a href="search456c.html?tag=Tableware" title="More about Tableware" class="tag_level1 last_item">Tableware</a>
						</li>
					</ul>
				</div>
				<!-- /Block tags module -->
				<div class="advertising-block">
					<a href="http://www.prestashop.com/" title="PrestaShop"><img src="../modules/ps_advertising/img/advertising-s1.jpg" alt="PrestaShop" title="PrestaShop" /></a>
				</div>

			</div>
			<!-- Fin de la sidebare -->


			<div id="content-wrapper" class="left-column col-xs-12 col-sm-8 col-md-9">


				<section id="main">


					<!-- <div id="js-product-list-header">
						<div class="block-category card card-block category_img">

							
						</div>
					</div> -->


					<section id="products-list">
						<!-- Le header de la section -->
						<div id="">

							<div id="js-product-list-top" class=" products-selection">
								<div class="row">
									<div class="col-md-6 total-products">
										<ul class="display">
											<li id="grid"> <i class="fa fa-th show_grid"></i></li>
											<li id="list"> <i class="fa fa-list show_list"></i></li>
										</ul>
										<p class="hidden-sm-down">There are 17 products.</p>
									</div>
									<div class="col-md-6">
										<div class="row sort-by-row">


											<span class="col-sm-3 col-md-3 hidden-sm-down sort-by">Sort
												by:</span>
											<div class="col-sm-9 col-xs-8 col-md-9 products-sort-order dropdown">
												<button class="btn-unstyle select-title" rel="nofollow" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
													Relevance <i class="material-icons float-xs-right">&#xE5C5;</i>
												</button>
												<div class="dropdown-menu">
													<a rel="nofollow" href="68-electronicsf917.html?order=product.position.asc" class="select-list current js-search-link">
														Relevance
													</a>
													<a rel="nofollow" href="68-electronicsfe2d.html?order=product.name.asc" class="select-list js-search-link">
														Name, A to Z
													</a>
													<a rel="nofollow" href="68-electronics0279.html?order=product.name.desc" class="select-list js-search-link">
														Name, Z to A
													</a>
													<a rel="nofollow" href="68-electronics8eb3.html?order=product.price.asc" class="select-list js-search-link">
														Price, low to high
													</a>
													<a rel="nofollow" href="68-electronics04e6.html?order=product.price.desc" class="select-list js-search-link">
														Price, high to low
													</a>
												</div>
											</div>


											<div class="col-sm-6 col-xs-4 hidden-md-up filter-button">
												<button id="search_filter_toggler" class="btn btn-secondary" href="#search_filters_wrapper">
													Filter
												</button>
											</div>
										</div>
									</div>

								</div>
							</div>

						</div>
						<!-- Fin du headre de la section -->

						<!-- Debut du body de la section -->
						<div id="">

							<div id="js-product-list" data-cate="2" data-type="0" data-list="">
								<div class="row product_content grid ">
									@foreach($products as $product)
										<div class="item-product product_per_4 col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3">

											<article class="style_product_default product-miniature js-product-miniature item_in" data-id-product="13" data-id-product-attribute="0" itemscope itemtype="">
												<div class="img_block">

													<a href="{{ route('product.show',$product->slug) }}" class="thumbnail product-thumbnail">
														<img class="first-image " src="{{ $product->image }}" alt="Fila Locker Room Varsity..." data-full-size-image-url="{{ Storage::url($product->image) }}">
														<img class="img-responsive second-image animation9" src="{{ $product->image }}" alt="" itemprop="image" />

													</a>

													<div class="quick-view">

														<a class="quick_view" href="{{ route('product.show',$product->slug) }}" data-link-action="quickview" title="Quick view">
															<span>Quick view</span>
														</a>

													</div>


													<ul class="product-flag">
														<li class="new"><span>New</span></li>
													</ul>

												</div>

												<div class="product_desc">
													<div class="inner_desc">
														<!-- <div class="manufacturer"><a href="brand/2-graphic-corner.html?id_manufacturer=2">{{ $product->subtitle }}</a></div> -->
														<div class="manufacturer"><a href="brand/2-graphic-corner.html?id_manufacturer=2">Category:
																@foreach($product->categories as $category)
																	{{ $category->name }}
																@endforeach
															</a>
														</div>

														<h3 itemprop="name"><a href="{{ route('product.show',$product->slug) }}" class="product_name one_line" title="Fila Locker Room Varsity Jacket">{{ $product->title }}</a></h3>


														<div class="hook-reviews">
															<div class="comments_note" itemprop="aggregateRating" itemscope itemtype="https://schema.org/AggregateRating">
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
																<span class="nb-comments"><span itemprop="reviewCount">1</span>
																	Review(s)</span>
															</div>

														</div>


														<div class="product-price-and-shipping">



															<span class="sr-only">Price</span>
															<span itemprop="price" class="price ">{{ $product->getPrice() }}</span>



														</div>


														<ul class="add-to-links">
															<li class="cart">
																<div class="product-add-to-cart">
																	<form action="{{route('panier.store')}}" method="post" class="add-to-cart-or-refresh">
																		@csrf
																		<input type="hidden" name="product_id" value="{{ $product->id }}">
																		
																		<button class="button ajax_add_to_cart_button add-to-cart btn-default"  type="submit">
																			 Ajouter au panier
																		</button>
																	</form>


																</div>
															</li>

															<!-- <li>

																<a class="addToWishlist wishlistProd_13" title="Add to wishlist" href="#" data-rel="13" onclick="WishlistCart('wishlist_block_list', 'add', '13', false, 1); return false;">
																	Add to wishlist
																</a>


															</li>

															<li class="compare">
																<a href="#" class="poscompare-add compare-button js-poscompare-add" data-id_product="13" onclick="posCompare.addCompare($(this),13); return false;" title="Add to compare"><span>Add to
																		compare</span></a>
															</li> -->

														</ul>
													</div>
													<div class="availability">
														<div class="availability-list in-stock">Disponibilite:
															<span>{{ $product->stock }} au Stock</span>
														</div>

													</div>

													<div class="product-desc" itemprop="description">
														<ul>
															<li>
																<div>{{ $product->description }}</div>
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


								<nav class="pagination">

									<ul class="page-list clearfix text-sm-center">

										<li class="current">
											<a rel="nofollow" href="68-electronics.html" class="disabled js-search-link">
												1
											</a>
										</li>


										<li>
											<a rel="nofollow" href="68-electronics4658.html?page=2" class="js-search-link">
												2
											</a>
										</li>


										<li>
											<a rel="next" href="68-electronics4658.html?page=2" class="next js-search-link">
												Next<i class="material-icons">&#xE315;</i>
											</a>
										</li>
									</ul>


								</nav>

							</div>

						</div>
						<!-- Fin du body de la section -->

						<div id="js-product-list-bottom">

							<div id="js-product-list-bottom"></div>

						</div>

					</section>

				</section>


			</div>



		</div>

	</div>


</div>
@endsection




