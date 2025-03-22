import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/UserLogin.vue'
import DashboardLayout from '@/layouts/DashboardLayout.vue'
import MainDashboard from '../views/MainDashboard.vue'
import MainSettings from '../views/MainSettings.vue'

const routes = [
  { path: '/', name: 'Login', component: Login },
  {
    path: '/dashboard',
    component: DashboardLayout, // Layout principal com o sidebar
    children: [
      {
        path: '',
        name: 'Dashboard',
        component: MainDashboard, // A página de conteúdo do Dashboard
      },
      {
        path: 'settings',
        name: 'Settings',
        component: MainSettings, // A página de configurações
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
