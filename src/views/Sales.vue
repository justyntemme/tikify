<template>
<b-container>
    <h3 class="sales-title ">Sales ></h3>
    <b-row class="b-row col-12 align-items-center">
        <b-col  v-for="sale in sales" class="col-12 product-card-col justify-content-center">
            <div class="card">
                <div class="card-header">
                    {{sale.type}}
                </div>
                <div class="card-body">
                    <h5 class="card-title">{{sale.email}}</h5>
                    <p class="card-text">{{sale.length}}</p>
                    <router-link :to="{ name: 'sale', params: { sale: sale}}"><a href="#" class="btn btn-primary">Details</a></router-link>
                </div>
            </div>
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
