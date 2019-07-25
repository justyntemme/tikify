<template>
<div id="checkout">
    <b-container>
        <b-row>
            <b-col>
                <b-card  class="tickets" header="Add Tickets">
                    <b-row>
                      <b-col  @click="ticketSelect()" class="5-tickets tickets">
                        <i class="fas fa-4x fa-dollar-sign"></i>
                        <h3> 5 Tickets</h3>
                      </b-col>

                      <b-col @click="ticketSelect(10)" class="10-tickets tickets">
                        <i class="fas fa-4x fa-dollar-sign"></i>
                        <i class="fas fa-4x fa-dollar-sign"></i>
                         <h3> 10 Tickets</h3>
                      </b-col>

                      <b-col @click="ticketSelect(10)" class="25-tickets tickets">
                        <i class="fas fa-4x fa-dollar-sign"></i>
                        <i class="fas fa-4x middle-ticket fa-dollar-sign"></i>
                        <i class="fas fa-4x fa-dollar-sign"></i>
                         <h3> 25 Tickets</h3>

                      </b-col>
          
                    </b-row>


                </b-card>

            </b-col>
        </b-row>

        <b-row class="checkout">
            <b-col>
                <CardCheckout/>
                
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
          selected: [],

        }
    },
    methods:{
      ticketSelect(){
        selected[event.target] = !selected[event.target];
      
      }

    }

}
</script>

<style scoped>
.tickets {
  border-radius: 10px;
  border: 1px solid #D5D5D5;
  margin: 10px;
}

.tickets::selection {

}
.middle-ticket {

}
.stripe-card {
  width: 300px;
  border: 1px solid grey;
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
