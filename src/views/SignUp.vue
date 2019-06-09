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
        <b-button @click="signUp" class="signup-btn" pill variant="primary">Sign Up</b-button>
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
            this.$store.watch(
                state=>state.status,
                (data) => {
                    this.status = data

                    if (this.status == 'failure') {
                        this.msgVariant = "danger"
                        this.errorMsg = this.$store.getters.error
                        this.showAlert()

                    } else if (this.status == 'success') {
                        this.msgVariant = "success"
                        this.errorMsg = "Account created, please return to log in."
                        this.showAlert()
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
                status: ''
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
                    password: v.password
                }
                v.$store.dispatch('signUpAction', user)
            }
        }
    }
</script>

<style scoped>

</style>