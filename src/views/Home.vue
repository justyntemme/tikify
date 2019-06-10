<template>
  <div class="home">
    <Navbar/>
    Dashboard
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/layout/Navbar.vue'

export default {
  name: 'home',
  components: {
    Navbar
  }
}
</script>
