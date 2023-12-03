import { createRouter, createWebHashHistory } from "vue-router";
import Resume from '../views/Resume.vue'
import Contact from '../views/Contact.vue'
import * as process from "process";
import Weather from "../views/Weather.vue";

const routes = [
  // {
  //   path: "/",
  //   name: "Home",
  //   component: Home,
  // },
  {
    path: "/",
    name: "Resume",
    component: Resume,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/weather",
    name: "Weather",
    component: Weather,
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;
