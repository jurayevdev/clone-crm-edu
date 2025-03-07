import { createRouter, createWebHistory } from "vue-router";
import {
  HomeView,
  Dashboard,
  Students,
  Teachers,
  Login,
  Error,
  Tests,
  Settings,
  Groups,
  Results,
  SlugStudent,
  SlugTeachers,
  SlugTests,
  SlugResults,
  SlugGroups,
  Subjects,
  Payment,
  Attendance,
  Customer,
  Sms,
} from "../views";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      roles: ["_sp_am_", "_ow_sch_", "_ad_sch_"],
      title: "Home",
    },
    children: [
      {
        path: "/",
        name: "dashboard",
        component: Dashboard,
        meta: {
          roles: ["_sp_am_", "_ow_sch_", "_ad_sch_"],
          title: "Asosiy",
        },
      },
      {
        path: "/employees",
        name: "employees",
        component: Teachers,
        meta: {
          roles: ["_sp_am_", "_ow_sch_", "_ad_sch_"],
          title: "Xodimlar",
        },
      },
      {
        path: "/employee/:school_id/:id",
        name: "slug_teachers",
        component: SlugTeachers,
        meta: {
          roles: ["_sp_am_", "_ow_sch_", "_ad_sch_"],
          title: "Xodim Sahifasi",
        },
      },
      {
        path: "/students",
        name: "students",
        component: Students,
        meta: {
          roles: ["_sp_am_", "_ad_sch_"],
          title: "O'quvchilar",
        },
      },
      {
        path: "/students/:id/:name",
        name: "slug_students",
        component: SlugStudent,
        meta: {
          roles: ["_sp_am_", "_ad_sch_"],
          title: "O'quvchi Sahifasi",
        },
      },
      {
        path: "/customer",
        name: "customers",
        component: Customer,
        meta: {
          roles: ["_sp_am_", "_ad_sch_"],
          title: "Mijozlar",
        },
      },
      {
        path: "/tests",
        name: "tests",
        component: Tests,
        meta: {
          roles: ["_sp_am_", "_ad_sch_"],
          title: "Testlar",
        },
      },
      {
        path: "/subjects",
        name: "subjects",
        component: Subjects,
        meta: {
          roles: ["_sp_am_", "_ad_sch_"],
          title: "Fanlar",
        },
      },
      {
        path: "/payment",
        name: "payment",
        component: Payment,
        meta: {
          roles: ["_sp_am_", "_ad_sch_"],
          title: "To'lovlar",
        },
      },
      {
        path: "/attendance",
        name: "attendance",
        component: Attendance,
        meta: {
          roles: ["_sp_am_", "_ad_sch_"],
          title: "Davomat",
        },
      },
      {
        path: "/sms",
        name: "sms",
        component: Sms,
        meta: {
          roles: ["_sp_am_", "_ad_sch_"],
          title: "SMS",
        },
      },
      {
        path: "/results",
        name: "results",
        component: Results,
        meta: {
          roles: ["_sp_am_", "_ad_sch_"],
          title: "Natijalar",
        },
      },
      {
        path: "/results/:id",
        name: "slug_results",
        component: SlugResults,
        meta: {
          roles: ["_sp_am_", "_ad_sch_"],
          title: "Natijalar Sahifasi",
        },
      },
      {
        path: "/groups",
        name: "groups",
        component: Groups,
        meta: {
          roles: ["_sp_am_", "_ad_sch_"],
          title: "Guruhlar",
        },
      },
      {
        path: "/groups/:id/:name",
        name: "slug_groups",
        component: SlugGroups,
        meta: {
          roles: ["_sp_am_", "_ad_sch_"],
          title: "Guruh Sahifasi",
        },
      },
      {
        path: "/tests/question/:name",
        name: "slug_questions",
        component: SlugTests,
        meta: {
          roles: ["_sp_am_", "_ad_sch_"],
          title: "Savollar Sahifasi",
        },
      },
      {
        path: "/settings",
        name: "settings",
        component: Settings,
        meta: {
          roles: ["_sp_am_", "_ow_sch_", "_ad_sch_"],
          title: "Sozlamalar",
        },
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: Login,
    meta: { title: "Login" },
  },
  {
    path: "/:pathMatch(.*)*",
    name: "error",
    component: Error,
    meta: { title: "Error" },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.afterEach((to) => {
  const defaultTitle = "Devosfot";
  document.title = to.meta.title
    ? `${defaultTitle} | ${to.meta.title}`
    : defaultTitle;
});

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  if (!token && to.name !== "login") {
    next({ name: "login" });
  } else if (token && to.name === "login") {
    next({ name: "home" });
  } else if (to.meta.roles && !to.meta.roles.includes(role)) {
    next({ name: "error" });
  } else {
    next();
  }
});

export default router;
