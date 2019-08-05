<template>
    <div class="myAccount">
        <b-container>
            <b-row>
                <b-col class="content-col">
                    <div class="col-12">
                        <b-row>
                            
                            <b-col class="justify-content-center">
                                
                                <img src="@/assets/add-image.svg">

                            </b-col>
                        </b-row>
                        <b-row>

                            <b-col>
                                Profile Image
                                <input type="file" @change="onFileChanged">
                                <button @click="onUpload">Upload!</button>

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
        
        console.log(v.$store.getters.account)


  },
data() {
  return {
    selectedFile: null
  }
},

  components: {
      FooterMenu

  },
  methods: {
        onFileChanged (event) {
            this.selectedFile = event.target.files[0]
        },
        onUpload() {
            let file = this.selectedFile;
            // upload file, get it from this.selectedFile
            // Get current username
        var user = firebase.auth().currentUser.uid;

        // Create a Storage Ref w/ username
        var storageRef = firebase.storage().ref(user + '/profilePicture/' + file.name);

        // Upload file
        var task = storageRef.put(file).then(function(){
            alert("image uploaded successfully")
        })
        .catch(function(error){
            console.log(errorS)
        })
        },
      resetPassword(){
          let v = this;
          var auth = firebase.auth();
          var emailAddress = v.account.email

          auth.sendPasswordResetEmail(emailAddress).then(function(){
              alert("Reset Email Sent")
          }).catch(function(error) {
              console.log(error)
          })
      }

  },
  update(){
      //TODO implament account update
  }
}


</script>

<style scoped>
.content-col {
    margin-top: 20px;
}

h3 {
    text-align: left;
    margin: 5px;
}

</style>
