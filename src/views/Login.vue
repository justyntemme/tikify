<template>
  <div class="login">
    <Navbar/>
    <input v-model="email" type="text" placeholder="Username"><br>
    <input v-model="password" type="password" placeholder="Password"><br>
            <b-alert
            dismissible
            :show="dismissCountDown"
            :variant="msgVariant"
            @dismissed="dismissCountDown=0"
            @dismiss-count-down="countDownChanged">{{errorMsg}}</b-alert>
    <b-button @click="login" class="login-btn" pill variant="primary">Login</b-button>
    <p>You don't have an account? Signup <a href="/signup">Here</a></p>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/layout/Navbar.vue'
import firebase from 'firebase'

export default {
  name: 'login',
  data() {
    return {
      email: '',
      password: '',
      dismissSecs: 30,
      dismissCountDown: 0,
      errorMsg: '',
      msgVariant: ''

    }
  },
  components: {
    Navbar
  },
  methods: {
    countDownChanged(dismissCountDown) {
      let v = this;
      v.dismissCountDown = dismissCountDown
    },
    showAlert() {
      let v = this;
      v.dismissCountDown = v.dismissSecs
    },
    login() {
      let v = this;
      firebase.auth().signInWithEmailAndPassword(v.email, v.password).then(
        function(user) {

        },
        function(err) {
          v.msgVariant = "danger";
          v.errorMsg = err.message;
          v.showAlert();

        }
      );
    }
  }
}
</script>
