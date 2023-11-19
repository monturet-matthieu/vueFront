import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RecetteView from '../views/RecetteView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/', name: 'home', component: HomeView},
    { path: '/recette/:id', name: 'recette-id', component: RecetteView}
  ]
})

export default router
