<template>
  <b-container class="product">
    <div id="frame">
      <router-link :to="{ name: 'home'}"><button id="floating-btn"><i class="fa fa-trash"></i></button></router-link>
      <button @click="save()" class="editBtn"><i class="fa fa-save"></i></button>
      <div id="shape"></div>
            <b-form-textarea
            id="textarea"
            v-model="product.info"
            placeholder="Product Information..."
            rows="4"
            max-rows="10"
            ></b-form-textarea>
       
      </div>
      <br>
      <div class="col-12">
        <span class="row"><h4>Advertisement Type</h4> <span class="ml-auto"> <b-form-input v-model="product.type"></b-form-input></span></span>
        <hr class="product-line">
        <span class="row"><h4>Ad Price</h4><span class="ml-auto"> <b-form-input v-model="product.price"></b-form-input></span></span>
        <hr class="product-line">
        <span class="row"><h4>Ad Duration</h4><span class="ml-auto"> <b-form-input v-model="product.duration"></b-form-input></span></span>
        <hr class="product-line">
      </div>
      <FooterMenu/>
  </b-container>
</template>

<script>
import firebase from 'firebase'
import FooterMenu from '@/components/layout/FooterMenu.vue'
export default {
    components: {
      FooterMenu

    },
    data() {
        return {
            product: {}
        }
    },
     mounted() {
    },
    methods: {
        save() {
            let v = this;
            v.product.uid = firebase.auth().currentUser.uid
             firebase.firestore().collection("products").add(v.product);
             v.$router.push({path: '/'})
        }
    }
    
}
</script>
