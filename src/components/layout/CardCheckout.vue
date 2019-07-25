<template>
    <b-card header="Pay with credit Card">
                    <card class='stripe-card'
                    :class='{ complete }'
                    stripe='pk_test_NSDcCD0HN1kDUInBR98gbeg900S77Hz86w'
                    @change='complete = $event.complete'
                    />
                    <button class='pay-with-stripe' @click='pay' :disabled='!complete'>Checkout</button>
                </b-card>
</template>

<script>
import axios from 'axios'
import { Card, createToken } from 'vue-stripe-elements-plus'
export default {
        data () {
        return {
        data: {},
        complete: false,

        }
    },
    components:{
        Card,
        createToken,
        axios
    },
    methods:{
        pay () {
            let v = this;
            // createToken returns a Promise which resolves in a result object with
            // either a token or an error key.
            // See https://stripe.com/docs/api#tokens for the token object.
            // See https://stripe.com/docs/api#errors for the error object.
            // More general https://stripe.com/docs/stripe.js#stripe-create-token.

            createToken().then(function(result) {
                // Handle result.error or result.token
                v.data.token = result;
                alert(v.data.token)
            });


            if (v.data.token) {
            let charge = {
                amount: 20,
                currency: 'usd'
            }
            v.data = {
                token: self.token,
                charge: charge,
            }
            v.axios.post('https://us-central1-tikify-e74ea.cloudfunctions.net/charge' , v.data).then(function (response) {
                self.charge = response.data
            })
            .catch(function (error) {
                alert(error)
            })
            } 
        }
    }

}
</script>

<style scoped>

button {
    background-color: #C40057 !important;
    color: white;
    border: 0px;
    font-size: 2em;
    border-radius: 10px;
    margin-top: 5px;
}

</style>
