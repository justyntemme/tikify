import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'
import './components/style.css'




// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBq6Yj3sIwPW20jYGtUKN67oQtodvVJvFM",
  authDomain: "tikify-e74ea.firebaseapp.com",
  databaseURL: "https://tikify-e74ea.firebaseio.com",
  projectId: "tikify-e74ea",
  storageBucket: "tikify-e74ea.appspot.com",
  messagingSenderId: "476064564340",
  appId: "1:476064564340:web:c616ce182fa5cd78"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})
