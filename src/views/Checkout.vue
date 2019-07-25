<template>
<div id="checkout">
    <b-container>
        <b-row>
            <b-col>
                <b-card class="cart" header="Your Cart">
                    <b-row>
                        <b-col class="col-12">
                            <b-card class="product-card">
                                <b-row>
                                    <b-col class="summary-col">
                                         <p>Post with @justyntemme</p>
                                    </b-col>
                                    <b-col>
                                        <p>$24</p>
                                    </b-col>
                                    <b-col class="remove-col">
                                        <button class="btn btn-secondary">Remove from cart</button>
                                    </b-col>
                                </b-row>
                            </b-card>
                            <b-card class="product-card">
                                <b-row>
                                    <b-col class="summary-col">
                                         <p>Post with @justyntemme</p>
                                    </b-col>
                                    <b-col>
                                        <p>$24</p>
                                    </b-col>
                                    <b-col class="remove-col">
                                        <button class="btn btn-secondary">Remove from cart</button>
                                    </b-col>
                                </b-row>
                            </b-card>
                            <b-card class="product-card">
                                <b-row>
                                    <b-col class="summary-col">
                                         <p>Post with @justyntemme</p>
                                    </b-col>
                                    <b-col>
                                        <p>$24</p>
                                    </b-col>
                                    <b-col class="remove-col">
                                        <button class="btn btn-secondary">Remove from cart</button>
                                    </b-col>
                                </b-row>
                            </b-card>
                        </b-col>


                    </b-row>


                </b-card>

            </b-col>
        </b-row>

        <b-row class="checkout">
            <b-col>
                <button class="checkout">Checkout</button>
                
            </b-col>
        </b-row>
    </b-container>
</div>
</template>

<script>
import CardCheckout from '@/components/layout/CardCheckout.vue'
export default {
    components:{
        CardCheckout
    },
    data () {
        return {

        }
    },
    methods:{

    }

}
</script>

<style scoped>
.checkout {
    color: white;
    font-size: 2em;
    margin: 5px;
}
iframe {
    border: solid 1px black;
}
.stripe-element {
  width: 300px;
  border: 1px solid black;
}
.stripe-card.complete {
  border-color: green;
}

.card-header {
    background-color: #C40057;
    border-radius: 10px;
}
.card-header div {
    color: white;
}
.cart {
    background-color: #EFEFEF;
}

.product-card {
    background-color: #EFEFEF;
    border: 0px;
    border-bottom: 2px solid #D5D5D5;
}

.summary-col {
    border-right: 2px solid #D5D5D5;
}

.remove-col {
    margin-top: 6px;
}

button {
    background-color: #C40057;
    border-radius: 10px;
}

</style>
