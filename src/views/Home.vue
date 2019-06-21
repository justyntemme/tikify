<template>
  <div class="home">
    <Navbar/>
    <FooterMenu/>

  </div>
</template>

<script>
import Navbar from '@/components/layout/Navbar.vue'
import FooterMenu from '@/components/layout/FooterMenu.vue'
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

<style>

.home {
  height: 10000px;
}
</style>