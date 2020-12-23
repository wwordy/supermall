<template>
 <div id="home">
   <nav-bar class="home-nav">
     <div slot="center">购物街</div>
   </nav-bar>
   <home-swiper :banners="banners"/>
   <recommend-view :recommends="recommends"/>
   <feature-view/>
   <ul>
     <li>列表1</li>
     <li>列表2</li>
     <li>列表3</li>
     <li>列表4</li>
     <li>列表5</li>
     <li>列表6</li>
     <li>列表7</li>
     <li>列表8</li>
     <li>列表9</li>
     <li>列表10</li>
   </ul>
 </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import {getHomeMultidata} from "@/network/home";
import HomeSwiper from "@/views/home/childComps/HomeSwiper";
import RecommendView from "@/views/home/childComps/RecommendView";
import FeatureView from "@/views/home/childComps/FeatureView";
export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView
  },
  data() {
    return {
      banners: [],
      recommends: [],
    }
  },
  //在组件创建时，去请求数据
  created() {
    //1.请求多个数据
    getHomeMultidata().then(res => {
      this.banners = res.data.banner.list
      this.recommends = res.data.recommend.list
    })
  }
}
</script>

<style scoped>
  #home {
    padding-top: 44px;
  }
  .home-nav{
    background-color: var(--color-tint);
    color: #fff;

    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }

</style>
