import { createRouter, createWebHistory } from 'vue-router'
import LoginView from "../views/LoginView.vue"
import Authentification from "../views/Authentification.vue"
import ListeUtilisateur from "../views/ListeUtilisateur.vue"
import AjouterConge from "../views/AjouterConge.vue"



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'LOginView',
      component: LoginView
    },
  {
    path: 'Authentification',
    name: 'Authentification',
    component: Authentification
  },
  {
    path: 'ListeUtilisateur',
    name: 'ListeUtilisateur',
    component: ListeUtilisateur
  },
{
  path: 'AjouterConge',
  name: 'AjouterConge',
  component: AjouterConge
},
  ]
})

export default router
