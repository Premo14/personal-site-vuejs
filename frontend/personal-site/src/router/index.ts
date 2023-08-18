import { createRouter, createWebHashHistory } from "vue-router";
import Home from '../views/Home.vue'
import Resume from '../views/Resume.vue'
import Contact from '../views/Contact.vue'
import * as process from "process";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/resume",
    name: "Resume",
    component: Resume,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;
