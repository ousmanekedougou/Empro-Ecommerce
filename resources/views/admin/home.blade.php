@extends('admin.layouts.app')

@section('main-content')

    <div class="page-content">
        <div class="container-fluid">

            <!-- start page title -->
            <div class="row">
                <div class="col-12">
                    <div class="page-title-box d-sm-flex align-items-center justify-content-between">
                        <h4 class="mb-sm-0 font-size-18">Taleau de bord</h4>

                        <div class="page-title-right">
                            <ol class="breadcrumb m-0">
                                <li class="breadcrumb-item"><a href="javascript: void(0);">Taleau de bord</a></li>
                                <li class="breadcrumb-item active">Taleau de bord</li>
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
                                        <p>Tableau de bord {{ $admin->name }}</p>
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
                                            <a href="{{ route('admin.profil.show',Auth::user()->slug) }}" class="btn btn-primary waves-effect waves-light btn-sm">Votre Profile <i class="mdi mdi-arrow-right ms-1"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title mb-4">Gain mensuel</h4>
                            <div class="row">
                                <div class="col-sm-6">
                                    <p class="text-muted">Ce mois-ci</p>
                                    <h3>70 000 000 f</h3>
                                    <p class="text-muted"><span class="text-success me-2"> 12% <i class="mdi mdi-arrow-up"></i> </span> De la période précédente</p>

                                    <div class="mt-4">
                                        <a href="#" class="btn btn-primary waves-effect waves-light btn-sm">Voir plus <i class="mdi mdi-arrow-right ms-1"></i></a>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="mt-4 mt-sm-0">
                                        <div id="radialBar-chart" class="apex-charts"></div>
                                    </div>
                                </div>
                            </div>
                            <p class="text-muted mb-0">Nous créons une pensée numérique, graphique et dimensionnelle.</p>
                        </div>
                    </div>
                </div>
                <div class="col-xl-8">
                    <div class="row">
                        <div class="col-md-4">
                            <div class="card mini-stats-wid">
                                <div class="card-body">
                                    <div class="media">
                                        <div class="media-body">
                                            <p class="text-muted fw-medium">Orders</p>
                                            <h4 class="mb-0">1,235</h4>
                                        </div>

                                        <div class="mini-stat-icon avatar-sm rounded-circle bg-primary align-self-center">
                                            <span class="avatar-title">
                                                <i class="bx bx-copy-alt font-size-24"></i>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card mini-stats-wid">
                                <div class="card-body">
                                    <div class="media">
                                        <div class="media-body">
                                            <p class="text-muted fw-medium">Revenue</p>
                                            <h4 class="mb-0">$35, 723</h4>
                                        </div>

                                        <div class="avatar-sm rounded-circle bg-primary align-self-center mini-stat-icon">
                                            <span class="avatar-title rounded-circle bg-primary">
                                                <i class="bx bx-archive-in font-size-24"></i>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card mini-stats-wid">
                                <div class="card-body">
                                    <div class="media">
                                        <div class="media-body">
                                            <p class="text-muted fw-medium">Average Price</p>
                                            <h4 class="mb-0">$16.2</h4>
                                        </div>

                                        <div class="avatar-sm rounded-circle bg-primary align-self-center mini-stat-icon">
                                            <span class="avatar-title rounded-circle bg-primary">
                                                <i class="bx bx-purchase-tag-alt font-size-24"></i>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- end row -->

                    <div class="card">
                        <div class="card-body">
                            <div class="d-sm-flex flex-wrap">
                                <h4 class="card-title mb-4">Email Sent</h4>
                                <div class="ms-auto">
                                    <ul class="nav nav-pills">
                                        <li class="nav-item">
                                            <a class="nav-link" href="#">Week</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#">Month</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link active" href="#">Year</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            
                            <div id="stacked-column-chart" class="apex-charts" dir="ltr"></div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- end row -->

            <div class="row">
                <div class="col-xl-4">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title mb-4">Social Source</h4>
                            <div class="text-center">
                                <div class="avatar-sm mx-auto mb-4">
                                    <span class="avatar-title rounded-circle bg-primary bg-soft font-size-24">
                                            <i class="mdi mdi-facebook text-primary"></i>
                                        </span>
                                </div>
                                <p class="font-16 text-muted mb-2"></p>
                                <h5><a href="#" class="text-dark">Facebook - <span class="text-muted font-16">125 sales</span> </a></h5>
                                <p class="text-muted">Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus tincidunt.</p>
                                <a href="#" class="text-primary font-16">Learn more <i class="mdi mdi-chevron-right"></i></a>
                            </div>
                            <div class="row mt-4">
                                <div class="col-4">
                                    <div class="social-source text-center mt-3">
                                        <div class="avatar-xs mx-auto mb-3">
                                            <span class="avatar-title rounded-circle bg-primary font-size-16">
                                                    <i class="mdi mdi-facebook text-white"></i>
                                                </span>
                                        </div>
                                        <h5 class="font-size-15">Facebook</h5>
                                        <p class="text-muted mb-0">125 sales</p>
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="social-source text-center mt-3">
                                        <div class="avatar-xs mx-auto mb-3">
                                            <span class="avatar-title rounded-circle bg-info font-size-16">
                                                    <i class="mdi mdi-twitter text-white"></i>
                                                </span>
                                        </div>
                                        <h5 class="font-size-15">Twitter</h5>
                                        <p class="text-muted mb-0">112 sales</p>
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="social-source text-center mt-3">
                                        <div class="avatar-xs mx-auto mb-3">
                                            <span class="avatar-title rounded-circle bg-pink font-size-16">
                                                    <i class="mdi mdi-instagram text-white"></i>
                                                </span>
                                        </div>
                                        <h5 class="font-size-15">Instagram</h5>
                                        <p class="text-muted mb-0">104 sales</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="col-xl-4">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title mb-5">Activity</h4>
                            <ul class="verti-timeline list-unstyled">
                                <li class="event-list">
                                    <div class="event-timeline-dot">
                                        <i class="bx bx-right-arrow-circle font-size-18"></i>
                                    </div>
                                    <div class="media">
                                        <div class="me-3">
                                            <h5 class="font-size-14">22 Nov <i class="bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2"></i></h5>
                                        </div>
                                        <div class="media-body">
                                            <div>
                                                Responded to need “Volunteer Activities
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="event-list">
                                    <div class="event-timeline-dot">
                                        <i class="bx bx-right-arrow-circle font-size-18"></i>
                                    </div>
                                    <div class="media">
                                        <div class="me-3">
                                            <h5 class="font-size-14">17 Nov <i class="bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2"></i></h5>
                                        </div>
                                        <div class="media-body">
                                            <div>
                                                Everyone realizes why a new common language would be desirable... <a href="#">Read more</a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="event-list active">
                                    <div class="event-timeline-dot">
                                        <i class="bx bxs-right-arrow-circle font-size-18 bx-fade-right"></i>
                                    </div>
                                    <div class="media">
                                        <div class="me-3">
                                            <h5 class="font-size-14">15 Nov <i class="bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2"></i></h5>
                                        </div>
                                        <div class="media-body">
                                            <div>
                                                Joined the group “Boardsmanship Forum”
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="event-list">
                                    <div class="event-timeline-dot">
                                        <i class="bx bx-right-arrow-circle font-size-18"></i>
                                    </div>
                                    <div class="media">
                                        <div class="me-3">
                                            <h5 class="font-size-14">12 Nov <i class="bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2"></i></h5>
                                        </div>
                                        <div class="media-body">
                                            <div>
                                                Responded to need “In-Kind Opportunity”
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <div class="text-center mt-4"><a href="#" class="btn btn-primary waves-effect waves-light btn-sm">View More <i class="mdi mdi-arrow-right ms-1"></i></a></div>
                        </div>
                    </div>
                </div>

                <div class="col-xl-4">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title mb-4">Top Cities Selling Product</h4>

                            <div class="text-center">
                                <div class="mb-4">
                                    <i class="bx bx-map-pin text-primary display-4"></i>
                                </div>
                                <h3>1,456</h3>
                                <p>San Francisco</p>
                            </div>

                            <div class="table-responsive mt-4">
                                <table class="table align-middle table-nowrap">
                                    <tbody>
                                        <tr>
                                            <td style="width: 30%">
                                                <p class="mb-0">San Francisco</p>
                                            </td>
                                            <td style="width: 25%">
                                                <h5 class="mb-0">1,456</h5></td>
                                            <td>
                                                <div class="progress bg-transparent progress-sm">
                                                    <div class="progress-bar bg-primary rounded" role="progressbar" style="width: 94%" aria-valuenow="94" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <p class="mb-0">Los Angeles</p>
                                            </td>
                                            <td>
                                                <h5 class="mb-0">1,123</h5>
                                            </td>
                                            <td>
                                                <div class="progress bg-transparent progress-sm">
                                                    <div class="progress-bar bg-success rounded" role="progressbar" style="width: 82%" aria-valuenow="82" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <p class="mb-0">San Diego</p>
                                            </td>
                                            <td>
                                                <h5 class="mb-0">1,026</h5>
                                            </td>
                                            <td>
                                                <div class="progress bg-transparent progress-sm">
                                                    <div class="progress-bar bg-warning rounded" role="progressbar" style="width: 70%" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- end row -->

            <div class="row">
                <div class="col-lg-12">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title mb-4">Dernière transaction</h4>
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
                                            <td class="text-center">
                                                <!-- Button trigger modal -->
                                                <a href="javascript:void(0);" role="button" aria-disabled="true" class="text-primary text-center" data-bs-toggle="modal" data-bs-target=".orderdetailsModal{{ $order->id }}">
                                                    <i class="mdi mdi-eye font-size-18"></i>
                                                </a>
                                            </td>
                                            <td>
                                                <div class="d-flex gap-3">
                                                    <a href="javascript:void(0);" class="text-success"  data-bs-toggle="modal" data-bs-target=".orderEditModal{{ $order->id }}"><i class="mdi mdi-pencil font-size-18"></i></a>
                                                        <form  id="delete-form-{{$order->id}}" method="post" action="{{ route('admin.order.destroy',$order->id) }}"  style="display:none">
                                                        {{csrf_field()}}
                                                        {{method_field('delete')}}
                                                    </form>
                                                    <a  href="javascript:void(0);" onclick=" if(confirm('Etes Vous sure de supprimer cette commande ?')){  event.preventDefault();document.getElementById('delete-form-{{$order->id}}').submit();
                        
                                                    }else{event.preventDefault();} " class="text-danger"><i class="mdi mdi-delete font-size-18"></i></a>
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
                            <!-- end table-responsive -->
                        </div>
                    </div>
                </div>
            </div>
            <!-- end row -->
        </div>
        <!-- container-fluid -->
    </div>
    <!-- End Page-content -->

    <!-- Transaction Modal -->
        @foreach($orders as $order)
            <div class="modal fade orderdetailsModal{{ $order->id }}" tabindex="-1" role="dialog" aria-labelledby="orderdetailsModalLabel" aria-hidden="true">
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
                                                    <p class="text-muted mb-0">{{ $product[3] }} unite</p>
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

    <!-- subscribeModal -->
    <!-- <div class="modal fade" id="subscribeModal" tabindex="-1" aria-labelledby="subscribeModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header border-bottom-0">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="text-center mb-4">
                        <div class="avatar-md mx-auto mb-4">
                            <div class="avatar-title bg-light rounded-circle text-primary h1">
                                <i class="mdi mdi-email-open"></i>
                            </div>
                        </div>

                        <div class="row justify-content-center">
                            <div class="col-xl-10">
                                <h4 class="text-primary">Subscribe !</h4>
                                <p class="text-muted font-size-14 mb-4">Subscribe our newletter and get notification to stay update.</p>

                                <div class="input-group bg-light rounded">
                                    <input type="email" class="form-control bg-transparent border-0" placeholder="Enter Email address" aria-label="Recipient's username" aria-describedby="button-addon2">
                                    
                                    <button class="btn btn-primary" type="button" id="button-addon2">
                                        <i class="bx bxs-paper-plane"></i>
                                    </button>
                                    
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> -->
    <!-- end modal -->


               <!-- La partie de l'edition du modal -->
                @foreach($orders as $order)
                    <div class="modal fade orderEditModal{{ $order->id }}" tabindex="-1" role="dialog" aria-labelledby="orderdetailsModalLabel" aria-hidden="true">
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