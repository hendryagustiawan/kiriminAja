<template>
  <div class="container">
    <footer class="footer">
      <div class="row justify-content-between">
        <div class="col-5 mb-3">
          <img src="../img/logo.png" alt="logo" class="mb-2" />
          <ul class="nav row">
            <li class="nav-item mb-2">PT. Selalu Siap Solusi</li>
            <li class="nav-item mb-2"><i class="fa-solid fa-location-dot fw-lg me-2"></i>Jl. Palagan Tentara Pelajar No. 30 KM 08, Mudal, Kelurahan Sariharjo, Kecamatan Ngaglik, Kabupaten Sleman, Provinsi Daerah Istimewa Yogyakarta</li>
            <li class="nav-item mb-2"><i class="fa-solid me-2 fa-envelope"></i>support@kiriminaja.com</li>
            <li class="nav-item mb-2"><i class="fa-solid me-2 fa-phone"></i>0274 8000 123</li>
          </ul>
        </div>

        <div class="col-3 col-md-2 mb-3">
          <ul class="nav row">
            <li class="nav-item mb-2">
              <router-link class="text-decoration-none nav-link p-0 text-muted" :to="{ name: 'about' }">Tentang Kami</router-link>
            </li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Syarat & Ketentuan</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Integrasi API</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">FAQs</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Kebijakan Privasi</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Manajemen Order</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Kabar Buatmu</a></li>
          </ul>
        </div>

        <div class="col-md-4 offset-md-1 mb-3">
          <form>
            <h5 class="fw-bold">Subscribe to our newsletter</h5>
            <p>Please input your email address</p>
            <div class="d-flex flex-column flex-sm-row w-100 gap-2">
              <label for="newsletter1" class="visually-hidden">Email address</label>
              <input id="newsletter1" type="text" class="form-control" placeholder="Email address" />
              <button class="btn btn-primary" type="button" style="background-color: #8e44ad">Subscribe</button>
            </div>
          </form>
        </div>
      </div>

      <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
        <p class="fw-bold">© 2022 Kiriminaja.com. All rights reserved.</p>
        <ul class="list-unstyled d-flex">
          <li class="ms-3">
            <a class="link-dark" href="#"><i class="fa-brands fa-twitter fa-lg"></i></a>
          </li>
          <li class="ms-3">
            <a class="link-dark" href="#"><i class="fa-brands fa-instagram fa-lg"></i></a>
          </li>
          <li class="ms-3">
            <a class="link-dark" href="#"><i class="fa-brands fa-facebook fa-lg"></i></a>
          </li>
          <li class="ms-3">
            <a class="link-dark" href="#"> <i class="fa-brands fa-youtube fa-lg"></i></a>
          </li>
        </ul>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "CustomFooter",
};
</script>

<style></style>
