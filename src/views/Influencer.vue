<template>
    <div class="influencer">
        <b-container>
            <b-row class="profile-header">
                <b-col md="6"> 
                    <h1>{{influencer.name}}</h1>
                    <hr>
                </b-col>

            </b-row>
            <b-row class="profile-menu">
                <b-col class="menu-option col-3 align-self-start"> 
                    <h3>Info</h3>
                </b-col>
            </b-row>
            <b-row class="profile-image">
                <b-col> 
                    <img :src="influencer.profileIMG" class="rounded-0 profile-img">
                    <p>Followers: 2.5 million</p>
                </b-col>
            </b-row>
            <b-row class="profile-bio-header">
                <b-col class="menu-option col-3 align-self-start"> 
                    <h4>Bio</h4>
                </b-col>
            </b-row>
            <b-row class="profile-bio">
                <b-col class=""> 
                    {{influencer.bio}}
                    <br>
                    <a href="#">Tikify Profile</a>
                </b-col>
            </b-row>
            <br>
            <b-row class="start-transaction">
                <b-col class="col-12"> 
                    <button  v-b-modal.modal-1>Buy a Post on tiktok</button>
                </b-col>
                <b-col class="col-12"> 
                    <button>Buy a Duet on tiktok</button>
                </b-col>
                <b-col class="col-12"> 
                    <button>Buy a Reply on tiktok</button>
                </b-col>
            </b-row>

              <b-modal id="modal-1" title="Checkout" hide-footer>
                <p class="my-4">Please list the information and all requried links the influencer will need for your purchase</p>
                <label for="input-lazy">Text input with lazy formatter (on blur)</label>
                <b-form-input
                id="input-lazy"
                v-model="info"
                :formatter="format"
                placeholder="Enter your name"
                aria-describedby="input-lazy-help"
                lazy-formatter
                ></b-form-input>
                <b-form-text id="input-lazy-help">This one is a little lazy!</b-form-text>

                <p>Total: 20 tickets</p>

                <button @click="checkout">Checkout</button>
            </b-modal>



        </b-container>


        <Footermenu/>
    </div>
</template>

<script>
import Footermenu from '@/components/layout/FooterMenu.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from 'vue-router'

export default {
    props: {
        influencer: {}
    },
    components:{
        Footermenu
    },
    methods:{
        checkout(){
            let v = this;
            console.log(v.info)
                axios.post(v.url, {
                    influencerUID: v.influencerUID,
                    artistUID: v.artistUID,
                    info: v.info
                })
                .then(function (response) {
                    v.$router.push({ name: 'conversation', params: {conversationID: response.data }})
                })
                .catch(function (error) {
                    alert(error)
                });
            

        }
    },
    data() {
        return {
            influencerUID: '6dF0u3vpX1ezgGlijBTE0fflrnE3',
            artistUID: 'FajAOZS5xnWzXSCjHOc98WYKESn1',
            info: '',
            url: 'https://us-central1-tikify-e74ea.cloudfunctions.net/spendTickets'
        }
    }

}
</script>

<style scoped>
.row {
    background-color: white;
}
.profile-img {
    height: 150px;
    width: 150px;
    border-radius: 30px;
}

button {
    background-color: #C40057 !important;
    color: white;
    border: 0px;
    font-size: 1.5em;
    border-radius: 10px;
    margin-top: 5px;
}

</style>
