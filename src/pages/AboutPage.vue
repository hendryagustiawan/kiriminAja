<template>
  <div>
    <!-- title -->
    <div class="container">
      <div class="d-flex align-items-center title justify-content-center">
        <div class="col-9">
          <h1 class="fw-bold text-center"><font style="color: #8e44ad">Memberi solusi teknologi </font> untuk kebutuhan supply chain yang mempermudah ekosistem bisnis Indonesia berkembang.</h1>
          <p class="text-center mt-3">Pengiriman untuk UMKM, Pebisnis Online, dan seluruh masyarakat Indonesia.</p>
        </div>
      </div>
    </div>
    <!-- end -->

    <!-- image-komunitas -->
    <div class="container komunitas">
      <div class="d-flex align-items-center justify-content-center my-5">
        <img src="https://storage.googleapis.com/tprt0ezsggqjornc7nf1wwluvgulhr/team-image.jpg" class="img-fluid rounded shadow" alt="komunitas" />
      </div>
    </div>
    <!-- end -->

    <!-- misson -->
    <div class="container text-center mission">
      <div class="row justify-content-between">
        <div class="col-5">
          <h4 class="fw-bold">Our Misson</h4>
          <div class="row align-items-center text-start justify-content-center">
            <div class="p-2 border bg-light rounded-pill my-3"><i class="fa-solid fa-circle-check me-2" style="color: #f1c40f"></i>Meningkatkan penjualan produk UMKM secara online.</div>
            <div class="p-2 border bg-light rounded-pill mb-3"><i class="fa-solid fa-circle-check me-2" style="color: #f1c40f"></i>Memberikan inovasi-inovasi terbaru dan terbaik.</div>
            <div class="p-2 border bg-light rounded-pill mb-3"><i class="fa-solid fa-circle-check me-2" style="color: #f1c40f"></i>Memberikan pelayanan yang maksimal dan optimal untuk pelanggan.</div>
            <div class="p-2 border bg-light rounded-pill mb-3"><i class="fa-solid fa-circle-check me-2" style="color: #f1c40f"></i>Mengenalkan KiriminAja seluas-luasnya ke seluruh Indonesia.</div>
          </div>
        </div>
        <div class="col-6 text-start">
          <p>
            <font style="color: #8e44ad" class="fw-bold">KiriminAja</font> sebuah platform yang memberikan kemudahan untuk pengiriman paket dan menemukan ekspedisi sesuai kebutuhan masyarakat, dengan metode pengiriman COD dan Non-COD yang
            dikembangkan oleh PT Selalu Siap Solusi.
          </p>
          <p>KiriminAja memberikan solusi untuk UMKM, pebisnis online, serta seluruh masyarakat Indonesia yang ingin melakukan pengiriman paket.</p>
          <p class="fw-bold">KiriminAja menawarkan:</p>
          <ul>
            <li>Kemudahan pengiriman paket dengan pilihan berbagai ekspedisi.</li>
            <li>Adanya layanan pengiriman COD (Cash On Delivery) dengan pencairan dana harian dan sistem pengambilan paket dirumah oleh ekspedisi.</li>
            <li>Layanan pengiriman paket non-cod dengan sistem pengambilan paket dirumah oleh ekspedisi.</li>
            <li>Platform yang dapat membantu pebisnis online mengendalikan dan mengelola bisnisnya dengan lebih baik.</li>
          </ul>
          <p>
            Dengan layanan dan inovasi yang ditawarkan, KiriminAja memiliki komitmen untuk berkontribusi pada perekonomian Indonesia, dengan cara memberikan solusi serta kemudahan bagi para pebisnis online supaya bisnisnya terus berkembang.
            Our Teams
          </p>
        </div>
      </div>
    </div>
    <!-- end -->

    <!-- Teams -->
    <div class="container teams">
      <div class="d-flex justify-content-center">
        <h1 class="fw-bold">Our Teams</h1>
      </div>
      <div class="row">
        <our-teams v-for="dataTeams in teams" :key="dataTeams.id" :dataTeams="dataTeams" />
      </div>
    </div>
    <!-- end -->
  </div>
</template>

<script>
import OurTeams from "../components/OurTeams.vue";
import { mapActions, mapState } from "pinia";
import { useStore } from "../stores";
export default {
  name: "AboutPage",
  computed: {
    ...mapState(useStore, ["teams"]),
  },
  methods: {
    ...mapActions(useStore, ["getTeams"]),
  },
  components: {
    OurTeams,
  },
  created() {
    this.getTeams();
  },
};
</script>

<style></style>
