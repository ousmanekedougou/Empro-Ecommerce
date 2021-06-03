@extends('admin.layouts.app')

@section('main-content')

    <div class="page-content">
        <div class="container-fluid">

            <!-- start page title -->
            <div class="row">
                <div class="col-12">
                    <div class="page-title-box d-sm-flex align-items-center justify-content-between">
                        <h4 class="mb-sm-0 font-size-18"><a href="{{ route('admin.product.index') }}"> <i class="fa fa-home"></i> Products</a></h4>
                    
                        <div class="page-title-right">
                            <ol class="breadcrumb m-0">
                                 <li class="breadcrumb-item"><a href="{{ route('admin.product.create') }}" class="btn btn-xs btn-primary waves-effect waves-light mt-2 me-1">
                                   <span class="text-white"> <i class="fa fa-plus"></i> Ajouter un produit</span>
                                </a></li>
                            </ol>
                        </div>

                    </div>
                </div>
            </div>
            <!-- end page title -->

            <div class="row">
                <div class="col-lg-3">
                    <div class="card">
                        <div class="card-body">
                            <div>
                              
                                 <div class="btn-group me-1 mt-2">
                                    <button class="btn btn-default btn-md dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Catagories <i class="mdi mdi-chevron-down"></i>
                                    </button>
                                    <div class="dropdown-menu">
                                    @foreach(App\Models\User\Category::all() as $category)
                                        <span> {{$category->name}} </span>
                                        @foreach($category->sous_categories as $sous_category)
                                            <a class="category-sub-link dropdown-item" href="{{ route('admin.product.index', ['sous_categorie'
                                            => $sous_category->slug]) }}">{{$sous_category->name}}</a>
                                        @endforeach
                                    @endforeach
                                       
                                    </div>
                                </div>
                            </div>
                            <!-- <div class="mt-4 pt-3">
                                <h5 class="font-size-14 mb-3">Price</h5>
                                <input type="text" id="pricerange">
                            </div> -->

                            <div class="mt-4 pt-3">
                                <h5 class="font-size-14 mb-3">Discount</h5>
                                <div class="form-check mt-2">
                                    <input class="form-check-input" type="checkbox" id="productdiscountCheck1">
                                    <label class="form-check-label" for="productdiscountCheck1">
                                        Less than 10%
                                    </label>
                                </div>

                                <div class="form-check mt-2">
                                    <input class="form-check-input" type="checkbox" id="productdiscountCheck2">
                                    <label class="form-check-label" for="productdiscountCheck2">
                                        10% or more
                                    </label>
                                </div>

                                <div class="form-check mt-2">
                                    <input class="form-check-input" type="checkbox" id="productdiscountCheck3" checked>
                                    <label class="form-check-label" for="productdiscountCheck3">
                                        20% or more
                                    </label>
                                </div>

                                <div class="form-check mt-2">
                                    <input class="form-check-input" type="checkbox" id="productdiscountCheck4">
                                    <label class="form-check-label" for="productdiscountCheck4">
                                        30% or more
                                    </label>
                                </div>

                                <div class="form-check mt-2">
                                    <input class="form-check-input" type="checkbox" id="productdiscountCheck5">
                                    <label class="form-check-label" for="productdiscountCheck5">
                                        40% or more
                                    </label>
                                </div>

                                <div class="form-check mt-2">
                                    <input class="form-check-input" type="checkbox" id="productdiscountCheck6">
                                    <label class="form-check-label" for="productdiscountCheck6">
                                        50% or more
                                    </label>
                                </div>

                            </div>

                            <div class="mt-4 pt-3">
                                <h5 class="font-size-14 mb-3">Customer Rating</h5>
                                <div>
                                    <div class="form-check mt-2">
                                        <input class="form-check-input" type="checkbox" id="productratingCheck1">
                                        <label class="form-check-label" for="productratingCheck1">
                                            4 <i class="bx bxs-star text-warning"></i>  & Above
                                        </label>
                                    </div>
                                    <div class="form-check mt-2">
                                        <input class="form-check-input" type="checkbox" id="productratingCheck2">
                                        <label class="form-check-label" for="productratingCheck2">
                                            3 <i class="bx bxs-star text-warning"></i>  & Above
                                        </label>
                                    </div>
                                    <div class="form-check mt-2">
                                        <input class="form-check-input" type="checkbox" id="productratingCheck3">
                                        <label class="form-check-label" for="productratingCheck3">
                                            2 <i class="bx bxs-star text-warning"></i>  & Above
                                        </label>
                                    </div>

                                    <div class="form-check mt-2">
                                        <input class="form-check-input" type="checkbox" id="productratingCheck4">
                                        <label class="form-check-label" for="productratingCheck4">
                                            1 <i class="bx bxs-star text-warning"></i>
                                        </label>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div class="col-lg-9">
                        
                    <div class="row mb-3">
                        <div class="col-xl-4 col-sm-6">
                            <div class="mt-2">
                                <h5>Produits</h5>
                            </div>
                        </div>
                        <div class="col-lg-8 col-sm-6">
                            <form method="get" action="{{route('admin.product.search')}}" class="mt-4 mt-sm-0 float-sm-end d-sm-flex align-items-center">
                                @csrf
                                <div class="search-box me-2">
                                    <div class="position-relative">
                                        <input type="text" name="q" value="{{ request()->q ?? '' }}" class="form-control border-0" placeholder="Search...">
                                        <i class="bx bx-search-alt search-icon"></i>
                                    </div>
                                </div>
                                <ul class="nav nav-pills product-view-nav justify-content-end mt-3 mt-sm-0">
                                    <li class="nav-item">
                                        <a class="nav-link active" href="#"><i class="bx bx-grid-alt"></i></a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#"><i class="bx bx-list-ul"></i></a>
                                    </li>
                                </ul>
                                
                                
                            </form>
                        </div>
                    </div>
                    <div class="row">
                    @foreach($products as $product)
                        <div class="col-xl-4 col-sm-6">
                            <div class="card">
                                <div class="card-body">
                                    <div class="product-img position-relative">
                                        <div class="avatar-sm product-ribbon">
                                            <span class="avatar-title rounded-circle  bg-warning">
                                                <a href="{{ route('admin.product.show',$product->slug) }}"><i class="fa fa-eye"></i></a>
                                            </span>
                                        </div>
                                        <img src="{{ Storage::url($product->image) }}" alt="" class="img-fluid mx-auto d-block">
                                    </div>
                                    <div class="mt-4 text-center">
                                        <h5 class="mb-3 text-truncate"><a href="#" class="text-dark">{{$product->title}} </a></h5>
                                        
                                        <p class="text-muted">
                                            <i class="bx bxs-star text-warning"></i>
                                            <i class="bx bxs-star text-warning"></i>
                                            <i class="bx bxs-star text-warning"></i>
                                            <i class="bx bxs-star text-warning"></i>
                                            <i class="bx bxs-star text-warning"></i>
                                        </p>
                                        <h5 class="my-0"><span class="text-muted me-2"><span><del href="">1000 f</del></span></span> <b>{{ $product->getPrice() }}</b></h5>

                                    </div>
                                </div>
                            </div>
                        </div>
                    @endforeach
                        <!-- <div class="col-xl-4 col-sm-6">
                            <div class="card">
                                <div class="card-body">
                                    <div class="product-img position-relative">
                                        <img src="assets/images/product/img-2.png" alt="" class="img-fluid mx-auto d-block">
                                    </div>
                                    <div class="mt-4 text-center">
                                        <h5 class="mb-3 text-truncate"><a href="#" class="text-dark">Light blue T-shirt</a></h5>
                                        
                                        <p class="text-muted">
                                            <i class="bx bxs-star text-warning"></i>
                                            <i class="bx bxs-star text-warning"></i>
                                            <i class="bx bxs-star text-warning"></i>
                                            <i class="bx bxs-star text-warning"></i>
                                            <i class="bx bxs-star"></i>
                                        </p>
                                        <h5 class="my-0"><span class="text-muted me-2"><del>$240</del></span> <b>$225</b></h5>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-sm-6">
                            <div class="card">
                                <div class="card-body">
                                    <div class="product-img position-relative">
                                        <div class="avatar-sm product-ribbon">
                                            <span class="avatar-title rounded-circle  bg-primary">
                                                - 20 %
                                            </span>
                                        </div>
                                        <img src="assets/images/product/img-3.png" alt="" class="img-fluid mx-auto d-block">
                                    </div>
                                    <div class="mt-4 text-center">
                                        <h5 class="mb-3 text-truncate"><a href="#" class="text-dark">Black Color T-shirt</a></h5>
                                        
                                        <p class="text-muted">
                                            <i class="bx bxs-star text-warning"></i>
                                            <i class="bx bxs-star text-warning"></i>
                                            <i class="bx bxs-star text-warning"></i>
                                            <i class="bx bxs-star text-warning"></i>
                                            <i class="bx bxs-star"></i>
                                        </p>
                                        <h5 class="my-0"><span class="text-muted me-2"><del>$175</del></span> <b>$152</b></h5>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-sm-6">
                            <div class="card">
                                <div class="card-body">
                                    <div class="product-img position-relative">
                                        <img src="assets/images/product/img-4.png" alt="" class="img-fluid mx-auto d-block">
                                    </div>
                                    <div class="mt-4 text-center">
                                        <h5 class="mb-3 text-truncate"><a href="#" class="text-dark">Hoodie (Blue)</a></h5>
                                        
                                        <p class="text-muted">
                                            <i class="bx bxs-star text-warning"></i>
                                            <i class="bx bxs-star text-warning"></i>
                                            <i class="bx bxs-star text-warning"></i>
                                            <i class="bx bxs-star text-warning"></i>
                                            <i class="bx bxs-star"></i>
                                        </p>
                                        <h5 class="my-0"><span class="text-muted me-2"><del>$150</del></span> <b>$145</b></h5>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-sm-6">
                            <div class="card">
                                <div class="card-body">
                                    
                                    <div class="product-img position-relative">
                                        <div class="avatar-sm product-ribbon">
                                            <span class="avatar-title rounded-circle  bg-primary">
                                                - 22 %
                                            </span>
                                        </div>
                                        <img src="assets/images/product/img-5.png" alt="" class="img-fluid mx-auto d-block">
                                    </div>
                                    <div class="mt-4 text-center">
                                        <h5 class="mb-3 text-truncate"><a href="#" class="text-dark">Half sleeve T-Shirt</a></h5>
                                        
                                        <p class="text-muted">
                                            <i class="bx bxs-star text-warning"></i>
                                            <i class="bx bxs-star text-warning"></i>
                                            <i class="bx bxs-star text-warning"></i>
                                            <i class="bx bxs-star text-warning"></i>
                                            <i class="bx bxs-star"></i>
                                        </p>
                                        <h5 class="my-0"><span class="text-muted me-2"><del>$145</del></span> <b>$138</b></h5>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-sm-6">
                            <div class="card">
                                <div class="card-body">
                                    <div class="product-img position-relative">
                                        <div class="avatar-sm product-ribbon">
                                            <span class="avatar-title rounded-circle bg-primary">
                                                - 28 %
                                            </span>
                                        </div>
                                        <img src="assets/images/product/img-6.png" alt="" class="img-fluid mx-auto d-block">
                                    </div>
                                    <div class="mt-4 text-center">
                                        <h5 class="mb-3 text-truncate"><a href="#" class="text-dark">Green color T-shirt</a></h5>
                                        
                                        <p class="text-muted">
                                            <i class="bx bxs-star text-warning"></i>
                                            <i class="bx bxs-star text-warning"></i>
                                            <i class="bx bxs-star text-warning"></i>
                                            <i class="bx bxs-star text-warning"></i>
                                            <i class="bx bxs-star"></i>
                                        </p>
                                        <h5 class="my-0"><span class="text-muted me-2"><del>$138</del></span> <b>$135</b></h5>

                                    </div>
                                </div>
                            </div>
                        </div> -->
                    </div>
                    <!-- end row -->

                    <div class="row">
                        <div class="col-lg-12">
                            <ul class="pagination pagination-rounded justify-content-center mt-3 mb-4 pb-1">
                                <li class="page-item disabled">
                                    <a href="#" class="page-link"><i class="mdi mdi-chevron-left"></i></a>
                                </li>
                                <li class="page-item">
                                    <a href="#" class="page-link">1</a>
                                </li>
                                <li class="page-item active">
                                    <a href="#" class="page-link">2</a>
                                </li>
                                <li class="page-item">
                                    <a href="#" class="page-link">3</a>
                                </li>
                                <li class="page-item">
                                    <a href="#" class="page-link">4</a>
                                </li>
                                <li class="page-item">
                                    <a href="#" class="page-link">5</a>
                                </li>
                                <li class="page-item">
                                    <a href="#" class="page-link"><i class="mdi mdi-chevron-right"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <!-- end row -->

        </div> <!-- container-fluid -->
    </div>
    <!-- End Page-content -->

@endsection