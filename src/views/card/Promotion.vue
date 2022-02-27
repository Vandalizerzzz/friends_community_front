<template>
  <el-card shadow="hover">
    <div slot="header">
      <span>🥂 推广</span>
    </div>
    <div>
      <p v-for="item in list" :key="item.id" class="block">
        <a :href="item.link" target="_blank">{{ item.title }}</a>
      </p>
    </div>
  </el-card>
</template>

<script>
import { getPromotionList } from "@/api/promotion.js";
export default {
  name: "Promotion",
  data() {
    return {
      list: [],
    };
  },
  created() {
    this.fetchPromotionList();
  },
  methods: {
    async fetchPromotionList() {
      const { data: res } = await getPromotionList();
      this.list = res;
    },
  },
};
</script>

<style scoped>
</style>