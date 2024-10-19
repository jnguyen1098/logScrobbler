import { createRouter, createWebHistory } from 'vue-router';
import Start from '@/views/Start';
import Logged from '@/views/Logged';

const routes = [
  {
    path: '/',
    name: 'start',
    component: Start
  },
  {
    path: '/logged',
    name: 'logged',
    component: Logged,
    meta: {
      requiresSession: true
    }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

// Navigation guards
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresSession) && !localStorage.getItem('session')) {
    next({ name: 'start' });
  } else if (to.name === 'start' && localStorage.getItem('session')) {
    next({ name: 'logged' });
  } else {
    next();
  }
});

export default router;

