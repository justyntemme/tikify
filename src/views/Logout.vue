<template>
    
</template>

<script>
import firebase from 'firebase'
export default {

    mounted() {
        let v = this;

        firebase.auth().signOut()
            .then(function() {
                // Sign-out successful.
                v.$store.dispatch('logoutAction', '')
                console.log("logged Out")
            })
            .catch(function(error) {
                // An error happened
            });

                    


  },

}




</script>

<style>

</style>
