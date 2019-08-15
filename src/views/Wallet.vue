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
                            <b-card-header>Transaction for {{names[transaction.artistUID]}} and {{names[transaction.influencerUID]}} </b-card-header>
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

export default {
    components: {
        Footermenu
    },
    data(){
        return{
            account: {},
            transactions: [],
            users: {},
            accountType: this.$store.getters.account.accountType,
            influencerName: '',
            artistName: '',
            names: {},

        }
    },
    computed:{
    

    },
    methods: {
        getUsername(uid) {
            let v = this;
            let db = firebase.firestore()
            let accountRef = db.collection('users').doc(uid)
            let account = accountRef.get().then( (accountSnapshot) =>{
                let account  = accountSnapshot.data()
                v.$set(v.names, uid, account.name)
                v.names[uid] = account.name
       
                
            })
            return v.names[uid]
            

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
    
        accountRef.get().then( (accountSnapshot) => {

            let account = accountSnapshot.data()
            v.account = account
        

      });


        let transactionCollection = db.collection('users').doc(uid).collection('transactions')
        transactionCollection.onSnapshot((transaction) => {
            transaction.forEach((doc) => {
                let data = doc.data()
                data.id = doc.id
                v.transactions.push(data)
                v.getUsername(data.artistUID)
                v.getUsername(data.influencerUID)

                console.log(data.artistUID)
                console.log(v.names[data.artistUID])
                console.log(data.influencerUID)
                console.log(v.names[data.influencerUID])


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
