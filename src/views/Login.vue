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

export default {
  name: 'login',
  mounted() {
    this.$store.watch(
        state=>state.status,
        (data) => {
            this.status = data

            if (this.status == 'failure') {
                this.msgVariant = "danger"
                this.errorMsg = this.$store.getters.error
                this.showAlert()

            } else if (this.status == 'success') {
              this.$router.push('home')
            }
        }
    )
  },
  data() {
    return {
      email: '',
      password: '',
      dismissSecs: 5,
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
      const user = {
          email: v.email,
          password: v.password
      }
      v.$store.dispatch('signInAction', user)
    }
  }
}
</script>
