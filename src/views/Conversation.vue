<template>
    <div class="conversation">
        <b-container>
            <b-row>
                <b-col>
                    {{transaction.info}}

                </b-col>

            </b-row>
            <div v-for="message in messages">
                <b-row v-if="isMe(message.author)"  v-bind:class="{'isMe': isMe(message.author), 'notme': !isMe(message.author) }">
                    <b-col md="6" offset="6">
                        <b-card class="speech-bubble-me">
                            <b-card-body>
                                {{message.message}}
                            </b-card-body>
      
                        </b-card>
                    </b-col>
                </b-row>

                <b-row v-if="isNotMe(message.author)"  v-bind:class="{'isMe': isMe(message.author), 'notme': !isMe(message.author) }">
                    <b-col class="col-6">
                        <b-card class="speech-bubble-not-me">
                            <b-card-body>
                                {{message.message}}
                            </b-card-body>
                    
                        </b-card>
                    </b-col>
                </b-row>

            </div>
            


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
            transaction: {}
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
.isme {

}

.speech-bubble-me {
	position: relative;
	background: gray;
	border-radius: 1em;
    color: white;
}

.speech-bubble-not-me {
	position: relative;
	background: #C40057;
	border-radius: 1em;
    color: white;
}

</style>
