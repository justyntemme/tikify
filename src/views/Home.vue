<template>
  <div class="home">
    <h1>Dashboard</h1>
    <b-card v-for="product in products">
      <b-card-body>
      <b-card-title>{{product.title}}</b-card-title>
      <b-card-text>{{product.info}}</b-card-text>
      <b-card-footer><b-button href="#" variant="secondary">Details</b-button></b-card-footer>
      </b-card-body>
      </b-card>
  </div>
</template>

<script>

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
  },
  data() {
    return {
      products: {}

    }
  },
}
</script>
