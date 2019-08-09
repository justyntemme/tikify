<template>
    <div class="wallet">

        <div class="artist" v-if="account.accountType == 'artist'" >
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
import firebase from 'firebase'
export default {
    components: {
        Footermenu
    },
    data(){
        return{
            account: {}

        }
    },
    computed:{

    },
    mounted(){
        let v = this;
        let db = firebase.firestore();
        let uid = firebase.auth().currentUser.uid;
        let accountRef =  db.collection('users').doc(uid);
    
        accountRef.get().then( (accountSnapshot) => {

            let account = accountSnapshot.data()
            v.account = account
            console.log(account.accountType)

      });
        
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
