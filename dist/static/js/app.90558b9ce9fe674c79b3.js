webpackJsonp([1],{"75l9":function(e,t){e.exports={name:"axios",version:"0.21.4",description:"Promise based HTTP client for the browser and node.js",main:"index.js",scripts:{test:"grunt test",start:"node ./sandbox/server.js",build:"NODE_ENV=production grunt build",preversion:"npm test",version:"npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json",postversion:"git push && git push --tags",examples:"node ./examples/server.js",coveralls:"cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js",fix:"eslint --fix lib/**/*.js"},repository:{type:"git",url:"https://github.com/axios/axios.git"},keywords:["xhr","http","ajax","promise","node"],author:"Matt Zabriskie",license:"MIT",bugs:{url:"https://github.com/axios/axios/issues"},homepage:"https://axios-http.com",devDependencies:{coveralls:"^3.0.0","es6-promise":"^4.2.4",grunt:"^1.3.0","grunt-banner":"^0.6.0","grunt-cli":"^1.2.0","grunt-contrib-clean":"^1.1.0","grunt-contrib-watch":"^1.0.0","grunt-eslint":"^23.0.0","grunt-karma":"^4.0.0","grunt-mocha-test":"^0.13.3","grunt-ts":"^6.0.0-beta.19","grunt-webpack":"^4.0.2","istanbul-instrumenter-loader":"^1.0.0","jasmine-core":"^2.4.1",karma:"^6.3.2","karma-chrome-launcher":"^3.1.0","karma-firefox-launcher":"^2.1.0","karma-jasmine":"^1.1.1","karma-jasmine-ajax":"^0.1.13","karma-safari-launcher":"^1.0.0","karma-sauce-launcher":"^4.3.6","karma-sinon":"^1.0.5","karma-sourcemap-loader":"^0.3.8","karma-webpack":"^4.0.2","load-grunt-tasks":"^3.5.2",minimist:"^1.2.0",mocha:"^8.2.1",sinon:"^4.5.0","terser-webpack-plugin":"^4.2.3",typescript:"^4.0.5","url-search-params":"^0.10.0",webpack:"^4.44.2","webpack-dev-server":"^3.11.0"},browser:{"./lib/adapters/http.js":"./lib/adapters/xhr.js"},jsdelivr:"dist/axios.min.js",unpkg:"dist/axios.min.js",typings:"./index.d.ts",dependencies:{"follow-redirects":"^1.14.0"},bundlesize:[{path:"./dist/axios.min.js",threshold:"5kB"}]}},"7Z/c":function(e,t){},HlbJ:function(e,t){},L4Nt:function(e,t,r){e.exports=r.p+"static/img/logo.e90bffa.png"},NHnr:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=r("7+uW"),o={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"app",attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var a=r("VU/8")({name:"App"},o,!1,function(e){r("HlbJ")},null,null).exports,n=r("/ocq"),i=r("//Fk"),l=r.n(i),u=r("mtWM"),c=r.n(u),m=r("ppUw"),d=r.n(m),p=c.a.create({timeout:5e3});p.setBaseURL=function(e){this.defaults.baseURL=e},p.defaults.withCredentials=!0,p.interceptors.request.use(function(e){var t=d.a.get("token");return t&&""!==t&&(e.headers.Authorization="Bearer "+t),e},function(e){return console.error("Request Error:",e),l.a.reject(e)}),p.interceptors.response.use(function(e){return e.data},function(e){return l.a.reject(e)});var f=p,g="https://sso.djp.org.cn",v=function(e){return f.setBaseURL(g),f.post("/v1/account/login",e)},h=function(e){return f.setBaseURL(g),f.post("/v1/account/send_emial_code",e)},b=function(e){return f.setBaseURL(g),f.post("/v1/account/register",e)},_=function(e){return f.setBaseURL(g),f.post("/v1/account/create_code",e)},k={name:"login",data:function(){return{ruleForm:{name:"",password:""},rules:{name:{required:!0,message:"请输入昵称",trigger:"blur"},password:[{required:!0,message:"请输入密码",trigger:"blur"}]}}},mounted:function(){$cookies.get("token")},computed:{},methods:{subLogin:function(){var e=this,t=this;v(this.ruleForm).then(function(r){var s=r.code,o=r.data,a=r.msg;200==s?($cookies.set("token",o.token,604800),$cookies.set("username",o.username,604800),$cookies.set("head_url",o.head_url,604800),e.$message({message:"登录成功",type:"success",duration:1e3,onClose:function(){t.$router.push({path:"/user"})}})):400==s?(o.name&&""!=o.name&&e.$message.error(o.name),o.password&&""!=o.password&&e.$message.error(o.password)):e.$message.error(a)})},submitForm:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;t.subLogin()})}}},w={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"login"},[s("div",{staticClass:"loginbox"},[s("div",{staticClass:"loginmain"},[s("img",{attrs:{src:r("L4Nt")}}),e._v(" "),e._m(0),e._v(" "),s("el-form",{ref:"ruleForm",staticClass:"login_form",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"0"}},[s("el-form-item",{attrs:{label:"",prop:"name"}},[s("el-input",{attrs:{placeholder:"请输入昵称"},model:{value:e.ruleForm.name,callback:function(t){e.$set(e.ruleForm,"name",t)},expression:"ruleForm.name"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"",prop:"password"}},[s("el-input",{attrs:{type:"password",placeholder:"请输入密码"},model:{value:e.ruleForm.password,callback:function(t){e.$set(e.ruleForm,"password",t)},expression:"ruleForm.password"}})],1),e._v(" "),s("el-button",{staticClass:"login_btn",attrs:{type:"primary"},on:{click:function(t){return e.submitForm("ruleForm")}}},[e._v("登录")]),e._v(" "),s("div",{staticClass:"login_tips"},[e._v("\n          还没有账号？\n          "),s("span",{on:{click:function(t){return e.$router.push({path:"/register"})}}},[e._v("立即注册»")])])],1)],1)])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("fieldset",[t("legend",[this._v("登录")])])}]};var F=r("VU/8")(k,w,!1,function(e){r("wHlP")},"data-v-2bab0e8f",null).exports,$={name:"register",data:function(){var e=this;return{countdown:"发送验证码",timerId:null,canClick:!1,ruleForm:{name:"",email:"",password:"",checkPass:"",code:""},rules:{name:{required:!0,message:"请输入昵称",trigger:"blur"},email:[{required:!0,message:"请输入邮箱地址",trigger:"blur"},{type:"email",message:"请输入正确的邮箱地址",trigger:["blur","change"]}],password:[{validator:function(t,r,s){""!==r&&r?(""!==e.ruleForm.checkPass&&e.$refs.ruleForm.validateField("checkPass"),s()):s(new Error("请输入密码"))},trigger:"blur"}],checkPass:[{validator:function(t,r,s){""!==r&&r?r!==e.ruleForm.password?s(new Error("两次输入密码不一致!")):s():s(new Error("请再次输入密码"))},trigger:"blur"}],code:[{required:!0,message:"请输入验证码",trigger:"blur"}]}}},mounted:function(){},methods:{getCode:function(){var e=this,t={email:this.ruleForm.email};h(t).then(function(t){200==t.code?e.$message({message:"发送成功",type:"success"}):e.$message.error(t.msg)})},startCountdown:function(e){var t=this;this.$refs.ruleForm.validateField("email",function(e){if(!e){t.getCode();var r=60;t.timerId||(t.countdown=r+"s",t.timerId=setInterval(function(){r>1?(r--,t.countdown=r+"s"):(clearInterval(t.timerId),r=60,t.countdown="重新发送")},1e3))}})},submitForm:function(e){var t=this,r=this;this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;var s={name:t.ruleForm.name,email:t.ruleForm.email,password:t.ruleForm.password,code:t.ruleForm.code};b(s).then(function(e){var s=e.code,o=(e.data,e.msg);200==s?t.$message({message:"注册成功",type:"success",duration:1e3,onClose:function(){r.$router.push({path:"/login"})}}):t.$message.error(o)})})}},created:function(){},beforeRouteLeave:function(e,t,r){r()}},x={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"login"},[s("div",{staticClass:"loginbox"},[s("div",{staticClass:"loginmain"},[s("img",{attrs:{src:r("L4Nt")}}),e._v(" "),e._m(0),e._v(" "),s("el-form",{ref:"ruleForm",staticClass:"login_form",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"0"}},[s("el-form-item",{attrs:{label:"",prop:"name"}},[s("el-input",{attrs:{placeholder:"请输入昵称"},model:{value:e.ruleForm.name,callback:function(t){e.$set(e.ruleForm,"name",t)},expression:"ruleForm.name"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"",prop:"email"}},[s("el-input",{attrs:{placeholder:"请输入邮箱"},model:{value:e.ruleForm.email,callback:function(t){e.$set(e.ruleForm,"email",t)},expression:"ruleForm.email"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"",prop:"password"}},[s("el-input",{attrs:{type:"password",autocomplete:"off",placeholder:"请输入密码"},model:{value:e.ruleForm.password,callback:function(t){e.$set(e.ruleForm,"password",t)},expression:"ruleForm.password"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"",prop:"checkPass"}},[s("el-input",{attrs:{placeholder:"请确认密码",type:"password",autocomplete:"off"},model:{value:e.ruleForm.checkPass,callback:function(t){e.$set(e.ruleForm,"checkPass",t)},expression:"ruleForm.checkPass"}})],1),e._v(" "),s("div",{staticClass:"login_item"},[s("el-form-item",{attrs:{label:"",prop:"code"}},[s("el-input",{attrs:{placeholder:"请输入验证码",type:"text",autocomplete:"off"},model:{value:e.ruleForm.code,callback:function(t){e.$set(e.ruleForm,"code",t)},expression:"ruleForm.code"}})],1),e._v(" "),s("div",{staticClass:"login_code",on:{click:function(t){return e.startCountdown("ruleForm")}}},[s("span",{staticStyle:{width:"100px"}},[e._v(e._s(e.countdown))])])],1),e._v(" "),s("el-button",{staticClass:"login_btn",attrs:{type:"primary"},on:{click:function(t){return e.submitForm("ruleForm")}}},[e._v("注册")]),e._v(" "),s("div",{staticClass:"login_tips"},[e._v("\n          已有账号？\n          "),s("span",{on:{click:function(t){return e.$router.push({path:"/login"})}}},[e._v("点此登录»")])])],1)],1)])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("fieldset",[t("legend",[this._v("注册")])])}]};var C=r("VU/8")($,x,!1,function(e){r("7Z/c")},"data-v-3a78ce75",null).exports,j={name:"user",data:function(){return{username:"",head_url:""}},mounted:function(){this.toRedirect(),this.getUserInfo()},computed:{},methods:{getUserInfo:function(){if(null!=$cookies.get("token")){this.username=$cookies.get("username");var e=$cookies.get("head_url");null==e&&(e=r("g33F")),this.head_url=e}else this.$router.push({path:"/login"})},exitLogin:function(){$cookies.remove("token"),$cookies.remove("username"),$cookies.remove("head_url"),this.$router.push({path:"/login"})},toRedirect:function(){var e=localStorage.getItem("redirect_url");$cookies.get("token")&&e&&""!=e&&_().then(function(t){var r=t.code,s=t.data;if(200==r){localStorage.removeItem("redirect_url");var o=new URL(e),a=new URLSearchParams(o.search);a.append("code",s),o.search=a.toString(),window.location.href=o}})}}},y={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"user"},[s("div",{staticClass:"userbox"},[s("img",{attrs:{src:r("L4Nt")}}),e._v(" "),e._m(0),e._v(" "),s("el-avatar",{attrs:{size:80,src:e.head_url}}),e._v(" "),s("div",{staticClass:"user_name"},[e._v(e._s(e.username))]),e._v(" "),s("el-button",{attrs:{type:"danger",size:"small"},on:{click:e.exitLogin}},[e._v("退出登录")])],1)])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("fieldset",[t("legend",[this._v("用户")])])}]};var L=r("VU/8")(j,y,!1,function(e){r("vJkC")},"data-v-86959380",null).exports;s.default.use(n.a);var R=new n.a({mode:"history",routes:[{path:"/",name:"User",component:L},{path:"/login",name:"Login",component:F},{path:"/register",name:"Register",component:C},{path:"/user",name:"User",component:L}]}),U=r("zL8q"),E=r.n(U);function P(){var e=d.a.get("token");return!(!e||""==e)}r("tvR6"),r("kDzl");s.default.use(d.a),s.default.use(E.a),s.default.config.productionTip=!1,s.default.prototype.$isLogin=P,R.beforeEach(function(e,t,r){var s=e.query.redirect_url;s&&""!=s&&localStorage.setItem("redirect_url",s),P()||"/user"!=e.path||r("/login"),P()&&"/user"!=e.path&&r("/user"),r()}),new s.default({el:"#app",router:R,components:{App:a},template:"<App/>"})},g33F:function(e,t,r){e.exports=r.p+"static/img/head_default.f06c871.png"},kDzl:function(e,t){},tvR6:function(e,t){},vJkC:function(e,t){},wHlP:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.90558b9ce9fe674c79b3.js.map