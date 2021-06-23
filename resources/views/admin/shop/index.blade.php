@extends('admin.layouts.app')

@section('headsection')

@endsection

@section('main-content')

                <div class="page-content">
                    <div class="container-fluid">

                        <!-- start page title -->
                        <div class="row">
                            <div class="col-12">
                                <div class="page-title-box d-sm-flex align-items-center justify-content-between">
                                    <h4 class="mb-sm-0 font-size-18">Shops</h4>

                                    <div class="page-title-right">
                                        <ol class="breadcrumb m-0">
                                            <li class="breadcrumb-item">
                                                    <button type="button" class="btn btn-success btn-rounded waves-effect waves-light mb-1 me-1" data-bs-toggle="modal" data-bs-target=".addNewShopModal"><i class="mdi mdi-plus me-1"></i> Ajouter une boutique</button> 
                                            </li>
                                        </ol>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <!-- end page title -->

                        <div class="row">
                            @foreach($shops as $shop)
                                <div class="col-xl-6 col-sm-6">
                                    <div class="card">
                                        <div class="row">
                                            <div class="col-xl-5">
                                                <div class="text-center p-4 border-end">
                                                    <div class="avatar-sm mx-auto mb-3 mt-1">
                                                         <img src="{{ Storage::url($shop->owner_image) }}" alt="" class="avatar-title rounded-circle bg-primary bg-soft text-primary font-size-16">
                                                    </div>
                                                    <h5 class="text-truncate pb-1">{{$shop->owner_shop_name}}</h5>
                                                </div>
                                            </div>

                                            <div class="col-xl-7">
                                                <div class="p-4 text-center text-xl-start">
                                                    <div class="row">
                                                        <div class="col-6">
                                                            <div>
                                                                <p class="text-muted mb-2 text-truncate">Produits</p>
                                                                <h5>{{ count($shop->products) }}</h5>
                                                            </div>
                                                        </div>
                                                        <div class="col-6">
                                                            <div>
                                                                <p class="text-muted mb-2 text-truncate">Wallet Balance</p>
                                                                <h5>$13,575</h5>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="d-flex gap-3 mt-4 text-center">
                                                        <a href="javascript:void(0);" role="button" aria-disabled="true" class="text-success" data-bs-toggle="modal" data-bs-target=".orderEditShopModal{{ $shop->id }}"><i class="mdi mdi-pencil font-size-18">Editer</i></a>
                                                        <a href="{{ route('admin.product.index', ['slug_shop'=> $shop->slug]) }}" class="text-primary"><i class="mdi mdi-eye font-size-18 me-1"> Produits</i></a>
                                                

                                                        <a href="javascript:void(0);" role="button" aria-disabled="true" data-bs-toggle="modal" class="text-danger" data-bs-target="#subscribeModalshop-{{ $shop->id }}"><i class="mdi mdi-delete font-size-18"></i></a>
                                                        <div class="modal modal-xs fade" id="subscribeModalshop-{{ $shop->id }}" tabindex="-1" aria-labelledby="subscribeModalLabel" aria-hidden="true">
                                                            <div class="modal-dialog modal-dialog-centered">
                                                                <div class="modal-content">
                                                                    <div class="modal-header border-bottom-0">
                                                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                                    </div>
                                                                    <div class="modal-body">
                                                                        <div class="text-center mb-4">
                                                                            <div class="avatar-md mx-auto mb-4">
                                                                                <div class="avatar-title bg-warning rounded-circle text-white h1">
                                                                                    <i class="fa fa-exclamation-circle"></i>
                                                                                </div>
                                                                            </div>

                                                                            <div class="row justify-content-center">
                                                                                <div class="col-xl-10">
                                                                                    <h4 class="text-danger">Attention !</h4>
                                                                                    <p class="text-muted font-size-14 mb-4">Etes vous sure de bien vouloire supprimer cette boutique</p>

                                                                                    <div class="input-group bg-white rounded text-center" style="text-align:center;">
                                                                                        <form method="post" action="{{ route('admin.shop.destroy',$shop->id) }}"  style="display:flex;text-align:center;width:100%;">
                                                                                            {{csrf_field()}}
                                                                                            {{method_field('delete')}}
                                                                                            <button type="submit" class="btn btn-danger btn-xs" style="margin-left: 70px;margin-right:20px;"> Oui je veux bient </button> 
                                                                                            <button type="button" class="btn btn-success btn-xs" data-bs-dismiss="modal" aria-label="Close"> x Anuller</button>
                                                                                        </form>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div> 
                                                        
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            @endforeach
                        </div>
                        <!--  end row -->

                        
                        <div class="row">
                            <div class="col-12">
                                <div class="text-center my-3">
                                    <a href="javascript:void(0);" class="text-success"><i class="bx bx-loader bx-spin font-size-18 align-middle me-2"></i> Load more </a>
                                </div>
                            </div> <!-- end col-->
                        </div>
                        <!-- end row -->
                    </div> <!-- container-fluid -->
                </div>
                <!-- End Page-content -->

             <!-- Ajouter un boutique -->
                <div class="modal fade addNewShopModal" tabindex="-1" role="dialog" aria-labelledby="addNewShopModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="addNewShopModalLabel">Ajouter une boutique</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <form action="{{ route('admin.shop.store') }}" method="post" enctype="multipart/form-data">
                                @csrf
                                <div class="modal-body">
                                    <div class="mb-3">
                                        <label for="name">Nom complet du Proprietaire* </label>
                                        <input id="name" name="name" type="text" class="form-control @error('name') is-invalid @enderror"  value="{{ old('name') }}" required autocomplete="name">
                                        @error('name')
                                            <span class="invalid-feedback" role="alert">
                                                <strong>{{ $message }}</strong>
                                            </span>
                                        @enderror
                                    </div>


                                      <div class="mb-3">
                                        <label for="boutique">Nom de la boutique * </label>
                                        <input id="boutique" name="boutique" type="text" class="form-control @error('boutique') is-invalid @enderror"  value="{{ old('boutique') }}" required autocomplete="boutique">
                                        @error('boutique')
                                            <span class="invalid-feedback" role="alert">
                                                <strong>{{ $message }}</strong>
                                            </span>
                                        @enderror
                                    </div>

                                    <div class="mb-3">
                                        <label for="email">adresse email * </label>
                                        <input id="email" name="email" type="email" class="form-control @error('email') is-invalid @enderror" value="{{ old('email') }}" required autocomplete="email">
                                        @error('email')
                                            <span class="invalid-feedback" role="alert">
                                                <strong>{{ $message }}</strong>
                                            </span>
                                        @enderror
                                    </div>

                                    <div class="mb-3">
                                        <label for="phone">Numero Telephone * </label>
                                        <input id="phone" name="phone" type="phone" class="form-control @error('phone') is-invalid @enderror" value="{{ old('phone') }}" required autocomplete="phone">
                                        @error('phone')
                                            <span class="invalid-feedback" role="alert">
                                                <strong>{{ $message }}</strong>
                                            </span>
                                        @enderror
                                    </div>

                                    <div class="mb-3">
                                        <label for="address">Adresse * </label>
                                        <input id="address" name="address" type="address" class="form-control @error('address') is-invalid @enderror" value="{{ old('address') }}" required autocomplete="address">
                                        @error('address')
                                            <span class="invalid-feedback" role="alert">
                                                <strong>{{ $message }}</strong>
                                            </span>
                                        @enderror
                                    </div>

                                    <div class="mb-3">
                                        <label for="image">Image *</label>
                                            <input id="image" name="image" type="file" class="form-control @error('image') is-invalid @enderror" value="{{ old('image') }}" required autocomplete="image">
                                        @error('image')
                                            <span class="invalid-feedback" role="alert">
                                                <strong>{{ $message }}</strong>
                                            </span>
                                        @enderror
                                    </div>
                                
                                </div>
                                <div class="modal-footer">
                                    <button type="submit" class="btn btn-primary">Enregistre</button>
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
                                </div>
                             </form>
                        </div>
                    </div>
                </div>
             <!-- Fin de l'ajout de la boutique -->

             <!-- Modification de la boutique -->

             @foreach($shops as $shop)
                <div class="modal fade orderEditShopModal{{ $shop->id }}" tabindex="-1" role="dialog" aria-labelledby="orderEditShopModal" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="orderEditShopModal">Ajouter une boutique</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <form action="{{ route('admin.shop.update',$shop->id) }}" method="post" enctype="multipart/form-data">
                                @csrf
                                {{ method_field('PUT') }}
                                <div class="modal-body">
                                    <div class="mb-3">
                                        <label for="name">Nom complet du Proprietaire* </label>
                                        <input id="name" name="name" type="text" class="form-control @error('name') is-invalid @enderror"  value="{{ old('name') ?? $shop->owner_name }}" required autocomplete="name">
                                        @error('name')
                                            <span class="invalid-feedback" role="alert">
                                                <strong>{{ $message }}</strong>
                                            </span>
                                        @enderror
                                    </div>


                                      <div class="mb-3">
                                        <label for="boutique">Nom de la boutique * </label>
                                        <input id="boutique" name="boutique" type="text" class="form-control @error('boutique') is-invalid @enderror"  value="{{ old('boutique') ?? $shop->owner_shop_name }}" required autocomplete="boutique">
                                        @error('boutique')
                                            <span class="invalid-feedback" role="alert">
                                                <strong>{{ $message }}</strong>
                                            </span>
                                        @enderror
                                    </div>

                                    <div class="mb-3">
                                        <label for="email">adresse email * </label>
                                        <input id="email" name="email" type="email" class="form-control @error('email') is-invalid @enderror" value="{{ old('email') ?? $shop->owner_email  }}" required autocomplete="email">
                                        @error('email')
                                            <span class="invalid-feedback" role="alert">
                                                <strong>{{ $message }}</strong>
                                            </span>
                                        @enderror
                                    </div>

                                    <div class="mb-3">
                                        <label for="phone">Numero Telephone * </label>
                                        <input id="phone" name="phone" type="phone" class="form-control @error('phone') is-invalid @enderror" value="{{ old('phone') ?? $shop->owner_phone }}" required autocomplete="phone">
                                        @error('phone')
                                            <span class="invalid-feedback" role="alert">
                                                <strong>{{ $message }}</strong>
                                            </span>
                                        @enderror
                                    </div>

                                    <div class="mb-3">
                                        <label for="address">Adresse * </label>
                                        <input id="address" name="address" type="address" class="form-control @error('address') is-invalid @enderror" value="{{ old('address') ?? $shop->owner_address }}" required autocomplete="address">
                                        @error('address')
                                            <span class="invalid-feedback" role="alert">
                                                <strong>{{ $message }}</strong>
                                            </span>
                                        @enderror
                                    </div>

                                    <div class="mb-3">
                                        <label for="image">Image *</label>
                                            <input id="image" name="image" type="file" class="form-control @error('image') is-invalid @enderror" value="{{ old('image') ?? $shop->owner_image }}" value="{{ $shop->owner_image }}"  autocomplete="image">
                                        @error('image')
                                            <span class="invalid-feedback" role="alert">
                                                <strong>{{ $message }}</strong>
                                            </span>
                                        @enderror
                                    </div>
                                
                                </div>
                                <div class="modal-footer">
                                    <button type="submit" class="btn btn-primary">Enregistre les modifications</button>
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
                                </div>
                             </form>
                        </div>
                    </div>
                </div>
             @endforeach

             <!-- Fin de la modification de la boutique -->


@endsection


@section('footersection')

@endsection