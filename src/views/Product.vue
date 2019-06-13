<template>
  <div class="product container">
    <Navbar/>
    <div class="col-6 col-ml-auto"></div>
    <div class="col-6 product-header">
    </div>  
    <br>
    <div class="col-5">
    <h4>Advertisement Type</h4>

    <h4>Ad Platform</h4>

    <h4>Duration</h4>
    </div>
    <div class="col-5">
      <p>Blog</p>

      <p>TikTok</p>

      <p>1 Week</p>

    </div>
  </div>
</template>

<script>
import Navbar from '../components/layout/Navbar.vue'
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
    Navbar
    
  },
  data() {
    return {

    }
  },
  methods:{

  }
}
</script>
