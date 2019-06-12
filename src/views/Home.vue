<template>
  <div class="home">
    <Navbar/>
    <b-container>
    <b-row>
    <b-col  v-for="product in products" cols="12">
    <b-card class="product-card">
      <b-card-body>
      <b-card-title>{{product.type}}</b-card-title>
      <b-card-text>{{product.info}}</b-card-text>
      <b-card-text>{{product.price}}</b-card-text>
      <b-button href="#" variant="secondary">Details</b-button>
      </b-card-body>
      </b-card>
    </b-col>
    </b-row>
    </b-container>
  </div>
</template>

<script>
import Navbar from '@/components/layout/Navbar.vue'
export default {
  name: 'home',
  mounted() {
    let v = this;
    v.$store.dispatch('getProductsAction');
    this.$store.watch(
        state=>state.products,
        (data) => {
            this.products = data;
        }
    )
  },
  components: {
    Navbar
  },
  data() {
    return {
      products: {}

    }
  },
}
</script>
