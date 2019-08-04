<template>
<div class="stripe-payments">
<div id="firebaseui-auth-container"></div>
        <div id="loader">&hellip;</div>
        <div v-if="currentUser">
          <div v-if="stripeCustomerInitialized">
            <div v-if="!sources[0]">
              <h4>New</h4>
              <div>
                <label>
                  Number <input v-model="newCreditCard.number">
                </label>
              </div>
              <div>
                <label>
                  CCV <input v-model="newCreditCard.cvc">
                </label>
              </div>
              <div>
                <label>
                  Exp
                  <input v-model="newCreditCard.exp_month" size="2"> /
                  <input v-model="newCreditCard.exp_year" size="4">
                </label>
              </div>
              <div>
                <label>
                  Zip <input v-model="newCreditCard.address_zip">
                </label>
              </div>
              <div>
                <button v-on:click="submitNewCreditCard">Add</button>
                {{ newCreditCard.error }}
              </div>
            </div>
            <!--
            <h3>Charges</h3>
            <ul>
              <li v-for="(charge, id) in charges">
                {{ charge.amount }}
                <span v-if="charge.error">
                  {{ charge.error }}
                </span>
                <span v-else-if="charge.outcome">
                  {{ charge.outcome.seller_message }}
                  {{ charge.source.brand }} &hellip;{{ charge.source.last4 }}
                  (exp. {{ charge.source.exp_month }}/{{ charge.source.exp_year }})
                </span>
                <span v-else>&hellip;</span>
              </li>
            </ul>
            -->
            <h4>Checkout</h4>
            <div>
              <label>
                Card
                <select v-model="newCharge.source">
                  <option v-for="(source, id) in sources" v-bind:value="source.id">
                    {{ source.brand }} &hellip;{{ source.last4 }}
                    (exp. {{ source.exp_month }}/{{ source.exp_year }})
                  </option>
                </select>
              </label>
            </div>

            <div>
              <button v-on:click="submitNewCharge">Charge</button>
              {{ newCharge.error }}
            </div>
          </div>
          <div v-else>&hellip;</div>
        </div>
      </div>
</template>



<script>
import firebase from 'firebase'
      export default {
        props: {
          selected: Number
        },
        data() {
            return {
                sources: {},
                currentUser: firebase.auth().currentUser,
                stripeCustomerInitialized: true,
                newCreditCard: {
                    number: '4242424242424242',
                    cvc: '111',
                    exp_month: 1,
                    exp_year: 2020,
                    address_zip: '00000'
                },
                charges: {},
                newCharge: {
                    source: null,
                    amount: Number(this.selected)
                }
            }
        },
        mounted(){
            let v = this;
            Stripe.setPublishableKey('pk_test_NSDcCD0HN1kDUInBR98gbeg900S77Hz86w')
            
                   
            let db = firebase.firestore()
            let newSources = []
            db.collection("stripe_customers").doc(v.currentUser.uid).collection("sources").onSnapshot(snapshot => {
                snapshot.forEach(doc => {
                    let data = doc.data()
                    newSources.push(data);
                })
                return v.sources = newSources;
            })
        

        },
        computed: {

        },

        methods: {
          updateCards: function() {

          },
          submitNewCreditCard: function() {
            Stripe.card.createToken({
              number: this.newCreditCard.number,
              cvc: this.newCreditCard.cvc,
              exp_month: this.newCreditCard.exp_month,
              exp_year: this.newCreditCard.exp_year,
              address_zip: this.newCreditCard.address_zip
            }, (status, response) => {
              if (response.error) {
                this.newCreditCard.error = response.error.message;
              } else {
                firebase.firestore().collection('stripe_customers').doc(this.currentUser.uid).collection('tokens').add({token: response.id}).then(() => {
                  this.newCreditCard = {
                    number: '',
                    cvc: '',
                    exp_month: 1,
                    exp_year: 2017,
                    address_zip: ''
                  };
                });
              }
            });
          },
          submitNewCharge: function() {
            let v = this;
            let amount = v.selected * 100
            firebase.firestore().collection('stripe_customers').doc(this.currentUser.uid).collection('charges').add({
              source: v.newCharge.source,
              amount: amount
            });
            console.log(v.selected)
          },
          signOut: function() {
            firebase.austh().signOut()
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
