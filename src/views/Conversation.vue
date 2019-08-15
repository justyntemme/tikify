<template>
    <div class="conversation">
        <b-container>
            <b-row>
                <b-col>
                    <b-card v-if="accountType == 'Influencer'" :header="artistName" :sub-title="transaction.amount">
                        <b-card-body>
                            {{transaction.info}}
                        </b-card-body>
                    </b-card>
                    <b-card v-else :header="influencerName" :sub-title="transaction.amount">
                        <b-card-body>
                            {{transaction.info}}
                        </b-card-body>
                    </b-card>
                    

                </b-col>

            </b-row>
            <div v-for="message in messages">

                <b-row v-if="isMe(message.author)"  v-bind:class="{'isMe': isMe(message.author), 'notme': !isMe(message.author) }">
                    <b-col class="col-6" offset="8">
                        <b-card bg-variant="dark" class="speech-bubble-me text-card">
                            <b-card-text>
                                {{message.message}}
                            </b-card-text>
      
                        </b-card>
                    </b-col>
                </b-row>

                <b-row v-if="isNotMe(message.author)"  v-bind:class="{'isMe': isMe(message.author), 'notme': !isMe(message.author) }">
                    <b-col class="col-6">
                        <b-card class="speech-bubble-not-me text-card">
                            <b-card-text>
                                {{message.message}}
                            </b-card-text>
                    
                        </b-card>
                    </b-col>
                </b-row>

            </div>
            


            <b-row>
                <b-form-input
                    ref="sendMessage"
                    id="input-lazy"
                    v-model="message"
                    aria-describedby="input-lazy-help"
                    lazy-formatter
                ></b-form-input>
                <button @click="send">Send</button>

            </b-row>


        </b-container>

        <FooterMenu/>


    </div>
    
</template>

<script>
import firebase from 'firebase'
import FooterMenu from '@/components/layout/FooterMenu.vue'
export default {
    props: ['conversationID'],
    data() {
        return {
            messages: [],
            message: '',

            influencerUID: '',
            artistUID: '',
            transaction: {},

            artistName: '',
            influencerName: '',
            accountType: this.$store.getters.account.accountType
        }
    },
    components:{
        FooterMenu
    },
    methods:{
        isMe(author) {
            if (author == firebase.auth().currentUser.uid)
            {
                return true
            } else {
                return false
            }
        },
        isNotMe(author) {
            if (author == firebase.auth().currentUser.uid) {
                return false
            } else {
                return true
            }
                
        },
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
                v.message = ''

        }
    },

    mounted() {

        
                let db = firebase.firestore()
                let v = this;
                let UID = firebase.auth().currentUser.uid
                
                v.$store.dispatch('setAccountAction')
                let transactionRef = db.collection('users').doc(UID).collection('transactions').doc(v.conversationID)
                transactionRef.get().then((transaction)=> {
                    let data = transaction.data()
                    console.log(data)
                    v.transaction = data

                })
                .then(function(){
                    let artistRef = db.collection('users').doc(v.transaction.artistUID)
                    artistRef.get().then((artist) => {
                        let data = artist.data()
                        v.artistName = data.name
                    })
                    let influencerRef = db.collection('users').doc(v.transaction.influencerUID)
                    influencerRef.get().then((influencer) => {
                        let data = influencer.data()
                        v.influencerName = data.name
                        
                    })

                })

                
                
                let conversationRef = db.collection('conversations').doc(v.conversationID)
                
                let messagesCollection = conversationRef.collection('messages').orderBy("timestamp", "asc")
                      messagesCollection.onSnapshot((messages) => {
                        while(v.messages.length > 0) {v.messages.pop();}
                         messages.forEach((doc) => {
                             let data = doc.data()
                             data.id = doc.id
                             v.messages.push(data)
                          
                         })
                         
  
                    })
                
                }
            


}
</script>

<style scoped>

input {

    margin: 2em;
}

.container {
    padding-bottom: 1em;
    margin-bottom: 1em;
}

.text-card {
     border-radius: 30px;
     margin: 5px;
     
}

.card-body {
    padding: 5px;
}

.card-header {
    align-self: start;
    border: 0px;
    background: white;
}

.card-subtitle  {
    text-align: start;
    padding: 5px;
}

.speech-bubble-me {
    color: white;
}

.speech-bubble-not-me {
	background: #C40057;
    color: white;
}

</style>
