import { createRouter,createWebHashHistory } from 'vue-router'
 const routes = [

    { path: '/:pathMatch(.*)*', name: 'Index', component: () => import(/* webpackChunkName: "introduce" */ '../pages/Index.vue') },
    { path: '/swiper', name: 'Swiper', component: () => import(/* webpackChunkName: "introduce" */ '../pages/Swiper.vue') },
    { path: '/details', name: 'Detail', component: () => import(/* webpackChunkName: "introduce" */ '../pages/Details.vue') },
    { path: '/lineClamp', name: 'LineClamp', component: () => import(/* webpackChunkName: "LineClamp" */ '../pages/LineClamp.vue') },
 ]
 const Router = createRouter({
    history:createWebHashHistory(),
    routes: routes,
})
export default Router