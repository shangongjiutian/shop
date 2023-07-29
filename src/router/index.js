import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/home/Home.vue')
  },
  {
    path: '/shop/:id',
    name: 'Shop',
    component: () => import(/* webpackChunkName: "shop" */ '../views/shop/Shop.vue')
  },
  {
    path: '/orderConfirmation/:id',
    name: 'OrderConfirmation',
    component: () => import(/* webpackChunkName: "orderConfirmation" */ '../views/orderConfirmation/OrderConfirmation.vue')
  },
  {
    path: '/orderList',
    name: 'OrderList',
    component: () => import(/* webpackChunkName: "orderlist" */ '../views/orderList/OrderList.vue')
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import(/* webpackChunkName: "search" */ '../views/search/Search.vue')
  },
  {
    path: '/searchList',
    name: 'SearchList',
    component: () => import(/* webpackChunkName: "searchList" */ '../views/searchList/SearchList.vue')
  },
  {
    path: '/cartList',
    name: 'CartList',
    component: () => import(/* webpackChunkName: "cartList" */ '../views/cartList/CartList.vue')
  },
  {
    path: '/myAdmin',
    name: 'MyAdmin',
    component: () => import(/* webpackChunkName: "myAdmin" */ '../views/myAdmin/MyAdmin.vue')
  },
  {
    path: '/address',
    name: 'Address',
    component: () => import(/* webpackChunkName: "address" */ '../views/address/Address.vue')
  },
  {
    path: '/addressEdit',
    name: 'AddressEdit',
    component: () => import(/* webpackChunkName: "addressEdit" */ '../views/addressEdit/AddressEdit.vue')
  },
  {
    path: '/addressSelect',
    name: 'AddressSelect',
    component: () => import(/* webpackChunkName: "addressSelect" */ '../views/addressSelect/AddressSelect.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/login/Login.vue'),
    beforeEnter (to, from, next) {
      // const { isLogin } = localStorage
      // isLogin ? next({ name: 'Home' }) : next()
      const isLogin = localStorage.isLogin
      if (isLogin) {
        next({ name: 'Home' })
      } else {
        next()
      }
    }
  }, {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "register" */ '../views/register/Register.vue'),
    beforeEnter (to, from, next) {
      // const { isLogin } = localStorage
      // isLogin ? next({ name: 'Home' }) : next()
      const isLogin = localStorage.isLogin
      if (isLogin) {
        next({ name: 'Home' })
      } else {
        next()
      }
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
router.beforeEach((to, from, next) => {
  // const isLogin = localStorage.isLogin
  // if (isLogin || to.name === 'Login') {
  //   next()
  // } else {
  //   next({ name: 'Login' })
  // }
  const { isLogin } = localStorage
  const { name } = to
  const isLoginOrRegister = (name === 'Login' || name === 'Register');
  (isLogin || isLoginOrRegister) ? next() : next({ name: 'Login' })
})
export default router
