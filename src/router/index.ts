import { createRouter,createWebHashHistory } from 'vue-router'
 const routes = [

    { path: '/:pathMatch(.*)*', name: 'Index', component: () => import(/* webpackChunkName: "introduce" */ '../pages/Index.vue') },
    { path: '/details', name: 'Detail', component: () => import(/* webpackChunkName: "introduce" */ '../pages/Details.vue') },
 ]
 const Router = createRouter({
    history:createWebHashHistory(),
    routes: routes,
})
export default Router