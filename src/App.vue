<template>
  <div>
    <div class="mb-5">
      <Header></Header>
    </div>
    <div class="container context">
      <router-view :key="this.$route.fullPath" />
    </div>
  </div>
</template>

<script>
import Header from "@/components/Layout/Header.vue";
export default {
  name: "App",
  components: {
    Header,
  },
};
</script>

<style scoped>
.container {
  min-height: 500px;
}
</style>
