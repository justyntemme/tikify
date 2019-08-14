<template>
    <div class="wallet">

        <div class="artist" >
            <b-container>
                <b-row>
                    <b-col class="col-4 ">
                        <h3> Tickets: {{account.tickets}}</h3>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col>
                        <h3>Past orders</h3>
                    </b-col>
                </b-row>
                <b-row v-for="transaction in transactions">
                    <b-col>
                        <b-card>
                            <b-card-header>{{transaction.purchaseType}} </b-card-header>

                            <b-card-body>{{transaction.info}}</b-card-body>

                            <button @click="viewConversation(transaction.id)">View Conversation</button>
                            

                        </b-card>

                    </b-col>

                </b-row>
                <b-row>
                    <b-col>
       
                    </b-col>
                </b-row>
            </b-container>
            <a href="/wallet/add"><button> Buy Tickets</button></a>
        </div>

        <Footermenu/>
    </div>
</template>

<script>
import Footermenu from '@/components/layout/FooterMenu.vue'
import firebase, { firestore } from 'firebase'
import { Promise } from 'q';
export default {
    components: {
        Footermenu
    },
    data(){
        return{
            account: {},
            transactions: [],
            users: {},

        }
    },
    computed:{

    },
    methods: {
        getUsername(uid) {
            let db = firebase.firestore()
            let accountRef = db.collection('users').doc(uid)
            accountRef.get().then( (accountSnapshot) =>{
                let account  = accountSnapshot.data()
                return account.name
                
            })

        },
        viewConversation(conversationID){
            let v = this
            v.$router.push({ name: 'conversation', params: {conversationID: conversationID }})
        }

    },
    mounted(){
        let v = this;
        let db = firebase.firestore();
        let uid = firebase.auth().currentUser.uid;
        let accountRef =  db.collection('users').doc(uid);
        console.log(v.getUsername(uid))
    
        accountRef.get().then( (accountSnapshot) => {

            let account = accountSnapshot.data()
            v.account = account
            console.log(account.accountType)

      });

        let transactionCollection = db.collection('users').doc(uid).collection('transactions')
        transactionCollection.onSnapshot((transaction) => {
            transaction.forEach((doc) => {
                let data = doc.data()
                data.id = doc.id
                v.transactions.push(data)
            })
        })
        
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
