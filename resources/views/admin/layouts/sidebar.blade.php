  <div class="vertical-menu">

            <div data-simplebar class="h-100">

                <!--- Sidemenu -->
                <div id="sidebar-menu">
                    <!-- Left Menu Start -->
                    <ul class="metismenu list-unstyled" id="side-menu">
                        <li class="menu-title" key="t-menu">Menu</li>
                          <li>
                            <a href="javascript: void(0);" class="waves-effect">
                                <span class="badge rounded-pill bg-success float-end" key="t-new">New</span>
                                <i class="bx bx-detail"></i>
                                <span key="t-blog">Paramettre</span>
                            </a>
                            <ul class="sub-menu" aria-expanded="false">
                                <li><a href="{{route('admin.membre.index')}}" key="t-blog-list">Membres</a></li>
                                <li><a href="{{route('admin.info.index')}}" key="t-blog-grid">Infos</a></li>
                                <li><a href="{{route('admin.partener.index')}}" key="t-blog-details">Partenaires</a></li>
                            </ul>
                        </li>

                        <li>
                            <a href="javascript: void(0);" class="has-arrow waves-effect">
                                <i class="bx bx-store"></i>
                                <span key="t-ecommerce">Ecommerce</span>
                            </a>
                            <ul class="sub-menu" aria-expanded="false">
                                <li><a href="{{ route('admin.product.index') }}" key="t-products">Products</a></li>
                                <li><a href="{{ route('admin.category.create') }}" key="t-product-detail">Categorys P</a>
                                <li><a href="{{ route('admin.category.index') }}" key="t-product-detail">Category</a>
                                </li>
                                <li><a href="{{ route('admin.order.index') }}" key="t-orders">Orders</a></li>
                                <li><a href="" key="t-customers">Customers</a></li>
                                <li><a href="" key="t-cart">Cart</a></li>
                                <li><a href="" key="t-checkout">Checkout</a></li>
                                <li><a href="" key="t-shops">Shops</a></li>
                                <li><a href="{{ route('admin.product.create') }}" key="t-add-product">Ajouter Un Product</a></li>
                            </ul>
                        </li>

                        <li>
                            <a href="javascript: void(0);" class="has-arrow waves-effect">
                                <i class="bx bx-envelope"></i>
                                <span key="t-email">Email</span>
                            </a>
                            <ul class="sub-menu" aria-expanded="false">
                                <li><a href="email-inbox.html" key="t-inbox">Inbox</a></li>
                                <li><a href="email-read.html" key="t-read-email">Read Email</a></li>
                                <li>
                                    <a href="javascript: void(0);">
                                        <span class="badge rounded-pill badge-soft-success float-end"
                                            key="t-new">New</span>
                                        <span key="t-email-templates">Templates</span>
                                    </a>
                                    <ul class="sub-menu" aria-expanded="true">
                                        <li><a href="email-template-basic.html" key="t-basic-action">Basic Action</a>
                                        </li>
                                        <li><a href="email-template-alert.html" key="t-alert-email">Alert Email</a></li>
                                        <li><a href="email-template-billing.html" key="t-bill-email">Billing Email</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>

        
                        <li>
                            <a href="javascript: void(0);" class="has-arrow waves-effect">
                                <i class="bx bxs-user-detail"></i>
                                <span key="t-contacts">Contacts</span>
                            </a>
                            <ul class="sub-menu" aria-expanded="false">
                                <li><a href="{{ route('admin.contact.index') }}" key="t-user-grid">Contact Cart</a></li>
                                <li><a href="contacts-list.html" key="t-user-list">Contact list</a></li>
                            </ul>
                        </li>

                        <li>
                            <a href="javascript: void(0);" class="waves-effect">
                                <span class="badge rounded-pill bg-success float-end" key="t-new">New</span>
                                <i class="bx bx-detail"></i>
                                <span key="t-blog">Blog</span>
                            </a>
                            <ul class="sub-menu" aria-expanded="false">
                                <li><a href="blog-list.html" key="t-blog-list">Blog List</a></li>
                                <li><a href="blog-grid.html" key="t-blog-grid">Blog Grid</a></li>
                                <li><a href="blog-details.html" key="t-blog-details">Blog Details</a></li>
                            </ul>
                        </li>

                        <li class="menu-title" key="t-pages">Pages</li>

                        <li>
                            <a href="javascript: void(0);" class="waves-effect">
                                <span class="badge rounded-pill bg-success float-end" key="t-new">New</span>
                                <i class="bx bx-user-circle"></i>
                                <span key="t-authentication">Authentication</span>
                            </a>
                            <ul class="sub-menu" aria-expanded="false">
                                <li><a href="auth-login.html" key="t-login">Login</a></li>
                                <li><a href="auth-login-2.html" key="t-login-2">Login 2</a></li>
                                <li><a href="auth-register.html" key="t-register">Register</a></li>
                                <li><a href="auth-register-2.html" key="t-register-2">Register 2</a></li>
                                <li><a href="auth-recoverpw.html" key="t-recover-password">Recover Password</a></li>
                                <li><a href="auth-recoverpw-2.html" key="t-recover-password-2">Recover Password 2</a>
                                </li>
                                <li><a href="auth-lock-screen.html" key="t-lock-screen">Lock Screen</a></li>
                                <li><a href="auth-lock-screen-2.html" key="t-lock-screen-2">Lock Screen 2</a></li>
                                <li><a href="auth-confirm-mail.html" key="t-confirm-mail">Confirm Mail</a></li>
                                <li><a href="auth-confirm-mail-2.html" key="t-confirm-mail-2">Confirm Mail 2</a></li>
                                <li><a href="auth-email-verification.html" key="t-email-verification">Email
                                        verification</a></li>
                                <li><a href="auth-email-verification-2.html" key="t-email-verification-2">Email
                                        verification 2</a></li>
                                <li><a href="auth-two-step-verification.html" key="t-two-step-verification">Two step
                                        verification</a></li>
                                <li><a href="auth-two-step-verification-2.html" key="t-two-step-verification-2">Two step
                                        verification 2</a></li>
                            </ul>
                        </li>

                    </ul>
                </div>
                <!-- Sidebar -->
            </div>
        </div>