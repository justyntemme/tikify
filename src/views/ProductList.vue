<template>
<b-container>
    <h3 class="product-title ">Products ></h3>
    <b-row class="b-row col-12 align-items-center">
        <b-col  v-for="product in products" class="col-6 justify-content-center">
            <router-link :to="{ name: 'product', params: { product: product}}"><b-card class="product-card">
            <b-card-title class="card-title">{{product.type}}</b-card-title>
            <b-card-text class="card-text">{{product.price}}</b-card-text>
            <b-button class="details-button" variant="secondary">Details</b-button>
            </b-card></router-link>
        </b-col>
    </b-row>
    <FooterMenu/>
</b-container>
</template>

<script>
import FooterMenu from '@/components/layout/FooterMenu.vue';
export default {
    components: {
        FooterMenu

    },
    mounted() {
    let v = this;
    v.$store.dispatch('getProductsAction');
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
  data() {
      return {
          products: {}
      }
  }
    
}
</script>

