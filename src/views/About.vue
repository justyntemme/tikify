<template>
  <div class="about">
        <link  rel="preload" type="text/css" href="~@/components/about.css">
    <router-view/>
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

    <div class="about-flow row">
      <h2 class="col-12">How Tikify Works ...</h2>
    </div>
    <b-container class="about-boxes" fluid>
      <b-row class="about-row">
        <b-col class="search-for-influencers about-box col-12">
          <b-button class="search-btn">
            1
          </b-button>
          <b-container class="about-body">
            <b-img class="col-12 search-img" src="@/assets/search.jpeg"></b-img>
            <h3 class="about-heading">Search for fitting influencers</h3>
            <p class="about-text">Browse our huge database of Tik Tok influencers that are looking to promote upcoming artists. Our influencers range from 10k-1M+ followers!</p>
     
            <b-button class="home-nav-btn">Explore Influencers</b-button>
          </b-container>

        </b-col>
        <b-col class="hire-influencer about-box col-12">
          <b-button class="search-btn">
            2
          </b-button>
          <b-container class="about-body">
            <b-img class="col-12 search-img" src="@/assets/upload.jpeg"></b-img>
            <h3 class="about-heading">Hire them and upload your song</h3>
            <p class="about-text">Hire and pay the influencer for the post and then link your song to be used in the video.</p>
  
            <b-button class="home-nav-btn">Get Started</b-button>
            

          </b-container>

        </b-col>
        <b-col class="posted about-box col-12">
          <b-button class="search-btn">
            3
          </b-button>
          <b-container class="about-body">
            <b-img class="col-12 search-img" src="@/assets/small-phone.jpeg"></b-img>
            <h3 class="about-heading">Get your music posted on TikTok</h3>
            <p class="about-text">Yout promoted Tik Tok video will be posted within 1 week. The goal is to get your song to catch on and have many users making videos to it!</p>
  
            <b-button class="home-nav-btn">Go Viral</b-button>
          </b-container>
        </b-col>

      </b-row>

    </b-container>
  </div>
</template>

<style scoped>
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
  font-size: 10px; 
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
    font-size: 10px; 
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

</style>

