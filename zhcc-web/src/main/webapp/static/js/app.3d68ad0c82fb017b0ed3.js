webpackJsonp([3],{NHnr:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,o=r("7+uW"),a={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticStyle:{height:"100%"},attrs:{id:"app"}},[t("transition",[t("keep-alive",[t("router-view")],1)],1)],1)},staticRenderFns:[]},s=r("VU/8")(null,a,!1,null,null,null).exports,i=r("NYxO"),u=r("bOdI"),l=r.n(u),c=(n={},l()(n,"SET_LOADING",function(e,t){e.showLoading=t}),l()(n,"SET_BREADCRUMB_ITEMS",function(e,t){e.breadcrumbItems=t}),n),d={setLoading:function(e,t){(0,e.commit)("SET_LOADING",t)},setBreadcurmbItems:function(e,t){(0,e.commit)("SET_BREADCRUMB_ITEMS",t)}},p={showLoading:function(e){return e.showLoading},breadcrumbItems:function(e){return e.breadcrumbItems}};o.default.use(i.a);var m=new i.a.Store({state:{showLoading:!1,breadcrumbItems:[]},mutations:c,actions:d,getters:p}),h=r("BO1k"),f=r.n(h),g=r("Gu7T"),v=r.n(g),b=r("/ocq"),_=r("T+/8");o.default.use(b.a);var y=new b.a({routes:[{path:"/login",name:"login",component:_.default,meta:{requiresAuth:!1}},{path:"/index",redirect:"/",meta:{requiresAuth:!0}}]});!function(){if(!sessionStorage.routers)return;var e={path:"/",name:"/",component:function(e){return r.e(1).then(function(){var t=[r("KR8f")];e.apply(null,t)}.bind(this)).catch(r.oe)},children:[].concat(v()(function(){var e=JSON.parse(sessionStorage.routers),t=[],n=function(e){if(null!=e.code){var n=JSON.parse(e.properties),o={path:e.url,name:e.code,component:function(t){return r.e(0).then(function(){var n=[r("eTVe")("./"+e.code+"/index")];t.apply(null,n)}.bind(this)).catch(r.oe)},meta:{routerId:e.id,requiresAuth:n.meta.requiresAuth,nameFullPath:n.nameFullPath}};t.push(o)}},o=!0,a=!1,s=void 0;try{for(var i,u=f()(e);!(o=(i=u.next()).done);o=!0){var l=i.value;n(l)}}catch(e){a=!0,s=e}finally{try{!o&&u.return&&u.return()}finally{if(a)throw s}}return t}()))};y.addRoutes([e])}(),y.beforeEach(function(e,t,r){var n=sessionStorage.getItem("token");"/"!==e.path||n?e.meta.requiresAuth?n?r():r({path:"/login",query:{redirect:e.fullPath}}):r():r({path:"/login",query:{redirect:e.fullPath}})}),y.afterEach(function(e,t){var r=[];if(r.push({title:"首页",to:"/"}),e.meta.nameFullPath){var n=e.meta.nameFullPath.split("/");n.forEach(function(t,o){var a={title:t,to:o==n.length-1?e.path:""};r.push(a)})}y.app.$store.dispatch("setBreadcurmbItems",r)});var w=y,S=r("zL8q"),F=r.n(S);r("tvR6");o.default.config.productionTip=!1,o.default.use(F.a),new o.default({el:"#app",store:m,router:w,template:"<App/>",components:{App:s}})},SVcA:function(e,t,r){"use strict";r.d(t,"d",function(){return o}),r.d(t,"a",function(){return a}),r.d(t,"c",function(){return s}),r.d(t,"f",function(){return i}),r.d(t,"g",function(){return u}),r.d(t,"e",function(){return l}),r.d(t,"b",function(){return c});var n=r("vLgD"),o=function(e){return Object(n.a)({url:"/routers",method:"get",params:{offset:e.offset,limit:e.limit,name:e.name}})},a=function(e){return Object(n.a)({url:"/routers/"+e,method:"get"})},s=function(e){return Object(n.a)({url:"/routers/search",method:"get",params:{parentId:e}})},i=function(e){return Object(n.a)({url:"/routers",method:"post",data:e})},u=function(e,t){return Object(n.a)({url:"/routers/"+e,method:"put",data:t})},l=function(e){return Object(n.a)({url:"/routers/"+e,method:"delete"})},c=function(e){return Object(n.a)({url:"/routers/all?includeLocked="+e,method:"get"})}},"T+/8":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("BO1k"),o=r.n(n),a=r("Gu7T"),s=r.n(a),i=r("mvHQ"),u=r.n(i),l=r("Dd8w"),c=r.n(l),d=r("vLgD"),p=r("mw3O"),m=r.n(p),h=(r("SVcA"),r("NYxO")),f={name:"ElCard",props:{header:{},bodyStyle:{},shadow:{type:String}}},g={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"el-card",class:e.shadow?"is-"+e.shadow+"-shadow":"is-always-shadow"},[e.$slots.header||e.header?r("div",{staticClass:"el-card__header"},[e._t("header",[e._v(e._s(e.header))])],2):e._e(),e._v(" "),r("div",{staticClass:"el-card__body",style:e.bodyStyle},[e._t("default")],2)])},staticRenderFns:[]},v=r("VU/8")(f,g,!1,null,null,null).exports,b={name:"ElAside",componentName:"ElAside",props:{width:{type:String,default:"300px"}}},_={render:function(){var e=this.$createElement;return(this._self._c||e)("aside",{staticClass:"el-aside",style:{width:this.width}},[this._t("default")],2)},staticRenderFns:[]},y=r("VU/8")(b,_,!1,null,null,null).exports,w={name:"ElFooter",componentName:"ElFooter",props:{height:{type:String,default:"60px"}}},S={render:function(){var e=this.$createElement;return(this._self._c||e)("footer",{staticClass:"el-footer",style:{height:this.height}},[this._t("default")],2)},staticRenderFns:[]},F={components:{ElFooter:r("VU/8")(w,S,!1,null,null,null).exports,ElAside:y,ElCard:v},data:function(){return{displayLoading:!1,loginForm:{username:"admin",password:"admin"},rules:{username:[{required:!0,message:"请输入用户名",trigger:"blur"}],password:[{required:!0,message:"请输入口令",trigger:"blur"}]}}},computed:c()({},Object(h.b)(["showLoading"])),methods:{doLogin:function(){var e=this;this.$refs.loginForm.validate(function(t){var r,n;t&&(e.$store.dispatch("setLoading",!0),(r=e.loginForm.username,n=e.loginForm.password,Object(d.a)({url:"/auth/token",method:"post",data:m.a.stringify({loginName:r,password:n})})).then(function(t){sessionStorage.setItem("currentUser",u()({id:t.data.userId,name:t.data.username})),sessionStorage.setItem("token",t.data.token),sessionStorage.setItem("routers",u()(t.data.routers)),e.initIndexRouter();var r=decodeURIComponent(e.$route.query.redirect||"/");e.$router.push(r),e.$store.dispatch("setLoading",!1)}).catch(function(t){e.$store.dispatch("setLoading",!1),e.$message({showClose:!0,message:t,type:"error"})}))})},initIndexRouter:function(){var e={path:"/",name:"/",component:function(e){return r.e(1).then(function(){var t=[r("KR8f")];e.apply(null,t)}.bind(this)).catch(r.oe)},children:[].concat(s()(this.generateChildRouters()))};this.$router.addRoutes([e])},generateChildRouters:function(){if(!sessionStorage.routers)return[];var e=JSON.parse(sessionStorage.routers),t=[];console.log(e);var n=function(e){if(console.log(e),null!=e.code){var n=JSON.parse(e.properties),o={path:e.url,name:e.code,component:function(t){return r.e(0).then(function(){var n=[r("eTVe")("./"+e.code+"/index")];t.apply(null,n)}.bind(this)).catch(r.oe)},meta:{routerId:e.id,requiresAuth:n.meta.requiresAuth,nameFullPath:n.nameFullPath}};t.push(o)}},a=!0,s=!1,i=void 0;try{for(var u,l=o()(e);!(a=(u=l.next()).done);a=!0){n(u.value)}}catch(e){s=!0,i=e}finally{try{!a&&l.return&&l.return()}finally{if(s)throw i}}return t}}},E={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"login-container"},[r("el-form",{ref:"loginForm",staticClass:"login-form",attrs:{model:e.loginForm,rules:e.rules,"label-position":"left","label-width":"0px",autoComplete:"on"}},[r("h3",{staticClass:"login_title"},[e._v("系统登录")]),e._v(" "),r("div",{staticClass:"login-body"},[r("el-form-item",{attrs:{prop:"username"}},[r("el-input",{attrs:{type:"text","auto-complete":"off",placeholder:"账号"},model:{value:e.loginForm.username,callback:function(t){e.$set(e.loginForm,"username",t)},expression:"loginForm.username"}}),e._v(" "),r("div",{staticClass:"login-username",attrs:{slot:"prepend"},slot:"prepend"})],1),e._v(" "),r("el-form-item",{attrs:{prop:"password"}},[r("el-input",{attrs:{type:"password","auto-complete":"off",placeholder:"密码"},model:{value:e.loginForm.password,callback:function(t){e.$set(e.loginForm,"password",t)},expression:"loginForm.password"}}),e._v(" "),r("template",{slot:"prepend"},[r("div",{staticClass:"login-password"})])],2),e._v(" "),r("el-form-item",{staticStyle:{width:"100%"}},[r("el-button",{staticStyle:{width:"100%"},attrs:{type:"primary"},nativeOn:{click:function(t){return t.preventDefault(),e.doLogin(t)}}},[e._v("登录")])],1),e._v(" "),r("el-footer",[e._v("\n        超级管理员：admin admin"),r("br"),e._v("\n        小小业务员： guest guest "),r("br"),e._v("\n        不要乱删东西哟！\n      ")])],1)])],1)},staticRenderFns:[]};var I=r("VU/8")(F,E,!1,function(e){r("YTYp")},null,null);t.default=I.exports},YTYp:function(e,t){},tvR6:function(e,t){},vLgD:function(e,t,r){"use strict";var n=r("//Fk"),o=r.n(n),a=r("mtWM"),s=r.n(a).a.create({baseURL:"http://167.99.110.251",timeout:5e3});s.interceptors.request.use(function(e){return sessionStorage.getItem("token")&&(e.headers["X-Token"]=sessionStorage.getItem("token")),e},function(e){o.a.reject(e)}),s.interceptors.response.use(function(e){return 2==e.data.errCode&&router.push({path:"/login",querry:{redirect:router.currentRoute.fullPath}}),e},function(e){return o.a.reject(e)}),t.a=s}},["NHnr"]);
//# sourceMappingURL=app.3d68ad0c82fb017b0ed3.js.map