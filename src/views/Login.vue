<template>
  <div class="login">
    <Navbar/>
    <img class="login-img" style="" src="@/assets/user_male_circle.svg"/><br>
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
              this.$router.push('/')
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

<style scoped>
a {
  color: #E91E63;
}
input {
  background: #F5F5F5; 
  border: 1px solid #FFFFFF; 
  border-radius: 20px; 
  margin: 5px;
  line-height: 2em;
}
.b-row {
  width: 100%;
  padding: 0px;
  margin: 0px;
}
.home-logo {
  height: 40px;
  width: 90px;
}
.bottom-border {
  width: 100%;
}
h1 {
  font-family: 'Montserrat', sans-serif;
}
h2 {
  font-family: 'Montserrat', sans-serif;
}
.about-flow h2 {
  top: 40%;
}

.login-img {
  height: 50px;
  width: 50px;
}


.nav-logo {
  margin-top: 5px;
  height: 40px;
  width: 90px;
}

</style>

