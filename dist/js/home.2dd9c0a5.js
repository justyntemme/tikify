(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["home"],{"10ff":function(t,s,a){},"2a6a":function(t,s,a){"use strict";var r=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"footer"},[a("b-container",[a("b-row",[a("b-col",{staticClass:"footer-menu-col"},[a("router-link",{attrs:{to:{name:"home"}}},[a("b-button",{staticClass:"footer-menu-btn",attrs:{variant:"secondary"}},[a("i",{staticClass:"fas fa-home"})])],1)],1),a("b-col",[a("router-link",{attrs:{to:{name:"productcreate"}}},[a("b-button",{staticClass:"footer-menu-btn",attrs:{variant:"secondary"}},[a("i",{staticClass:"fas fa-plus-square"})])],1)],1),a("b-col",[a("router-link",{attrs:{to:{name:"products"}}},[a("b-button",{staticClass:"footer-menu-btn",attrs:{variant:"secondary"}},[a("i",{staticClass:"fas fa-list"})])],1)],1),a("b-col",[a("router-link",{attrs:{to:{name:"sales"}}},[a("b-button",{staticClass:"footer-menu-btn",attrs:{variant:"secondary"}},[a("i",{staticClass:"fas fa-money-bill"})])],1)],1)],1)],1)],1)},n=[],e={},o=e,c=(a("863a"),a("2877")),i=Object(c["a"])(o,r,n,!1,null,"a4c6841a",null);s["a"]=i.exports},"473a":function(t,s,a){},"4c13":function(t,s,a){t.exports=a.p+"img/bottom-border.268586f1.jpeg"},"863a":function(t,s,a){"use strict";var r=a("473a"),n=a.n(r);n.a},"9b19":function(t,s,a){t.exports=a.p+"img/logo.bf9be6a0.svg"},a37d:function(t,s,a){"use strict";var r=function(){var t=this,s=t.$createElement,r=t._self._c||s;return r("div",{staticClass:"navbar-div"},[r("b-navbar",{attrs:{type:"light",variant:"light"}},[r("img",{staticClass:"nav-logo",attrs:{src:a("9b19")}})])],1)},n=[],e=a("8c4f"),o=a("2b0e");o["default"].use(e["a"]);var c={name:"navbar",methods:{goBack:function(){var t=this;t.$router.go(-1)}},props:{}},i=c,u=(a("d599"),a("2877")),l=Object(u["a"])(i,r,n,!1,null,"dff7f65e",null);s["a"]=l.exports},a762:function(t,s,a){t.exports=a.p+"img/background.366bb87b.svg"},bb51:function(t,s,a){"use strict";a.r(s);var r=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"home"},[a("Navbar"),a("News"),a("FooterMenu")],1)},n=[],e=a("a37d"),o=a("2a6a"),c=function(){var t=this,s=t.$createElement,r=t._self._c||s;return r("div",{staticClass:"news"},[r("h2",[t._v("Posts for Sale")]),r("b-row",{staticClass:"news-row scrolling-wrapper "},t._l(t.products,function(s){return r("b-col",[r("router-link",{staticStyle:{overflow:"visible"},attrs:{to:{name:"product",params:{product:s}}}},[r("b-card",{staticClass:"card",attrs:{title:s.type,"sub-title":s.price}},[r("b-card-text",[t._v("\n                  "+t._s(t._f("truncate")(s.info))+"\n                ")])],1)],1)],1)}),1),r("img",{staticClass:"divider-img",attrs:{src:a("4c13")}}),r("h2",[t._v("Sales")]),r("b-row",{staticClass:"news-row scrolling-wrapper "},t._l(t.sales,function(s){return r("b-col",[r("router-link",{attrs:{to:{name:"sale",params:{sale:s}}}},[r("b-card",{staticClass:"card",attrs:{title:s.type,"sub-title":s.price}},[r("b-card-text",[t._v("\n                  "+t._s(t._f("truncate")(s.info))+"\n                ")]),r("b-card-text",[t._v(t._s(s.duration)+".")])],1)],1)],1)}),1),r("img",{staticClass:"divider-img-bottom",attrs:{src:a("a762")}})],1)},i=[],u={data:function(){return{sales:{},products:{}}},filters:{truncate:function(t){return 20<t.length&&(t=t.substring(0,17)+"..."),t}},components:{},mounted:function(){var t=this,s=this;s.$store.dispatch("getSalesAction"),s.$store.dispatch("getProductsAction"),this.$store.watch(function(t){return t.products},function(s){t.products=s}),this.$store.watch(function(t){return t.sales},function(s){t.sales=s})}},l=u,f=(a("ca88"),a("2877")),b=Object(f["a"])(l,c,i,!1,null,"11a91df1",null),d=b.exports,p={name:"home",mounted:function(){var t=this,s=this;s.$store.dispatch("getProductsAction"),s.$store.dispatch("getSalesAction"),this.$store.watch(function(t){return t.products},function(s){t.products=s}),this.$store.watch(function(t){return t.sales},function(s){t.sales=s})},components:{FooterMenu:o["a"],News:d,Navbar:e["a"]},data:function(){return{products:{},sales:{}}},methods:{}},m=p,v=Object(f["a"])(m,r,n,!1,null,null,null);s["default"]=v.exports},ca88:function(t,s,a){"use strict";var r=a("10ff"),n=a.n(r);n.a},d599:function(t,s,a){"use strict";var r=a("dc26"),n=a.n(r);n.a},dc26:function(t,s,a){}}]);
//# sourceMappingURL=home.2dd9c0a5.js.map