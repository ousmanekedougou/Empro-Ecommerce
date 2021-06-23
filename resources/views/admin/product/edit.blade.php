@extends('admin.layouts.app')
@section('headsection')
    <link href="{{asset('admin/assets/libs/select2/css/select2.min.css')}}" rel="stylesheet" type="text/css" />

    <!-- dropzone css -->
    <link href="{{asset('admin/assets/libs/dropzone/min/dropzone.min.css')}}" rel="stylesheet" type="text/css" />
    <link href="{{asset('admin/assets/css/admin.css')}}"  rel="stylesheet" type="text/css" />
@endsection
@section('main-content')

    <div class="page-content">
        <div class="container-fluid">

            <!-- start page title -->
            <div class="row">
                <div class="col-12">
                    <div class="page-title-box d-sm-flex align-items-center justify-content-between">
                        <h4 class="mb-sm-0 font-size-18">Edit Product</h4>

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
                <div class="col-12">
                    <!-- <div class="card">
                        <div class="card-body">

                            <h4 class="card-title">Basic Information</h4>
                            <p class="card-title-desc">Fill all information below</p>

                            <form>
                                <div class="row">
                                    <div class="col-sm-6">
                                        <div class="mb-3">
                                            <label for="productname">Nom du produit</label>
                                            <input id="productname" name="productname" type="text" class="form-control">
                                        </div>
                                        <div class="mb-3">
                                            <label for="manufacturername">Sous titre du produit</label>
                                            <input id="manufacturername" name="manufacturername" type="text" class="form-control">
                                        </div>
                                        <div class="mb-3">
                                            <label for="manufacturerbrand">Slug du produit</label>
                                            <input id="manufacturerbrand" name="manufacturerbrand" type="text" class="form-control">
                                        </div>
                                        <div class="mb-3">
                                            <label for="productdesc">Product Description</label>
                                            <textarea class="form-control" id="productdesc" rows="5"></textarea>
                                        </div>
                                    </div>

                                    <div class="col-sm-6">
                                        <div class="mb-3">
                                            <label class="control-label">Category</label>
                                            <select class="form-control select2">
                                                <option>Select</option>
                                                <option value="FA">Fashion</option>
                                                <option value="EL">Electronic</option>
                                            </select>
                                        </div>
                                        <div class="mb-3">
                                            <label class="control-label">Features</label>

                                            <select class="select2 form-control select2-multiple" multiple="multiple" data-placeholder="Choose ...">
                                                <option value="WI">Wireless</option>
                                                <option value="BE">Battery life</option>
                                                <option value="BA">Bass</option>
                                            </select>

                                        </div>
                                        <div class="mb-3">
                                            <label for="price">Prix du produit</label>
                                            <input id="price" name="price" type="text" class="form-control">
                                        </div>
                                        <div class="mb-3">
                                            <label for="price">Prix du produit</label>
                                            <input name="file" type="file" class="form-control" />
                                        </div>
                                    </div>
                                </div>
                                <div class="d-flex flex-wrap gap-2">
                                    <button type="submit" class="btn btn-primary waves-effect waves-light">Save Changes</button>
                                    <button type="button" class="btn btn-secondary waves-effect waves-light">Cancel</button>
                                </div>
                            </form>

                        </div>
                    </div> -->

                    <div class="card">
                        <div class="card-body">
                            <form action="{{ route('admin.product.update',$edit_product->id) }}" method="post" class="dropzone" enctype="multipart/form-data" >
                             @csrf
                             {{ method_field('PUT') }}
                                <div class="row">
                                    <div class="col-sm-6">
                                        <div class="mb-3">
                                            <label for="name">Nom du produit</label>
                                            <input id="name" name="name" type="text" class="form-control @error('name') is-invalid @enderror"  value="{{ old('name') ?? $edit_product->title }}" required autocomplete="name">
                                            @error('name')
                                                <span class="invalid-feedback" role="alert">
                                                    <strong>{{ $message }}</strong>
                                                </span>
                                            @enderror
                                        </div>
                                        <div class="mb-3">
                                            <label for="manufacturername">Sous titre du produit</label>
                                             <input id="sous_name" name="sous_name" type="text" class="form-control @error('sous_name') is-invalid @enderror"  value="{{ old('sous_name') ?? $edit_product->subtitle  }}" required autocomplete="sous_name">
                                            @error('sous_name')
                                                <span class="invalid-feedback" role="alert">
                                                    <strong>{{ $message }}</strong>
                                                </span>
                                            @enderror
                                        </div>
                                        <div class="mb-3">
                                            <label for="manufacturerbrand">Slug du produit</label>
                                             <input id="slug" name="slug" type="text" class="form-control @error('slug') is-invalid @enderror" value="{{ old('slug') ?? $edit_product->slug  }}" required autocomplete="slug">
                                            @error('slug')
                                                <span class="invalid-feedback" role="alert">
                                                    <strong>{{ $message }}</strong>
                                                </span>
                                            @enderror
                                        </div>
                                         <div class="mb-3">
                                            <label class="">Choisire le magasin</label>
                                            <select class="form-select @error('shop') is-invalid @enderror" name="shop" value="{{ old('shop') }}" required autocomplete="shop" >
                                                <option value="" desabled selected>Choix par defaut</option>
                                                @foreach($shops as $shop)
                                                    <option value="{{ $shop->id }}"
                                                        @if($edit_product->shop_id == $shop->id)
                                                        selected
                                                        @else 
                                                        
                                                        @endif
                                                        >{{$shop->owner_shop_name}}</option>
                                                @endforeach
                                            </select>
                                            @error('shop')
                                                <span class="invalid-feedback" role="alert">
                                                    <strong>{{ $message }}</strong>
                                                </span>
                                            @enderror
                                        </div>
                                    </div>

                                    <div class="col-sm-6">
                                        <div class="mb-3">
                                            <label class="control-label">Categories</label>
                                            <select name="category[]" id="category" class="select2 select_edit_product form-control select2-multiple @error('category') is-invalid @enderror" multiple="multiple" required autocomplete="category" data-placeholder="Choisir vos categories">
                                                @foreach($categorys as $category)
                                                    <option   
                                                    @foreach($edit_product->categories as $prod_cat)

                                                        @if($prod_cat->id == $category->id)
                                                            selected
                                                        @endif

                                                    @endforeach
                                                    
                                                        value="{{ $category->id }}"> {{ $category->name }} 
                                                    </option>
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
                                            <input id="prix" name="prix" type="number" class="form-control @error('prix') is-invalid @enderror" value="{{ old('prix') ?? $edit_product->price }}" required autocomplete="prix">
                                            @error('prix')
                                                <span class="invalid-feedback" role="alert">
                                                    <strong>{{ $message }}</strong>
                                                </span>
                                            @enderror
                                        </div>
                                        <div class="mb-3">
                                            <label for="stock">Nombre de stock</label>
                                            <input id="stock" name="stock" type="number" class="form-control @error('stock') is-invalid @enderror" value="{{ old('stock') ?? $edit_product->stock }}" required autocomplete="stock">
                                            @error('stock')
                                                <span class="invalid-feedback" role="alert">
                                                    <strong>{{ $message }}</strong>
                                                </span>
                                            @enderror
                                        </div>
                                        <div class="mb-3">
                                            <label for="image">Image du produit</label>
                                              <input id="image" name="image" type="file"  class="form-control @error('image') is-invalid @enderror" value="{{ old('image') ?? $edit_product->image }}"  autocomplete="image">
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
                                        <label for="description">Description du Produit</label>
                                        <textarea name="description" class="form-control @error('description') is-invalid @enderror description_edit_product" value="{{ old('description') }}" required autocomplete="description" rows="10">
                                            {!!$edit_product->description!!}
                                        </textarea>
                                        @error('description')
                                            <span class="invalid-feedback" role="alert">
                                                <strong>{{ $message }}</strong>
                                            </span>
                                        @enderror
                                    </div>
                                </div>

                                <h4 class="card-title mb-3">Des images similaires du produit</h4>
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
                                    <button type="submit" class="btn btn-primary waves-effect waves-light">Enregistre les modification</button>
                                    <button type="reset" class="btn btn-secondary waves-effect waves-light">Reinitialiser</button>
                                </div>
                            </form>
                        </div>

                    </div> <!-- end card-->

                    <div class="card">
                        <div class="card-body">

                            <h4 class="card-title">Meta Data</h4>
                            <p class="card-title-desc">Fill all information below</p>

                            <form>
                                <div class="row">
                                    <div class="col-sm-6">
                                        <div class="mb-3">
                                            <label for="metatitle">Meta title</label>
                                            <input id="metatitle" name="productname" type="text" class="form-control">
                                        </div>
                                        <div class="mb-3">
                                            <label for="metakeywords">Meta Keywords</label>
                                            <input id="metakeywords" name="manufacturername" type="text" class="form-control">
                                        </div>
                                    </div>

                                    <div class="col-sm-6">
                                        <div class="mb-3">
                                            <label for="metadescription">Meta Description</label>
                                            <textarea class="form-control" id="metadescription" rows="5"></textarea>
                                        </div>
                                    </div>
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
            <!-- end row -->

        </div> <!-- container-fluid -->
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
@endsection

