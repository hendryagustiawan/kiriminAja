<template>
  <div class="col-2 items align-content-center">
    <img :src="dataEkspedition.imgUrl" alt="" class="rounded mx-auto d-block img-responsive" />
  </div>
</template>

<script>
export default {
  name: "Ekspedition",
  props: { dataEkspedition: Object },
};
</script>

<style></style>
