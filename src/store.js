import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: '',
    status: '',
    error: '',
    db: {},
    products: {},
    sales: {},
    account: {},
    cart: [],
  },
  getters: {
    status(state) {
      return state.status
    },
    cart (state) {
      return state.cart
    },
    user (state) {
      return state.user
    },
    error (state) {
      return state.error
    },
    products (state) {
      return state.products
    },
    account (state) {
      return state.account
    }
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload
    },
    addToCart(state, payload) {
      state.cart.push(payload)
    },
    removeFromCart(state, payload){
      state.cart = state.cart.filter(function(ele) {
        return ele != payload
      })
    },
    clearCart(state, payload) {
      state.cart.length = 0;
    },
    setAccount(state, payload) {
      state.account = payload
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
    setAccountAction({commit}, payload) {
      let v = this;
      let db = firebase.firestore();
      let accountRef =  db.collection('users').doc(payload);
  
      accountRef.get().then( (accountSnapshot) => {
        
        commit('setAccount',accountSnapshot.data())

      });
  

    },
    signUpAction({commit}, payload){
      let v = this;
      let db = firebase.firestore()
      commit('setStatus', 'loading')
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
      .then((response) => {
        commit('setUser', response.user.uid)
        commit('setStatus', 'success')
        commit('setError', null)
        let account = 
        {
          email: payload.email,
          accountType: payload.accountType,
          name: payload.name,
          dob: payload.dob
        }
        db.collection('users').doc(response.user.uid).set(account).then((response) =>{
          v.$state.setAccount(account)
        })
        
        .catch((error) => {
          alert(error.message)
        })
        
      }).catch((error) =>{
        commit('setStatus', 'failure')
        commit('setError', error.message)
      })
    },
    
    signInAction({commit}, payload) {
      let db = firebase.firestore()
      firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL).then(function(){
        firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
        .then((response) => {
          commit('setUser', response.user.uid)
          commit('setStatus', 'success')
          commit('setError', null)


          let accountRef =  db.collection('users').doc(response.user.uid);
          accountRef.get().then(accountSnapshot => {
            commit('setAccount', accountSnapshot.data())
          })

          console.log("account ")
          accountSnapshot.data()


        })
        .catch((error) => {
          commit('setStatus', 'failure')
          commit('setError', error.message)
        })

      })

    },
    signOutAction() {

    },
    getProductsAction({commit} ) {
      let products = []
      let db = firebase.firestore()
      
      let productsCollection = db.collection('products')
      .where("uid", "==",firebase.auth().currentUser.uid )
      productsCollection.onSnapshot((productRef) => {
        productRef.forEach((doc) => {
          const product = doc.data();
          product.id = doc.id
          products.push(product)
        });
        commit('setProducts', products)
      })

    },
    getSalesAction({commit}) {
      let sales = []
      let db = firebase.firestore()
      
      let salesCollection = db.collection('sales')
      .where("uid", "==",firebase.auth().currentUser.uid )
      salesCollection.onSnapshot((salesRef) => {
        salesRef.forEach((doc) => {
          const sale = doc.data();
          sale.id = doc.id
          sales.push(sale)
        });
        commit('setSales', sales)
      })
    },
  }
})
