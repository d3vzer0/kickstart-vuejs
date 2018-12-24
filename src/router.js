import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Pager from "./views/Pager.vue";

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/",
      name: "Login",
      component: Home
    },
    {
      path: "/home",
      name: "Home",
      component: Home
    },
    {
      path: "/pager",
      name: "Pager",
      component: Pager
    },

    {
      path: "*",
      redirect: "/"
    }
  ]
});

export default router
