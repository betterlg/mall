<template>
  <div id="home">
    <nav-bar><div slot="center" class="home_nav_center">购物街</div></nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";

import { getHomeMultidata } from "network/home";
export default {
  name: "Home",
  components: {
    NavBar,
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
