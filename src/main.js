// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import ElementUI from "element-ui";
import cookies from "vue-cookies";
import { isLogin } from './utils/common';
import "element-ui/lib/theme-chalk/index.css";
import "./global.css";

Vue.use(cookies);
Vue.use(ElementUI);

Vue.config.productionTip = false;
Vue.prototype.$isLogin = isLogin;


router.beforeEach((to, from, next) => {
  // 获取url参数是否有redirect_url，有的话先放入localStorage
  var redirect_url_param = to.query.redirect_url;
  if (redirect_url_param && redirect_url_param != '') {
    localStorage.setItem('redirect_url', redirect_url_param);
  }

  // 没登录还想去user页，跳转登录
  if (!isLogin() && to.path == '/user') {
    next("/login");
  }

  // 判断是否登录，已登录的话跳转到user
  if (isLogin() && to.path != "/user") {
    next("/user");
  }

  // 调用 next()，一定要调用 next 方法，否则钩子就不会被销毁
  next();
});

new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
