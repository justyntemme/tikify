<template>
    <div class="footer">
        <b-container>
            <b-row>
                <b-col class="footer-menu-col">
                    <router-link :to="{ name: 'home'}"> <b-button class="footer-menu-btn" variant="secondary"> <i class="fas fa-home"></i></b-button></router-link>
                </b-col>
                <b-col>
                     <router-link :to="{ name: 'productcreate'}"> <b-button class="footer-menu-btn" variant="secondary"><i class="fas fa-plus-square"></i> </b-button></router-link>
                </b-col>
                <b-col>
                    <router-link :to="{ name: 'products'}"> <b-button class="footer-menu-btn" variant="secondary"><i class="fas fa-list"></i> </b-button></router-link>
                </b-col>
                <b-col>
                    <router-link :to="{ name: 'sales'}"> <b-button class="footer-menu-btn" variant="secondary"><i class="fas fa-money-bill"></i> </b-button></router-link>
                </b-col>

            </b-row>
        </b-container>
    </div>
</template>


<script>
export default {
    
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

