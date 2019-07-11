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
import FooterMenu from '@/components/layout/FooterMenu-post.vue'
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
}


</style>

