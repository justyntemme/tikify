<template>
    <div class="conversation">
        <b-container>
            <b-row>
                <b-col>
                    {{transaction.info}}

                </b-col>

            </b-row>
            <b-row v-for="message in messages">
                <b-col>
                    {{message.message}}
                </b-col>
            </b-row>

            <b-row>
                <b-form-input
                    id="input-lazy"
                    v-model="message"
                    aria-describedby="input-lazy-help"
                    lazy-formatter
                ></b-form-input>
                <button @click="send">Send</button>

            </b-row>


        </b-container>


    </div>
    
</template>

<script>
import firebase from 'firebase'
export default {
    props: ['conversationID'],
    data() {
        return {
            messages: [],
            message: '',
            influencerUID: '',
            transaction: {}
        }
    },
    methods:{
        send() {
                let db = firebase.firestore()
                let v = this;
                v.messages = []
                let conversationRef = db.collection('conversations').doc(v.conversationID)
                let messagesCollection = conversationRef.collection('messages')
                messagesCollection.add({
                    author: firebase.auth().currentUser.uid,
                    message: v.message,
                    timestamp: firebase.firestore.Timestamp.now()
                })

        }
    },

    mounted() {
                let db = firebase.firestore()
                let v = this;
                let artistUID = firebase.auth().currentUser.uid

                let transactionRef = db.collection('users').doc(artistUID).collection('transactions').doc(v.conversationID)
                transactionRef.get().then((transaction)=> {
                    let data = transaction.data()
                    console.log(data)
                    v.transaction = data
                    console.log (v.transaction)

                })
                
                let conversationRef = db.collection('conversations').doc(v.conversationID)
                
                let messagesCollection = conversationRef.collection('messages').orderBy("timestamp", "asc")
                      messagesCollection.onSnapshot((messages) => {
                        while(v.messages.length > 0) {v.messages.pop();}
                         messages.forEach((doc) => {
                             let data = doc.data()
                             data.id = doc.id
                             v.messages.push(data)
                             console.log(data)
                         })
  
                    })
                
                }
            


}
</script>

<style scoped>

</style>
