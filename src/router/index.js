import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'Home'
      }
    },
    {
      path: '/about/:value/:value2',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
      meta: {
        title: 'About'
      },
      props: true
    },
    {
      name: 'product',
      path: '/product',
      component: () => import('@/views/ProductView.vue'),
      meta: {
        title: 'Product'
      }
    },
    {
      name: 'updateProduct',
      path: '/product/:id/update/',
      component: () => import('@/views/UpdateProductView.vue'),
      meta: {
        title: 'Update Product'
      },
      props: true
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  } else {
    document.title = 'Undefined'
  }
  next()
})

export default router
