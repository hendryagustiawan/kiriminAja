<template>
  <div class="col-sm-4">
    <div class="border-none">
      <img :src="dataTeams.imgUrl" class="card-img-top rounded mt-4 mb-3" alt="..." />
      <div class="card-body">
        <h5 class="card-title fw-bold">{{ dataTeams.name }}</h5>
        <p class="card-text fw-light">{{ dataTeams.position }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OurTeams",
  props: { dataTeams: Object },
};
</script>

<style></style>
