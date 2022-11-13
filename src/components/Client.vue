<template>
  <div class="col-2 items">
    <img :src="dataClients.imgUrl" alt="" class="rounded mx-auto d-block img-responsive" />
  </div>
</template>

<script>
export default {
  name: "Client",
  props: { dataClients: Object },
};
</script>

<style></style>
