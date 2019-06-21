import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import SignUp from './views/SignUp.vue'
import Product from './views/Product.vue'
import ProductEdit from './views/ProductEdit.vue'
import ProductCreate from './views/ProductCreate.vue'
import ProductList from '@/views/ProductList.vue'
import firebase from 'firebase'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/products',
      name: 'products',
      component: ProductList,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/edit',
      name: 'productedit',
      component: ProductEdit,
      props: {
        product: {}
      }
    },
    {
      path: '/product',
      name: 'product',
      component: Product,
      meta: {
        requiresAuth: true
      },
      props: {
        product: {}
      }
    },
    {
      path: '/product/create',
      name: 'productcreate',
      component: ProductCreate,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        guest: true
      }
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUp,
      meta: {
        guest: true
      }
    },
    {
      path: '/about',
      name: 'about',
      meta: {
        guest: true
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
});

export default router

router.beforeEach((to, from, next) => {
  firebase.auth().onAuthStateChanged(user => {
    if (to.path != 'login' ) {
      console.log(firebase.auth().currentUser)
  
  
    if(requiresAuth && !user){
  
      next('about');
    } 
    else if (!requiresAuth && user) { 
      next();
    }
    else {
      next();
    } 
  }

  });

  const requiresAuth = to.matched.some(record =>record.meta.requiresAuth);

});

