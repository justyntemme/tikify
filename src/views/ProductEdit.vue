<template>
    <Navbar/>

</template>

<script>
import Navbar from '@/components/layout/Navbar.vue'
export default {
    components: {
        Navbar
    },
    props: {
        product: {}
    },
     mounted() {
        let v = this;
        v.product = v.$route.params.product
    },
    
}
</script>
