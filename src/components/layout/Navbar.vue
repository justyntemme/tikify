<template>
    <div class="navbar-div">
      <b-navbar type="light" variant="light">
        <img class="nav-logo" src="@/assets/logo.svg"/>
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
a {
  color: #E91E63;
}
input {
  background: #F5F5F5; 
  border: 1px solid #FFFFFF; 
  border-radius: 20px; 
  margin: 5px;
  line-height: 2em;
}
.b-row {
  width: 100%;
  padding: 0px;
  margin: 0px;
}
.home-logo {
  height: 40px;
  width: 90px;
}
.bottom-border {
  width: 100%;
}
h1 {
  font-family: 'Montserrat', sans-serif;
}
h2 {
  font-family: 'Montserrat', sans-serif;
}
.about-flow h2 {
  top: 40%;
}

.login-img {
  height: 50px;
  width: 50px;
}


.nav-logo {
  margin-top: 5px;
  height: 40px;
  width: 90px;
}

.navbar {
  width: 100%;
  top: 0px;
  margin-top: -10px;
  margin-bottom: 30px;
  border-radius: 0px 0px 10px 10px;
  -webkit-box-shadow: 0px 2px 29px -9px rgba(0,0,0,0.57);
  -moz-box-shadow: 0px 2px 29px -9px rgba(0,0,0,0.57);
  box-shadow: 0px 2px 29px -9px rgba(0,0,0,0.57);

}


</style>
