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
                        <h4 class="mb-sm-0 font-size-18">Add Product</h4>

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
                                            <label for="manufacturerbrand">owner_shop_name du produit</label>
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
                                        <div class="mb-3">
                                            <label for="manufacturerbrand">Nom du magasin</label>
                                             <input id="owner_shop_name" name="owner_shop_name" type="text" class="form-control @error('owner_shop_name') is-invalid @enderror" value="{{ old('owner_shop_name') }}" required autocomplete="owner_shop_name">
                                            @error('owner_shop_name')
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
                                                <optgroup label="{{$category->name}}">
                                                    <!-- <option value="{{ $category->id }}">{{ $category->name }}</option> -->
                                                    @foreach($category->sous_categories as $sous_category)
                                                        <option value="{{ $sous_category->id }}" style="margin-left: 10px;"> - {{ $sous_category->name }}</option>
                                                    @endforeach
                                                </optgroup>
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
                                            <label for="owner_adresse">Adresse du magasin</label>
                                            <input id="owner_adresse" name="owner_adresse" type="text" class="form-control @error('owner_adresse') is-invalid @enderror" value="{{ old('owner_adresse') }}" required autocomplete="owner_adresse">
                                            @error('owner_adresse')
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

                                <div class="row">
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
                                    <input name="imageFile[]" type="file" multiple />
                                </div>

                                <div class="dz-message needsclick" style="border: 2px dashed silver;border-radius:8px;">
                                    <div class="mb-3">
                                        <i class="display-4 text-muted bx bxs-cloud-upload"></i>
                                    </div>
                                    
                                    <h4>Telecharger ici vos images similaires</h4>
                                </div>
                            </div>
                            <div style="margin-left: 20px;margin-bottom:10px;" class="d-flex flex-wrap gap-2 ">
                                <button type="submit" class="btn btn-primary btn-block waves-effect waves-light">Save Changes</button>
                                <button type="submit" class="btn btn-secondary btn-block waves-effect waves-light">Cancel</button>
                            </div>
                        </form>

                    </div> <!-- end card-->

                    <!-- <div class="card">
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
                    </div> -->

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

