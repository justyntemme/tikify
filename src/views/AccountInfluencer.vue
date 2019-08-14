<template>
    <div class="myAccount">
        <b-container>
            <b-row>
                <b-col class="content-col">
                    <div class="col-12">
                        <b-row>
                            <b-col class="justify-content-center">
                                
                                <img class="profile-photo" :src="account.profileIMG">

                            </b-col>
                        </b-row>
                        <b-row>

                            <b-col>
                                <button @click="trigger" class="trigger">Change Photo</button>
                                <input ref="fileInput" type="file" @change="onFileChanged">
                                

                            </b-col>

                        </b-row>
                        <b-row>
                            <b-col class="col-4 justify-content-left">
                                <h3 class="">Bio</h3>
                            </b-col>
                        </b-row>
                        <b-row>
                            <b-col>
                                <b-form-textarea
                                id="bio"
                                v-model="account.bio"
                                placeholder="Your Bio, tell us about yourself!"
                                rows="10"
                                max-rows="50"
                                ></b-form-textarea>
                            </b-col>
                        </b-row>
                        <b-row>
                            <b-col class="col-12">
                                <h3>Ticket Prices</h3>
                            </b-col>
                        </b-row>
                        <br>
                         <b-row>
                            <b-col>
                                <label class="">Post: </label>
                            </b-col>
                            <b-col>
                                <input v-model="account.postPrice" type="number" min="0" max="100"/> 
                            </b-col>
                         </b-row>
                         <b-row>

                            <b-col>
                                <label class="">React: </label>
                            </b-col>
                            <b-col>
                                <input v-model="account.reactPrice" type="number" min="0" max="100"/> 
                            </b-col>
                         </b-row>
                         <b-row>
                            <b-col>
                                <label class="">Duet: </label>
                            </b-col>
                            <b-col>
                                <input v-model="account.duetPrice" type="number" min="0" max="100"/> 
                            </b-col>
                        </b-row>
                        <b-row>
                            <b-col class="col-4">
                                <h3 class="">Email</h3>
                            </b-col>
                        </b-row>
                        <b-row>
                            <b-col>
                                <p>{{account.email}}</p>
                            </b-col>
                        </b-row>
                        <b-row>
                            <b-col class="col-4">
                                <h3 class="">Name</h3>
                            </b-col>
                        </b-row>
                        <b-row>
                            <b-col>
                                <p>{{account.name}}</p>
                            </b-col>
                        </b-row>    
                        <b-row>
                            <b-col>
                                <a @click="resetPassword" href="#">Reset Password</a>
                            </b-col>
                        </b-row>     
                    
                    </div>
                </b-col>
            </b-row>

        </b-container>
        <FooterMenu/>


    </div>
</template>

<script>
import firebase from 'firebase'
import FooterMenu from '@/components/layout/FooterMenu.vue'
export default {
    computed:{
        account:{
            get: function(){
                let v = this;
                return v.$store.getters.account;                
            }
        }
    },
    mounted() {
        let v = this;
        v.$store.dispatch('setAccountAction')
    },
data() {
  return {
    selectedFile: null,
    profileIMG: null,
  }
},

  components: {
      FooterMenu

  },
  methods: {
        update(){
            let v = this;
            var user = firebase.auth().currentUser.uid;
            let db = firebase.firestore()
            let userRef = db.collection('users').doc(user)
            userRef.update({'bio': v.account.bio, 'postPrice': v.account.postPrice, 'reactPrice': v.account.reactPrice, 'duetPrice': v.account.duetPrice})
            
        },
        trigger () {
            this.$refs.fileInput.click()
        },
        onFileChanged (event) {
            this.selectedFile = event.target.files[0]
            this.onUpload()
        },
        onUpload() {
            let v = this;
            let file = this.selectedFile;
            let db = firebase.firestore()
            // upload file, get it from this.selectedFile
            // Get current username
            var user = firebase.auth().currentUser.uid;

            // Create a Storage Ref w/ username
            var storageRef = firebase.storage().ref(user + '/profilePicture/' + file.name);

            // Upload file
            storageRef.put(file).then(function(){
                storageRef.getDownloadURL().then(function(url){
                    let userRef = db.collection('users').doc(user)
                    userRef.update({'profileIMG': url}).then(function(){
                            v.$store.dispatch('setAccountAction')
                        })
                })

            })
            .catch(function(error){
                alert(error)
            })
            },
        resetPassword(){
            let v = this;
            var auth = firebase.auth();
            var emailAddress = v.account.email

            auth.sendPasswordResetEmail(emailAddress).then(function(){
                alert("Reset Email Sent")
            }).catch(function(error) {
                alert(error)
            })
        }
  },

}


</script>

<style scoped>
.profile-photo {
    height: 150px;
    width: 150px;
    border-radius: 40px;
}
.content-col {
    margin-top: 20px;
}

h3 {
    text-align: left;
    margin: 5px;
}

button {
    background-color: #C40057 !important;
    color: white;
    border: 0px;
    font-size: 1.5em;
    border-radius: 10px;
    margin-top: 5px;
}

input[type=file] {
	width: 0.1px;
	height: 0.1px;
	opacity: 0;
	overflow: hidden;
	position: absolute;
	z-index: -1;
}

</style>
