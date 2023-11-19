
const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/LoginPage.vue") },
      { path: "/register", component: () => import("pages/RegisterPage.vue") },
      { path: "/user", component: () => import("pages/ListUserPage.vue") },
    ],
  },
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
