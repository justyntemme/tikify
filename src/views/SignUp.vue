<template>
    <div class="sign-up">
        <Navbar/>
        <p>Create a new account</p>
        <b-alert
            dismissible
            :show="dismissCountDown"
            :variant="msgVariant"
            @dismissed="dismissCountDown=0"
            @dismiss-count-down="countDownChanged">{{errorMsg}}</b-alert>
        
        <input type="text" v-model="email" placeholder="Email"><br>
        <input type="password" v-model="password" placeholder="Password"><br>
            <b-form-group label="I'm an ">
      <b-form-radio v-model="accountType" name="influencer-radios" value="Influencer">Influencer</b-form-radio>
      
      <b-form-radio v-model="accountType" name="Artist-radios" value="Artist">Artist</b-form-radio>
    </b-form-group>
        <b-button @click="signUp" class="home-nav-btn" pill variant="primary">Sign Up</b-button>
    </div>
</template>

<script>
import Navbar from '@/components/layout/Navbar.vue'

    export default {
        name: 'signUp',
        components: {
            Navbar
        },
        mounted() {
            let v = this;

            this.$store.watch(
                state=>state.status,
                (data) => {
                    this.status = data

                    if (this.status == 'failure') {
                        this.msgVariant = "danger"
                        this.errorMsg = this.$store.getters.error
                        this.showAlert()

                    } else if (this.status == 'success') {
                        v.$router.replace('login');
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
                msgVariant: '',
                status: '',
                accountType: '',
            }
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
            signUp: function() {
                let v = this;
                const user = {
                    email: v.email,
                    password: v.password,
                    accountType: v.accountType
                }
                v.$store.dispatch('signUpAction', user)
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

.home-nav-btn {
  background-image: url("~@/assets/gradiant-button.png");
  background-position: center;
  background-size: stretch;
  margin: 5px;
  font-family: Arimo; 
  font-size: 8px; 
  font-weight: bold; 
  font-style: normal; 
  text-decoration: none; 
  text-align: center; 
  color: #FFFFFF; 
  border-radius: 10px; 
  border: 0px;
  box-shadow:2px 2px 4px 0px rgba(0,0,0,0.5); 
}


</style>