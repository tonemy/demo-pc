import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/Index'
import Login from '../components/Login/Login'
import Home from '../components/Home/Home'
import Shop from "../components/Shop/Shop";
import Register from "../components/Register/Register"
import ShopDetail from "../components/ShopDetail/ShopDetail"

Vue.use(Router)

export default new Router({

  routes: [


     {
      path: '/register'
      ,name: 'Register'
      ,component: Register

    }
    ,{
      path: '/'
      ,name: 'Index'
      ,component: Index
      ,redirect: Home
      ,children: [
        {
          path: '/home'
          ,name: 'Home'
          ,component: Home
        }
        ,{
          path: '/shop'
          ,name: '/Shop'
          ,component: Shop
        }
        ,{
          path: '/shopDetail'
          ,name: 'ShopDetail'
          ,component: ShopDetail

        }
        ,{
          path: '/login'
          ,name: 'Login'
          ,component: Login
        }
      ]
    }
  ]
})
