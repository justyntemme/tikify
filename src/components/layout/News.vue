<template>
    <b-container class="news">
        <h2>Top News</h2>
        <b-row class="news-row">
            <b-col class="news-box">
                <div class="news-body">
                <h3>News 1</h3>
                <p>The latest update of tikify brings us feature such as ...</p>
                </div>
            </b-col>
            <b-col class="news-box">
                <div class="news-body">
                <h3>News 2</h3>
                <p>The latest update of tikify brings us feature such as ...</p>
                </div>
            </b-col>
        </b-row>
        <img class="divider-img" src="@/assets/bottom-border.jpeg">
        <h2>Sales and statistics</h2>
        <b-row class="stats-row">
            <b-col class="col-6 stat-col">
                <h3>Total Posts</h3>
                <div class="stats">
                
                </div>
              
            </b-col>
            <b-col class="col-6 stat-col">
                <h3>New Posts</h3>
                <div class="stats">

                </div>
            
            </b-col>
            <b-col class="col-6 stat-col">
                <h3>Active Posts</h3>
                <div class="stats">

                </div>
          
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
export default {
    components: {}

}
</script>

<style>
.news-box {
  background-image: url("~@/assets/pink-card.png");
  z-index: 20;
  background-size: stretch;
  background-repeat: no-repeat;
  border-radius: 40px;
  overflow:hidden;
  text-align: -webkit-center;
  
}

.news-body {
  margin-top: 40px;
  overflow: hidden;
  margin-right: -10px;
  margin-left: 20px;
}


.stats {
  height: 50px;
  width: 50px;
  text-align: center;
  vertical-align: middle;
  border-radius: 50%;
}

.stats i {
  top: 40px;
}
.stats {
  background-image: url("~@/assets/circle.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
} 

.stat-col {
  text-align: -webkit-center;
}

.news-row {
  text-align: -webkit-center;
}

.news-box {
  margin-right: 15px;
  
}

.stats-row {
  margin-bottom: 100px;
}

</style>
