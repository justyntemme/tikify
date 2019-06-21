<template>
  <b-container class="product">
    <div id="frame">
      <button @click="goBack()" id="floating-btn">‹</button>
       <router-link :to="{ name: 'productedit', params: { product: product}}"><button class="editBtn">✎</button></router-link>
      <div id="shape"></div>
        <p>{{product.info}}</p>
        <span id="sub-text">{{product.duration}}</span>
      </div>
      <br>
      <div class="col-12">
        <span class="row"><h4>Advertisement Type</h4> <span class="ml-auto"><p>{{product.type}}</p></span></span>
        <hr class="product-line">
        <span class="row"><h4>Ad Price</h4><span class="ml-auto"><p>{{product.price}}</p></span></span>
        <hr class="product-line">
      </div>
      <FooterMenu/>
  </b-container>
</template>

<script>
import FooterMenu from '@/components/layout/FooterMenu.vue'
export default {
  name: 'product',
  props: {
    product: {}
  },
  mounted() {
    let v = this;
    v.product = v.$route.params.product
  },
  components: {
    FooterMenu
    
  },
  data() {
    return {

    }
  },
  methods:{
    goBack() {
      let v = this;
      v.$router.push({path: '/'})
    },

  }
}
</script>
