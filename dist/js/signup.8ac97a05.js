(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["signup"],{"5c9c":function(s,t,a){"use strict";a.r(t);var n=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"sign-up"},[a("Navbar"),a("p",[s._v("Create a new account")]),a("b-alert",{attrs:{dismissible:"",show:s.dismissCountDown,variant:s.msgVariant},on:{dismissed:function(t){s.dismissCountDown=0},"dismiss-count-down":s.countDownChanged}},[s._v(s._s(s.errorMsg))]),a("input",{directives:[{name:"model",rawName:"v-model",value:s.email,expression:"email"}],attrs:{type:"text",placeholder:"Email"},domProps:{value:s.email},on:{input:function(t){t.target.composing||(s.email=t.target.value)}}}),a("br"),a("input",{directives:[{name:"model",rawName:"v-model",value:s.password,expression:"password"}],attrs:{type:"password",placeholder:"Password"},domProps:{value:s.password},on:{input:function(t){t.target.composing||(s.password=t.target.value)}}}),a("br"),a("b-button",{staticClass:"signup-btn",attrs:{pill:"",variant:"primary"},on:{click:s.signUp}},[s._v("Sign Up")])],1)},e=[],r=a("a37d"),i={name:"signUp",components:{Navbar:r["a"]},mounted:function(){var s=this;this.$store.watch(function(s){return s.status},function(t){s.status=t,"failure"==s.status?(s.msgVariant="danger",s.errorMsg=s.$store.getters.error,s.showAlert()):"success"==s.status&&(s.msgVariant="success",s.errorMsg="Account created, please return to log in.",s.showAlert())})},data:function(){return{email:"",password:"",dismissSecs:5,dismissCountDown:0,errorMsg:"",msgVariant:"",status:""}},methods:{countDownChanged:function(s){var t=this;t.dismissCountDown=s},showAlert:function(){var s=this;s.dismissCountDown=s.dismissSecs},signUp:function(){var s=this,t={email:s.email,password:s.password};s.$store.dispatch("signUpAction",t)}}},o=i,c=a("2877"),u=Object(c["a"])(o,n,e,!1,null,"31a0a3d4",null);t["default"]=u.exports},7748:function(s,t,a){"use strict";var n=a("bd41"),e=a.n(n);e.a},a37d:function(s,t,a){"use strict";var n=function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("div",{staticClass:"navbar-div"},[n("b-navbar",{attrs:{type:"light",variant:"light"}},[n("img",{staticClass:"nav-logo",attrs:{src:a("cf05")}})])],1)},e=[],r=a("8c4f"),i=a("2b0e");i["default"].use(r["a"]);var o={name:"navbar",methods:{goBack:function(){var s=this;s.$router.go(-1)}},props:{}},c=o,u=(a("7748"),a("2877")),l=Object(u["a"])(c,n,e,!1,null,"c7bc82a6",null);t["a"]=l.exports},bd41:function(s,t,a){},cf05:function(s,t,a){s.exports=a.p+"img/logo.ba3bf456.png"}}]);
//# sourceMappingURL=signup.8ac97a05.js.map