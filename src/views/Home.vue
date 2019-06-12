<template>
  <div class="home">
    <h1>Dashboard</h1>
    {{products}}
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
