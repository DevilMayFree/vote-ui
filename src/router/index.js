import {createRouter, createWebHistory} from "vue-router";

// 静态路由
export const constantRoutes = [
    {
        path: "/",
        name: "vote",
        component: () => import("@/views/vote/index.vue"),
        meta: {title: "vote", affix: true},
    }
];

/**
 * 创建路由
 */
const router = createRouter({
    history: createWebHistory(),
    routes: constantRoutes,
    scrollBehavior: () => ({left: 0, top: 0}),
});

export default router;
