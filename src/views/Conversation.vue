<template>
    <div class="conversation">
        <b-container>
            <b-row v-for="message in messages">
                {{message.message}}
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
            messages: []
        }
    },
    mounted() {
                let db = firebase.firestore()
                let v = this;
                let messagesArray = []
                let conversationRef = db.collection('conversations').doc(v.conversationID)
                
                let messagesCollection = conversationRef.collection('messages')
                      messagesCollection.onSnapshot((messages) => {
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
