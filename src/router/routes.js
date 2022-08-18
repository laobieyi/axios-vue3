import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
export const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    // meta 属性实现属性对象，用来附加信息到路由上，如过渡名称，访问权限等
    meta: { requiresAuth: false },
  },
];
