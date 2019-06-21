import Vue from 'vue'
import Router from 'vue-router'
import firebase from 'firebase'

//Lazy loading
const Home = () => import('@/views/Home.vue')
const Login = () => import('@/views/Login.vue')
const SignUp = () => import('@/views/SignUp.vue')
const Product = () => import('@/views/Product.vue')
const ProductEdit = () => import('@/views/ProductEdit.vue')
const ProductCreate = () => import('@/views/ProductCreate.vue')
const ProductList = () => import('@/views/ProductList.vue')
const Sales = () => import('@/views/Sales.vue')

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
      path: '/sales',
      name: 'sales',
      component: Sales,
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

