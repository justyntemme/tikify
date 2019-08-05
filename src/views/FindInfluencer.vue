<template>
    <div class="search">
        <b-container>
            <b-row>
                <b-col class="col-sm-12 heading">
                    <h1>Find influencers</h1>
                    <hr>


                </b-col>


            </b-row>
            <b-row v-for="influencer in influencers">
                <b-col>
                    <b-card :title="influencer.name" subheading="1.2m followers">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <button>View Profile</button>
                    </b-card>
                </b-col>

            </b-row>

        </b-container>
        <FooterMenu/>
    </div>
</template>

<script>
import FooterMenu from '@/components/layout/FooterMenu.vue'
import firebase from 'firebase'
export default {
    components:{
        FooterMenu
    },
    mounted() {
        let v = this;
        let db = firebase.firestore()
      let userCollection = db.collection('users')
      .where("accountType", "==", 'Influencer' )
      userCollection.onSnapshot((userRef) => {
        userRef.forEach((doc) => {
          const influencer = doc.data();
          v.influencers.push(influencer)
        });
     
      })

    },
    data() {
        return {
            influencers: []
        }
    }
    

}
</script>

<style scoped>

</style>
