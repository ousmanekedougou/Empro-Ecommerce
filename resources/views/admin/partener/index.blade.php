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
                                    <h4 class="mb-sm-0 font-size-18">Vos Catgories</h4>

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
                                <div class="card">
                                    <div class="card-body">
                                        <div class="row mb-2">
                                            <div class="col-sm-4">
                                                <div class="search-box me-2 mb-2 d-inline-block">
                                                    <div class="position-relative">
                                                        <input type="text" class="form-control" placeholder="Search...">
                                                        <i class="bx bx-search-alt search-icon"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-sm-8">
                                                <div class="text-sm-end">
                                                    <button type="button" class="btn btn-success btn-rounded waves-effect waves-light mb-2 me-2 " data-bs-toggle="modal" data-bs-target=".orderdetailsModal"><i class="mdi mdi-plus me-1"></i> Ajouter une categorie</button>
                                                </div>
                                            </div><!-- end col-->
                                        </div>
                
                                        <div class="table-responsive">
                                            <table class="table align-middle table-nowrap table-check">
                                                <thead class="table-light">
                                                    <tr>
                                                        <th style="width: 20px;" class="align-middle">
                                                            <div class="form-check font-size-16">
                                                                <input class="form-check-input" type="checkbox" id="checkAll">
                                                                <label class="form-check-label" for="checkAll"></label>
                                                            </div>
                                                        </th>
                                                        <th class="align-middle">Order ID</th>
                                                        <th class="align-middle">Categories</th>
                                                        <th class="align-middle">Slug</th>
                                                        @if(Auth::user()->status == 1)
                                                          <th class="align-middle">Auteure</th>
                                                        @endif
                                                        <th class="align-middle">Asigne</th>
                                                        <th class="align-middle">date</th>
                                                        <th class="align-middle">Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                  @foreach($categorys as $category)
                                                    <tr>
                                                        <td>
                                                            <div class="form-check font-size-16">
                                                                <input class="form-check-input" type="checkbox" id="orderidcheck01">
                                                                <label class="form-check-label" for="orderidcheck01"></label>
                                                            </div>
                                                        </td>
                                                        <td><a href="javascript: void(0);" class="text-body fw-bold">#SK2540</a> </td>
                                                        <td>{{$category->name}}</td>
                                                        <td>
                                                            {{$category->slug}}
                                                        </td>
                                                        @if(Auth::user()->status == 1)
                                                          <td>
                                                              {{$category->auteur}}
                                                          </td>
                                                        @endif
                                                        <td>
                                                            <span class="badge badge-pill badge-soft-success font-size-12">
                                                              {{ count($category->products) }}
                                                            </span>
                                                        </td>
                                                        <td>
                                                            <i class="fab fa-cc-mastercard me-1"></i> {{$category->created_at}}
                                                        </td>
                                                        <td>
                                                            <div class="d-flex gap-3">
                                                                <a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target=".orderdetailsModal-{{$category->id}}" class="text-success"><i class="mdi mdi-pencil font-size-18"></i></a>
                                                                <form  id="delete-form-{{$category->id}}" method="post" action="{{ route('admin.category.destroy',$category->id) }}"  style="display:none">
                                                                  {{csrf_field()}}
                                                                  {{method_field('delete')}}
                                                                </form>
                                                                <a href="javascript:void(0);" class="text-danger"
                                                                  onclick=" if(confirm('Etes Vous sure de supprimer cette categorie ?')){ 
                                                                     event.preventDefault();document.getElementById('delete-form-{{$category->id}}').submit();
                                                                    }else{event.preventDefault();} "
                                                                ><i class="mdi mdi-delete font-size-18"></i></a>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                  @endforeach
                                                </tbody>
                                            </table>
                                        </div>
                                        <ul class="pagination pagination-rounded justify-content-end mb-2">
                                            <li class="page-item disabled">
                                                <a class="page-link" href="javascript: void(0);" aria-label="Previous">
                                                    <i class="mdi mdi-chevron-left"></i>
                                                </a>
                                            </li>

                                            <li class="page-item active"><a class="page-link" href="javascript: void(0);">1</a></li>
                                            <li class="page-item"><a class="page-link" href="javascript: void(0);">2</a></li>
                                            <li class="page-item"><a class="page-link" href="javascript: void(0);">3</a></li>
                                            <li class="page-item"><a class="page-link" href="javascript: void(0);">4</a></li>
                                            <li class="page-item"><a class="page-link" href="javascript: void(0);">5</a></li>
                                            <li class="page-item">
                                                <a class="page-link" href="javascript: void(0);" aria-label="Next">
                                                    <i class="mdi mdi-chevron-right"></i>
                                                </a>
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

                <!-- Modal -->
                <div class="modal fade orderdetailsModal" tabindex="-1" role="dialog" aria-labelledby="orderdetailsModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="orderdetailsModalLabel">Ajouter une categorie</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                             <form action="{{ route('admin.category.store') }}" method="post" >
                             @csrf
                            <div class="modal-body">
                              <div class="mb-3">
                                  <label for="name">Nom de la category</label>
                                  <input id="name" name="name" type="text" class="form-control @error('name') is-invalid @enderror"  value="{{ old('name') }}" required autocomplete="name">
                                  @error('name')
                                      <span class="invalid-feedback" role="alert">
                                          <strong>{{ $message }}</strong>
                                      </span>
                                  @enderror
                              </div>
                                <div class="mb-3">
                                  <label for="manufacturerbrand">Slug de la category</label>
                                    <input id="slug" name="slug" type="text" class="form-control @error('slug') is-invalid @enderror" value="{{ old('slug') }}" required autocomplete="slug">
                                  @error('slug')
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
                <!-- end modal -->


                    <!-- Modal -->
              @foreach($categorys as $category)
                <div class="modal fade orderdetailsModal-{{$category->id}}" tabindex="-1" role="dialog" aria-labelledby="orderdetailsModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="orderdetailsModalLabel">Modifier une categorie</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                             <form action="{{ route('admin.category.update',$category->id) }}" method="post" >
                             @csrf
                             {{method_field('PUT')}}
                            <div class="modal-body">
                              <div class="mb-3">
                                  <label for="name">Nom de la category</label>
                                  <input id="name" name="name" type="text" class="form-control @error('name') is-invalid @enderror"  value="{{ old('name') ?? $category->name }}" required autocomplete="name">
                                  @error('name')
                                      <span class="invalid-feedback" role="alert">
                                          <strong>{{ $message }}</strong>
                                      </span>
                                  @enderror
                              </div>
                                <div class="mb-3">
                                  <label for="manufacturerbrand">Slug de la category</label>
                                    <input id="slug" name="slug" type="text" class="form-control @error('slug') is-invalid @enderror" value="{{ old('slug') ?? $category->slug }}" required autocomplete="slug">
                                  @error('slug')
                                      <span class="invalid-feedback" role="alert">
                                          <strong>{{ $message }}</strong>
                                      </span>
                                  @enderror
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="submit" class="btn btn-primary">Modifier</button>
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
                            </div>
                             </form>
                        </div>
                    </div>
                </div>
                <!-- end modal -->
              @endforeach

@endsection


@section('footersection')

@endsection