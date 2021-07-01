<template>
  <div class="recommend">
    <div v-for="item in recommends" class="recommend_nav">
      <a :href="item.link">
        <img :src="item.image" alt="" />
        <div>{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecommendView",
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>
<style  scoped>
.recommend {
  display: flex;
  width: 100%;
}
.recommend_nav {
  flex: 1;
  padding: 10px;
}
.recommend_nav img {
  width: 80px;
  height: 80px;
}
</style>