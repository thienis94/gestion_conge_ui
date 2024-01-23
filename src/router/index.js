import { createRouter, createWebHistory } from 'vue-router'
import LoginView from "../views/LoginView.vue"
import ListeEmlpoyer from "../views/ListeEmlpoyer.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'LOginView',
      component: LoginView
    },
  {
    path: '/ListeEmlpoyer',
    name: 'ListeEmlpoyer',
    component: ListeEmlpoyer
  }
  ]
})

export default router
