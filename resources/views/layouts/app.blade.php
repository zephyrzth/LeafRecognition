<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('Leaf Recognition', 'Leaf Recognition') }}</title>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">

    <!-- Favicon  -->
    <link rel="icon" href="{{ asset('essence/img/core-img/favicon.ico') }}">

    <!-- Core Style CSS -->
    <link rel="stylesheet" href="{{ asset('essence/css/core-style.css') }}">

    @yield('moreCSS')
</head>
<body>
    <div id="app">
        @include('inc.navbar')

        @yield('content')
        <br><br><br><br>

        <!-- ##### Footer Area Start ##### -->
        <footer class="footer_area clearfix">
            <div class="container">
                <div class="row">
                    <!-- CONTACT ADMIN -->
                    <div class="col-12 col-md-30 text-center">
                        <div class="single_widget_area">
                            <div class="footer_social_area">
                                <h2 id="contact" style="color:#FFFFFF"><br><br><br><br><br><br><br>Contact Admin</h2>
                                <h6 style="color:#FFFFFF">Anargya Widyadhana</h6>
                                <a href="https://www.facebook.com/anargya.dhana" data-toggle="tooltip" data-placement="top" title="Facebook"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                                <a href="https://www.instagram.com/anargyadhana/" data-toggle="tooltip" data-placement="top" title="Instagram"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                                <br><br><br><br><br><br><br><br><br><br><br><br><br><br>
                            </div>
                        </div>
                    </div>
                </div>
    
                <div class="row align-items-end">
                    <!-- ABOUT US -->
                    <div class="col-12 col-md-6">
                        <div class="single_widget_area">
                            <div class="footer_heading mb-30">
                            <br>
                            <h3 id="aboutus" style="color:#FFFFFF">About Us</h3>
                            <p style="color:#FFFFFF">Final Project Visi Komputer - Pengenalan Daun</p>
                            <br><br>
                            </div>
                        </div>
                    </div>
                </div>
    
                <div class="row mt-5">
                    <div class="col-md-12 text-center">
                        <p>
                            <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
                            Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i class="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                            <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
                        </p>
                    </div>
                </div>
            </div>
        </footer>
        <!-- ##### Footer Area End ##### -->
    </div>

    <!-- jQuery (Necessary for All JavaScript Plugins) -->
    <script src="{{ asset('essence/js/jquery/jquery-2.2.4.min.js') }}"></script>
    <!-- Popper js -->
    <script src="{{ asset('essence/js/popper.min.js') }}"></script>
    <!-- Bootstrap js -->
    <script src="{{ asset('essence/js/bootstrap.min.js') }}"></script>
    <!-- Plugins js -->
    <script src="{{ asset('essence/js/plugins.js') }}"></script>
    <!-- Classy Nav js -->
    <script src="{{ asset('essence/js/classy-nav.min.js') }}"></script>
    <!-- Active js -->
    <script src="{{ asset('essence/js/active.js') }}"></script>
    @yield('moreJS')
</body>
</html>
