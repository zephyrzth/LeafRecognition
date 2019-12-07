@extends('layouts.app')

@section('content')
<div class="checkout_area section-padding-80">
    <div class="container">
        <div class="row">
            <div class="col-12 col-md-6">
                <div class="checkout_details_area mt-50 clearfix">
                    <div class="cart-page-heading mb-30">
                        <h5>Billing Address</h5>
                    </div>
                    <form action="#" method="post">
                        <div class="row">
                            <div class="col-md-6 mb-3">
                                <label for="first_name">First Name <span>*</span></label>
                                <input class="form-control" id="first_name" required="" type="text" value="">
                            </div>
                            <div class="col-md-6 mb-3">
                                <label for="last_name">Last Name <span>*</span></label>
                                <input class="form-control" id="last_name" required="" type="text" value="">
                            </div>
                            <div class="col-12 mb-3">
                                <label for="company">Company Name</label>
                                <input class="form-control" id="company" type="text" value="">
                            </div>
                            <div class="col-12 mb-3">
                                <label for="country">Country <span>*</span></label>
                                <select class="w-100" id="country" style="display: none;">
                                    <option value="usa">United States</option>
                                    <option value="uk">United Kingdom</option>
                                    <option value="ger">Germany</option>
                                    <option value="fra">France</option>
                                    <option value="ind">India</option>
                                    <option value="aus">Australia</option>
                                    <option value="bra">Brazil</option>
                                    <option value="cana">Canada</option>
                                </select>
                                <div tabindex="0" class="nice-select w-100"><span class="current">United States</span>
                                    <ul class="list">
                                        <li class="option selected" data-value="usa">United States</li>
                                        <li class="option" data-value="uk">United Kingdom</li>
                                        <li class="option" data-value="ger">Germany</li>
                                        <li class="option" data-value="fra">France</li>
                                        <li class="option" data-value="ind">India</li>
                                        <li class="option" data-value="aus">Australia</li>
                                        <li class="option" data-value="bra">Brazil</li>
                                        <li class="option" data-value="cana">Canada</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-12 mb-3">
                                <label for="street_address">Address <span>*</span></label>
                                <input class="form-control mb-3" id="street_address" type="text" value="">
                                <input class="form-control" id="street_address2" type="text" value="">
                            </div>
                            <div class="col-12 mb-3">
                                <label for="postcode">Postcode <span>*</span></label>
                                <input class="form-control" id="postcode" type="text" value="">
                            </div>
                            <div class="col-12 mb-3">
                                <label for="city">Town/City <span>*</span></label>
                                <input class="form-control" id="city" type="text" value="">
                            </div>
                            <div class="col-12 mb-3">
                                <label for="state">Province <span>*</span></label>
                                <input class="form-control" id="state" type="text" value="">
                            </div>
                            <div class="col-12 mb-3">
                                <label for="phone_number">Phone No <span>*</span></label>
                                <input class="form-control" id="phone_number" type="number" min="0" value="">
                            </div>
                            <div class="col-12 mb-4">
                                <label for="email_address">Email Address <span>*</span></label>
                                <input class="form-control" id="email_address" type="email" value="">
                            </div>
                            <div class="col-12">
                                <div class="custom-control custom-checkbox d-block mb-2">
                                    <input class="custom-control-input" id="customCheck1" type="checkbox">
                                    <label class="custom-control-label" for="customCheck1">Terms and conitions</label>
                                </div>
                                <div class="custom-control custom-checkbox d-block mb-2">
                                    <input class="custom-control-input" id="customCheck2" type="checkbox">
                                    <label class="custom-control-label" for="customCheck2">Create an accout</label>
                                </div>
                                <div class="custom-control custom-checkbox d-block">
                                    <input class="custom-control-input" id="customCheck3" type="checkbox">
                                    <label class="custom-control-label" for="customCheck3">Subscribe to our newsletter</label>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div class="col-12 col-md-6 col-lg-5 ml-lg-auto">
                <div class="order-details-confirmation">
                    <div class="cart-page-heading">
                        <h5>Your Order</h5>
                        <p>The Details</p>
                    </div>
                    <ul class="order-details-form mb-4">
                        <li><span>Product</span> <span>Total</span></li>
                        <li><span>Cocktail Yellow dress</span> <span>$59.90</span></li>
                        <li><span>Subtotal</span> <span>$59.90</span></li>
                        <li><span>Shipping</span> <span>Free</span></li>
                        <li><span>Total</span> <span>$59.90</span></li>
                    </ul>
                    <div class="mb-4" id="accordion" role="tablist">
                        <div class="card">
                            <div class="card-header" id="headingOne" role="tab">
                                <h6 class="mb-0">
                                    <a aria-expanded="false" aria-controls="collapseOne" href="#collapseOne" data-toggle="collapse"><i class="fa fa-circle-o mr-3"></i>Paypal</a>
                                </h6>
                            </div>
                            <div class="collapse" id="collapseOne" role="tabpanel" aria-labelledby="headingOne" data-parent="#accordion">
                                <div class="card-body">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pharetra tempor so dales. Phasellus sagittis auctor gravida. Integ er bibendum sodales arcu id te mpus. Ut consectetur lacus.</p>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header" id="headingTwo" role="tab">
                                <h6 class="mb-0">
                                    <a class="collapsed" aria-expanded="false" aria-controls="collapseTwo" href="#collapseTwo" data-toggle="collapse"><i class="fa fa-circle-o mr-3"></i>cash on delievery</a>
                                </h6>
                            </div>
                            <div class="collapse" id="collapseTwo" role="tabpanel" aria-labelledby="headingTwo" data-parent="#accordion">
                                <div class="card-body">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo quis in veritatis officia inventore, tempore provident dignissimos.</p>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header" id="headingThree" role="tab">
                                <h6 class="mb-0">
                                    <a class="collapsed" aria-expanded="false" aria-controls="collapseThree" href="#collapseThree" data-toggle="collapse"><i class="fa fa-circle-o mr-3"></i>credit card</a>
                                </h6>
                            </div>
                            <div class="collapse" id="collapseThree" role="tabpanel" aria-labelledby="headingThree" data-parent="#accordion">
                                <div class="card-body">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse quo sint repudiandae suscipit ab soluta delectus voluptate, vero vitae</p>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header" id="headingFour" role="tab">
                                <h6 class="mb-0">
                                    <a class="collapsed" aria-expanded="true" aria-controls="collapseFour" href="#collapseFour" data-toggle="collapse"><i class="fa fa-circle-o mr-3"></i>direct bank transfer</a>
                                </h6>
                            </div>
                            <div class="collapse show" id="collapseFour" role="tabpanel" aria-labelledby="headingThree" data-parent="#accordion">
                                <div class="card-body">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est cum autem eveniet saepe fugit, impedit magni.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a class="btn essence-btn" href="#">Place Order</a>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection