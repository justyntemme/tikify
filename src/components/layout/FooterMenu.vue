<template>
    <div class="footer">
        <b-container>
            <b-row>
                <b-col>
                     <router-link :to="{ name: 'productcreate'}"> <b-button class="" variant="secondary">New Post</b-button></router-link>
                </b-col>
                <b-col>
                    <router-link :to="{ name: 'products'}"> <b-button class="" variant="secondary">Posts</b-button></router-link>

                </b-col>

            </b-row>

        </b-container>
     
    </div>
</template>


<script>
export default {
    
}
</script>
