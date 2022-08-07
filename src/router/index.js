import {
  createRouter,
  createWebHistory,
} from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../components/Home.vue'),
  },
  {
    path: '/container',
    name: 'container',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Container.vue'),
  },
  
  {
    path: '/navMenu',
    name: 'NavMenu',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/NavMenu.vue'),
  },
  {
    path: '/button',
    name: 'button',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Button.vue'),
  },
  {
    path: '/colorPicker',
    name: 'colorPicker',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/ColorPicker.vue'),
  },
  {
    path: '/upload',
    name: 'Upload',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Upload.vue'),
  },
  {
    path: '/nCollapse',
    name: 'NCollapse',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/NCollapse.vue'),
    // meta: {requiresAuth: true},
  },
  {
    path: '/table',
    name: 'Table',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Table.vue'),
  },
  {
    path: '/carousel',
    name: 'carousel',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Carousel.vue'),
  },
  {
    path: '/backtop',
    name: 'backtop',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Backtop.vue'),
  },
  
 
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
