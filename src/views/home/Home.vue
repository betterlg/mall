<template>
  <div id="home">
    <nav-bar><div slot="center" class="home_nav_center">购物街</div></nav-bar>
    <home-swiper :banners="banners"></home-swiper>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";

import { getHomeMultidata } from "network/home";

import HomeSwiper from "views/home/childComps/HomeSwiper";

export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
  },
  data() {
    return {
      banners: [],
    };
  },
  created() {
    // 1.请求多个数据
    getHomeMultidata().then((res) => {
      console.log(res);
      this.banners = res.data.banner.list;
    });
  },
};
</script>

<style scoped>
.home_nav_center {
  position: sticky;
}
</style>
