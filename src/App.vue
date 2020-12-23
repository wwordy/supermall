<template>
  <div id="app">
    <MainTabBar></MainTabBar>
    <router-view></router-view>
  </div>
</template>

<script>
import MainTabBar from "components/content/mainTaber/MainTabBar";

export default {
  name: 'app',
  components: {
    MainTabBar
  }
}
</script>

<style>
  @import "./assets/css/base.css";
</style>
