import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/Home",
      name: "Home",
      component: Home
    },
    {
      path: "/",
      name: "Login",
      component: () => import("../pages/Login.vue")
    },

    {
      path: "*",
      redirect: {
        name: "Login"
      }
    }
  ]
});
