import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '../views/HomeView.vue';
import RegisterGroupView from '../views/RegisterGroupView.vue';

import { Routes } from "@/global/variables";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: Routes.DEFAULT },
    {
      path: Routes.HOME,
      name: 'home',
      component: HomeView
    },
    {
      path: Routes.CREATE_GROUP,
      name: 'create group',
      component: RegisterGroupView
    }
  ]
})

export default router
