import { createRouter, createWebHistory } from 'vue-router'
import LoginView from "../views/LoginView.vue"
import ListeEmployer from "../views/ListeEmployer.vue"
import didier from "../views/didier.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'LOginView',
      component: LoginView
    },
  {
    path: '/ListeEmployer',
    name: 'ListeEmployer',
    component: ListeEmployer
  },
{
  path: '/didier',
  name: 'didier',
  component: didier
},
  ]
})

export default router
