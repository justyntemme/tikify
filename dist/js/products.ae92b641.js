(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["products"],{2447:function(t,a,s){"use strict";var n=s("30a3"),r=s.n(n);r.a},"2a6a":function(t,a,s){"use strict";var n=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"footer"},[s("b-container",[s("b-row",[s("b-col",{staticClass:"footer-menu-col"},[s("router-link",{attrs:{to:{name:"home"}}},[s("b-button",{staticClass:"footer-menu-btn",attrs:{variant:"secondary"}},[s("i",{staticClass:"fas fa-home"})])],1)],1),s("b-col",[s("router-link",{attrs:{to:{name:"productcreate"}}},[s("b-button",{staticClass:"footer-menu-btn",attrs:{variant:"secondary"}},[s("i",{staticClass:"fas fa-plus-square"})])],1)],1),s("b-col",[s("router-link",{attrs:{to:{name:"products"}}},[s("b-button",{staticClass:"footer-menu-btn",attrs:{variant:"secondary"}},[s("i",{staticClass:"fas fa-list"})])],1)],1),s("b-col",[s("router-link",{attrs:{to:{name:"sales"}}},[s("b-button",{staticClass:"footer-menu-btn",attrs:{variant:"secondary"}},[s("i",{staticClass:"fas fa-money-bill"})])],1)],1)],1)],1)],1)},r=[],o={},c=o,e=(s("863a"),s("2877")),i=Object(e["a"])(c,n,r,!1,null,"a4c6841a",null);a["a"]=i.exports},"30a3":function(t,a,s){},"473a":function(t,a,s){},"863a":function(t,a,s){"use strict";var n=s("473a"),r=s.n(n);r.a},"96fc":function(t,a,s){"use strict";s.r(a);var n=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("b-container",[s("h3",{staticClass:"product-title "},[t._v("Products >")]),s("b-row",{staticClass:"b-row col-12 align-items-center"},t._l(t.products,function(a){return s("b-col",{staticClass:"col-sm-4 product-card-col justify-content-center"},[s("router-link",{attrs:{to:{name:"product",params:{product:a}}}},[s("div",{staticClass:"product-card"},[s("h3",{staticClass:"card-title"},[t._v(t._s(a.type))]),s("p",{staticClass:"card-text"},[t._v(t._s(a.price))])])])],1)}),1),s("FooterMenu")],1)},r=[],o=s("2a6a"),c={components:{FooterMenu:o["a"]},mounted:function(){var t=this,a=this;a.$store.dispatch("getProductsAction"),this.$store.watch(function(t){return t.products},function(a){t.products=a}),this.$store.watch(function(t){return t.sales},function(a){t.sales=a})},data:function(){return{products:{}}}},e=c,i=(s("2447"),s("2877")),u=Object(i["a"])(e,n,r,!1,null,"4abe2ff2",null);a["default"]=u.exports}}]);
//# sourceMappingURL=products.ae92b641.js.map