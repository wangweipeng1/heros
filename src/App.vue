<template>
  <div>
    <!-- 头部组件 -->
    <app-header></app-header>
    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-3 col-md-2 sidebar">
                <!-- 侧边栏组件 -->
                <app-slider></app-slider>
            </div>
            <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
                <!-- 列表组件 -->
                <!-- <app-list></app-list> -->
                <router-view></router-view>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import appHeader from "./components/appHeader";
import appSlider from "./components/appSlider.vue";
// import appList from "./components/appList.vue";

export default {
  name: "app",
  components: {
    appHeader,appSlider,
  }
};
</script>

<style>
</style>
