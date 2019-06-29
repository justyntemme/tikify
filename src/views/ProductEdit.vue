<template>
  <div class="product-edit">
    <b-container>
      <b-row class="justify-content-center">
        <b-col class="col-md-12 col-lg-4 align-self-center">
          <img class="create-listing-block" src="@/assets/create-listing-block.svg"/>
          <br>

        </b-col>
      </b-row>
      <b-row class="justify-content-center">
        <b-col class="col-md-12 col-lg-4 ">
            <input type="text" >
            <input type="text" >
            <b-form-textarea
              id="textarea"
              v-model="product.info"
              placeholder="Enter something..."
              rows="4"
              max-rows="10"
              ></b-form-textarea>
        </b-col>

      </b-row>
      <b-row class="justyify-content-right">
      <div class=" col-4">
        <button @click="save">Save</button>
      </div>
      </b-row>
    </b-container>
      <img class="divider-img-bottom" src="@/assets/background.svg">
      <FooterMenu/>
      
  </div>
</template>

<script>
import firebase from 'firebase'
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
    methods: {
        update() {
            let v = this;
             firebase.firestore().collection("products").doc(v.product.id).update(v.product);
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
</style>

