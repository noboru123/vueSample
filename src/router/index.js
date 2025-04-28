import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomePage.vue'
import About from '../views/About.vue'
import TableSample from '../views/TableSample.vue'
import CalendarSample from '../views/CalendarSample.vue'
import FormSample from '../views/FormSample.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/table',
    name: 'TableSample',
    component: TableSample,
  },
  {
    path: '/calendar',
    name: 'Calendar',
    component: CalendarSample,
  },
  {
    path: '/form',
    name: 'Form',
    component: FormSample,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router