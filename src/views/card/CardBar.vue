<template>
  <div>
    <!-- if login -->
    <LoginWelcome></LoginWelcome>
    <!-- daily words -->
    <Tip></Tip>
    <!-- advertizer -->
    <Promotion></Promotion>
  </div>
</template>

<script>
import LoginWelcome from "@/views/card/LoginWelcome.vue";
import Promotion from "@/views/card/Promotion.vue";
import Tip from "@/views/card/Tip.vue";

export default {
  name: "CardBar",
  data() {
    return {};
  },
  components: {
    LoginWelcome,
    Promotion,
    Tip,
  },
};
</script>

  
<style>
</style>