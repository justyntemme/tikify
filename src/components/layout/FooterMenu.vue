<template>
    <div class="footer">
        <b-container>
            <b-row>
                <b-col class="footer-menu-col" v-if="$router.currentRoute.name != 'home'">
                    <router-link :to="{ name: 'home'}"> <b-button class="footer-menu-btn" variant="secondary"> <i class="fas fa-home"></i></b-button></router-link>
                </b-col>
                <b-col v-if="$router.currentRoute.name != 'productcreate'">
                     <router-link :to="{ name: 'productcreate'}"> <b-button class="footer-menu-btn" variant="secondary"><i class="fas fa-plus-square"></i> </b-button></router-link>
                </b-col>
                <b-col v-if="$router.currentRoute.name != 'products'">
                    <router-link :to="{ name: 'products'}"> <b-button class="footer-menu-btn" variant="secondary"><i class="fas fa-list"></i> </b-button></router-link>
                </b-col>

                <b-col v-if="$router.currentRoute.name != 'accountinfluencer'">
                    <router-link :to="{ name: 'accountinfluencer'}"> <b-button class="footer-menu-btn" variant="secondary"><i class="fas fa-user"></i> </b-button></router-link>
                </b-col>
                <b-col v-if="$router.currentRoute.name != 'wallet'">
                    <router-link :to="{ name: 'wallet'}"> <b-button class="footer-menu-btn" variant="secondary"><i class="fas fa-wallet"></i> </b-button></router-link>
                </b-col>
                <b-col v-if="$router.currentRoute.name == 'product'">
                    <router-link :to="{ name: 'productedit', params: { product: this.$parent.product}}"><i class="edit-btn fas fa-pencil-alt"/></router-link>
                </b-col>
                <b-col v-if="$router.currentRoute.name == 'productedit' || $router.currentRoute.name == 'productcreate' || $router.currentRoute.name === 'accountinfluencer'">
                    <i @click="this.$parent.update" class="submit-btn fas fa-2x fa-check-circle"/>
                 </b-col>



            </b-row>
        </b-container>
    </div>
</template>


<script>
export default {
    mounted(){
            console.log(this.$router.currentRoute)
    
 
    }
    
}
</script>

<style scoped>

.footer-menu-btn {
  background: white;
  color: gray;
  border: 0px;
}



.footer-menu-col {
  margin-bottom: 10px;
}

.footer {
    position: fixed;
    border-radius: 20px 20px 0px 0px;
    bottom: 0px;
    left: 0px;
    background: white;
    padding-top: 20px;
    width: 100%;
    z-index: 10;
}
</style>

