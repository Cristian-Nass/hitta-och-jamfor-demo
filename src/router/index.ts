import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/:organization",
    name: "Organization",
    component: () => import("../views/Organization.vue"),
  },
  // {
  //   path: "/grundskolor",
  //   name: "Grundskolor",
  //   component: () => import("../views/Forskolor.vue"),
  // },
  // {
  //   path: "/gymnasieskolor",
  //   name: "Gymnasieskolor",
  //   component: () => import("../views/Forskolor.vue"),
  // },
  // {
  //   path: "/vardOchOmsorgsboenden",
  //   name: "VardOchOmsorgsboenden",
  //   component: () => import("../views/Forskolor.vue"),
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
