import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Dog from "../components/Dog";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/list",
    name: "List",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/List.vue"),
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/list/:breed",
    name: "Dog",
    component: Dog,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  console.log(to);
  let documentTitle = `${process.env.VUE_APP_TITLE} - ${to.name}`;
  if (to.params.title) {
    documentTitle += `- ${to.params.title}`;
  }
  document.title = documentTitle;
  next();
});

export default router;
