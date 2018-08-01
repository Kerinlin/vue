import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import About from '@/views/About'
import Dashboard from '@/views/Dashboard'
import logout from '@/views/logout'
import login from '@/views/login'
import auth from '../auth'
Vue.use(Router)

const requireAuth=((to,from,next)=>{
  console.log(to,from,next); 
  if(!auth.loggedIn()){
    next({
      path:'/login',
      query:{
        redirect:to.fullPath
      }
    })
  }else if (loggedIn && to.path === '/login') {
    next({ path: '/' })
  }else{
    next();
  } 
})

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      redirect: '/about'
    },
    {
      path: '/about',
      component: About
    },
    {
      path:'/dashboard',
      component:Dashboard,
      beforeEnter:requireAuth
    },
    {
      path:'/login',
      component:login
    },
    {
     path:'/logout',
      component:logout
    }
  ]
})
