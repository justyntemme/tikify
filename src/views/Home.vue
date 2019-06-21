<template>
  <div class="home">
    <Navbar/>
    <b-container class="">

    <h3 class="sales-title">Sales ></h3>
        <b-row class="b-row col-12">
    <b-col  v-for="sale in sales" class="col-4">
    <router-link :to="{ name: 'sale', params: { ID: sale.ID}}"><b-card class="product-card">
        <b-card-title class="card-title">{{sale.type}}</b-card-title>
        <b-card-text class="card-text">{{sale.email}}</b-card-text>
        <b-button class="details-button" variant="secondary">Details</b-button>
      </b-card></router-link>
    </b-col>
    </b-row>
    </b-container>
    <FooterMenu/>
    

  </div>
</template>

<script>
import Navbar from '@/components/layout/Navbar.vue'
import FooterMenu from '@/components/layout/FooterMenu.vue'
import Router from 'vue-router'
export default {
  name: 'home',
  mounted() {
    let v = this;
    v.$store.dispatch('getProductsAction');
    v.$store.dispatch('getSalesAction');
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
    Navbar,
    FooterMenu
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
