<template>
  <b-container class="product">
    <b-row id="frame">
      <b-col class="col-3" offset="9" align-h="end">
       <router-link :to="{ name: 'productedit', params: { product: product}}"><i class="edit-btn fa fa-pencil-alt"/></router-link>
       </b-col>
        <p>{{product.info}}</p>
        <span id="sub-text">{{product.duration}}</span>
    </b-row>

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

<style scoped>
.edit-btn {
  position: fixed;

}
</style>

