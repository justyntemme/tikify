(function(e){function t(t){for(var r,o,i=t[0],d=t[1],f=t[2],l=t[3]||[],h=0,b=[];h<i.length;h++)o=i[h],a[o]&&b.push(a[o][0]),a[o]=0;for(r in d)Object.prototype.hasOwnProperty.call(d,r)&&(e[r]=d[r]);p&&p(t),l.forEach(function(e){if(void 0===a[e]){a[e]=null;var t=document.createElement("link");s.nc&&t.setAttribute("nonce",s.nc),t.rel="prefetch",t.as="script",t.href=c(e),document.head.appendChild(t)}});while(b.length)b.shift()();return u.push.apply(u,f||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(r=!1)}r&&(u.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},o={app:0},a={app:0},u=[];function c(e){return s.p+"js/"+({about:"about",home:"home",login:"login",product:"product",productcreate:"productcreate",productedit:"productedit",products:"products",sales:"sales",signup:"signup"}[e]||e)+"."+{about:"bc3bcbbf",home:"bea371e6",login:"fa884190",product:"4f177595",productcreate:"0e72a925",productedit:"005484ca",products:"ae92b641",sales:"f434fdde",signup:"16c11760"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={about:1,home:1,login:1,product:1,productcreate:1,productedit:1,products:1,sales:1,signup:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise(function(t,n){for(var r="css/"+({about:"about",home:"home",login:"login",product:"product",productcreate:"productcreate",productedit:"productedit",products:"products",sales:"sales",signup:"signup"}[e]||e)+"."+{about:"54371326",home:"332c69ec",login:"f1f582f7",product:"cfca2fa6",productcreate:"9a4146a6",productedit:"f4fcb48d",products:"1782c964",sales:"cfca2fa6",signup:"7c9391a1"}[e]+".css",a=s.p+r,u=document.getElementsByTagName("link"),c=0;c<u.length;c++){var i=u[c],d=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(d===r||d===a))return t()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){i=f[c],d=i.getAttribute("data-href");if(d===r||d===a)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||a,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete o[e],p.parentNode.removeChild(p),n(u)},p.href=a;var l=document.getElementsByTagName("head")[0];l.appendChild(p)}).then(function(){o[e]=0}));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise(function(t,n){r=a[e]=[t,n]});t.push(r[2]=u);var i,d=document.createElement("script");d.charset="utf-8",d.timeout=120,s.nc&&d.setAttribute("nonce",s.nc),d.src=c(e),i=function(t){d.onerror=d.onload=null,clearTimeout(f);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src,u=new Error("Loading chunk "+e+" failed.\n("+r+": "+o+")");u.type=r,u.request=o,n[1](u)}a[e]=void 0}};var f=setTimeout(function(){i({type:"timeout",target:d})},12e4);d.onerror=d.onload=i,document.head.appendChild(d)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],d=i.push.bind(i);i.push=t,i=i.slice();for(var f=0;f<i.length;f++)t(i[f]);var p=d;t([[],{},0,["about"]]),u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"199c":function(e,t){},"23be":function(e,t,n){"use strict";var r=n("199c"),o=n.n(r);t["default"]=o.a},"3dfd":function(e,t,n){"use strict";var r=n("6098"),o=n("23be"),a=(n("5c0b"),n("2877")),u=Object(a["a"])(o["default"],r["a"],r["b"],!1,null,null,null);t["default"]=u.exports},"56d7":function(e,t,n){"use strict";n.r(t);n("744f"),n("6095"),n("6c7b"),n("d25f"),n("7514"),n("20d6"),n("f3e2"),n("1c4c"),n("6762"),n("57e7"),n("2caf"),n("cadf"),n("9865"),n("6d67"),n("e804"),n("0cd8"),n("48f8"),n("759f"),n("55dd"),n("d04f"),n("78ce"),n("8ea5"),n("0298"),n("c8ce"),n("87b3"),n("d92a"),n("217b"),n("7f7f"),n("f400"),n("7f25"),n("536b"),n("d9ab"),n("f9ab"),n("32d7"),n("25c9"),n("9f3c"),n("042e"),n("c7c6"),n("f4ff"),n("049f"),n("7872"),n("a69f"),n("0b21"),n("6c1a"),n("c7c62"),n("84b4"),n("c5f6"),n("2e37"),n("fca0"),n("7cdf"),n("ee1d"),n("b1b1"),n("87f3"),n("9278"),n("5df2"),n("04ff"),n("f751"),n("8478"),n("4504"),n("fee7"),n("1c01"),n("58b2"),n("ffc1"),n("0d6d"),n("9986"),n("8e6e"),n("25db"),n("e4f7"),n("b9a1"),n("64d5"),n("9aea"),n("db97"),n("66c8"),n("57f0"),n("165b"),n("456d"),n("cf6a"),n("fd24"),n("8615"),n("551c"),n("097d"),n("df1b"),n("2397"),n("88ca"),n("ba16"),n("d185"),n("ebde"),n("2d34"),n("f6b3"),n("2251"),n("c698"),n("a19f"),n("9253"),n("9275"),n("3b2b"),n("3846"),n("4917"),n("a481"),n("28a5"),n("386d"),n("6b54"),n("4f7f"),n("8a81"),n("ac4d"),n("8449"),n("9c86"),n("fa83"),n("48c0"),n("a032"),n("aef6"),n("d263"),n("6c37"),n("9ec8"),n("5695"),n("2fdb"),n("d0b0"),n("5df3"),n("b54a"),n("f576"),n("ed50"),n("788d"),n("14b9"),n("f386"),n("f559"),n("1448"),n("673e"),n("242a"),n("4f37"),n("c66f"),n("262f"),n("b05c"),n("34ef"),n("6aa2"),n("15ac"),n("af56"),n("b6e4"),n("9c29"),n("63d9"),n("4dda"),n("10ad"),n("c02b"),n("4795"),n("130f"),n("ac6a"),n("96cf"),n("0cdd");var r=n("2b0e"),o=n("5f5b");n("ab8b"),n("2dd8");r["default"].use(o["a"]);var a=n("3dfd"),u=n("8c4f"),c=n("8aa5"),s=n.n(c);r["default"].use(u["a"]);var i=new u["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",meta:{requiresAuth:!0},component:function(){return n.e("home").then(n.bind(null,"bb51"))}},{path:"/products",name:"products",meta:{requiresAuth:!0},component:function(){return n.e("products").then(n.bind(null,"96fc"))}},{path:"/sales",name:"sales",meta:{requiresAuth:!0},component:function(){return n.e("sales").then(n.bind(null,"af7c"))}},{path:"/edit",name:"productedit",props:{product:{}},component:function(){return n.e("productedit").then(n.bind(null,"d388"))}},{path:"/product",name:"product",meta:{requiresAuth:!0},props:{product:{}},component:function(){return n.e("product").then(n.bind(null,"d2f1"))}},{path:"/product/create",name:"productcreate",meta:{requiresAuth:!0},component:function(){return n.e("productcreate").then(n.bind(null,"c6bb"))}},{path:"/login",name:"login",meta:{guest:!0},component:function(){return n.e("login").then(n.bind(null,"a55b"))}},{path:"/signup",name:"signup",meta:{guest:!0},component:function(){return n.e("signup").then(n.bind(null,"5c9c"))}},{path:"/about",name:"about",meta:{guest:!0},component:function(){return n.e("about").then(n.bind(null,"f820"))}}]}),d=i;i.beforeEach(function(e,t,n){s.a.auth().onAuthStateChanged(function(t){"login"!=e.path&&(console.log(s.a.auth().currentUser),r&&!t?n("about"):n())});var r=e.matched.some(function(e){return e.meta.requiresAuth})});var f=n("2f62");r["default"].use(f["a"]);var p=new f["a"].Store({state:{user:"",status:"",error:"",db:{},products:{},sales:{}},getters:{status:function(e){return e.status},user:function(e){return e.user},error:function(e){return e.error},products:function(e){return e.products}},mutations:{setUser:function(e,t){e.user=t},removeUser:function(e){e.user=null},setStatus:function(e,t){e.status=t},setError:function(e,t){e.error=t},setProducts:function(e,t){e.products=t},setSales:function(e,t){e.sales=t}},actions:{signUpAction:function(e,t){var n=e.commit;n("setStatus","loading"),c["auth"]().createUserWithEmailAndPassword(t.email,t.password).then(function(e){n("setUser",e.user.uid),n("setStatus","success"),n("setError",null)}).catch(function(e){n("setStatus","failure"),n("setError",e.message)})},signInAction:function(e,t){var n=e.commit;c["auth"]().setPersistence(c["auth"].Auth.Persistence.LOCAL).then(function(){c["auth"]().signInWithEmailAndPassword(t.email,t.password).then(function(e){n("setUser",e.user.uid),n("setStatus","success"),n("setError",null)}).catch(function(e){n("setStatus","failure"),n("setError",e.message)})})},signOutAction:function(){},getProductsAction:function(e){var t=e.commit,n=[],r=c["firestore"](),o=r.collection("products").where("uid","==",c["auth"]().currentUser.uid);o.onSnapshot(function(e){e.forEach(function(e){var t=e.data();t.id=e.id,n.push(t)}),t("setProducts",n)})},getSalesAction:function(e){var t=e.commit,n=[],r=c["firestore"](),o=r.collection("sales");o.onSnapshot(function(e){e.forEach(function(e){var t=e.data();t.id=e.id,n.push(t)}),t("setSales",n)})}}}),l=(n("647c"),{apiKey:"AIzaSyBq6Yj3sIwPW20jYGtUKN67oQtodvVJvFM",authDomain:"tikify-e74ea.firebaseapp.com",databaseURL:"https://tikify-e74ea.firebaseio.com",projectId:"tikify-e74ea",storageBucket:"tikify-e74ea.appspot.com",messagingSenderId:"476064564340",appId:"1:476064564340:web:c616ce182fa5cd78"});s.a.initializeApp(l),r["default"].config.productionTip=!1,new r["default"]({router:d,store:p,render:function(e){return e(a["default"])}}).$mount("#app"),s.a.auth().onAuthStateChanged(function(){app||(app=new r["default"]({router:d,store:p,render:function(e){return e(a["default"])}}).$mount("#app"))})},"5c0b":function(e,t,n){"use strict";var r=n("5e27"),o=n.n(r);o.a},"5e27":function(e,t,n){},6098:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app",attrs:{id:"app"}},[n("link",{attrs:{rel:"stylesheet",type:"text/css",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.8.2/css/all.css"}}),n("router-view")],1)},o=[];n.d(t,"a",function(){return r}),n.d(t,"b",function(){return o})},"647c":function(e,t,n){}});
//# sourceMappingURL=app.5b1a6e7f.js.map