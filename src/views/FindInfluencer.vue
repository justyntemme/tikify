<template>
    <div class="search">
        <b-container>
            <b-row>
                <b-col class="col-sm-12 heading">
                    <input type="text" v-model="search" placeholder="Search Influencers">


                </b-col>


            </b-row>
            <b-row v-for="influencer in filteredInfluencers">
                <b-col>
                    <b-card subheading="1.2m followers">
                        <b-row no-gutters>
                            <b-col md="6">
                                <b-card-img :src="influencer.profileIMG" class="rounded-0 profile-img"></b-card-img>
                            </b-col>
                            <b-col md="6">
                                <b-card-body :title="influencer.name">
                                <b-card-text>
                                    {{influencer.bio}}
                                </b-card-text>
                                </b-card-body>
                                 <router-link :to="{ name: 'influencer', params: { influencer: influencer}}"><button>View Pofile</button></router-link>
                            </b-col>
                        </b-row>
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
          let influencer = doc.data();
          influencer.id = doc.id;
          v.influencers.push(influencer)
        });
     
      })

    },
    data() {
        return {
            influencers: [],
            search: ""
        }
    },
    computed: {
        filteredInfluencers: function(){

            return this.influencers.filter((influencer) => {
                return influencer.name.match(this.search)
            });
        }
    }
    

}
</script>

<style scoped>
.profile-img {
    height: 150px;
    width: 150px;
}

button {
    background-color: #C40057 !important;
    color: white;
    border: 0px;
    font-size: 1.5em;
    border-radius: 10px;
    margin-top: 5px;
}

</style>
