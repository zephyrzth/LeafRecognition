@extends('layouts.app')

@section('content')
<div class="checkout_area section-padding-80">
    <div class="container">
        <div class="row">
            <div class="col-12 col-md-6 col-lg-5 ml-lg-auto">
                <div class="order-details-confirmation">
                    <h3 id="output"></h3>
                    <label for="nama_spesies">Nama Spesies:</label>
                    <h6 style="text-align:justify;" id="nama_spesies"></h6><br>
                    <label for="deskripsi">Deskripsi:</label>
                    <p style="text-align:justify;" id="deskripsi"></p>
                    <label for="habitat">Habitat:</label>
                    <p style="text-align:justify;" id="habitat"></p>
                    <label for="budidaya">Budidaya:</label>
                    <p style="text-align:justify;" id="budidaya"></p>
                    <label for="kegunaan">Kegunaan:</label>
                    <p style="text-align:justify;" id="kegunaan"></p>
                </div>
            </div>
            <div class="col-12 col-md-6 col-lg-5 ml-lg-auto">
                <div class="order-details-confirmation">
                    <div class="cart-page-heading">
                        <h5>Predict</h5>
                        <p>Upload your leaf image</p>
                    </div>
                    <div class="row">
                        <div class="col-md-12 mb-3">
                            <label for="gambar">Upload Image<span>*</span></label>
                            <input type="file" onchange="readURL(this);" accept="image/*;capture=camera"
                                capture>
                            <img id="blah" src="#" alt="your image" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
@section('moreJS')
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@0.13.5"></script>
<script src="{{ asset('js/script_new.js') }}"></script>

<script type="text/javascript">
    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                $('#blah')
                    .attr('src', e.target.result)
                    .width(200)
                    .height(200);
            };
            reader.readAsDataURL(input.files[0]);

            var canvas = document.createElement('canvas');
            var context = canvas.getContext('2d');
            var img = document.getElementById('blah');
            console.log(img);
            init(img);
        }
    }
</script>
@endsection