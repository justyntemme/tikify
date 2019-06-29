<template>
  <div class="product">
    <b-container>
      <b-row class="justify-content-center">
        <b-col class="col-md-12 col-lg-4 align-self-center">
          <img class="create-listing-block" src="@/assets/create-listing-block.svg"/>
          <br>

        </b-col>
      </b-row>
      <b-row class="justify-content-center">
        <b-col class="col-md-12 col-lg-4 ">
            <input v-model="product.price" type="text"/>
            <input v-model="product.type" type="text"/>
            <b-form-textarea
              id="textarea"
              v-model="product.info"
              placeholder="Enter something..."
              rows="4"
              max-rows="10"
              ></b-form-textarea>
        </b-col>

      </b-row>
      <b-row class="justify-content-end">
      <div class="col-4">
        <i @click="update" class="fas fa-save-5x"></i>
      </div>
      </b-row>
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

input {
  width: 100%;
  margin: 5px;
  line-height: 2em;
  border-radius: 10px;
  background-color: light-gray;
}

.create-listing-block {
  height: 50%;
  margin-top: 10%;
}


</style>

