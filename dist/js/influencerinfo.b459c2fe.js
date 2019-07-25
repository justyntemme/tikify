(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["influencerinfo"],{"0611":function(t,s,e){},"19e8":function(t,s,e){"use strict";var o=e("0611"),a=e.n(o);a.a},6277:function(t,s,e){"use strict";var o=e("f8d5"),a=e.n(o);a.a},"73f4":function(t,s,e){t.exports=e.p+"img/divider.dee996d4.png"},"9b19":function(t,s,e){t.exports=e.p+"img/logo.bf9be6a0.svg"},a37d:function(t,s,e){"use strict";var o=function(){var t=this,s=t.$createElement,o=t._self._c||s;return o("div",{staticClass:"navbar-div"},[o("b-navbar",{attrs:{type:"light",variant:"light"}},[o("img",{staticClass:"nav-logo",attrs:{src:e("9b19")}})])],1)},a=[],n=e("8c4f"),i=e("2b0e");i["default"].use(n["a"]);var r={name:"navbar",methods:{goBack:function(){var t=this;t.$router.go(-1)}},props:{}},c=r,l=(e("d599"),e("2877")),u=Object(l["a"])(c,o,a,!1,null,"dff7f65e",null);s["a"]=u.exports},c4ee:function(t,s,e){"use strict";e.r(s);var o=function(){var t=this,s=t.$createElement,o=t._self._c||s;return o("div",{staticClass:"body-block"},[o("Navbar"),o("b-container",{staticClass:"head mt-3"},[o("b-row",[o("b-col",{staticClass:"col-12"},[o("h1",[t._v("For TikTok Influencers")])])],1)],1),o("b-container",{staticClass:"block-1 p0 m0"},[o("b-row",{staticClass:"my-3 top-block"},[o("b-col",{staticClass:"lead-text"},[o("h2",[t._v("Connecting the Music Industry...")]),o("p",[t._v("Tikify is a unique network of artists and influencers, collaborating together to blow up viral content on TikTok and beyond. We provide our clients the support and guidance needed to grow and explode with relevant and popular artists catered to your following.")])])],1)],1),o("img",{staticClass:"divider",attrs:{src:e("73f4")}}),o("b-container",[o("b-row",{staticClass:"how-to-gray justify-content-center mb-3"},[o("b-col",{staticClass:"col-10 my-3 py-3"},[o("div",{staticClass:"white-box p-3"},[o("div",{staticClass:"sign-up"},[o("p",[t._v("Create a new account")]),o("b-alert",{attrs:{dismissible:"",show:t.dismissCountDown,variant:t.msgVariant},on:{dismissed:function(s){t.dismissCountDown=0},"dismiss-count-down":t.countDownChanged}},[t._v(t._s(t.errorMsg))]),o("b-form-input",{attrs:{type:"text",placeholder:"Enter your name"},model:{value:t.name,callback:function(s){t.name=s},expression:"name"}}),o("b-form-input",{attrs:{type:"email",placeholder:"Enter your email"},model:{value:t.email,callback:function(s){t.email=s},expression:"email"}}),o("b-form-input",{attrs:{type:"password",placeholder:"Enter your Password"},model:{value:t.password,callback:function(s){t.password=s},expression:"password"}}),o("p",[t._v("Date of Birth")]),o("b-form-input",{attrs:{type:"date",label:"Enter your date of birth"},model:{value:t.dob,callback:function(s){t.dob=s},expression:"dob"}}),o("b-button",{staticClass:"home-nav-btn",attrs:{pill:"",variant:"primary"},on:{click:t.signUp}},[t._v("Sign Up")])],1)])])],1),o("b-row",{staticClass:"mt-4 mb-3"},[o("b-col",{staticClass:"lead-text text-block"},[o("h3",[t._v("Grow Your Brand")]),o("p",[t._v("Expand your TikTok influence and grow a massive following. Sign up now to join Tikify’s exclusive TikTok Growth Tips Newsletter, providing practical and implementable solutions proven to foster growth.")])]),o("b-col",{staticClass:"lead-text text-block"},[o("h3",[t._v("Thrive Together")]),o("p",[t._v("Tikify connects influencers with growing artists. As an artists sway grows so will the influencers, and as an influencers influence grows, so will the artist’s. Make money together and gain more influence by ensuring each other's success.  ")])])],1),o("b-row",{staticClass:"mb-4"},[o("b-col",{staticClass:"lead-text text-block"},[o("h3",[t._v("Stay In Tune")]),o("p",[t._v("Work together with established and hot, new artists in the music industry. Tikify creates relevant connections ensuring mutually profitable and meaningful relationships. Be on the edge of the latest trends and smash hits. ")])])],1),o("b-row",{staticClass:"how-to justify-content-center mb-3"},[o("b-col",{staticClass:"col-10 my-3 py-3"},[o("div",{staticClass:"white-box p-3"},[o("h4",[t._v("How it Works")]),o("ul",[o("li",[t._v("As an influencer, create a listing for your sponsored post describing the type of post, the cost for an artist, and information relative to the post")]),o("li",[t._v("You then have 10 days to create and post a TikTok, at which point you are paid for promoting the track.  The track must then remain posted for 1 month.")]),o("li",[t._v("As the post’s sphere of influence grows, so will the artists and in turn so will the promoters. ")])])])])],1)],1)],1)},a=[],n=e("a37d"),i={components:{Navbar:n["a"]},data:function(){return{email:"",password:"",dismissSecs:5,dismissCountDown:0,errorMsg:"",msgVariant:"",status:"",accountType:"Influencer",name:"",dob:""}},mounted:function(){var t=this,s=this;this.$store.watch(function(t){return t.status},function(e){t.status=e,"failure"==t.status?(t.msgVariant="danger",t.errorMsg=t.$store.getters.error,t.showAlert()):"success"==t.status&&s.$router.push("/")})},methods:{countDownChanged:function(t){var s=this;s.dismissCountDown=t},showAlert:function(){var t=this;t.dismissCountDown=t.dismissSecs},signUp:function(){var t=this,s={email:t.email,password:t.password,accountType:t.accountType,dob:t.dob,name:t.name};t.$store.dispatch("signUpAction",s)}}},r=i,c=(e("6277"),e("2877")),l=Object(c["a"])(r,o,a,!1,null,"338c770b",null);s["default"]=l.exports},d599:function(t,s,e){"use strict";var o=e("dc26"),a=e.n(o);a.a},dc26:function(t,s,e){},f8d5:function(t,s,e){},fae8:function(t,s,e){"use strict";e.r(s);var o=function(){var t=this,s=t.$createElement,o=t._self._c||s;return o("div",{staticClass:"body-block"},[o("Navbar"),o("b-container",{staticClass:"head mt-3"},[o("b-row",[o("b-col",{staticClass:"col-12"},[o("h1",[t._v("For Artists")])])],1)],1),o("b-container",{staticClass:"block-1 p0 m0"},[o("b-row",{staticClass:"my-3 top-block"},[o("b-col",{staticClass:"lead-text"},[o("h2",[t._v("Connecting the Music Industry...")]),o("p",[t._v("Tikify is a unique network of artists and influencers, collaborating together to blow up viral content on TikTok and beyond. We provide our clients the support and guidance needed to grow and explode with relevant and popular artists catered to your following.")])])],1)],1),o("img",{staticClass:"divider",attrs:{src:e("73f4")}}),o("b-container",[o("b-row",{staticClass:"how-to-gray justify-content-center mb-3"},[o("b-col",{staticClass:"col-10 my-3 py-3"},[o("div",{staticClass:"white-box p-3"},[o("div",{staticClass:"sign-up"},[o("p",[t._v("Create a new account")]),o("b-alert",{attrs:{dismissible:"",show:t.dismissCountDown,variant:t.msgVariant},on:{dismissed:function(s){t.dismissCountDown=0},"dismiss-count-down":t.countDownChanged}},[t._v(t._s(t.errorMsg))]),o("b-form-input",{attrs:{type:"text",placeholder:"Enter your name"},model:{value:t.name,callback:function(s){t.name=s},expression:"name"}}),o("b-form-input",{attrs:{type:"email",placeholder:"Enter your email"},model:{value:t.email,callback:function(s){t.email=s},expression:"email"}}),o("b-form-input",{attrs:{type:"password",placeholder:"Enter your Password"},model:{value:t.password,callback:function(s){t.password=s},expression:"password"}}),o("p",[t._v("Date of Birth")]),o("b-form-input",{attrs:{type:"date",label:"Enter your date of birth"},model:{value:t.dob,callback:function(s){t.dob=s},expression:"dob"}}),o("b-button",{staticClass:"home-nav-btn",attrs:{pill:"",variant:"primary"},on:{click:t.signUp}},[t._v("Sign Up")])],1)])])],1),o("b-row",{staticClass:"mt-4 mb-3"},[o("b-col",{staticClass:"lead-text text-block"},[o("h3",[t._v("Grow Your Brand")]),o("p",[t._v("Expand your TikTok influence and grow a massive following. Sign up now to join Tikify’s exclusive TikTok Growth Tips Newsletter, providing practical and implementable solutions proven to foster growth.")])]),o("b-col",{staticClass:"lead-text text-block"},[o("h3",[t._v("Thrive Together")]),o("p",[t._v("Tikify connects influencers with growing artists. As an artists sway grows so will the influencers, and as an influencers influence grows, so will the artist’s. Make money together and gain more influence by ensuring each other's success.  ")])])],1),o("b-row",{staticClass:"mb-4"},[o("b-col",{staticClass:"lead-text text-block"},[o("h3",[t._v("Stay In Tune")]),o("p",[t._v("Work together with established and hot, new artists in the music industry. Tikify creates relevant connections ensuring mutually profitable and meaningful relationships. Be on the edge of the latest trends and smash hits. ")])])],1),o("b-row",{staticClass:"how-to justify-content-center mb-3"},[o("b-col",{staticClass:"col-10 my-3 py-3"},[o("div",{staticClass:"white-box p-3"},[o("h4",[t._v("How it Works")]),o("ul",[o("li",[t._v("As an influencer, create a listing for your sponsored post describing the type of post, the cost for an artist, and information relative to the post")]),o("li",[t._v("You then have 10 days to create and post a TikTok, at which point you are paid for promoting the track.  The track must then remain posted for 1 month.")]),o("li",[t._v("As the post’s sphere of influence grows, so will the artists and in turn so will the promoters. ")])])])])],1)],1)],1)},a=[],n=e("a37d"),i={components:{Navbar:n["a"]},data:function(){return{email:"",password:"",dismissSecs:5,dismissCountDown:0,errorMsg:"",msgVariant:"",status:"",accountType:"Influencer",name:"",dob:""}},mounted:function(){var t=this,s=this;this.$store.watch(function(t){return t.status},function(e){t.status=e,"failure"==t.status?(t.msgVariant="danger",t.errorMsg=t.$store.getters.error,t.showAlert()):"success"==t.status&&s.$router.push("/")})},methods:{countDownChanged:function(t){var s=this;s.dismissCountDown=t},showAlert:function(){var t=this;t.dismissCountDown=t.dismissSecs},signUp:function(){var t=this,s={email:t.email,password:t.password,accountType:t.accountType,dob:t.dob,name:t.name};t.$store.dispatch("signUpAction",s)}}},r=i,c=(e("19e8"),e("2877")),l=Object(c["a"])(r,o,a,!1,null,"cea41be2",null);s["default"]=l.exports}}]);
//# sourceMappingURL=influencerinfo.b459c2fe.js.map