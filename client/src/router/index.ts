import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '@/views/HomeView.vue';
import RegisterGroupView from '@/views/RegisterGroupView.vue';
import GroupSelectionView from '@/views/GroupSelectionView.vue';

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
    },
    {
      path: Routes.GROUP_SELECTION,
      name: 'group selection',
      component: GroupSelectionView
    }
  ]
})

export default router
