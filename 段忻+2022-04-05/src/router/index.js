import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/pages/home'
import Login from "@/pages/Login";



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
