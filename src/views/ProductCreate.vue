<template>
  <div class="product">
    <b-container>
    <div id="frame">
      <router-link :to="{ name: 'home'}"><button id="floating-btn"><i class="fa fa-trash"></i></button></router-link>
      <button @click="save()" class="editBtn"><i class="fa fa-save"></i></button>
      <div id="shape"></div>
            <b-form-textarea
            id="textarea"
            v-model="product.info"
            placeholder="What kind of Tik Tok post are you offering? Describe the video you’ll be making here!"
            rows="10"
            max-rows="10"
            ></b-form-textarea>
       
      </div>
      <br>
      <div class="col-12">
        <span class="row"><h4>Advertisement Type</h4>  <i class="fa fa-question-circle"/> <span class="ml-auto"> <b-form-input v-model="product.type"></b-form-input></span></span>
        <hr class="product-line">
        <span class="row"><h4>Ad Price</h4>  <i class="fa fa-question-circle"/> <span class="ml-auto"><b-form-input v-model="product.price"></b-form-input></span></span>
        <hr class="product-line">
        <span class="row"><h4>Ad Duration</h4> <i class="fa fa-question-circle"/> <span class="ml-auto"> <b-form-input v-model="product.duration"></b-form-input></span></span>
        <hr class="product-line">
      </div>
    </b-container>
      <img class="divider-img-bottom" src="@/assets/background.svg">
      <FooterMenu/>
      
  </div>
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

<style scoped>
  #frame {
    border: 2px solid #f56;
    border-radius: 20px;
    width: 90%;
    padding: 10px;
    padding-bottom: 30px;
    margin: 0px auto;
    position: relative;
  }
  
  #shape {
    float: left;
    width: 25px;
    height: 25px;
    shape-outside: circle(50%);
    margin-bottom: 10px;
    margin-right: 10px;
  }
  
  #floating-btn {
    display: block;
    position: absolute;
    left: -25px;
    top: 10px;
    width: 50px;
    height: 50px;
    border: 2px solid #f56;
    border-radius: 50%;
    background-color: #fff;
    cursor: pointer;
    outline: none;
    font-size: 22px;
    font-weight: bold;
    color: #f56;
  }
  
  #sub-text {
    position: absolute;
    bottom: 10px;
    left: -15px;
    background-color: #f56;
    padding: 5px;
    color: #fff;
    border-radius: 5px;
  }

  .editBtn {
    display: block;
    position: absolute;
    left: -25px;
    top: 65px;
    width: 50px;
    height: 50px;
    border: 2px solid #f56;
    border-radius: 50%;
    background-color: #fff;
    cursor: pointer;
    outline: none;
    font-size: 22px;
    font-weight: bold;
    color: #f56;
  }
  .back-btn {
    align-content: left;
    background: #f8f9fa;
    color: #E91E63;
    border: 0px;
}

.divider-img-bottom {
  width: 100%;
  margin-top: .5em;
}

i {
  margin-left: 4%;
}

</style>

