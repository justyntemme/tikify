<template>
    <div class="myAccount">
        <b-container>
            <b-row>
                <b-col class="content-col">
                    <div class="col-12 justify-content-center">
                        <img src="@/assets/add-image.svg">
                            <b-form-textarea
                            id="bio"
                            v-model="account.bio"
                            placeholder="Your Bio, tell us about yourself!"
                            rows="10"
                            max-rows="50"
                            ></b-form-textarea>
                    </div>
                </b-col>
            </b-row>

        </b-container>


    </div>
</template>

<script>
import firebase from 'firebase'
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

    }
  },
  components: {

  },
  methods: {

  }
}


</script>

<style scoped>
.content-col {
    margin-top: 20px;
}

</style>
