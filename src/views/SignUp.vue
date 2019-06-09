<template>
    <div class="sign-up">
        <p>Create a new account</p>
        <input type="text" v-model="email" placeholder="Email"><br>
        <input type="text" placeholder="Username"><br>
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
            }
        },
        methods: {
            signUp: function() {
                
                firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
                    function(user){
                        alert('Your account has been created ' + user.email)
                    },
                    function (err) {
                        alert('oops ' + err.message)
                    }
                )
            }
        }
    }
</script>

<style scoped>

</style>