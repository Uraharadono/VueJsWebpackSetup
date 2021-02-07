import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Auth/Login.vue"),
  },
  {
    path: "/register",
    name: "Register",
    component: () =>
      import(/* webpackChunkName: "register" */ "../views/Auth/Register.vue"),
  },

  // otherwise redirect to home
  { path: '*', redirect: '/' }
];

const router = new VueRouter({
  mode: "history",
  routes,
});

// When proper login has been implemented, then remove this, as this helps with the auth.
router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ['/login', '/register'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');

  if (authRequired && !loggedIn) {
    {
      // TODO: FIX THIS, cause it's not workin on "/"
      // document.querySelector('#sideMenu').style.visibility = 'hidden';
      var sideMenu = document.getElementById("sideMenu")
      if (sideMenu != null)
        sideMenu.style.visibility = 'hidden';

      return next('/login');
    }
  }

  next();
});

export default router;