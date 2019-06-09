<template>
    <div class="sign-up">
        <p>Create a new account</p>
        <b-alert
            :show="dismissCountDown"
            dismissible
            variant="warning"
            @dismissed="dismissCountDown=0"
            @dismiss-count-down="countDownChanged"> {{errorMsg}}</b-alert>
        
        <input type="text" v-model="email" placeholder="Email"><br>
        <input type="password" v-model="password" placeholder="Password"><br>
        <button @click="signUp">Sign Up</button>
    </div>
</template>

<script>

import firebase from 'firebase'

    export default {
        name: 'signUp',
        data() {
            return {
                email: '',
                password: '',
                dismissSecs: 5,
                dismissCountDown: 0,
                errorMsg: ''
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
                firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
                    function(user){
                        alert('Your account has been created ' + user.email)
                    },
                    function (err) {
                         v.errorMsg = err.message;
                         v.showAlert();
                        
                    }
                )
            }
        }
    }
</script>

<style scoped>

</style>