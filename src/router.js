import Vue from 'vue'
import Router from 'vue-router'
import firebase from 'firebase'


Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {
        requiresAuth: true
      },
      component: () => import(/* webpackChunkName: "home" */'@/views/Home.vue')
    },
    {
      path: '/products',
      name: 'products',
      meta: {
        requiresAuth: true
      },
      component: () => import(/* webpackChunkName: "products" */'@/views/ProductList.vue')
    },
    {
      path: '/sales',
      name: 'sales',
      meta: {
        requiresAuth: true
      },
      component: () => import(/* webpackChunkName: "sales" */'@/views/Sales.vue')
    },
    {
      path: '/influencer/about',
      name: 'influencerinfo',
      meta: {
        requiresAuth: false
      },
      component: () => import(/* webpackChunkName: "influencerinfo" */'@/views/InfluencerInfo.vue')
    },
    {
      path: '/artist/wallet/add',
      name: 'addcredit',
      meta: {
        requiresAuth: true
      },
      component: () => import(/* webpackChunkName: "addcredit" */'@/views/AddCredit.vue')
    },
    {
      path: '/edit',
      name: 'productedit',
      props: {
        product: {}
      },
      component: () => import(/* webpackChunkName: "productedit" */'@/views/ProductEdit.vue')
    },
    {
      path: '/product',
      name: 'product',
      meta: {
        requiresAuth: true
      },
      props: {
        product: {}
      },
      component: () => import(/* webpackChunkName: "product" */'@/views/Product.vue')
    },
    {
      path: '/product/create',
      name: 'productcreate',
      meta: {
        requiresAuth: true
      },
      component: () => import(/* webpackChunkName: "productcreate" */'@/views/ProductCreate.vue')
    },
    {
      path: '/login',
      name: 'login',
      meta: {
        guest: true
      },
      component: () => import(/* webpackChunkName: "login" */'@/views/Login.vue')
    },
    {
      path: '/signup',
      name: 'signup',
      meta: {
        guest: true
      },
      component: () => import(/* webpackChunkName: "signup" */'@/views/SignUp.vue')
    },
    {
      path: '/signup/complete',
      name: 'aftersignup',
      meta: {
        guest: true
      },
      component: () => import(/* webpackChunkName: "signup" */'@/views/AfterSignUp.vue')
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
      component: () => import(/* webpackChunkName: "about" */ /* webpackPrefetch: true */ './views/About.vue')
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

