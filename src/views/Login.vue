<template>
  <div class="login">
    <Navbar/>
    <input type="text" placeholder="Username"><br>
    <input type="password" placeholder="Password"><br>
    <button>Connection</button>
    <p>You don't have an account? You can create one</p>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/layout/Navbar.vue'

export default {
  name: 'login',
  components: {
    Navbar
  }
}
</script>
