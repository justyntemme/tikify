import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'

Vue.use(Vuex)



export default new Vuex.Store({
  state: {
    user: null,
    status: '',
    error: '',
    db: {},
    products: {},
    sales: {},
  },
  getters: {
    status(state) {
      return state.status
    },
    user (state) {
      return state.user
    },
    error (state) {
      return state.error
    },
    products (state) {
      return state.products
    }
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload
    },
    removeUser (state) {
      state.user = null
    },
    setStatus(state, payload) {
      state.status = payload
    },
    setError(state, payload) {
      state.error = payload
    },
    setProducts(state, payload) {
      state.products = payload
    },
    setSales(state, payload) {
      state.sales = payload
    }

  },
  actions: {
    signUpAction({commit}, payload){
      commit('setStatus', 'loading')
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
      .then((response) => {
        commit('setUser', response.user.uid)
        commit('setStatus', 'success')
        commit('setError', null)
      }).catch((error) =>{
        commit('setStatus', 'failure')
        commit('setError', error.message)
      })
    },
    
    signInAction({commit}, payload) {
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
        .then((response) => {
          commit('setUser', response.user.uid)
          commit('setStatus', 'success')
          commit('setError', null)
        })
        .catch((error) => {
          commit('setStatus', 'failure')
          commit('setError', error.message)
        })
    },
    signOutAction() {

    },
    getProductsAction({commit} ) {
      let products = []
      let db = firebase.firestore()
      let productsCollection = db.collection('products')
      productsCollection.onSnapshot((productRef) => {
        productRef.forEach((doc) => {
          const product = doc.data();
          product.id = products.id;
          products.push(product)
        });
        commit('setProducts', products)
      })

    },
    getSalesAction({commit}) {
      let sales = []
      let db = firebase.firestore()
      let salesCollection = db.collection('sales')
      salesCollection.onSnapshot((salesRef) => {
        salesRef.forEach((doc) => {
          const sale = doc.data();
          sale.id = sales.id;
          sales.push(sale)
        });
        commit('setSales', sales)
      })
    },
  }
})
