import { createRouter, createWebHistory } from 'vue-router';

import { routes } from './routes';
// import { getToken } from '../utils/auth';

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// TODO 路由守卫
// 全局前置守卫
// router.beforeEach((to, form, next) => {
//   //   // 检查用户是否已登录，避免无限重定向
//   if (!getToken() && to.name !== 'Login') {
//     next({ name: 'Login' });
//   } else next();
// });
// TODO 全局解析守卫( router.beforeResolve 是获取数据或执行任何其他操作（如果用户无法进入页面时你希望避免执行的操作）的理想位置。)

// 全局后置守卫( router.afterEach 对于分析、更改页面标题、声明页面等辅助功能以及许多其他事情都很有用。)
// router.afterEach((to, from) => {
// return {
//   path: to.path,
//   // TODO 保存我们所在的位置，以便以后再来（还未尝试）
//   query: {
//     redirect: to.fullPath,
//   },
// };
// });
export default router;
