<template>
  <div class="login">
    <Navbar/>
    <input v-model="email" type="text" placeholder="Username"><br>
    <input v-model="password" type="password" placeholder="Password"><br>
    <b-button @click="login" class="login-btn" pill variant="primary">Login</b-button>
    <p>You don't have an account? You can create one</p>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/layout/Navbar.vue'

export default {
  name: 'login',
  data() {
    return {
      email: '',
      password: ''

    }
  },
  components: {
    Navbar
  },
  methods: {
    login() {
      let v = this;
      firebase.auth().signInWithEmailAndPassword(v.email, v.password).then(
        function(user) {

        },
        function(err) {

        }
      );
    }
  }
}
</script>
