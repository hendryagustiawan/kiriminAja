<template>
  <div class="carousel-item active" data-bs-interval="3000">
    <div class="container">
      <div class="row align-items-center justify-content-between">
        <div class="col-6">
          <img :src="dataBanner.imgUrl" class="p-0 img-fluid rounded" />
        </div>
        <div class="col-6 content">
          <div class="d-flex align-items-center">
            <div class="justify-content-center">
              <h2 class="fw-bold p-0">{{ dataBanner.title }}</h2>
              <p class="p-0 fw-semibold">{{ dataBanner.description }}</p>
              <div class="row">
                <div class="p-2" v-for="conditions in dataBanner.condition" :key="conditions.id"><i class="fa-solid fa-circle-check me-2" style="color: #f1c40f"></i>{{ conditions.name }}</div>
              </div>
              <button type="button" class="btn btn-danger rounded-pill shadow py-2 px-4 mt-3">Selengkapnya</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Banner",
  props: { dataBanner: Object },
};
</script>

<style></style>
