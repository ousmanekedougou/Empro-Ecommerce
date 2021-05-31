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
                                    <h4 class="mb-sm-0 font-size-18">Votre Profile</h4>

                                    <div class="page-title-right">
                                        <ol class="breadcrumb m-0">
                                            <li class="breadcrumb-item"><a href="javascript: void(0);">Contacts</a></li>
                                            <li class="breadcrumb-item active">Profile</li>
                                        </ol>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <!-- end page title -->

                        <div class="row">
                            <div class="col-xl-4">
                                <div class="card overflow-hidden">
                                    <div class="bg-primary bg-soft">
                                        <div class="row">
                                            <div class="col-7">
                                                <div class="text-primary p-3">
                                                    <h5 class="text-primary">Content de te revoir !</h5>
                                                    <p>Cela semblera simplifié</p>
                                                </div>
                                            </div>
                                            <div class="col-5 align-self-end">
                                                <img src="assets/images/profile-img.png" alt="" class="img-fluid">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card-body pt-0">
                                        <div class="row">
                                            <div class="col-sm-4">
                                                <div class="avatar-md profile-user-wid mb-4">
                                                    <img src="{{ Storage::url($admin->image) }}" alt="" class="img-thumbnail rounded-circle">
                                                </div>
                                                <h5 class="font-size-15 text-truncate">{{$admin->name}}</h5>
                                                <p class="text-muted mb-0 text-truncate">
                                                     @if($admin->status == 1)
                                                        Admin
                                                    @elseif($admin->status == 2)
                                                        Auteur
                                                    @elseif($admin->status == 3)
                                                        Editeur
                                                    @endif
                                                </p>
                                            </div>

                                            <div class="col-sm-8">
                                                <div class="pt-4">
                                                   
                                                    <div class="row">
                                                        <div class="col-6">
                                                            <h5 class="font-size-15">125</h5>
                                                            <p class="text-muted mb-0">Projects</p>
                                                        </div>
                                                        <div class="col-6">
                                                            <h5 class="font-size-15">$1245</h5>
                                                            <p class="text-muted mb-0">Revenue</p>
                                                        </div>
                                                    </div>
                                                    <div class="mt-4">
                                                        <a href="#" class="btn btn-primary waves-effect waves-light btn-sm">Votre image <i class="mdi mdi-arrow-right ms-1"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- end card -->

                                <div class="card">
                                    <div class="card-body">
                                        <h4 class="card-title mb-4">Personal Information</h4>

                                        <p class="text-muted mb-4">Hi I'm Cynthia Price,has been the industry's standard dummy text To an English person, it will seem like simplified English, as a skeptical Cambridge.</p>
                                        <div class="table-responsive">
                                            <table class="table table-nowrap mb-0">
                                                <tbody>
                                                    <tr>
                                                        <th scope="row">Nom Complet :   </th>
                                                        <td>{{$admin->name}}</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Mobile :</th>
                                                        <td>{{$admin->phone}}</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">E-mail :</th>
                                                        <td>{{$admin->email}}</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Location :</th>
                                                        <td>California, United States</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <!-- end card -->
                            </div>         
                            
                            <div class="col-xl-8">
                                <!-- Les premiers informations -->
                                <div class="card">
                                    <div class="card-body">
                                        <h4 class="card-title mb-4">Modifier vos information</h4>
                                        <div class="table-responsive">
                                            <form action="{{ route('admin.profil.update',Auth::guard('web')->user()->slug) }}" method="post" enctype="multipart/form-data">
                                                {{csrf_field()}}
                                                {{method_field('PUT')}}
                                                <div class="modal-body">
                                                    <input type="hidden" name="hidden" value="1">
                                                    <div class="mb-3">
                                                        <label for="name">Nom complet * </label>
                                                        <input id="name" name="name" type="text" class="form-control @error('name') is-invalid @enderror"  value="{{ old('name') ?? $admin->name }}" required autocomplete="name">
                                                        @error('name')
                                                            <span class="invalid-feedback" role="alert">
                                                                <strong>{{ $message }}</strong>
                                                            </span>
                                                        @enderror
                                                    </div>
                                                    <div class="mb-3">
                                                        <label for="manufacturerbrand">adresse email * </label>
                                                        <input id="email" name="email" type="email" class="form-control @error('email') is-invalid @enderror" value="{{ old('email') ?? $admin->email }}" required autocomplete="email">
                                                        @error('email')
                                                            <span class="invalid-feedback" role="alert">
                                                                <strong>{{ $message }}</strong>
                                                            </span>
                                                        @enderror
                                                    </div>

                                                    <div class="mb-3">
                                                        <label for="manufacturerbrand">Numero Telephone * </label>
                                                        <input id="phone" name="phone" type="phone" class="form-control @error('phone') is-invalid @enderror" value="{{ old('phone') ?? $admin->phone }}" required autocomplete="phone">
                                                        @error('phone')
                                                            <span class="invalid-feedback" role="alert">
                                                                <strong>{{ $message }}</strong>
                                                            </span>
                                                        @enderror
                                                    </div>

                                                    <div class="mb-3">
                                                        <label for="image">Image du membre ( facultatif )</label>
                                                            <input id="image" name="image" type="file" class="form-control @error('image') is-invalid @enderror" value="{{ old('image') }}"  autocomplete="image">
                                                        @error('image')
                                                            <span class="invalid-feedback" role="alert">
                                                                <strong>{{ $message }}</strong>
                                                            </span>
                                                        @enderror
                                                    </div>

                                                    
                                                
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="submit" class="btn btn-primary btn-block">Enregistre</button>
                                                    <button type="button" class="btn btn-secondary btn-block" data-bs-dismiss="modal">Fermer</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <!-- Fin des premiers information -->


                                 <!-- Les seconds informations -->
                                <div class="card">
                                    <div class="card-body">
                                        <h4 class="card-title mb-4">Modifier votre mot de passe</h4>
                                        <div class="table-responsive">
                                            <form action="{{ route('admin.profil.update',Auth::guard('web')->user()->slug) }}" method="post" enctype="multipart/form-data">
                                                    {{csrf_field()}}
                                                    {{method_field('PUT')}}
                                                <div class="modal-body">
                                                      <input type="hidden" name="hidden" value="2">
                                                    <div class="mb-3">
                                                        <label for="manufacturerbrand">Password * </label>
                                                        <input id="password" name="password" type="password" class="form-control @error('password') is-invalid @enderror" value="{{ old('password') }}" required autocomplete="password">
                                                        @error('password')
                                                            <span class="invalid-feedback" role="alert">
                                                                <strong>{{ $message }}</strong>
                                                            </span>
                                                        @enderror
                                                    </div>

                                                    <div class="mb-3">
                                                        <label for="manufacturerbrand">Confirm Password * </label>
                                                        <input id="password-confirm" name="password_confirmation" type="password" class="form-control @error('password') is-invalid @enderror" value="{{ old('password-confirm') }}" required autocomplete="password">
                                                    </div>
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="submit" class="btn btn-primary btn-block">Enregistre</button>
                                                    <button type="button" class="btn btn-secondary btn-block" data-bs-dismiss="modal">Fermer</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <!-- Fin des seconds information -->
                            </div>
                        </div>
                        <!-- end row -->

                    </div> <!-- container-fluid -->
                </div>
                <!-- End Page-content -->


@endsection


@section('footersection')

@endsection