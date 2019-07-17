<template>
    <div class="news">
              <h2>Posts for Sale</h2>
        <b-row class="news-row scrolling-wrapper ">
            <b-col v-for="product in products">
                <router-link style="overflow: visible;" :to="{ name: 'product', params: { product: product}}">
                  <b-card class="card" :title="product.type" :sub-title="product.price">
                    <b-card-text>
                      {{product.info|truncate}}
                    </b-card-text>
                  </b-card>
                </router-link>
            </b-col>
        </b-row>


        <img class="divider-img" src="@/assets/bottom-border.jpeg">
        <h2>Sales</h2>
        <b-row class="news-row scrolling-wrapper ">
            <b-col v-for="sale in sales">
                <router-link :to="{ name: 'sale', params: { sale: sale}}">
                  <b-card class="card" :title="sale.type" :sub-title="sale.price">
                    <b-card-text>
                      {{sale.info|truncate}}
                    </b-card-text>
                    <b-card-text>{{sale.duration}}.</b-card-text>
                  </b-card>
                </router-link>
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
    filters: {
    truncate: function(value) {
      if (value.length > 20) {
        value = value.substring(0, 17) + '...';
      }


      return value

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

<style scoped>


.news-body {
  margin-top: 40px;
  text-align: -webkit-center;
  width: 50%;
}

a {
  color: black;
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
   
  }
  
}

.stats-row {
  margin-bottom: 100px;
}

.divider-img {
  width: 100%;
  margin-top: -20px;

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

.card {
  border-radius: 20px;
  height: 10em;
  width: 8em;
  margin-left: 5px;
  color: #333;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  padding-bottom: 10px;

}

.col {
   margin-bottom: 16px;
}

</style>
