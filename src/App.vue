<template>
  <div>
    <navbar />
    <router-view />
    <custom-download />
    <custom-footer />
  </div>
</template>

<script>
import Navbar from "./components/CustomNavbar.vue";
import CustomFooter from "./components/CustomFooter.vue";
import CustomDownload from "./components/CustomDownload.vue";
export default {
  name: "App",
  components: {
    Navbar,
    CustomFooter,
    CustomDownload,
  },
};
</script>

<style></style>
