
import AboutUs from '@/views/AboutUs.vue'
import ContactUs from '@/views/ContactUs.vue'
import Home from '@/views/Home.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes=[
  {
    path:'/',
    name: 'Home',
    component: Home
  },
  {
    path:'/ContactUs',
    name: 'ContactUs',
    component: ContactUs
  },
  {
    path:'/Aboutus',
    name: 'AboutUs',
    component: AboutUs
  },
  
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

export default router
