import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import HomePage from '../views/HomePageView.vue'
import MangaDetailView from '../views/MangaDetailView.vue'
import { CacheService } from '../js/services/cache.service.js'
import { handleShowHeader } from '../js/controllers-ref/show-header.js'
const cacheService = new CacheService()
const routes = [
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/home-page',
    name: 'home-page',
    component: HomePage,
    meta: {
      layout: 'main',
      middleware: 'auth'
    }
  },
  {
    path: '/manga-detail/:id',
    name: 'manga-detail',
    component: MangaDetailView,
    meta: {
      layout: 'main',
      middleware: 'auth'
    }
  },
  {
    path: '/',
    redirect: '/login'
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach((to, from, next) => {
  const token = cacheService.get('token')
  if (to.name !== 'manga-detail') {
    handleShowHeader(true)
  } else {
    handleShowHeader(false)
  }
  if (to.meta.middleware === 'auth') {
    if (!token) {
      next({ name: 'login' })
    } else {
      next()
    }
  } else if (to.meta.middleware === 'guest') {
    if (token) {
      next({ name: 'home-page' })
    } else {
      next()
    }
  } else {
    next()
  }
})
export default router
