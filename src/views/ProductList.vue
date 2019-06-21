<template>
<b-container>
    <h3 class="product-title ">Products ></h3>
    <b-row class="b-row col-12 align-items-center">
        <b-col  v-for="product in products" class="col-6 justify-content-center">
            <router-link :to="{ name: 'product', params: { product: product}}"><b-card class="product-card">
            <b-card-title class="card-title">{{product.type}}</b-card-title>
            <b-card-text class="card-text">{{product.price}}</b-card-text>
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
.card-body {
    width: 100%;
    padding: 0px;
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

.details-button {
    font-size: 10px;
    background-color: #f8f9fa;
    border: 0px;
    border-radius: 20px;
    color: black;
    margin-bottom: 5px;

}

.product-card {
  background-image: url("~@/assets/pink-card.png");
  z-index: 20;
  margin: 5px;
  background-position: center;
  background-size: stretch;
  background-repeat: no-repeat;
  border-radius: 20px;
  overflow:hidden;
  text-align: -webkit-center;
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

