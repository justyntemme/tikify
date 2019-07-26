<template>
<div>
  <b-container class="product">
    <b-row>
      <b-col>
        <b-card class="card" :title="product.type" :sub-title="product.price">
          <b-card-text>
            {{product.info}}
          </b-card-text>
          <b-card-text>{{product.duration}}.</b-card-text>
        </b-card>
      </b-col>
    </b-row>
      <FooterMenu vbind:="product" />

  </b-container>
            <img src="@/assets/bottom-border.jpeg">
</div>
</template>


<script>
import FooterMenu from '@/components/layout/FooterMenu.vue'
export default {
  name: 'product',
  props: {
  },
  mounted() {

  },
  computed:{
    product:{
      get: function(){
        let v = this;
        return v.$route.params.product
        
      }
    }
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
.card {
  border-radius: 10px;
  /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#1e5799+0,f0f282+100 */
/* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#1e5799+0,f888fc+100 */
/* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#c12eea+0,f888fc+100 */


}


</style>

