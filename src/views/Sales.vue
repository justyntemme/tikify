<template>
<b-container>
    <h3 class="sales-title ">Sales ></h3>
    <b-row class="b-row justify-content-center">
        <b-col  v-for="sale in sales" class="col col-sm-12 col-md-4 product-card-col justify-content-center">
            <div class="card">
                <div class="card-header">
                    {{sale.type}}
                </div>
                <div class="card-body">
                    <h5 class="card-title">{{sale.email}}</h5>
                    <p class="card-text">{{sale.length}}</p>
                    <router-link :to="{ name: 'sale', params: { sale: sale}}"><a href="#" class="btn btn-primary">Details</a></router-link>
                </div>
            </div>
        </b-col>
    </b-row>
    <FooterMenu/>
</b-container>
</template>


<script>
import FooterMenu from '@/components/layout/FooterMenu.vue';
export default {
    components: {
        FooterMenu

    },
    mounted() {
    let v = this;
    v.$store.dispatch('getSalesAction');
    this.$store.watch(
      state=>state.sales,
        (data) => {
            this.sales = data;
        }
    )
  },

  data() {
    return {
      sales: {},
    }
  },

}
</script>

<style>

.product-card-col {
    margin-bottom: 10px;
    border-radius: 20px;
}

.card {
    border-radius: 15px;
}

.card-header {
    display: flex;
}

.btn-primary {
    background-color: #fff;
    color: #FD91C3;
    border: #333;
    border-radius: 10px;
    box-shadow: 8px 6px 19px -9px rgba(0,0,0,0.39);

}

.b-row {
    padding-bottom: 30px;
}

</style>
