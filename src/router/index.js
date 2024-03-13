import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/pages/home/index.vue')
    },
    {
      path: '/services',
      name: 'Service',
      component: () => import('@/pages/servicePage/index.vue')
    },
    {
      path: '/find-property',
      name: 'Properties',
      component: () => import('@/pages/allproperty/index.vue')
    },
    {
      path: '/find-project',
      name: 'Projects',
      component: () => import('@/pages/allprojects/index.vue')
    },
    {
      path: '/contact-us',
      name: 'Contact',
      component: () => import('@/pages/contact/index.vue')
    },
    {
      path: '/why-us',
      name: 'Why Us',
      component: () => import('@/pages/whyus/index.vue')
    },
    {
      path: '/property-detail/:id',
      name: 'Property-Detail',
      component: () => import('@/pages/propertydetail/index.vue')
    },
    {
      path: '/project-detail/:id',
      name: 'Project-Detail',
      component: () => import('@/pages/projectdetail/index.vue')
    },
    {
      path: '/news-detail/:id',
      name: 'News-Detail',
      component: () => import('@/pages/newsdetails/index.vue')
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return { selector: to.hash };
    }
    return { left: 0, top: 0, behavior: "smooth" };
  },
})

export default router
