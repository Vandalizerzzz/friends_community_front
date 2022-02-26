<template>
  <el-card shadow="hover">
    <div slot="header">
      <span>🥳 每日一句</span>
    </div>
    <div>
      <div class="has-text-left block">
        {{ tip.content }}
      </div>
      <div class="has-text-right mt-5 block">———{{ tip.author }}</div>
    </div>
  </el-card>
</template>

<script>
import { getTodayTip } from "@/api/tip.js";
export default {
  name: "Tip",
  data() {
    return {
      tip: "",
    };
  },
  methods: {
    async fetchTodayTip() {
      const { data: tip } = await getTodayTip();
      this.tip = tip;
    },
  },
  created() {
    this.fetchTodayTip();
  },
};
</script>

<style scoped>
</style>