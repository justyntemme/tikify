(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["products"],{"2a6a":function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"footer"},[r("b-container",[r("b-row",["home"!=t.$router.currentRoute.name?r("b-col",{staticClass:"footer-menu-col"},[r("router-link",{attrs:{to:{name:"home"}}},[r("b-button",{staticClass:"footer-menu-btn",attrs:{variant:"secondary"}},[r("i",{staticClass:"fas fa-home"})])],1)],1):t._e(),"accountinfluencer"!=t.$router.currentRoute.name?r("b-col",[r("router-link",{attrs:{to:{name:"accountinfluencer"}}},[r("b-button",{staticClass:"footer-menu-btn",attrs:{variant:"secondary"}},[r("i",{staticClass:"fas fa-user"})])],1)],1):t._e(),"findinfluencer"!=t.$router.currentRoute.name?r("b-col",[r("router-link",{attrs:{to:{name:"findinfluencer"}}},[r("b-button",{staticClass:"footer-menu-btn",attrs:{variant:"secondary"}},[r("i",{staticClass:"fas fa-search"})])],1)],1):t._e(),"wallet"!=t.$router.currentRoute.name?r("b-col",[r("router-link",{attrs:{to:{name:"wallet"}}},[r("b-button",{staticClass:"footer-menu-btn",attrs:{variant:"secondary"}},[r("i",{staticClass:"fas fa-wallet"})])],1)],1):t._e(),"product"==t.$router.currentRoute.name?r("b-col",[r("router-link",{attrs:{to:{name:"productedit",params:{product:this.$parent.product}}}},[r("i",{staticClass:"edit-btn fas fa-pencil-alt"})])],1):t._e(),"productedit"==t.$router.currentRoute.name||"productcreate"==t.$router.currentRoute.name||"accountinfluencer"===t.$router.currentRoute.name?r("b-col",[r("i",{staticClass:"submit-btn fas fa-2x fa-check-circle",on:{click:this.$parent.update}})]):t._e()],1)],1)],1)},n=[],s={mounted:function(){}},c=s,o=(r("c780"),r("2877")),u=Object(o["a"])(c,a,n,!1,null,"81de133e",null);e["a"]=u.exports},"78c0":function(t,e,r){},"96fc":function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-container",[r("h3",{staticClass:"product-title "},[t._v("Products >")]),r("b-row",{staticClass:"b-row justify-content-center"},t._l(t.products,function(e){return r("b-col",{staticClass:"col col-12 product-card-col justify-content-center"},[r("div",{staticClass:"card"},[r("div",{staticClass:"card-header"},[t._v("\n                    "+t._s(e.type)+"\n                ")]),r("div",{staticClass:"card-body"},[r("h5",{staticClass:"card-title"},[t._v(t._s(e.price))]),r("p",{staticClass:"card-text"},[t._v(t._s(t._f("truncate")(e.info)))]),r("router-link",{attrs:{to:{name:"product",params:{product:e}}}},[r("a",{staticClass:"btn btn-primary",attrs:{href:"#"}},[t._v("Details")])])],1)])])}),1),r("FooterMenu")],1)},n=[],s=r("2a6a"),c={components:{FooterMenu:s["a"]},filters:{truncate:function(t){return 20<t.length&&(t=t.substring(0,17)+"..."),t}},mounted:function(){var t=this,e=this;e.$store.dispatch("getProductsAction"),this.$store.watch(function(t){return t.products},function(e){t.products=e}),this.$store.watch(function(t){return t.sales},function(e){t.sales=e})},data:function(){return{products:{}}}},o=c,u=(r("f6ad"),r("2877")),i=Object(u["a"])(o,a,n,!1,null,"41af3701",null);e["default"]=i.exports},c780:function(t,e,r){"use strict";var a=r("d38e"),n=r.n(a);n.a},d38e:function(t,e,r){},f6ad:function(t,e,r){"use strict";var a=r("78c0"),n=r.n(a);n.a}}]);
//# sourceMappingURL=products.c339946c.js.map