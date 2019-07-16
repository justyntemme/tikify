<template>
    <div class="body-block">
        <Navbar/>
        <b-container class="head mt-3">
            <b-row>
                <b-col class="col-12">
                    <h1>For TikTok Influencers</h1>
                </b-col>
            </b-row>
        </b-container>

        <b-container class="block-1 p0 m0">
            <b-row class="my-3 top-block">
                <b-col class="lead-text">
                    <h2>Connecting the Music Industry...</h2>
                    <p>Tikify is a unique network of artists and influencers, collaborating together to blow up viral content on TikTok and beyond. We provide our clients the support and guidance needed to grow and explode with relevant and popular artists catered to your following.</p>
                </b-col>
            </b-row>
        </b-container>
            <img class="divider" src="@/assets/divider.png">
            <b-container>
            <b-row class="how-to-gray justify-content-center mb-3">
                <b-col class="col-10 my-3 py-3">
                    <div class="white-box p-3">
                        <div class="sign-up">
                            <p>Create a new account</p>
                            <b-alert
                                dismissible
                                :show="dismissCountDown"
                                :variant="msgVariant"
                                @dismissed="dismissCountDown=0"
                                @dismiss-count-down="countDownChanged">{{errorMsg}}</b-alert>

                            <b-form-input type="text" v-model="name" placeholder="Enter your name"></b-form-input>
                            <b-form-input type="email" v-model="email" placeholder="Enter your email"></b-form-input>
                            <b-form-input type="password" v-model="password" placeholder="Enter your Password"></b-form-input>
                            <p>Date of Birth</p>
                            <b-form-input type="date" v-model="dob" label="Enter your date of birth"></b-form-input>

                            <b-button @click="signUp" class="home-nav-btn" pill variant="primary">Sign Up</b-button>
                        </div>
                                </div>
                            </b-col>
            </b-row>

            <b-row class="mt-4 mb-3">
                <b-col class="lead-text text-block">
                    <h3>Grow Your Brand</h3>
                    <p>Expand your TikTok influence and grow a massive following. Sign up now to join Tikify’s exclusive TikTok Growth Tips Newsletter, providing practical and implementable solutions proven to foster growth.</p>
                </b-col>
                <b-col class="lead-text text-block">
                    <h3>Thrive Together</h3>
                    <p>Tikify connects influencers with growing artists. As an artists sway grows so will the influencers, and as an influencers influence grows, so will the artist’s. Make money together and gain more influence by ensuring each other's success.  </p>
                </b-col>
            </b-row>

            <b-row class="mb-4">
                <b-col class="lead-text text-block">
                    <h3>Stay In Tune</h3>
                    <p>Work together with established and hot, new artists in the music industry. Tikify creates relevant connections ensuring mutually profitable and meaningful relationships. Be on the edge of the latest trends and smash hits. </p>
                </b-col>
            </b-row>

            <b-row class="how-to justify-content-center mb-3">
                <b-col class="col-10 my-3 py-3">
                    <div class="white-box p-3">
                        <h4>How it Works</h4>
                        <ul>
                            <li>As an influencer, create a listing for your sponsored post describing the type of post, the cost for an artist, and information relative to the post</li>
                            <li>You then have 10 days to create and post a TikTok, at which point you are paid for promoting the track.  The track must then remain posted for 1 month.</li>
                            <li>As the post’s sphere of influence grows, so will the artists and in turn so will the promoters. </li>
                        </ul>
                    </div>
                </b-col>
            </b-row>
            </b-container>
        </div>

    
    
</template>

<script>
import Navbar from '@/components/layout/Navbar.vue'

export default {
            components:{
                Navbar

            },
            data() {
            return {
                email: '',
                password: '',
                dismissSecs: 5,
                dismissCountDown: 0,
                errorMsg: '',
                msgVariant: '',
                status: '',
                accountType: 'Influencer',
                name: '',
                dob: ''

            }
        },
        mounted() {
            let v = this;

            this.$store.watch(
                state=>state.status,
                (data) => {
                    this.status = data

                    if (this.status == 'failure') {
                        this.msgVariant = "danger"
                        this.errorMsg = this.$store.getters.error
                        this.showAlert()

                    } else if (this.status == 'success') {
                        v.$router.push('/login');
                    }

                }
            )

        },
        methods: {
            countDownChanged(dismissCountDown) {
                let v = this;
                v.dismissCountDown = dismissCountDown
            },
            showAlert() {
                let v = this;
                v.dismissCountDown = v.dismissSecs
            },
            signUp: function() {
                let v = this;
                const user = {
                    email: v.email,
                    password: v.password,
                    accountType: v.accountType,
                    dob: v.dob,
                    name: v.name,
                }
                v.$store.dispatch('signUpAction', user)
            }
        }

}
</script>

<style scoped>

.text-block {


}

.divider {
    width: 100%;
}

.how-to {
    background: rgb(233,121,172);
    background: linear-gradient(90deg, rgba(233,121,172,1) 0%, rgba(245,195,233,1) 100%);
}

.how-to-gray {
    background-color: #efeeee;
    border-radius: 30px 0px 0px 0px;
    border-bottom-right-radius: 100px 20px;
}

p, li {
    font-size: .8em;
}

li {
    text-align: left;
}

h3 {
    font-size: 1.4em
}

.top-block {
    background: rgb(254,78,155);
    background: linear-gradient(135deg,  rgba(254,78,155,1) 0%,rgba(188,0,83,1) 100%);
    color: white;
    border-radius: 30px 0px 0px 0px;
    border-bottom-right-radius: 100px 20px;
    border-top: none;
    padding: 35px 20px;
    position: relative;
    border-left: none;
}

.white-box {
    background-color: #fff;
    border-radius: 20px;
}


.home-nav-btn {
  background-image: url("~@/assets/gradiant-button.png");
  background-position: center;
  background-size: stretch;
  margin: 5px;
  font-family: Arimo; 
  font-size: 8px; 
  font-weight: bold; 
  font-style: normal; 
  text-decoration: none; 
  text-align: center; 
  color: #FFFFFF; 
  border-radius: 10px; 
  border: 0px;
  box-shadow:2px 2px 4px 0px rgba(0,0,0,0.5); 
}
</style>

