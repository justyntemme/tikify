<template>
  <div class="product">
    <Navbar/>
    {{ID}}
    
  </div>
</template>

<script>
import Navbar from '../components/layout/Navbar.vue'
export default {
  name: 'product',
  props: {
    ID: ''
  },
  mounted() {
    let v = this;
    v.ID = v.$route.params.ID


  },
  components: {
    Navbar
    
  },
  data() {
    return {

    }
  },
  methods:{

  }
}
</script>
