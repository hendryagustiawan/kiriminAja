<template>
  <div>
    <!-- top-content -->
    <div class="container">
      <div class="row justify-content-between top-content">
        <div class="col-6">
          <h1 class="fw-bold">Partner Ecosystem & Integrations</h1>
          <p>Kami bermitra dengan banyak ekspedisi terkemuka untuk membantu mengembangkan bisnis Anda lebih cerdas, lebih cepat, dan lebih kuat dari sebelumnya.</p>
          <div class="row mb-3">
            <div class="p-2"><i class="fa-solid fa-circle-check me-2" style="color: #f1c40f"></i>Beragam pilihan expedisi & Layanan</div>
            <div class="p-2"><i class="fa-solid fa-circle-check me-2" style="color: #f1c40f"></i>Support Cash On Delivery</div>
            <div class="p-2"><i class="fa-solid fa-circle-check me-2" style="color: #f1c40f"></i>Dashboard Monitoring</div>
            <div class="p-2"><i class="fa-solid fa-circle-check me-2" style="color: #f1c40f"></i>Diskon ongkir dan Cashback ongkir</div>
            <div class="p-2"><i class="fa-solid fa-circle-check me-2" style="color: #f1c40f"></i>Customer Support Senin - Minggu</div>
          </div>
          <button type="button" class="btn px-3 py-2 btn-danger rounded-pill shadow" style="background-color: #e67e22">Daftar Sekarang</button>
        </div>
        <div class="col-6">
          <img src="https://kiriminaja.com/assets/cuate/memory-cuate.svg" class="img-fluid" alt="" />
        </div>
      </div>
    </div>

    <!-- end -->

    <!-- body-content -->
    <section class="container-fluid bg-light">
      <div class="container">
        <div class="row justify-content-center body-content py-5">
          <h1 class="fw-bold text-center">Modern Rest API's, Simply Delivered</h1>
          <p class="text-center">Kami menggunakan teknologi REST API terbaru yang lebih mudah dimengerti oleh developer ber skala kecil</p>
          <div class="card-items">
            <div class="row">
              <div class="col-sm-3 mb-4">
                <div class="card rounded shadow">
                  <div class="card-body">
                    <i class="fa-sharp fa-solid fa-2x fa-share-nodes" style="color: #00a8ff"></i>
                    <h5 class="card-title fw-bold mt-2">Ongkos Kirim Up to Date</h5>
                    <p class="card-text">Ongkos kirim langsung dari ekspedisi, tanpa perubahan</p>
                  </div>
                </div>
              </div>
              <div class="col-sm-3 mb-4">
                <div class="card rounded shadow">
                  <div class="card-body">
                    <i class="fa-solid fa-2x fa-truck-front" style="color: #353b48"></i>
                    <h5 class="card-title fw-bold mt-2">Pickup & Dropoff</h5>
                    <p class="card-text">Tentukan dan pilih opsi pengiriman dropoff dan pickup</p>
                  </div>
                </div>
              </div>
              <div class="col-sm-3 mb-4">
                <div class="card rounded shadow">
                  <div class="card-body">
                    <i class="fa-solid fa-2x fa-cloud" style="color: #ffff"></i>
                    <h5 class="card-title fw-bold mt-2">AWB Terpusat</h5>
                    <p class="card-text">Gak perlu pusing menunggu dapet AWB, kami yang antrikan</p>
                  </div>
                </div>
              </div>
              <div class="col-sm-3 mb-4">
                <div class="card rounded shadow">
                  <div class="card-body">
                    <i class="fa-solid fa-2x fa-cloud-arrow-up" style="color: #ffc312"></i>
                    <h5 class="card-title fw-bold mt-2">Tracking Satu Pintu</h5>
                    <p class="card-text">Hasil ekspedisi kami buat dengan satu konsep penyajian</p>
                  </div>
                </div>
              </div>
              <div class="col-sm-3 mb-4">
                <div class="card rounded shadow">
                  <div class="card-body">
                    <i class="fa-solid fa-2x fa-earth-americas" style="color: #009432"></i>
                    <h5 class="card-title fw-bold mt-2">Jangkauan Terluas</h5>
                    <p class="card-text">Selalu terbuka untuk seluruh area origin dan destinasi</p>
                  </div>
                </div>
              </div>
              <div class="col-sm-3 mb-4">
                <div class="card rounded shadow">
                  <div class="card-body">
                    <i class="fa-sharp fa-solid fa-2x fa-headphones" style="color: #fffa65"></i>
                    <h5 class="card-title fw-bold mt-2">Selalu Ada</h5>
                    <p class="card-text">Kami selalu ada setiap hari tanpa libur</p>
                  </div>
                </div>
              </div>
              <div class="col-sm-3 mb-4">
                <div class="card rounded shadow">
                  <div class="card-body">
                    <i class="fa-solid fa-2x fa-server" style="color: #ffaf40"></i>
                    <h5 class="card-title fw-bold mt-2">Server Optimal</h5>
                    <p class="card-text">Server dapat diakses kapanpun dan dimanapun</p>
                  </div>
                </div>
              </div>
              <div class="col-sm-3 mb-4">
                <div class="card rounded shadow">
                  <div class="card-body">
                    <i class="fa-solid fa-2x fa-heart" style="color: #e84118"></i>
                    <h5 class="card-title fw-bold mt-2">Tim teknis friendly</h5>
                    <p class="card-text">Ngga perlu worry untuk bertanya tentang teknis</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- end -->

    <!-- dipercaya oleh -->
    <div class="container">
      <div class="row justify-content-center belive-us">
        <h1 class="fw-bold text-center">Dipercayai oleh</h1>
        <p class="text-center mb-5">KirimiAja berkomitmen untuk selalu mendukung perkembangan dan kemajuan UMKM di seluruh Indonesia</p>
        <div class="image-terpercaya row justify-content-center">
          <client v-for="dataClients in clients" :key="dataClients.id" :dataClients="dataClients" />
        </div>
      </div>
    </div>
    <!-- end -->

    <!-- kurir-terhubung -->
    <section class="container-flex bg-light">
      <div class="container">
        <div class="row justify-content-center courier py-5">
          <h1 class="fw-bold text-center">Kurir Terhubung</h1>
          <p class="text-center">KiriminAJA selalu terhubung dengan expedisi yang terbaik di Indonesia, dan akan terus bertambah lagi</p>
          <div class="image-terpercaya row justify-content-center">
            <img src="../img/kurir.png" class="img-fluid" alt="" />
          </div>
        </div>
      </div>
    </section>
    <!-- end -->

    <!-- tanpa-biaya -->
    <div class="container">
      <div class="row justify-content-center cost">
        <h1 class="fw-bold text-center">Tanpa Biaya Apapun</h1>
        <p class="text-center">Sebuah solusi optimal sehingga Anda tidak perlu pusing lagi memikirkan biaya berlangganan API</p>
        <div class="card rounded shadow mt-3" style="width: 20rem">
          <div class="card-body">
            <div class="d-flex justify-content-center">
              <i class="fa-solid fa-fire"></i>
            </div>
            <h5 class="card-title text-center fw-bold mb-3">Freemium</h5>
            <div class="d-flex justify-content-center">
              <a href="#" class="btn btn-danger px-3 rounded-pill" style="background-color: #e67e22">Hubungi Kami</a>
            </div>
            <hr />
            <p class="card-text text-center">Solusi tepat untuk pertumbuhan bisnis yang signifikan</p>
            <hr />
            <p>Integration includes</p>
            <ul>
              <li>Cashback Ongkir Up 25%</li>
              <li>Unlimited API call per harinya</li>
              <li>Pengiriman cod, reguler, next day, dan instant</li>
              <li>Dukungan penuh via email dan sosial media</li>
              <li>Pembuatan label pengiriman otomatis</li>
              <li>Laporan order pengiriman</li>
            </ul>
            <a href="#" class="btn btn-danger d-flex justify-content-center rounded-pill" style="background-color: #e67e22">Ajukan Sekarang</a>
          </div>
        </div>
      </div>
    </div>
    <!-- end -->
  </div>
</template>

<script>
import Client from "../components/Client.vue";
import { mapActions, mapState } from "pinia";
import { useStore } from "../stores";
export default {
  name: "IntegerasiPage",
  computed: {
    ...mapState(useStore, ["clients"]),
  },
  methods: {
    ...mapActions(useStore, ["getClients"]),
  },
  components: {
    Client,
  },
  created() {
    this.getClients();
  },
};
</script>

<style></style>
