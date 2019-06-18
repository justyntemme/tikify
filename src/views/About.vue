<template>
  <div class="about">
    <div class="home-header row">
      <div class="col-6 home-logo">
        <img class="nav-logo" src="@/assets/logo.png"/>
      </div>
      <div class="ml-4 col-4 pl-5 home-login">
        <router-link :to="{ name: 'login' }"><b-button class="home-nav-btn" pill variant="primary">Login</b-button></router-link>
      </div>
    </div>
    <div class="welcome ">
      <h1 class="get-started">Get Started!</h1>
    </div>
    <div class="row">
      <div class='col-4'>
        <b-button class="home-nav-btn" pill variant="primary">I'm an Influencer</b-button>
      </div>

    <div class="col-4 phone">
      <img class="phone-img" src="@/assets/phone.jpeg"/>
    </div>
     <div class='col-4'>
       <b-button class="home-nav-btn" pill variant="primary">I'm an Artist</b-button>
      </div>

    </div>

    <div class="footer">
      <img class="bottom-border" src="@/assets/bottom-border.jpeg"/>
      </div>
  </div>
</template>

<style scoped>
.home-header {
  background-image: url('~@/assets/home-header.jpeg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

</style>
