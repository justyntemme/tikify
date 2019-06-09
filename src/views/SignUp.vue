<template>
    <div class="sign-up">
        <p>Create a new account</p>
        <b-alert
            dismissible
            :show="dismissCountDown"
            :variant="msgVariant"
            @dismissed="dismissCountDown=0"
            @dismiss-count-down="countDownChanged">{{errorMsg}}</b-alert>
        
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
                dismissSecs: 30,
                dismissCountDown: 0,
                errorMsg: '',
                msgVariant: ''
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
                        v.msgVariant = "success";
                        v.errorMsg = "Your account has been created!";
                        v.showAlert();
                    },
                    function (err) {
                         v.errorMsg = err.message;
                         v.msgVariant = "danger";
                         v.showAlert();
                        
                    }
                )
            }
        }
    }
</script>

<style scoped>

</style>