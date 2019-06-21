<template>
    <div class="footer">
        <b-container>
            <b-row>
                <b-col class="footer-menu-col">
                    <router-link :to="{ name: 'home'}"> <b-button class="footer-menu-btn" variant="secondary">⌂</b-button></router-link>
                </b-col>
                <b-col>
                     <router-link :to="{ name: 'productcreate'}"> <b-button class="footer-menu-btn" variant="secondary">+</b-button></router-link>
                </b-col>
                <b-col>
                    <router-link :to="{ name: 'products'}"> <b-button class="footer-menu-btn" variant="secondary">Posts</b-button></router-link>
                </b-col>
                <b-col>
                    <router-link :to="{ name: 'sales'}"> <b-button class="footer-menu-btn" variant="secondary">$</b-button></router-link>
                </b-col>

            </b-row>
        </b-container>
    </div>
</template>


<script>
export default {
    
}
</script>
