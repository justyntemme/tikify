<template>
    <div class="navbar">
      <b-navbar type="light" variant="light">
        <b-button @click="goBack" class="back-btn" pill variant="info">‹</b-button>
        <b-nav-item class="ml-auto " href="#"><img class="nav-logo" src="@/assets/logo.png"/></b-nav-item>
      </b-navbar>
    </div>
</template>
<script>
import Router from 'vue-router'
import Vue from 'vue'

Vue.use(Router)

export default {
  name: 'navbar',
  methods: {
    goBack() {
      let v = this;
      v.$router.go(-1)
    }
  },
  props: {
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="css">

</style>
