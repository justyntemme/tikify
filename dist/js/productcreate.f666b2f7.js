(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["productcreate"],{"2a6a":function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"footer"},[e("b-container",[e("b-row",[e("b-col",{staticClass:"footer-menu-col"},[e("router-link",{attrs:{to:{name:"home"}}},[e("b-button",{staticClass:"footer-menu-btn",attrs:{variant:"secondary"}},[e("i",{staticClass:"fas fa-home"})])],1)],1),e("b-col",[e("router-link",{attrs:{to:{name:"productcreate"}}},[e("b-button",{staticClass:"footer-menu-btn",attrs:{variant:"secondary"}},[e("i",{staticClass:"fas fa-plus-square"})])],1)],1),e("b-col",[e("router-link",{attrs:{to:{name:"products"}}},[e("b-button",{staticClass:"footer-menu-btn",attrs:{variant:"secondary"}},[e("i",{staticClass:"fas fa-list"})])],1)],1),e("b-col",[e("router-link",{attrs:{to:{name:"sales"}}},[e("b-button",{staticClass:"footer-menu-btn",attrs:{variant:"secondary"}},[e("i",{staticClass:"fas fa-money-bill"})])],1)],1)],1)],1)],1)},o=[],r={},c=r,n=(e("863a"),e("2877")),i=Object(n["a"])(c,s,o,!1,null,"a4c6841a",null);a["a"]=i.exports},"473a":function(t,a,e){},"754c":function(t,a,e){t.exports=e.p+"img/create-listing-block.cb4ef813.svg"},"863a":function(t,a,e){"use strict";var s=e("473a"),o=e.n(s);o.a},a3ce:function(t,a,e){},a762:function(t,a,e){t.exports=e.p+"img/background.366bb87b.svg"},c351:function(t,a,e){"use strict";var s=e("a3ce"),o=e.n(s);o.a},c6bb:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"product"},[s("b-container",[s("b-row",{staticClass:"justify-content-center"},[s("b-col",{staticClass:"col-md-12 col-lg-4 align-self-center"},[s("img",{staticClass:"create-listing-block",attrs:{src:e("754c")}}),s("br")])],1),s("b-row",{staticClass:"justify-content-center"},[s("b-col",{staticClass:"col-md-12 col-lg-4 "},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.product.price,expression:"product.price"}],attrs:{type:"text"},domProps:{value:t.product.price},on:{input:function(a){a.target.composing||t.$set(t.product,"price",a.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.product.type,expression:"product.type"}],attrs:{type:"text"},domProps:{value:t.product.type},on:{input:function(a){a.target.composing||t.$set(t.product,"type",a.target.value)}}}),s("b-form-textarea",{attrs:{id:"textarea",placeholder:"Enter something...",rows:"4","max-rows":"10"},model:{value:t.product.info,callback:function(a){t.$set(t.product,"info",a)},expression:"product.info"}})],1)],1),s("b-row",{staticClass:"justify-content-end"},[s("div",{staticClass:"col-4"},[s("i",{staticClass:"fas fa-save-5x",on:{click:t.update}})])])],1),s("img",{staticClass:"divider-img-bottom",attrs:{src:e("a762")}}),s("FooterMenu")],1)},o=[],r=e("8aa5"),c=e.n(r),n=e("2a6a"),i={components:{FooterMenu:n["a"]},data:function(){return{product:{}}},mounted:function(){},methods:{save:function(){var t=this;t.product.uid=c.a.auth().currentUser.uid,c.a.firestore().collection("products").add(t.product),t.$router.push({path:"/"})}}},u=i,l=(e("c351"),e("2877")),p=Object(l["a"])(u,s,o,!1,null,"5c2fbf02",null);a["default"]=p.exports}}]);
//# sourceMappingURL=productcreate.f666b2f7.js.map