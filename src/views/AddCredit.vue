<template>
  <div id='app'>
    <b-container>
      <b-row>
        <b-col class="col-12">
          <b-card header="Choose an Amount of tickets to add to your account">
            <b-row>
              <b-col class="col-md-4">
                one
              </b-col>
              <b-col class="col-md-4">
                two
              </b-col>
              <b-col class="col-md-4">
                three
              </b-col>
            </b-row>
          </b-card>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-card header="Please give us your payment details:">
            <card class='stripe-card'
              :class='{ complete }'
              stripe='pk_test_NSDcCD0HN1kDUInBR98gbeg900S77Hz86w'
              @change='complete = $event.complete'
            />
             <button class='pay-with-stripe btn-primary' @click='pay' :disabled='!complete'>Pay with credit card</button>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
 
<script>

import { Card, createToken } from 'vue-stripe-elements-plus'
 
export default {
  data () {
    return {
      data: {},
      complete: false,

    }
  },
 
  components: { Card },
 
  methods: {
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
        console.log(v.data.token)
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
       axios.post('https://us-central1-tikify-e74ea.cloudfunctions.net/charge' , v.data).then(function (response) {
         self.charge = response.data
       })
       .catch(function (error) {
         console.log(error)
       })
     } 
    }
  }
}
</script> 
 
<style>
.stripe-card {
  width: 300px;
  border: 1px solid grey;
}
.stripe-card.complete {
  border-color: green;
}
</style> 