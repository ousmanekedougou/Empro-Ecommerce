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
                                    <h4 class="mb-sm-0 font-size-18">Orders</h4>

                                    <div class="page-title-right">
                                        <ol class="breadcrumb m-0">
                                            <li class="breadcrumb-item"><a href="javascript: void(0);">Ecommerce</a></li>
                                            <li class="breadcrumb-item active">Orders</li>
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
                                                    <button type="button" class="btn btn-success btn-rounded waves-effect waves-light mb-2 me-2"><i class="mdi mdi-plus me-1"></i> Add New Order</button>
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
                                                        <th class="align-middle">Billing Name</th>
                                                        <th class="align-middle">Date</th>
                                                        <th class="align-middle">Total</th>
                                                        <th class="align-middle">Payment Status</th>
                                                        <th class="align-middle">Payment Method</th>
                                                        <th class="align-middle">Livraison Method</th>
                                                        <th class="align-middle">Details</th>
                                                        <th class="align-middle">Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                @foreach($orders as $order)
                                                    <tr>
                                                        <td>
                                                            <div class="form-check font-size-16">
                                                                <input class="form-check-input" type="checkbox" id="orderidcheck01">
                                                                <label class="form-check-label" for="orderidcheck01"></label>
                                                            </div>
                                                        </td>
                                                        <td><a href="javascript: void(0);" class="text-body fw-bold">#SK2540</a> </td>
                                                        <td>{{$order->user->name}}</td>
                                                        <td>
                                                            {{ $order->created_at }}
                                                        </td>
                                                        <td>
                                                            {{ getPrice($order->amount) }}
                                                        </td>
                                                        <td>
                                                        @if(getPrice($order->amount) <= 0 && $order->status == 2)
                                                            <span class="badge badge-pill badge-soft-success font-size-12">Rétrofacturation</span>
                                                        @else
                                                            <span class="badge badge-pill badge-soft-success font-size-12">Payer</span>
                                                        @endif
                                                        </td>
                                                        <td>
                                                            <i class="fab fa-cc-mastercard me-1"></i> Mastercard
                                                        </td>
                                                        <td>
                                                            @if($order->livraison == 1)
                                                                <span class="badge badge-pill badge-soft-success font-size-12">A Livre</span>
                                                            @elseif($order->livraison == 2)
                                                                <span class="badge badge-pill badge-soft-success font-size-12">A recupere</span>
                                                            @elseif($order->livraison == 3)
                                                                <span class="badge badge-pill badge-soft-success font-size-12">Commande Recupere</span>
                                                            @elseif($order->livraison == 4)
                                                                <span class="badge badge-pill badge-soft-success font-size-12">Commande Livre</span>
                                                            @endif
                                                        </td>
                                                        <td>
                                                            <!-- Button trigger modal -->
                                                            <a href="javascript:void(0);" role="button" aria-disabled="true" class="text-primary" data-bs-toggle="modal" data-bs-target=".orderdetailsModal{{ $order->id }}">
                                                                <i class="mdi mdi-eye font-size-18"></i>
                                                            </a>
                                                        </td>
                                                        <td>
                                                            <div class="d-flex gap-3">
                                                                <a href="javascript:void(0);" role="button" aria-disabled="true" class="text-success" data-bs-toggle="modal" data-bs-target=".orderEditModal{{ $order->id }}"><i class="mdi mdi-pencil font-size-18"></i></a>
                                                              

                                                                <a href="javascript:void(0);" role="button" aria-disabled="true" data-bs-toggle="modal" class="text-danger" data-bs-target="#subscribeModalorder-{{ $order->id }}"><i class="mdi mdi-delete font-size-18"></i></a>
                                                                <div class="modal modal-xs fade" id="subscribeModalorder-{{ $order->id }}" tabindex="-1" aria-labelledby="subscribeModalLabel" aria-hidden="true">
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
                                                                                            <p class="text-muted font-size-14 mb-4">Etes vous sure de bien vouloire supprimer cette commande</p>

                                                                                            <div class="input-group bg-white rounded text-center" style="text-align:center;">
                                                                                                <form method="post" action="{{ route('admin.order.destroy',$order->id) }}"  style="display:flex;text-align:center;width:100%;">
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

                <!-- Modal du detial de la commande-->
                @foreach($orders as $order)
                    <div class="modal fade orderdetailsModal{{ $order->id }}" tabindex="-1" role="dialog" aria-labelledby=orderdetailsModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered modal-md" role="document">
                            <div class="modal-content ">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="orderdetailsModalLabel">Detail de la commande</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <p class="mb-2">Nom Du Client: <span class="text-primary">{{ $order->user->name }}</span></p>
                                    <p class="mb-2">Telephone: <span class="text-primary">{{ $order->user->phone }}</span>, | Adresse : <span class="text-primary">{{ $order->user->address }}</span></p>
                                    <!-- <p class="mb-2">Product id: <span class="text-primary">#SK2540</span></p> -->

                                    <div class="table-responsive">
                                        <table class="table align-middle table-nowrap">
                                            <thead>
                                                <tr>
                                                <th scope="col">Product</th>
                                                <th scope="col">Product Name</th>
                                                <th scope="col">Price</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                            @foreach(unserialize($order->products) as $product)
                                                <tr>
                                                    <th scope="row">
                                                        <div>
                                                            <img src=" {{ Storage::url($product[0]) }}" alt="" class="avatar-sm">
                                                        </div>
                                                    </th>
                                                    <td>
                                                        <div>
                                                            <h5 class="text-truncate font-size-14">{{ $product[1] }}</h5>
                                                            <p class="text-muted mb-0">{{ $product[3] }} unite(s)</p>
                                                        </div>
                                                    </td>
                                                    <td>{{ getPrice($product[4]) }}</td>
                                                </tr>
                                            @endforeach
                                           
                                                <tr>
                                                    <td colspan="2">
                                                        <h6 class="m-0 text-right">Sub Total:</h6>
                                                    </td>
                                                    <td>
                                                        $ 400
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td colspan="2">
                                                        <h6 class="m-0 text-right">Shipping:</h6>
                                                    </td>
                                                    <td>
                                                        Free
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td colspan="2">
                                                        <h6 class="m-0 text-right">Total:</h6>
                                                    </td>
                                                    <td>
                                                    @if( getPrice($order->amount) <= 0 && $order->status == 2)
                                                        {{ getPrice($order->amount_livraison) }}
                                                    @else
                                                        {{ getPrice($order->amount) }} 
                                                    @endif
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                @endforeach
                <!-- end modal -->

                <!-- La partie de l'edition du modal -->
                @foreach($orders as $order)
                    <div class="modal fade orderEditModal{{ $order->id }}" tabindex="-1" role="dialog" aria-labelledby=orderdetailsModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content">
                                <div class="modal-header border-bottom-0">
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <div class="text-center mb-4">
                                        {{--
                                        <div class="avatar-md mx-auto mb-4">
                                            <div class="avatar-title bg-light rounded-circle text-primary h1">
                                                <img src="{{ Storage::url(Auth::user()->image) }}" alt="" class="img-thumbnail rounded-circle">
                                            </div>
                                        </div>
                                        --}}

                                        <div class="row justify-content-center">
                                            <div class="col-xl-10">
                                                <h4 class="text-primary"> Salut {{Auth::user()->name}}</h4>
                                            @if($order->status == 1 && $order->amount > 0)
                                                <div class="input-group bg-white rounded row">
                                                    <div class="col-md-5">
                                                        <div class="avatar-title bg-light rounded-circle text-primary h1">
                                                            <img src="{{ asset('admin/assets/images/crypto/validate.jpg') }}" alt="" class="img-thumbnail rounded-circle">
                                                        </div>
                                                    </div>
                                                    <div class="col-md-7" style="margin-top: 30px; padding-left:10px;">
                                                        <p class="text-muted font-size-16 mb-4">Cette commande a été déjà payée  
                                                            @if($order->livraison == 1)
                                                               et doit etre livrée
                                                            @elseif($order->livraison == 2)
                                                                et doit etre récupérée
                                                            @elseif($order->livraison == 3)
                                                                et récupérée le {{ $order->payment_created_at }}
                                                            @elseif($order->livraison == 4)
                                                               et livrée le {{ $order->payment_created_at }}
                                                            @endif
                                                            
                                                        </p>
                                                    </div>

                                                    
                                                </div>
                                            @elseif($order->status == 2 && $order->amount <= 0)
                                                <p class="text-muted font-size-14 mb-4">Vous êtes en phase de valider le payment de la commende de <span class="text-success" style="font-weight: bold;">{{ $order->user->name }} / {{ $order->user->phone }}</span>.</p>
                                                <div class="input-group bg-white rounded row">
                                                    <div class="col-md-5">
                                                        <div class="avatar-title bg-light rounded-circle text-primary h1">
                                                            <img src="{{ asset('admin/assets/images/crypto/payment.jpg') }}" alt="" class="img-thumbnail rounded-circle">
                                                        </div>
                                                    </div>
                                                    <div class="col-md-7 mt-4">
                                                        <form  id="update-form-{{$order->id}}" method="post" action="{{ route('admin.order.update',$order->id) }}">
                                                        
                                                            {{csrf_field()}}
                                                            {{method_field('PUT')}}
                                                            <input type="hidden" name="amount_livraison" value="{{ $order->amount_livraison }}">
                                                            <div class="" style="text-align: center;width:100%;margin-left:30px;">
                                                                <div class="form-check form-radio-primary mb-3">
                                                                    <input class="form-check-input @error('option') is-invalid @enderror"  value="{{ old('option') ?? 3 }}" required type="radio" name="option" id="option1" >
                                                                    <label class="form-check-label" for="option1">
                                                                        A été récupérée
                                                                    </label>
                                                                </div>
                                                                <div class="form-check form-radio-success mb-3">
                                                                    <input class="form-check-input @error('option') is-invalid @enderror"  value="{{ old('option') ?? 4 }}" required type="radio" name="option" id="option2" >
                                                                    <label class="form-check-label" for="option2">
                                                                        A été livrée
                                                                    </label>
                                                                </div>
                                                                @error('option')
                                                                        <span class="invalid-feedback" role="alert">
                                                                            <strong>{{ $message }}</strong>
                                                                        </span>
                                                                    @enderror
                                                            </div>
                                                        </form>
                                                   
                                                        <a  href="" style="width: 100%;" onclick=" if(confirm('Etes Vous sure de que la commande a ete payer ?')){  event.preventDefault();document.getElementById('update-form-{{$order->id}}').submit();
                        
                                                        }else{event.preventDefault();} " class="btn btn-success btn-block" style="width: 100%;"><i class="fas fa-credit-card me-2"></i>Valider le paiement</a>
                                                    </div>
                                                    
                                                </div>
                                            @endif
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                @endforeach
                <!-- Fin de la partie de l'edition de modal -->


@endsection


@section('footersection')

@endsection