<template>
  <div class="about">
    <router-view/>
    <div class="home-header row">
      <div class="col-6 home-logo">
        <img class="nav-logo" src="@/assets/logo.png"/>
      </div>
      <div class="ml-4 col-4 pl-5 home-login">
        <router-link :to="{ name: 'login' }"><b-button class="home-nav-btn" pill variant="primary">Login</b-button></router-link>
      </div>
    </div>
    <div class="middle-image">
      <img src="@/assets/slice6b.svg"/>
    </div>

    <b-container class="middle-buttons info-btn">
      <b-row>
        <b-col class="col-4 ">
          <button class="side-btn">I'm an Influencer</button>
        </b-col>
        <b-col class="col-4">
          <button class="middle-btn">What we do for ... </button>
        </b-col>
        <b-col class="col-4">
          <button class="side-btn">I'm an Artist</button>
          
        </b-col>
      </b-row>
    </b-container>
    <b-container class="info-images">
      <b-row class="justify-content-center">

        <b-col class="col-6 info-img-star">
         

        </b-col>
        <b-col class="col-6 info-img-artist">
          
        </b-col>

      </b-row>

      <b-row>

        <b-col class="col-3 p-0">
                    <img src="@/assets/influencer.svg">
          
          


        </b-col>
        <b-col class="col-3 p-0">
          <img src="@/assets/network.svg">

        </b-col>

        <b-col class="col-3 p-0">

          <img src="@/assets/helped.svg">


        </b-col>

        <b-col class="col-3 p-0">
          <img src="@/assets/100m.svg">


        </b-col>



      </b-row>

    </b-container>
  <div class="footer">
    <img src="@/assets/bottom-border.jpeg">


  </div>
  </div>
</template>

<style scoped>
.info-img-star {
  background-image: url("~@/assets/star.svg");
  height: 155px;
  overflow: hidden;
}

.info-img-artist {
  background-image: url("~@/assets/artist.svg");
  height: 155px;
  overflow: hidden;
}

.home-header {
  background-image: url('~@/assets/home-header.jpeg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.about-flow {
  background-image: url("~@/assets/bottom-border.jpeg");
  background-size: cover;
  background-repeat: no-reapeat;
  background-position: center;
  height: 341px; 
}
.home-nav-btn {
  background-image: url("~@/assets/gradiant-button.png");
  background-position: center;
  background-size: stretch;
  margin: 5px;
  font-family: Arimo; 
  font-size: 8px; 
  font-weight: bold; 
  font-style: normal; 
  text-decoration: none; 
  text-align: center; 
  color: #FFFFFF; 
  border-radius: 10px; 
  border: 0px;
  box-shadow:2px 2px 4px 0px rgba(0,0,0,0.5); 
}

.home-nav-btn-red {
      
    background-color: rgb(249, 35, 104);
    border-color: rgb(249, 35, 104);
    border-width: 8.333px;
    margin: 5px;
    font-family: Arimo; 
    font-size: 8px; 
    font-weight: bold; 
    font-style: normal; 
    text-decoration: none; 
    text-align: center; 
    color: #FFFFFF; 
    border: 2px solid #F44336; 
    border-radius: 10px; 
    box-shadow:2px 2px 4px 0px rgba(0,0,0,0.5); 

}


.get-started {
  color: #000000; 
  font-size: 40px; 
  font-weight: bold; 
  font-style: normal; 
  text-decoration: none; 
  text-align: center; 
  margin: 10%;
}
.welcome {
    margin-top: 5em;
}

.login-btn {
    background: #f8f9fa;
    color: #E91E63;
    border: 0px;
    margin: 5px;
}

.signup-btn {
    background: #f8f9fa;
    color: #E91E63;
    border: 0px;
}

  .search-for-influencers { 
    width: 15em; 
  
    color: #DDDDDD; 
    font-family: 'Source Sans Pro'; 
    font-size: 17px; 
    font-weight: bold; 
    font-style: normal; 
    text-decoration: none; 
    text-align: center; 
    background: rgba(33,150,243,0.4); 
    border: none; 
    border-radius: 10px; 
  }
  
  .hire-influencer {
    width: 15em; 
  
    color: #DDDDDD; 
    font-family: 'Source Sans Pro'; 
    font-size: 17px; 
    font-weight: bold; 
    font-style: normal; 
    text-decoration: none; 
    text-align: center; 
    background: rgba(156,39,176,0.4); 
    border: none; 
    border-radius: 10px; 
  }
  
  .posted {
    width: 15em; 
 
    color: #DDDDDD; 
    font-family: 'Source Sans Pro'; 
    font-size: 17px; 
    font-weight: bold; 
    font-style: normal; 
    text-decoration: none; 
    text-align: center; 
    background: rgba(233,30,99,0.3); 
    border: none; 
    border-radius: 10px; 
  }
  .search-btn {
    margin-top: -1em;
    color: #DDDDDD; 
    font-family: 'Source Sans Pro'; 
    font-size: 17px; 
    font-weight: bold; 
    font-style: normal; 
    text-decoration: none; 
    text-align: center; 
    background: #2196F3; 
    border: 4px solid #FFFFFF; 
    border-radius: 140px;
  
  }
  
  .search-img {
    width: 7em; 
    height: 77px; 
    margin: 1em;
  }
  
  .about-box {
    margin: .5em;
  }
  
  .about-row {
    margin: 1em;
  }
  
  
.about-heading { 
  color: #333333; 
  font-family: Arimo; 
  font-size: 15px;  
  line-height: 1px; 
  padding: 5px; 
}
.about-text { 
  color: #333333; 
  font-family: Arimo; 
  font-size: 12px; 
  padding: 5px; 
}

.divider-img {
  width: 100%;
}

.home {
  height: 10000px;
}

.home-nav-btn {
  background-image: url("~@/assets/gradiant-button.png");
  
}

.nav-logo {
    height: 40px;
    width: 90px;
}

.nav-logo {
    margin-top: 5px;
}

@media (min-width: 1281px) {
  
  .about-box {
    max-width: 32% !important;
  }
  
}

.middle-image {
  margin-top: 1em;
}

.info-img {
  height: 100%
}

.info-img img {

}

.side-btn {
  background-image: url("~@/assets/slice1.svg");
  background-size: cover;
  background-repeat: no-repeat;
  display: -webkit-box;
  font-size: x-small;
  width: 100px;
  align-content: center;
  padding: 3px;
  height: 3em;
  margin-top: -30px;
}

.middle-btn {
  background-image: url("~@/assets/button4.svg");
  background-size: cover;
  background-repeat: no-repeat;
  display: -webkit-box;
  font-size: x-small;
  width: 100px;
  align-content: center;
  padding: 3px;
  height: 2em;
  margin-bottom: 10px;


}

</style>
