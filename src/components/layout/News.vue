<template>
    <div class="news">
        <h2>Sales</h2>
        <b-row class="news-row scrolling-wrapper justify-content-center">
            <b-col v-for="sale in sales"  class="news-box col-md-2 col-sm-6 col-mx-auto">
                <div class="news-body">
                <h3>{{sale.type}}</h3>
                <p>{{sale.price}}</p>
                </div>
            </b-col>
        </b-row>

        <img class="divider-img" src="@/assets/bottom-border.jpeg">
        <h2>Posts for Sale</h2>
        <b-row class="news-row scrolling-wrapper ">
            <b-col v-for="product in products"  class="news-box col-md-2 col-sm-6 col-mx-auto">
                <div class="news-body">
                <h3>{{product.type}}</h3>
                <p>{{product.price}}</p>
                </div>
            </b-col>
        </b-row>

        <img class="divider-img-bottom" src="@/assets/background.svg">
        
        
        
    </div>
</template>

<script>
export default {
  data() {
    return {
      sales: {},
      products: {}
    }
  },
    components: {},
    mounted() {
    let v = this;
    v.$store.dispatch('getSalesAction');
    v.$store.dispatch('getProductsAction');
    this.$store.watch(
        state=>state.products,
        (data) => {
            this.products = data;
        }
    )
    this.$store.watch(
      state=>state.sales,
        (data) => {
            this.sales = data;
        }
    )
  },

}
</script>

<style>


.news-body {
  margin-top: 40px;
  text-align: -webkit-center;
  width: 50%;
}


.stats {
  height: 50px;
  width: 50px;
  text-align: center;
  vertical-align: middle;
  border-radius: 50%;
}

.stats i {
  top: 40px;
}
.stats {
  background-image: url("~@/assets/circle.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
} 

.news-row {
  margin-top: 5%;
  margin-bottom: 5%;
  text-align: -webkit-center;
  
}

.news-box {
  background-image: url("~@/assets/card.svg");
  background-repeat: no-repeat;
  background-position: center;
  text-align: -webkit-center;
  padding-bottom: 35px;
  flex: 0 0 auto;
  padding-left: 0px;
  padding-right: 0px;
  width: 40%;


}
@media (min-width: 1081px) {
  
  .news-box {
    padding-bottom: 250px;
  }
  
}

.stats-row {
  margin-bottom: 100px;
}

.divider-img {
  width: 100%;
  margin-top: -50px;
}
.divider-img-bottom {
  width: 100%;
  margin-top: .5em;
}

.scrolling-wrapper {
  display: flex;
  flex-wrap: nowrap;
  overflow-x: scroll;
}

h2 {
  justify-self: left;
  display: -webkit-box;
  margin-left: 10px;
  
}
</style>
