import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import HomePage from '../views/HomePageView.vue'
import MangaDetailView from '../views/MangaDetailView.vue'
const routes = [
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/home-page',
    name: 'home-page',
    component: HomePage
  },
  {
    path: '/manga-detail/:id',
    name: 'manga-detail',
    component: MangaDetailView

  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
