<template>
<b-container>
    <h3 class="product-title ">Products ></h3>
    <b-row class="b-row justify-content-center">
        <b-col  v-for="product in products" class="col col-12 product-card-col justify-content-center">
            <div class="card">
                <div class="card-header">
                    {{product.type}}
                </div>
                <div class="card-body">
                    <h5 class="card-title">{{product.price}}</h5>
                    <p class="card-text">{{product.info|truncate}}</p>
                    <router-link :to="{ name: 'product', params: { product: product}}"><a href="#" class="btn btn-primary">Details</a></router-link>
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
  filters: {
    truncate: function(value) {
      if (value.length > 20) {
        value = value.substring(0, 17) + '...';
      }


      return value

    }
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

.card-header {
    display: flex;
}

.btn-primary {
    background-color: #fff;
    color: #FD91C3;
    border: #333;
    border-radius: 10px;
    box-shadow: 8px 6px 19px -9px rgba(0,0,0,0.39);

}

.card {
    border-radius: 10px;
}





  
</style>

