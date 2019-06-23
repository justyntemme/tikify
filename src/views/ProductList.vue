<template>
<b-container>
    <h3 class="product-title ">Products ></h3>
    <b-row class="b-row col-12 align-items-center">
        <b-col  v-for="product in products" class="col-6 product-card-col justify-content-center">
            <router-link :to="{ name: 'product', params: { product: product}}"><div class="product-card">
            <h3 class="card-title">{{product.type}}</h3>
            <p class="card-text">{{product.price}}</p>
            </div></router-link>
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
.card-title {
    font-size: 12px;
    width: 100%;
    margin-top: 5px;
    color: black;
}

.sales-title {
    font-size: 12px;
    color: #f44336;
    text-align: left;

}
.product-title {
    font-size: 12px;
    color: #f44336;
    text-align: left;
}

.card-text {
    font-size: 10px;
}

.product-card {
    margin: 10px;
    
}

.product-card-col {
  background-image: url("~@/assets/card.svg");
  min-height: 6em;
  border: 0px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 20px;
  text-align: -webkit-center;
  margin-top: 10px;

}

.product-header {
    border: 1px solid;
    border-color:#f44336;
    background-color: #dddddd;
    border-radius: 30px;
    min-height: 200px;

}

.product-line {
    border-color: #f44336;
}

* {
    font-family: sans-serif;
  }
  
</style>

