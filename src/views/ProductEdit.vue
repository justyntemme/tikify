<template>
  <div class="product container">
    <div id="frame">
      <router-link :to="{ name: 'product', params: { product: product}}"><button id="floating-btn">‹</button></router-link>
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
    </div> 
</template>

<script>

export default {
    components: {

    },
    props: {
        product: {}
    },
     mounted() {
        let v = this;
        v.product = v.$route.params.product
    },
    
}
</script>
