<template>
  <nav class="navbar navbar-expand-lg shadow-sm fixed-top">
    <div class="container">
      <a class="navbar-brand" href="#"><img src="../img/logo.png" alt="" /></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link fw-semibold text-decoration-none" :to="{ name: 'home' }">Beranda</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link fw-semibold" href="#">Blog</a>
          </li>
          <li class="nav-item">
            <a class="nav-link fw-semibold" href="#">Kabar</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link fw-semibold dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Layanan</a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item fw-semibold" href="#">Manajemen Order</a></li>
              <li>
                <router-link class="dropdown-item fw-semibold text-decoration-none" :to="{ name: 'integerasi' }">Integrasi API</router-link>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link fw-semibold" href="#">Cek Ongkir</a>
          </li>
          <li class="nav-item">
            <a class="nav-link fw-semibold" href="#">Lacak</a>
          </li>
        </ul>
      </div>
      <form class="d-flex">
        <button class="btn px-3 rounded-pill" type="submit" style="background-color: #8e44ad; color: #ffff">Daftar</button>
      </form>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style></style>
