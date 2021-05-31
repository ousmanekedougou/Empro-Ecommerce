@extends('admin.layouts.app')
@section('headsection')
    <link href="{{asset('admin/assets/libs/select2/css/select2.min.css')}}" rel="stylesheet" type="text/css" />

    <!-- dropzone css -->
    <link href="{{asset('admin/assets/libs/dropzone/min/dropzone.min.css')}}" rel="stylesheet" type="text/css" />
@endsection
@section('main-content')

    <div class="page-content">
        <div class="container-fluid">

            <!-- start page title -->
            <div class="row">
                <div class="col-12">
                    <div class="page-title-box d-sm-flex align-items-center justify-content-between">
                        <h4 class="mb-sm-0 font-size-18">Product Detail</h4>

                        <div class="page-title-right">
                            <ol class="breadcrumb m-0">
                                <li class="breadcrumb-item"><a href="{{ route('admin.product.index') }}" class="btn btn-xs btn-primary waves-effect waves-light mt-2 me-1">
                                   <span class="text-white"> <i class="fa fa-arrow-left"></i> Retoure</span>
                                </a></li>
                            </ol>
                        </div>

                    </div>
                </div>
            </div>
            <!-- end page title -->

            <div class="row">
                <div class="col-lg-12">
                    <div class="card">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-xl-6">
                                    <div class="product-detai-imgs">
                                        <div class="row">
                                            <div class="col-md-2 col-sm-3 col-4">
                                                <div class="nav flex-column nav-pills " id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                                   
                                                    <a class="nav-link active img-thumbnail" id="product-1-tab" data-bs-toggle="pill" href="#product-1" role="tab" aria-controls="product-1" aria-selected="true">
                                                        <img src="{{ Storage::url($product->image) }}" alt="" class="img-fluid mx-auto d-block rounded">
                                                    </a>
                                                   
                                                    @if($product->images)

                                                        @foreach(json_decode($product->images,true) as $image)
                                                            <a class="nav-link active" id="product-1-tab" data-bs-toggle="pill" href="#product-1" role="tab" aria-controls="product-1" aria-selected="true">
                                                                <img src="asset('admin/assets/images/product/img-8.png')}}" alt="" class="img-fluid mx-auto d-block rounded">
                                                            </a>
                                                        @endforeach

                                                    @endif
                                                </div>
                                            </div>
                                            <div class="col-md-7 offset-md-1 col-sm-9 col-8">
                                                <div class="tab-content" id="v-pills-tabContent">
                                                    <div class="tab-pane fade show active" id="mainImage" role="tabpanel" aria-labelledby="product-1-tab">
                                                        <div>
                                                            <img src="{{ Storage::url($product->image) }}" alt="" class="img-fluid mx-auto d-block">
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="text-center">
                                                    <a href="{{ route('admin.product.edit',$product->id) }}" class="btn btn-primary waves-effect waves-light mt-2 me-1">
                                                        <i class="fa fa-edit me-2"></i> Modifier
                                                    </a>
                                                        <form  id="delete-form-{{$product->id}}" method="post" action="{{ route('admin.product.destroy',$product->id) }}"  style="display:none">
                                                        {{csrf_field()}}
                                                        {{method_field('delete')}}
                                                        </form>
                                                        <a  href="" onclick=" if(confirm('Etes Vous sure de supprimer ce produit ?')){  event.preventDefault();document.getElementById('delete-form-{{$product->id}}').submit();
                            
                                                        }else{event.preventDefault();} " class="btn btn-danger waves-effect  mt-2 waves-light"><i class="fa fa-trash me-2"></i>Supprimer</a>
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-xl-6">
                                    <div class="mt-4 mt-xl-3">
                                        <a href="#" class="text-primary">Headphone</a>
                                        <h4 class="mt-1 mb-3">{{ $product->title }}</h4>

                                        <p class="text-muted float-start me-3">
                                            <span class="bx bxs-star text-warning"></span>
                                            <span class="bx bxs-star text-warning"></span>
                                            <span class="bx bxs-star text-warning"></span>
                                            <span class="bx bxs-star text-warning"></span>
                                            <span class="bx bxs-star"></span>
                                        </p>
                                        <p class="text-muted mb-4">( 152 Customers Review )</p>

                                        <h6 class="text-success text-uppercase">20 % Off</h6>
                                        <h5 class="mb-4">Prix : <span class="text-muted me-2"><del>$240 USD</del></span> <b>{{ $product->getPrice() }}</b></h5>
                                        <p class="text-muted mb-4">{{$product->description}}</p>
                                        <div class="row mb-3">
                                            <div class="col-md-6">
                                                <div>
                                                    <p class="text-muted"><i class="bx bx-unlink font-size-16 align-middle text-primary me-1"></i> Wireless</p>
                                                    <p class="text-muted"><i class="bx bx-shape-triangle font-size-16 align-middle text-primary me-1"></i> Wireless Range : 10m</p>
                                                    <p class="text-muted"><i class="bx bx-battery font-size-16 align-middle text-primary me-1"></i> Battery life : 6hrs</p>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div>
                                                    <p class="text-muted"><i class="bx bx-user-voice font-size-16 align-middle text-primary me-1"></i> Bass</p>
                                                    <p class="text-muted"><i class="bx bx-cog font-size-16 align-middle text-primary me-1"></i> Warranty : 1 Year</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="product-color">
                                            <h5 class="font-size-15">Color :</h5>
                                            <a href="#" class="active">
                                                <div class="product-color-item border rounded">
                                                    <img src="{{asset('admin/assets/images/product/img-7.png')}}" alt="" class="avatar-md">
                                                </div>
                                                <p>Black</p>
                                            </a>
                                            <a href="#">
                                                <div class="product-color-item border rounded">
                                                    <img src="{{asset('admin/assets/images/product/img-7.png')}}" alt="" class="avatar-md">
                                                </div>
                                                <p>Blue</p>
                                            </a>
                                            <a href="#">
                                                <div class="product-color-item border rounded">
                                                    <img src="{{asset('admin/assets/images/product/img-7.png')}}" alt="" class="avatar-md">
                                                </div>
                                                <p>Gray</p>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- end row -->

                            <div class="mt-5">
                                <h5 class="mb-3">Specifications :</h5>

                                <div class="table-responsive">
                                    <table class="table mb-0 table-bordered">
                                        <tbody>
                                            <tr>
                                                <th scope="row" style="width: 400px;">Category</th>
                                                <td>Headphone</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Brand</th>
                                                <td>JBL</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Color</th>
                                                <td>Black</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Connectivity</th>
                                                <td>Bluetooth</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Warranty Summary</th>
                                                <td>1 Year</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <!-- end Specifications -->

                            <div class="mt-5">
                                <h5>Reviews :</h5>

                                <div class="media py-3 border-bottom">
                                    <img src="assets/images/users/avatar-2.jpg" class="avatar-xs me-3 rounded-circle" alt="img" />
                                    <div class="media-body">
                                        <h5 class="mt-0 mb-1 font-size-15">Brian</h5>
                                        <p class="text-muted">If several languages coalesce, the grammar of the resulting language.</p>
                                        <ul class="list-inline float-sm-end mb-sm-0">
                                            <li class="list-inline-item">
                                                <a href="#"><i class="far fa-thumbs-up me-1"></i> Like</a>
                                            </li>
                                            <li class="list-inline-item">
                                                <a href="#"><i class="far fa-comment-dots me-1"></i> Comment</a>
                                            </li>
                                        </ul>
                                        <div class="text-muted font-size-12"><i class="far fa-calendar-alt text-primary me-1"></i> 5 hrs ago</div>
                                    </div>
                                </div>
                                <div class="media py-3 border-bottom">
                                    <img src="assets/images/users/avatar-4.jpg" class="avatar-xs me-3 rounded-circle" alt="img" />
                                    <div class="media-body">
                                        <h5 class="mt-0 font-size-15 mb-1">Denver</h5>
                                        <p class="text-muted">To an English person, it will seem like simplified English, as a skeptical Cambridge</p>
                                        <ul class="list-inline float-sm-end mb-sm-0">
                                            <li class="list-inline-item">
                                                <a href="#"><i class="far fa-thumbs-up me-1"></i> Like</a>
                                            </li>
                                            <li class="list-inline-item">
                                                <a href="#"><i class="far fa-comment-dots me-1"></i> Comment</a>
                                            </li>
                                        </ul>
                                        <div class="text-muted font-size-12"><i class="far fa-calendar-alt text-primary me-1"></i> 07 Oct, 2019</div>
                                        <div class="media mt-4">
                                            <img src="assets/images/users/avatar-5.jpg" class="avatar-xs me-3 rounded-circle" alt="img" />
                                            <div class="media-body">
                                                <h5 class="mt-0 mb-1 font-size-15">Henry</h5>
                                                <p class="text-muted">Their separate existence is a myth. For science, music, sport, etc.</p>
                                                <ul class="list-inline float-sm-end mb-sm-0">
                                                    <li class="list-inline-item">
                                                        <a href="#"><i class="far fa-thumbs-up me-1"></i> Like</a>
                                                    </li>
                                                    <li class="list-inline-item">
                                                        <a href="#"><i class="far fa-comment-dots me-1"></i> Comment</a>
                                                    </li>
                                                </ul>
                                                <div class="text-muted font-size-12"><i class="far fa-calendar-alt text-primary me-1"></i> 08 Oct, 2019</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="media py-3 border-bottom">
                                    <div class="avatar-xs me-3">
                                        <span class="avatar-title bg-primary bg-soft text-primary rounded-circle font-size-16">
                                            N
                                        </span>
                                    </div>
                                    <div class="media-body">
                                        <h5 class="mt-0 mb-1 font-size-15">Neal</h5>
                                        <p class="text-muted">Everyone realizes why a new common language would be desirable.</p>
                                        <ul class="list-inline float-sm-end mb-sm-0">
                                            <li class="list-inline-item">
                                                <a href="#"><i class="far fa-thumbs-up me-1"></i> Like</a>
                                            </li>
                                            <li class="list-inline-item">
                                                <a href="#"><i class="far fa-comment-dots me-1"></i> Comment</a>
                                            </li>
                                        </ul>
                                        <div class="text-muted font-size-12"><i class="far fa-calendar-alt text-primary me-1"></i> 05 Oct, 2019</div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <!-- end card -->
                </div>
            </div>
            <!-- end row -->

            <div class="row mt-3">
                <div class="col-lg-12">
                    <div>
                        <h5 class="mb-3">Recent product :</h5>

                        <div class="row">
                            <div class="col-xl-4 col-sm-6">
                                <div class="card">
                                    <div class="card-body">
                                        <div class="row align-items-center">
                                            <div class="col-md-4">
                                                <img src="assets/images/product/img-7.png" alt="" class="img-fluid mx-auto d-block">
                                            </div>
                                            <div class="col-md-8">
                                                <div class="text-center text-md-start pt-3 pt-md-0">
                                                    <h5 class="text-truncate"><a href="#" class="text-dark">Wirless Headphone</a></h5>
                                                    <p class="text-muted mb-4">
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
                                </div>
                            </div>
                            <div class="col-xl-4 col-sm-6">
                                <div class="card">
                                    <div class="card-body">
                                        <div class="row align-items-center">
                                            <div class="col-md-4">
                                                <img src="assets/images/product/img-4.png" alt="" class="img-fluid mx-auto d-block">
                                            </div>
                                            <div class="col-md-8">
                                                <div class="text-center text-md-start pt-3 pt-md-0">
                                                    <h5 class="text-truncate"><a href="#" class="text-dark">Phone patterned cases</a></h5>
                                                    <p class="text-muted mb-4">
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
                                </div>
                            </div>
                            <div class="col-xl-4 col-sm-6">
                                <div class="card">
                                    <div class="card-body">
                                        <div class="row align-items-center">
                                            <div class="col-md-4">
                                                <img src="assets/images/product/img-6.png" alt="" class="img-fluid mx-auto d-block">
                                            </div>
                                            <div class="col-md-8">
                                                <div class="text-center text-md-start pt-3 pt-md-0">
                                                    
                                                    <h5 class="text-truncate"><a href="#" class="text-dark">Phone Dark Patterned cases</a></h5>
                                                    <p class="text-muted mb-4">
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
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- end row -->
                    </div>
                </div>
            </div>
            <!-- end row -->

        </div> <!-- container-fluid -->

        <!-- Eddition des produit avec les modal-->
         <!-- <button type="button" class="btn btn-primary waves-effect waves-light mt-2 me-1" data-bs-toggle="modal" data-bs-target=".bs-example-modal-lg-{{$product->id}}">
            <i class="fa fa-edit me-2"></i> Modifier
        </button> -->
        <!--  Large modal example -->
        <!-- @foreach(App\Models\User\Product::all() as $product)
            <div class="modal fade bs-example-modal-lg-{{$product->id}}" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="myLargeModalLabel">Large modal</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="container-fluid">
                                <div class="card">
                                    <div class="card-body">
                                        <form action="{{ route('admin.product.store') }}" method="post" class="dropzone" enctype="multipart/form-data" >
                                            @csrf
                                            <div class="row">
                                                <div class="col-sm-6">
                                                    <div class="mb-3">
                                                        <label for="name">Nom du produit</label>
                                                        <input id="name" name="name" type="text" class="form-control @error('name') is-invalid @enderror"  value="{{ old('name') }}" required autocomplete="name">
                                                        @error('name')
                                                            <span class="invalid-feedback" role="alert">
                                                                <strong>{{ $message }}</strong>
                                                            </span>
                                                        @enderror
                                                    </div>
                                                    <div class="mb-3">
                                                        <label for="manufacturername">Sous titre du produit</label>
                                                        <input id="sous_name" name="sous_name" type="text" class="form-control @error('sous_name') is-invalid @enderror"  value="{{ old('sous_name') }}" required autocomplete="sous_name">
                                                        @error('sous_name')
                                                            <span class="invalid-feedback" role="alert">
                                                                <strong>{{ $message }}</strong>
                                                            </span>
                                                        @enderror
                                                    </div>
                                                    <div class="mb-3">
                                                        <label for="manufacturerbrand">Slug du produit</label>
                                                        <input id="slug" name="slug" type="text" class="form-control @error('slug') is-invalid @enderror" value="{{ old('slug') }}" required autocomplete="slug">
                                                        @error('slug')
                                                            <span class="invalid-feedback" role="alert">
                                                                <strong>{{ $message }}</strong>
                                                            </span>
                                                        @enderror
                                                    </div>
                                                </div>

                                                <div class="col-sm-6">
                                                <div class="mb-3">
                                                        <label class="control-label">Categories</label>
                                                        <select name="category[]" id="category" class="select2 form-control select2-multiple @error('category') is-invalid @enderror" multiple="multiple" required autocomplete="category" data-placeholder="Choisir vos categories">
                                                            @foreach($categorys as $category)
                                                                <option value="{{ $category->id }}">{{ $category->name }}</option>
                                                            @endforeach
                                                        </select>
                                                        @error('category')
                                                            <span class="invalid-feedback" role="alert">
                                                                <strong>{{ $message }}</strong>
                                                            </span>
                                                        @enderror

                                                    </div>
                                                    <div class="mb-3">
                                                        <label for="prix">Prix du produit</label>
                                                        <input id="prix" name="prix" type="number" class="form-control @error('prix') is-invalid @enderror" value="{{ old('prix') }}" required autocomplete="prix">
                                                        @error('prix')
                                                            <span class="invalid-feedback" role="alert">
                                                                <strong>{{ $message }}</strong>
                                                            </span>
                                                        @enderror
                                                    </div>
                                                    <div class="mb-3">
                                                        <label for="image">Image du produit</label>
                                                        <input id="image" name="image" type="file" class="form-control @error('image') is-invalid @enderror" value="{{ old('image') }}" required autocomplete="image">
                                                        @error('image')
                                                            <span class="invalid-feedback" role="alert">
                                                                <strong>{{ $message }}</strong>
                                                            </span>
                                                        @enderror
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-sm-12">
                                                <div class="mb-3">
                                                    <label for="description">Product Description</label>
                                                    <textarea name="description" class="form-control @error('description') is-invalid @enderror" value="{{ old('description') }}" required autocomplete="description" rows="5"></textarea>
                                                    @error('description')
                                                        <span class="invalid-feedback" role="alert">
                                                            <strong>{{ $message }}</strong>
                                                        </span>
                                                    @enderror
                                                </div>
                                            </div>

                                            <h4 class="card-title mb-3">Images similaires du produit</h4>
                                            <div class="fallback">
                                                <input name="file" type="file" multiple />
                                            </div>

                                            <div class="dz-message needsclick">
                                                <div class="mb-3">
                                                    <i class="display-4 text-muted bx bxs-cloud-upload"></i>
                                                </div>
                                                
                                                <h4>Drop files here or click to upload.</h4>
                                            </div>
                                            <div class="d-flex flex-wrap gap-2">
                                                <button type="submit" class="btn btn-primary waves-effect waves-light">Save Changes</button>
                                                <button type="submit" class="btn btn-secondary waves-effect waves-light">Cancel</button>
                                            </div>
                                        </form>
                                    </div>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        @endforeach -->
            <!-- Fin de l'edition des produit avec le modal -->
    </div>
    <!-- End Page-content -->

    
@endsection

@section('settingsection')
    <!-- select 2 plugin -->
    <script src="{{asset('admin/assets/libs/select2/js/select2.min.js')}}"></script>

    <!-- dropzone plugin -->
    <script src="{{asset('admin/assets/libs/dropzone/min/dropzone.min.js')}}"></script>

    <!-- init js -->
    <script src="{{asset('admin/assets/js/pages/ecommerce-select2.init.js')}}"></script>

    <script>
        var mainImage = document.querySelector('#mainImage');
        var thumbnails = document.querySelectorAll('.img-thumbnail');

        thumbnails.forEach((element) => element.addEventListener('click', changeImage));

        function changeImage(e){
            mainImage.src = this.src;
        }
    </script>
@endsection