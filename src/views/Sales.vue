<template>
<b-container>
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

  data() {
    return {
      sales: {},
    }
  },

}
</script>

<style>

</style>
