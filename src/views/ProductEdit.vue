<template>
  <div class="product container">
    <div id="frame">
      <router-link :to="{ name: 'product', params: { product: product}}"><button id="floating-btn">‹</button></router-link>
      <button class="editBtn">&#128190;</button>
      <div id="shape"></div>
            <b-form-textarea
            id="textarea"
            v-model="product.info"
            placeholder="Enter something..."
            rows="4"
            max-rows="10"
            ></b-form-textarea>
        <span id="sub-text">{{product.duration}}</span>
      </div>
      <br>
      <div class="col-12">
        <span class="row"><h4>Advertisement Type</h4> <span class="ml-auto"> <b-form-input v-model="product.type"></b-form-input></span></span>
        <hr class="product-line">
        <span class="row"><h4>Ad Price</h4><span class="ml-auto"> <b-form-input v-model="product.price"></b-form-input></span></span>
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
