import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
// import axios from 'axios'

// 导入bootstrap.css样式文件
import '../node_modules/bootstrap/dist/css/bootstrap.css';
// 导入index首页的样式文件
import './assets/css/index.css';


// 导入组件对象
import appList from "./components/appList.vue";
import appBar from "./components/appBar.vue";
import appFoo from "./components/appFoo.vue";


// 实例化路由对象
const router = new VueRouter({
  routes: [
    {path: '/', component: appList},
    {path: '/list', component: appList},
    {path: '/bar', component: appBar},
    {path: '/foo', component: appFoo},
  ]
})


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
