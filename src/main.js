import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/font/iconfont.css";
// 全局注册 第一步导入组件
import OneButton from "./components/outButton.vue";
Vue.config.productionTip = false;
//注册组件
Vue.component(OneButton.name, OneButton);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
