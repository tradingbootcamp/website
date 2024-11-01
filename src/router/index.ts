import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/home.vue'
import Schedule from '../components/schedule.vue'
import Team from '../components/team.vue'
import FAQ from '../components/faq.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/schedule', component: Schedule },
  { path: '/team', component: Team },
  { path: '/faq', component: FAQ },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router 