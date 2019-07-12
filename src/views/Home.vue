<template>
  <div class="home">
    <Navbar/>
    <News/>
    <FooterMenu/>
  </div>
</template>

<script>
import Navbar from '@/components/layout/Navbar.vue'
import FooterMenu from '@/components/layout/FooterMenu.vue'
import News from '@/components/layout/News.vue'
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
    FooterMenu,
    News,
    Navbar
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