<template>
  <div class="login">
    <Header/>
    <input type="text" placeholder="Username"><br>
    <input type="password" placeholder="Password"><br>
    <button>Connection</button>
    <p>You don't have an account? You can create one</p>

  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/layout/Header.vue'

export default {
  name: 'login',
  components: {
    Header
  }
}
</script>
