<template>
  <div class="home">
    <Navbar/>
    <b-container class="">
      <h3 class="product-title ">Products ></h3>
    <b-row class="b-row col-12 align-items-center">
    <b-col  v-for="product in products" class="col-4 justify-content-center">
    <router-link :to="{ name: 'product', params: { product: product}}"><b-card class="product-card">
        <b-card-title class="card-title">{{product.type}}</b-card-title>
        <b-card-text class="card-text">{{product.price}}</b-card-text>
        <b-button class="details-button" variant="secondary">Details</b-button>
      </b-card></router-link>
    </b-col>
    </b-row>
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
    <div class="footer">
      <router-link :to="{ name: 'productcreate'}"> <b-button class="details-button create-new-btn" variant="secondary">New Product</b-button></router-link>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/layout/Navbar.vue'
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
    Navbar
  },
  data() {
    return {
      products: {},
      sales: {}

    }
  },
  methods:{
  }
}
</script>
