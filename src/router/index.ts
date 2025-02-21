import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "Home",
        component: () => import("@/layouts/HomeLayout.vue"),
        children: [
            {
                path: "/",
                name: "HomePage",
                component: () => import("@/views/HomePage.vue"),
            },
            {
                path: "/product/:id",
                name: "ProductDetailsPage",
                component: () => import("@/views/ProductDetails.vue"),
            },
        ],
    },
    {
        path: "/auth",
        name: "Auth",
        component: () => import("@/layouts/AuthLayout.vue"),
        children: [
            {
                path: "login",
                name: "LoginPage",
                component: () => import("@/views/LoginPage.vue"),
            },
            {
                path: "register",
                name: "RegisterPage",
                component: () => import("@/views/RegisterPage.vue"),
            },
        ],
    },
    {
        path: "/dashboard",
        name: "Dashboard",
        component: () => import("@/layouts/DashboardLayout.vue"),
        meta: { requiresAuth: true },
    },
    {
        path: "/:catchAll(.*)",
        name: "NotFoundPage",
        component: () => import("@/views/NotFoundPage.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

const isAuthenticated = () => !!localStorage.getItem("userToken");
router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth && !isAuthenticated()) next("/login");
    else next();
});

export default router;
