<template>
    <b-container class="news">
        <h2>Top News</h2>
        <b-row>
            <b-col class="news-box">
                <div class="news-body">
                <h3>News Header</h3>
                <p>The latest update of tikify brings us feature such as ...</p>
                </div>
            </b-col>
            <b-col class="news-box">
                <div class="news-body">
                <h3>News Header</h3>
                <p>The latest update of tikify brings us feature such as ...</p>
                </div>
            </b-col>
        </b-row>
        <h2>Sales and statistics</h2>
        <b-row>
            <b-col class="news-box">
                <div class="news-body">
                <h3>News Header</h3>
                <p>The latest update of tikify brings us feature such as ...</p>
                </div>

            </b-col>
            <b-col class="news-box">
                <div class="news-body">
                <h3>News Header</h3>
                <p>The latest update of tikify brings us feature such as ...</p>
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
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 40px;
}

.news-body {
    margin-top: 40px;
}
</style>
