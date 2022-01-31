import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/forskolor",
    name: "Forskolor",
    component: () => import("../views/Forskolor.vue"),
  },
  {
    path: "/grundskolor",
    name: "Grundskolor",
    component: () => import("../views/Grundskolor.vue"),
  },
  {
    path: "/gymnasieskolor",
    name: "Gymnasieskolor",
    component: () => import("../views/Gymnasieskolor.vue"),
  },
  {
    path: "/vardOchOmsorgsboenden",
    name: "VardOchOmsorgsboenden",
    component: () => import("../views/VardOchOmsorgsboenden.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
