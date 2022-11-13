<template>
  <div>
    <section class="jumbotron">
      <!--? Carosel  -->
      <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <banner v-for="dataBanner in banners" :key="dataBanner.id" :dataBanner="dataBanner" />
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <!--? Gelombang  -->
      <svg src="http://www.w3.org/1000/svg" viewBox="0 0 1440 320">
        <path
          fill="#ffffff"
          fill-opacity="1"
          d="M0,224L48,192C96,160,192,96,288,101.3C384,107,480,181,576,208C672,235,768,213,864,176C960,139,1056,85,1152,69.3C1248,53,1344,75,1392,85.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </section>
    <!--* Jumbotron-End  -->

    <!-- Form -->
    <div class="form">
      <div class="container">
        <form class="form">
          <div class="row align-items-center justify-content-center shadow-lg p-4 rounded">
            <div class="col-4">
              <p class="fw-bold">Form*</p>
              <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="asal kelurahan" />
            </div>
            <div class="col-4">
              <p class="fw-bold">Destination*</p>
              <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="kelurahan tujuan" />
            </div>
            <div class="col-4">
              <p class="fw-bold">Berat (gram)*</p>
              <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="berat barang" />
            </div>
          </div>
        </form>
      </div>
    </div>
    <!-- Form-end -->

    <!-- ekspedisi -->
    <div class="container ekspedisi">
      <!-- <div class="d-flex align-content-center"> -->
      <div class="row justify-content-center">
        <ekspedition v-for="dataEkspedition in expeditions" :key="dataEkspedition.id" :dataEkspedition="dataEkspedition" />
      </div>
      <!-- </div> -->
    </div>
    <!-- end -->

    <!-- Iklan-utama -->
    <div class="container iklan">
      <img src="https://kiriminaja.com/assets/home-2/pesta-pora-new.png" class="d-block w-100 rounded" alt="iklan" />
    </div>
    <!-- end -->

    <!-- Keunggulan -->
    <div class="container-fluid bg-light">
      <div class="container keunggulan py-5">
        <h2 class="fw-bold text-center">Untuk Semua Kebutuhan Pengiriman Paketmu</h2>
        <div class="card-content my-4">
          <div class="container">
            <div class="row mx-auto row-cols-3 row-cols-lg-3 g-4 g-lg-4 align-items-center justify-content-center">
              <div class="col-sm-4">
                <div class="card rounded shadow" style="width: 25rem">
                  <div class="card-body">
                    <i class="fa-2x mb-2 fa-solid fa-chart-column" style="color: orange"></i>
                    <h5 class="card-title fw-bold mt-2">Layanan Terintegrasi</h5>
                    <p class="card-text fw-light">Dashboard, API, Dan Mobile kami sediakan untuk mengontrol & monitoring lebih mudah.</p>
                  </div>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="card rounded shadow" style="width: 25rem">
                  <div class="card-body">
                    <i class="fa-2x mb-2 fa-solid fa-shield-halved" style="color: #4cd137"></i>
                    <h5 class="card-title fw-bold mt-2">Ekspedisi Terbaik</h5>
                    <p class="card-text fw-light">Kamu bisa pilih layanan sameday, next day, reguler, ekonomi, kargo dan lainya sesukamu.</p>
                  </div>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="card rounded shadow" style="width: 25rem">
                  <div class="card-body">
                    <i class="fa-2x mb-2 fa-solid fa-bolt" style="color: #fbc531"></i>
                    <h5 class="card-title fw-bold mt-2">Sistem Otomatis</h5>
                    <p class="card-text fw-light">Cetak resi / AWB, tracking, saldo COD dan banyak fitur lainnya.</p>
                  </div>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="card rounded shadow" style="width: 25rem">
                  <div class="card-body">
                    <i class="fa-2x mb-2 fa-solid fa-headphones" style="color: #e67e22"></i>
                    <h5 class="card-title fw-bold mt-2">Selalu Ada Untukmu</h5>
                    <p class="card-text fw-light">Kami selalu ada tanpa libur 24 Jam non stop, dan pihak ekpedisi.</p>
                  </div>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="card rounded shadow" style="width: 25rem">
                  <div class="card-body">
                    <i class="fa-sharp fa-2x mb-2 fa-solid fa-clipboard" style="color: #00a8ff"></i>
                    <h5 class="card-title fw-bold mt-2">Laporan Aktual</h5>
                    <p class="card-text fw-light">Kemudahan pantau paket, pencairan COD, saldo, semuanya.</p>
                  </div>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="card rounded shadow" style="width: 25rem">
                  <div class="card-body">
                    <i class="fa-2x mb-2 fa-solid fa-heart" style="color: #e84118"></i>
                    <h5 class="card-title fw-bold mt-2">Friendly</h5>
                    <p class="card-text fw-light">Ciptakan solusi terbaik dengan masukan, kritik, dan diskusi.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end -->

    <!-- Keunggulan Lainnya -->
    <div class="container keunggulan-lainnya">
      <h2 class="fw-bold text-center">Kirim Paket Makin Singkat</h2>
      <h6 class="text-center">Masih kurang? Yuk explore sekarang biar ngga penasaran</h6>
      <div class="container overflow-hidden text-center my-4">
        <div class="row gx-5">
          <div class="col">
            <div class="p-3">
              <img src="https://kiriminaja.com/assets/banner-home-2.png" alt="image" class="d-block w-100" />
            </div>
          </div>
          <div class="col">
            <div class="row align-items-center text-start justify-content-center">
              <div class="p-2 border bg-light rounded-pill my-3 content"><i class="fa-solid fa-circle-check me-2" style="color: #f1c40f"></i>Berbagai service expedisi sameday, kargo dan lainnya.</div>
              <div class="p-2 border bg-light rounded-pill mb-3 content"><i class="fa-solid fa-circle-check me-2" style="color: #f1c40f"></i>Penjemputan paket tanpa minimal kiriman.</div>
              <div class="p-2 border bg-light rounded-pill mb-3 content"><i class="fa-solid fa-circle-check me-2" style="color: #f1c40f"></i>Fitur dropoff atau cashless.</div>
              <div class="p-2 border bg-light rounded-pill mb-3 content"><i class="fa-solid fa-circle-check me-2" style="color: #f1c40f"></i>Kirim paket COD dengan pencairan tercepat.</div>
              <div class="p-2 border bg-light rounded-pill mb-3 content"><i class="fa-solid fa-circle-check me-2" style="color: #f1c40f"></i>Platform mudah digunakan (user friendly).</div>
              <div class="p-2 border bg-light rounded-pill mb-3 content"><i class="fa-solid fa-circle-check me-2" style="color: #f1c40f"></i>Meminimalisir rasio retur.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end -->
  </div>
</template>

<script>
import Ekspedition from "../components/Ekspeditions.vue";
import Banner from "../components/Banner.vue";
import { mapActions, mapState } from "pinia";
import { useStore } from "../stores";
export default {
  name: "HomePage",
  computed: {
    ...mapState(useStore, ["expeditions", "banners"]),
  },
  methods: {
    ...mapActions(useStore, ["getEkspeditions", "getBanners"]),
  },
  components: {
    Ekspedition,
    Banner,
  },
  created() {
    this.getEkspeditions();
    this.getBanners();
  },
};
</script>

<style></style>
