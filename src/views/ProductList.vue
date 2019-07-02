<template>
<b-container>
    <h3 class="product-title ">Products ></h3>
    <b-row class="b-row col-12 align-items-center">
        <b-col  v-for="product in products" class="col-12 product-card-col justify-content-center">
            <div class="card">
                <div class="card-header">
                    {{product.type}}
                </div>
                <div class="card-body">
                    <h5 class="card-title">{{product.price}}</h5>
                    <p class="card-text">{{product.info}}</p>
                    <router-link :to="{ name: 'product', params: { product: product}}"><a href="#" class="btn btn-primary">Edit</a></router-link>
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

<style scoped>

  
</style>

