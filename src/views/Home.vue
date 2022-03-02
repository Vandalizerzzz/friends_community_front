<template>
  <div class="home">
    <div class="box">🔔 {{ billboard.content }}</div>
    <div class="columns">
      <!--bulma-->
      <div class="column is-three-quarters">
        <TopicList></TopicList>
      </div>
      <div class="column">
        <CardBar></CardBar>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { getBillboard } from "@/api/billboard.js";
import CardBar from "@/views/card/CardBar.vue";
import PostList from "@/views/post/Index.vue";

export default {
  name: "Home",
  data() {
    return {
      billboard: {
        content: "",
      },
    };
  },
  methods: {
    async fetchBillboard() {
      const { data: res } = await getBillboard();
      this.billboard = res;
    },
  },
  created() {
    console.log("created invoked");
    this.fetchBillboard();
  },
  components: {
    CardBar,
    TopicList: PostList,
  },
};
</script>
