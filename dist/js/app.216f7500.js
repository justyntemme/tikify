(function(e){function t(t){for(var r,o,s=t[0],d=t[1],f=t[2],p=t[3]||[],h=0,b=[];h<s.length;h++)o=s[h],u[o]&&b.push(u[o][0]),u[o]=0;for(r in d)Object.prototype.hasOwnProperty.call(d,r)&&(e[r]=d[r]);l&&l(t),p.forEach(function(e){if(void 0===u[e]){u[e]=null;var t=document.createElement("link");i.nc&&t.setAttribute("nonce",i.nc),t.rel="prefetch",t.as="script",t.href=c(e),document.head.appendChild(t)}});while(b.length)b.shift()();return a.push.apply(a,f||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,o=1;o<n.length;o++){var c=n[o];0!==u[c]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},u={app:0},a=[];function c(e){return i.p+"js/"+({about:"about",addcredit:"addcredit",home:"home",influencerinfo:"influencerinfo",login:"login",product:"product",productcreate:"productcreate",productedit:"productedit",products:"products",sales:"sales",signup:"signup"}[e]||e)+"."+{about:"0cffe4bd",addcredit:"04a589b1",home:"b85c9df1",influencerinfo:"3929ba66",login:"3c06fb87",product:"bc260ac6",productcreate:"e0fb275b",productedit:"14bd2b60",products:"d30041b8",sales:"646f49ee",signup:"82f5141c"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={about:1,addcredit:1,home:1,influencerinfo:1,login:1,product:1,productcreate:1,productedit:1,products:1,sales:1,signup:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise(function(t,n){for(var r="css/"+({about:"about",addcredit:"addcredit",home:"home",influencerinfo:"influencerinfo",login:"login",product:"product",productcreate:"productcreate",productedit:"productedit",products:"products",sales:"sales",signup:"signup"}[e]||e)+"."+{about:"761b1dbf",addcredit:"9b3fa33d",home:"fa39f326",influencerinfo:"9f454f47",login:"5cdaa7a7",product:"a98c98a1",productcreate:"63cc38fa",productedit:"94b09e29",products:"79099b36",sales:"83adf998",signup:"449ee89a"}[e]+".css",u=i.p+r,a=document.getElementsByTagName("link"),c=0;c<a.length;c++){var s=a[c],d=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(d===r||d===u))return t()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){s=f[c],d=s.getAttribute("data-href");if(d===r||d===u)return t()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=t,l.onerror=function(t){var r=t&&t.target&&t.target.src||u,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=r,delete o[e],l.parentNode.removeChild(l),n(a)},l.href=u;var p=document.getElementsByTagName("head")[0];p.appendChild(l)}).then(function(){o[e]=0}));var r=u[e];if(0!==r)if(r)t.push(r[2]);else{var a=new Promise(function(t,n){r=u[e]=[t,n]});t.push(r[2]=a);var s,d=document.createElement("script");d.charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.src=c(e),s=function(t){d.onerror=d.onload=null,clearTimeout(f);var n=u[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src,a=new Error("Loading chunk "+e+" failed.\n("+r+": "+o+")");a.type=r,a.request=o,n[1](a)}u[e]=void 0}};var f=setTimeout(function(){s({type:"timeout",target:d})},12e4);d.onerror=d.onload=s,document.head.appendChild(d)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],d=s.push.bind(s);s.push=t,s=s.slice();for(var f=0;f<s.length;f++)t(s[f]);var l=d;t([[],{},0,["about"]]),a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"199c":function(e,t){},"23be":function(e,t,n){"use strict";var r=n("199c"),o=n.n(r);t["default"]=o.a},"3dfd":function(e,t,n){"use strict";var r=n("ee68"),o=n("23be"),u=(n("8285"),n("2877")),a=Object(u["a"])(o["default"],r["a"],r["b"],!1,null,null,null);t["default"]=a.exports},"56d7":function(e,t,n){"use strict";n.r(t);n("744f"),n("6095"),n("6c7b"),n("d25f"),n("7514"),n("20d6"),n("f3e2"),n("1c4c"),n("6762"),n("57e7"),n("2caf"),n("cadf"),n("9865"),n("6d67"),n("e804"),n("0cd8"),n("48f8"),n("759f"),n("55dd"),n("d04f"),n("78ce"),n("8ea5"),n("0298"),n("c8ce"),n("87b3"),n("d92a"),n("217b"),n("7f7f"),n("f400"),n("7f25"),n("536b"),n("d9ab"),n("f9ab"),n("32d7"),n("25c9"),n("9f3c"),n("042e"),n("c7c6"),n("f4ff"),n("049f"),n("7872"),n("a69f"),n("0b21"),n("6c1a"),n("c7c62"),n("84b4"),n("c5f6"),n("2e37"),n("fca0"),n("7cdf"),n("ee1d"),n("b1b1"),n("87f3"),n("9278"),n("5df2"),n("04ff"),n("f751"),n("8478"),n("4504"),n("fee7"),n("1c01"),n("58b2"),n("ffc1"),n("0d6d"),n("9986"),n("8e6e"),n("25db"),n("e4f7"),n("b9a1"),n("64d5"),n("9aea"),n("db97"),n("66c8"),n("57f0"),n("165b"),n("456d"),n("cf6a"),n("fd24"),n("8615"),n("551c"),n("097d"),n("df1b"),n("2397"),n("88ca"),n("ba16"),n("d185"),n("ebde"),n("2d34"),n("f6b3"),n("2251"),n("c698"),n("a19f"),n("9253"),n("9275"),n("3b2b"),n("3846"),n("4917"),n("a481"),n("28a5"),n("386d"),n("6b54"),n("4f7f"),n("8a81"),n("ac4d"),n("8449"),n("9c86"),n("fa83"),n("48c0"),n("a032"),n("aef6"),n("d263"),n("6c37"),n("9ec8"),n("5695"),n("2fdb"),n("d0b0"),n("5df3"),n("b54a"),n("f576"),n("ed50"),n("788d"),n("14b9"),n("f386"),n("f559"),n("1448"),n("673e"),n("242a"),n("4f37"),n("c66f"),n("262f"),n("b05c"),n("34ef"),n("6aa2"),n("15ac"),n("af56"),n("b6e4"),n("9c29"),n("63d9"),n("4dda"),n("10ad"),n("c02b"),n("4795"),n("130f"),n("ac6a"),n("96cf"),n("0cdd");var r=n("2b0e"),o=n("5f5b");n("ab8b"),n("2dd8");r["default"].use(o["a"]);var u=n("3dfd"),a=n("8c4f"),c=n("8aa5"),i=n.n(c);r["default"].use(a["a"]);var s=new a["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",meta:{requiresAuth:!0},component:function(){return n.e("home").then(n.bind(null,"bb51"))}},{path:"/products",name:"products",meta:{requiresAuth:!0},component:function(){return n.e("products").then(n.bind(null,"96fc"))}},{path:"/sales",name:"sales",meta:{requiresAuth:!0},component:function(){return n.e("sales").then(n.bind(null,"af7c"))}},{path:"/influencers",name:"influencerinfo",meta:{requiresAuth:!1},component:function(){return n.e("influencerinfo").then(n.bind(null,"c4ee"))}},{path:"/artist/wallet/add",name:"addcredit",meta:{requiresAuth:!0},component:function(){return n.e("addcredit").then(n.bind(null,"9140"))}},{path:"/edit",name:"productedit",props:{product:{}},component:function(){return n.e("productedit").then(n.bind(null,"d388"))}},{path:"/product",name:"product",meta:{requiresAuth:!0},props:{product:{}},component:function(){return n.e("product").then(n.bind(null,"d2f1"))}},{path:"/product/create",name:"productcreate",meta:{requiresAuth:!0},component:function(){return n.e("productcreate").then(n.bind(null,"c6bb"))}},{path:"/login",name:"login",meta:{guest:!0},component:function(){return n.e("login").then(n.bind(null,"a55b"))}},{path:"/signup",name:"signup",meta:{guest:!0},component:function(){return n.e("signup").then(n.bind(null,"5c9c"))}},{path:"/signup/complete",name:"aftersignup",meta:{guest:!0},component:function(){return n.e("signup").then(n.bind(null,"2db7"))}},{path:"/about",name:"about",meta:{guest:!0},component:function(){return n.e("about").then(n.bind(null,"f820"))}}]}),d=s;s.beforeEach(function(e,t,n){i.a.auth().onAuthStateChanged(function(t){"login"!=e.path&&(console.log(i.a.auth().currentUser),r&&!t?n("about"):n())});var r=e.matched.some(function(e){return e.meta.requiresAuth})});var f=n("2f62");r["default"].use(f["a"]);var l=new f["a"].Store({state:{user:"",status:"",error:"",db:{},products:{},sales:{}},getters:{status:function(e){return e.status},user:function(e){return e.user},error:function(e){return e.error},products:function(e){return e.products}},mutations:{setUser:function(e,t){e.user=t},removeUser:function(e){e.user=null},setStatus:function(e,t){e.status=t},setError:function(e,t){e.error=t},setProducts:function(e,t){e.products=t},setSales:function(e,t){e.sales=t}},actions:{signUpAction:function(e,t){var n=e.commit,r=c["firestore"]();n("setStatus","loading"),c["auth"]().createUserWithEmailAndPassword(t.email,t.password).then(function(e){n("setUser",e.user.uid),n("setStatus","success"),n("setError",null),r.collection("users").doc(e.user.uid).set({email:t.email,accountType:t.accountType,name:t.name,dob:t.dob}).catch(function(e){alert(e.message)})}).catch(function(e){n("setStatus","failure"),n("setError",e.message)})},signInAction:function(e,t){var n=e.commit;c["auth"]().setPersistence(c["auth"].Auth.Persistence.LOCAL).then(function(){c["auth"]().signInWithEmailAndPassword(t.email,t.password).then(function(e){n("setUser",e.user.uid),n("setStatus","success"),n("setError",null)}).catch(function(e){n("setStatus","failure"),n("setError",e.message)})})},signOutAction:function(){},getProductsAction:function(e){var t=e.commit,n=[],r=c["firestore"](),o=r.collection("products").where("uid","==",c["auth"]().currentUser.uid);o.onSnapshot(function(e){e.forEach(function(e){var t=e.data();t.id=e.id,n.push(t)}),t("setProducts",n)})},getSalesAction:function(e){var t=e.commit,n=[],r=c["firestore"](),o=r.collection("sales").where("uid","==",c["auth"]().currentUser.uid);o.onSnapshot(function(e){e.forEach(function(e){var t=e.data();t.id=e.id,n.push(t)}),t("setSales",n)})}}}),p=(n("647c"),{apiKey:"AIzaSyBq6Yj3sIwPW20jYGtUKN67oQtodvVJvFM",authDomain:"tikify-e74ea.firebaseapp.com",databaseURL:"https://tikify-e74ea.firebaseio.com",projectId:"tikify-e74ea",storageBucket:"tikify-e74ea.appspot.com",messagingSenderId:"476064564340",appId:"1:476064564340:web:c616ce182fa5cd78"});i.a.initializeApp(p),r["default"].config.productionTip=!1,new r["default"]({router:d,store:l,render:function(e){return e(u["default"])}}).$mount("#app"),i.a.auth().onAuthStateChanged(function(){app||(app=new r["default"]({router:d,store:l,render:function(e){return e(u["default"])}}).$mount("#app"))})},"647c":function(e,t,n){},8285:function(e,t,n){"use strict";var r=n("8e33"),o=n.n(r);o.a},"8e33":function(e,t,n){},ee68:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app",attrs:{id:"app"}},[n("link",{attrs:{rel:"stylesheet",type:"text/css",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.8.2/css/all.css"}}),n("router-view")],1)},o=[];n.d(t,"a",function(){return r}),n.d(t,"b",function(){return o})}});
//# sourceMappingURL=app.216f7500.js.map