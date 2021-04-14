import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      showTabbar: true,
    },
  },
  {
    path: "/square",
    name: "Square",
    component: () => import("../views/square/index.vue"),
    meta: {
      showTabbar: false, // 不显底部导航
    },
  },
  {
    path: "/boke",
    name: "Boke",
    component: () => import("../views/Boke/Boke.vue"),
    meta: {
      showTabbar: true,
    },
  },
  {
    path: "/hear",
    name: "Hear",
    component: () => import("../components/boke/Hear.vue"),
    meta: {
      showTabbar: true,
    },
  },
  {
    path: "/find",
    name: "Find",
    component: () => import("../components/boke/Find.vue"),
    meta: {
      showTabbar: true,
    },
  },
  {
    path: "/Login",
    name: "Login",
    component: () => import("../views/User/Login.vue"),
    meta: {
      showTabbar: false, // 不显底部导航
    },
  },
  {
    path: "/Reg",
    name: "Reg",
    component: () => import("../views/User/Reg.vue"),
    meta: {
      showTabbar: false, // 不显底部导航
    },
  },
  {
    path: "/User",
    name: "User",
    component: () => import("../views/User/User.vue"),
    meta: {
      showTabbar: true,
    },
  },
  {
    path: "/SouSuo",
    name: "SouSuo",
    component: () => import("../views/Kege/SouSuo.vue"),
    meta: {
      showTabbar: true,
    },
  },
  {
    path: "/Kege",
    name: "Kege",
    component: () => import("../views/Kege/Kege.vue"),
    meta: {
      showTabbar: true,
    },
    children: [
      {
        path: "quchangge",
        name: "QuChGe",
        component: () => import("../views/Kege/Kge/QuChGe.vue"),
      },
      {
        path: "guangchang",
        name: "GuangChang",
        component: () => import("../views/Kege/Kge/GuangChang.vue"),
      },
      {
        path: "gefang",
        name: "GeFang",
        component: () => import("../views/Kege/Kge/GeFang.vue"),
      },
    ],
  },
  {
    path: "/Yuncun",
    name: "Yuncun",
    component: () => import("../views/Yuncun/Yuncun.vue"),
    meta: {
      showTabbar: true,
    },
  },
  {
    path: "/Mokuai",
    name: "Mokuai",
    component: () => import("../views/All/Mokuai.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
