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
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

</style>
