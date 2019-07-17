<template>
  <div class="home">
    <Navbar/>
    <InfluencerDashboard v-if="influencer = 1"/>
    <ArtistDashboard v-if="artist"/>
    <FooterMenu/>
  </div>
</template>

<script>
import Navbar from '@/components/layout/Navbar.vue'
import FooterMenu from '@/components/layout/FooterMenu.vue'
import InfluencerDashboard from '@/components/layout/InfluencerDashboard.vue'
import ArtistDashboard from '@/components/layout/ArtistDashboard.vue'
import Firebase, { firestore } from 'firebase'
export default {
  name: 'home',
  mounted() {
    let v = this;
    let uid = Firebase.auth().currentUser.uid;
    v.$store.dispatch('getProductsAction');
    v.$store.dispatch('getSalesAction');
    v.$store.dispatch('setAccountAction', uid);


    this.$store.watch(
        state=>state.products,
        (data) => {
            this.products = data;
        }
    )
    this.$store.watch(
      state=>state.sales,
        (data) => {
            this.sales = data;
        }
    )
  },
  components: {
    FooterMenu,
    InfluencerDashboard,
    Navbar,
    ArtistDashboard
  },
  
  computed: {
    artist() {
      let v = this;
      console.log(v.$store.state.account.accountType)
      if (v.$store.state.account.accountType == 'Artist' ) {
        return 1 } else {
          return 0
      }
    },
    influencer() {
      let v = this;
      if (v.$store.state.account.accountType == 'Influencer') {
        return 0
      } else {
        return 1
      }
    }

    
  },
  data() {
    return {
      products: {},
      sales: {},

    }
  },
  methods:{
  }
}
</script>

<style>




</style>