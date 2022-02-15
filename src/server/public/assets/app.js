(()=>{"use strict";var e,t={799:(e,t,n)=>{var r,a=n(935),o=n(294),l=n(711),i=n(974),c=n(152),s=n(942);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){(0,s.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var m="undefined"!=typeof window?JSON.parse(localStorage.getItem("isLoggedIn")):null,p="undefined"!=typeof window?JSON.parse(localStorage.getItem("user")):null,g="LOGIN",h="LOGOUT",f=(r={},(0,s.Z)(r,g,(function(e,t){return localStorage.setItem("isLoggedIn",JSON.stringify(t.payload.isLoggedIn)),localStorage.setItem("user",JSON.stringify(t.payload.user)),d(d({},e),{},{isLoggedIn:t.payload.isLoggedIn,user:t.payload.user})})),(0,s.Z)(r,h,(function(e,t){return localStorage.clear(),d(d({},e),{},{isLoggedIn:!1,user:null})})),r),v=function(e,t){console.log(e);var n=f[t.type];return n?n(e,t):e},b=(0,o.createContext)(),E=function(e){var t,n,r,a,l,i=e.children,s=(t={isLoggedIn:m||!1,user:p||null},n=(0,o.useReducer)(v,t),r=(0,c.Z)(n,2),a=r[0],l=r[1],{isLoggedIn:a.isLoggedIn,user:a.user,Login:function(e){l({type:g,payload:e})},Logout:function(){l({type:h})}}),u=s.isLoggedIn,d=s.user,f=s.Login,E=s.Logout,y=(0,o.useState)(!1),w=(0,c.Z)(y,2),C=w[0],O=w[1];return o.createElement(b.Provider,{value:{isLoggedIn:u,user:d,Login:f,Logout:E,isLoading:C,setIsLoading:O}},i)};const y=b;var w=(0,o.createContext)({}),C=function(e){var t=e.children,n=(0,o.useState)("white"),r=(0,c.Z)(n,2),a=r[0],l=r[1];return o.createElement(w.Provider,{value:{theme:a,handleMode:function(){l("dark"===a?"white":"dark")}}},t)};const O=w;var k=function(){var e=(0,i.s0)();return o.createElement("div",{className:"logo"},o.createElement("h2",{onClick:function(){e("/")}},"<Kuroikuma />"))},L=function(e){var t=e.theme,n=e.handleMode;return o.createElement("div",{onClick:n,className:"change ".concat(t)},o.createElement("button",null))},_=function(){var e=(0,o.useContext)(O),t=e.handleMode,n=e.theme;return o.createElement(L,{theme:n,handleMode:t})},S=function(e){var t=e.theme,n=e.children;return o.createElement("div",{className:"container ".concat(t)},o.createElement(_,null)," ",o.createElement(k,null)," ",n)},j=function(e){var t=e.children,n=(0,o.useContext)(O).theme;return o.createElement(o.Fragment,null,o.createElement(S,{theme:n},t))},I=function(e){var t=e.fullWidth,n=e.hover,r=e.focus,a=e.error,l=e.placeholder,i=e.type,c=e.size,s=e.onChange,u=e.disabled,d=e.multiline,m=e.handlerHoverChange,p=e.handlerFocusChange,g=e.rows,h=e.value,f=e.helperText,v=e.name;return o.createElement("div",{className:"containerInput ".concat(t?"fullWidthi":""," ").concat(n?"hover":""," ").concat(r?"focus":""," ").concat(a?"error":""," ").concat(c,"i")},d?o.createElement("textarea",{onChange:s,disabled:u,onMouseEnter:m,onMouseLeave:m,onFocus:p,onBlur:p,placeholder:l,rows:g},h):o.createElement("input",{className:"input",onChange:s,disabled:u,onMouseEnter:m,onMouseLeave:m,onFocus:p,onBlur:p,placeholder:l,name:v,type:i,value:h}),""===f?null:o.createElement("p",null,f))},x=function(e){var t=e.error,n=void 0!==t&&t,r=e.disabled,a=void 0!==r&&r,l=e.fullWidth,i=void 0!==l&&l,s=e.helperText,u=void 0===s?"":s,d=e.value,m=void 0===d?"":d,p=e.size,g=void 0===p?"":p,h=e.type,f=void 0===h?"":h,v=e.placeholder,b=void 0===v?"":v,E=e.multiline,y=void 0!==E&&E,w=e.rows,C=void 0===w?0:w,O=e.name,k=void 0===O?"":O,L=e.onChange,_=(0,o.useState)(!1),S=(0,c.Z)(_,2),j=S[0],x=S[1],P=(0,o.useState)(!1),N=(0,c.Z)(P,2),Z=N[0],D=N[1];return o.createElement(I,{fullWidth:i,hover:Z,focus:j,error:n,size:g,onChange:L,disabled:a,multiline:y,handlerHoverChange:function(){D(!Z)},handlerFocusChange:function(){x(!j)},rows:C,type:f,placeholder:b,value:m,helperText:u,name:k})};const P=n.p+"assets/resources/google-white.png",N=n.p+"assets/resources/google-dark.png";var Z=n(645),D=function(e){var t=e.responseGoogle,n=e.logoDark,r=e.logoWhite,a=e.theme;return o.createElement(Z.GoogleLogin,{clientId:"208716464272-jcatu0n6hreikd73fi0p97rol1kabe0i.apps.googleusercontent.com",render:function(e){return o.createElement("button",{className:"buttonGoogle",onClick:e.onClick,disabled:e.disabled},o.createElement("img",{src:"white"===a?r:n,alt:"google"}))},onSuccess:t,onFailure:t,cookiePolicy:"single_host_origin"})},W=n(861),F=n(757),R=n.n(F);function T(){return(T=(0,W.Z)(R().mark((function e(t){var n;return R().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,fetch("/api/user",{method:"POST",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},redirect:"follow",referrerPolicy:"no-referrer",body:JSON.stringify(t)});case 3:return n=e.sent,e.abrupt("return",n.json().then((function(e){return e})).catch((function(e){return console.log(e)})));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function B(){return(B=(0,W.Z)(R().mark((function e(t){var n;return R().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/login",{method:"POST",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},redirect:"follow",referrerPolicy:"no-referrer",body:JSON.stringify(t)});case 2:return n=e.sent,e.abrupt("return",n.json().then((function(e){return e})).catch((function(e){return console.log(e)})));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function z(e){return A.apply(this,arguments)}function A(){return(A=(0,W.Z)(R().mark((function e(t){var n;return R().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/login_auth",{method:"POST",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},redirect:"follow",referrerPolicy:"no-referrer",body:JSON.stringify(t)});case 2:return n=e.sent,e.abrupt("return",n.json().then((function(e){return e})).catch((function(e){return console.log(e)})));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var G=function(){var e=(0,i.s0)(),t=(0,o.useContext)(O).theme,n=(0,o.useContext)(y).Login;return o.createElement(D,{responseGoogle:function(t){var r=t.profileObj;z({email:r.email||"",username:r.givenName||"",password:r.googleId||"",avatar:r.imageUrl||"",name:r.name||"",biography:"",phone:0}).then((function(e){return e?n({isLoggedIn:!0,user:e}):null})),e("/profile")},logoWhite:P,logoDark:N,theme:t})};const M=n.p+"assets/resources/github-logo-white.png",J=n.p+"assets/resources/github-logo-dark.png";var U=function(e){var t=e.logoWhite,n=e.logoDark,r=e.theme;return o.createElement("button",{className:"buttonGithub"},o.createElement("a",{className:"linkGithub",href:"https://github.com/login/oauth/authorize?client_id=5b0a416181b203e91d38"},o.createElement("img",{src:"white"===r?t:n,alt:"logo"})))},K=function(){var e=(0,o.useContext)(O).theme,t=(0,i.s0)(),n=(0,o.useContext)(y).Login;return(0,o.useEffect)((function(){if("undefined"!=typeof window){var e=window.location.href;if(e.includes("?code=")){var r=e.split("?code=")[1];fetch("/auth-github/".concat(r)).then((function(e){return e.json()})).then((function(e){z({email:e.html_url||"",username:e.login||"",password:e.login||"",avatar:e.avatar_url||"",name:e.name||"",biography:e.bio||"",phone:0}).then((function(e){return e?n({isLoggedIn:!0,user:e}):null})),t("/profile")})).catch((function(e){console.log(e)}))}}}),[]),o.createElement(U,{logoWhite:M,logoDark:J,theme:e})};const H=n.p+"assets/resources/facebook-white.png",Q=n.p+"assets/resources/facebook-dark.png";var V=function(e){var t=e.facebookLogin,n=e.logoDark,r=e.logoWhite,a=e.theme;return o.createElement("button",{className:"buttonGoogle",onClick:t},o.createElement("img",{src:"white"===a?r:n,alt:"facebook"}))},q=function(){var e=(0,o.useContext)(O).theme,t=(0,o.useContext)(y).Login,n=(0,i.s0)(),r=function(e){"connected"===e.status&&window.FB.api("/me?fields=id,name,email,picture",(function(e){z({email:e.email||"",username:"avatar default",password:e.id||"",avatar:e.picture.data.url||"",name:e.name||"",biography:"",phone:0}).then((function(e){return e?t({isLoggedIn:!0,user:e}):null})),n("/profile")}))};return o.createElement(V,{facebookLogin:function(){window.FB&&window.FB.getLoginStatus((function(e){"connected"===e.status?r(e):window.FB.login(r,{scope:"public_profile,email"})}))},logoWhite:H,logoDark:Q,theme:e})};const X=n.p+"assets/resources/twitter-white.png",Y=n.p+"assets/resources/twitter-dark.png";var $=function(){var e=(0,o.useContext)(O).theme;return o.createElement("button",{className:"buttonGoogle"},o.createElement("img",{src:"white"===e?X:Y,alt:"google"}))},ee=function(e){var t=e.pushRegister,n=e.password,r=e.email,a=e.handleChange,l=e.onLogin,i=e.isErrorEmail,c=e.isErrorPassword;return o.createElement(j,null,o.createElement("div",{className:"loginContainer"},o.createElement("form",{onSubmit:l,className:"loginContainer__Top"},o.createElement("h3",null,"Login"),o.createElement(x,{size:"sm",value:r,name:"email",onChange:a,fullWidth:!0,type:"text",error:i,placeholder:"email"}),o.createElement(x,{size:"sm",fullWidth:!0,value:n,onChange:a,name:"password",type:"password",error:c,placeholder:"password"}),o.createElement("button",null,"Login")),o.createElement("div",{className:"loginContainer__Botton"},o.createElement("p",null,"or continue with these social profile"),o.createElement("div",{className:"loginContainer__Botton__Logo"},o.createElement("div",{className:"loginContainer__Botton__Logo__item"},o.createElement(G,null)),o.createElement("div",{className:"loginContainer__Botton__Logo__item"},o.createElement(K,null)),o.createElement("div",{className:"loginContainer__Botton__Logo__item"},o.createElement(q,null)),o.createElement("div",{className:"loginContainer__Botton__Logo__item"},o.createElement($,null))),o.createElement("p",null,"Don’t have an account yet?",o.createElement("span",{onClick:t},"Register")))))},te=function(){var e=(0,i.s0)(),t=(0,o.useContext)(y).Login,n=(0,o.useState)(""),r=(0,c.Z)(n,2),a=r[0],l=r[1],s=(0,o.useState)(""),u=(0,c.Z)(s,2),d=u[0],m=u[1],p=(0,o.useState)(!1),g=(0,c.Z)(p,2),h=g[0],f=g[1],v=(0,o.useState)(!1),b=(0,c.Z)(v,2),E=b[0],w=b[1];return o.createElement(ee,{handleChange:function(e){var t=e.target,n=t.name,r=t.value;"password"===n?l(r):m(r)},pushRegister:function(){e("/register")},password:a,email:d,onLogin:function(n){(n.preventDefault(),w(!a),f(!d),a&&d)&&(function(e){return B.apply(this,arguments)}({password:a,email:d}).then((function(e){return e?t({isLoggedIn:!0,user:e}):null})),e("/profile"))},isErrorPassword:E,isErrorEmail:h})};const ne=n.p+"assets/resources/send-message.png",re=n.p+"assets/resources/bin.png",ae=n.p+"assets/resources/diskette (1).png",oe=n.p+"assets/resources/diskette.png",le=n.p+"assets/resources/photo.png",ie=n.p+"assets/resources/shoppingcart.png";var ce,se=function(e){var t=e.variant,n=void 0===t?"":t,r=e.startIcon,a=void 0===r?"":r,l=e.endIcon,i=void 0===l?"":l,s=e.color,u=void 0===s?"":s,d=e.size,m=void 0===d?"":d,p=e.id,g=void 0===p?"":p,h=e.title,f=void 0===h?"":h,v=e.name,b=void 0===v?"":v,E=e.children,y=e.disableShadow,w=void 0===y?"":y,C=e.disabled,O=e.onClick,k=void 0===O?null:O,L=(0,o.useState)(""),_=(0,c.Z)(L,2),S=_[0],j=_[1],I=(0,o.useState)(),x=(0,c.Z)(I,2),P=x[0],N=x[1];return""!==w&&(w="disableShadow"),(0,o.useEffect)((function(){""!==a&&j("startIcon"),""!==i&&j("endIcon")}),[a,i]),(0,o.useEffect)((function(){switch(a||i){case"send":N(ne);break;case"photo":N(le);break;case"delete":N(re);break;case"donate":N(ae);break;case"save":N(oe);break;case"buy":N(ie)}}),[a,i]),o.createElement("button",{name:b,title:f,disabled:C,onClick:k,id:g,className:"buttonDefault ".concat(n," ").concat(w," ").concat(S," ").concat(m," ").concat(u)},o.createElement("p",null," ",E," "),o.createElement("img",{src:P,alt:""}))},ue=function(e){var t=e.elementRef,n=e.handleFile,r=e.handleClick,a=e.username,l=e.name,i=e.password,c=e.biography,s=e.email,u=e.handleChange,d=e.onPost;return o.createElement(j,null,o.createElement("div",{className:"registerContainer"},o.createElement("h3",null,"Register"),o.createElement(x,{name:"username",value:a,handleChange:u,size:"sm",fullWidth:!0,type:"text",placeholder:"username"}),o.createElement(x,{name:"name",value:l,handleChange:u,size:"sm",fullWidth:!0,type:"text",placeholder:"name"}),o.createElement(x,{name:"email",value:s,handleChange:u,size:"sm",fullWidth:!0,type:"text",placeholder:"email"}),o.createElement(x,{name:"password",size:"sm",handleChange:u,value:i,fullWidth:!0,type:"password",placeholder:"password"}),o.createElement(x,{name:"biography",size:"sm",value:c,handleChange:u,fullWidth:!0,type:"text",placeholder:"biography"}),o.createElement(se,{onClick:r,startIcon:"photo",size:"lg",variant:"primary"},"Upload"),o.createElement("div",{className:"inputFile"},o.createElement("input",{onChange:n,type:"file",ref:t})),o.createElement(se,{onClick:d,startIcon:"send",variant:"primary"},"Send")))},de=n(902),me=(n(530),n(507),de.Z.initializeApp({projectId:"medicall-3dced",appId:"1:663908802543:web:635b6bcf4b249df26a601a",databaseURL:"https://medicall-3dced.firebaseio.com",storageBucket:"medicall-3dced.appspot.com",locationId:"us-central",apiKey:"AIzaSyBJ1p9hEKtKjQ1kzGm5D130wkTSCHCL7tc",authDomain:"medicall-3dced.firebaseapp.com",messagingSenderId:"663908802543",measurementId:"G-JBSFQPJE1B"}));function pe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ge(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?pe(Object(n),!0).forEach((function(t){(0,s.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):pe(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var he="ADD_FIELD_REGISTER",fe="CLEAR_FIELD_REGISTER",ve=(ce={},(0,s.Z)(ce,he,(function(e,t){return ge(ge({},e),{},(0,s.Z)({},t.field,t.payload))})),(0,s.Z)(ce,fe,(function(e,t){return{username:"",name:"",password:"",avatar:"",biography:"",phone:0,email:""}})),ce),be=function(e,t){console.log(e);var n=ve[t.type];return n?n(e,t):e},Ee=function(){var e,t,n,r,a=(0,i.s0)(),l=(0,o.useRef)(null),s=function(){var e=(0,o.useState)(""),t=(0,c.Z)(e,2),n=t[0],r=t[1],a=function(){var e=(0,W.Z)(R().mark((function e(t){var n,a,o,l;return R().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t,a=me.storage().ref(),o=a.child(n.name),e.next=5,o.put(n);case 5:return e.next=7,o.getDownloadURL();case 7:l=e.sent,r(l);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return[n,a]}(),u=(0,c.Z)(s,2),d=u[0],m=u[1],p=(e=(0,o.useReducer)(be,{username:"",name:"",password:"",avatar:"",biography:"",phone:0,email:""}),t=(0,c.Z)(e,2),n=t[0],r=t[1],{username:n.username,name:n.name,password:n.password,avatar:n.avatar,biography:n.biography,phone:n.phone,email:n.email,AddRegisterField:function(e,t){r({type:he,payload:t,field:e})},ClearRegisterField:function(){r({type:fe})}}),g=p.username,h=p.name,f=p.password,v=p.avatar,b=p.biography,E=p.phone,y=p.email,w=p.AddRegisterField,C=p.ClearRegisterField;(0,o.useEffect)((function(){d&&(w("avatar",d),console.log("register:"+d))}),[d]);return o.createElement(ue,{username:g,name:h,password:f,avatar:v,biography:b,phone:E,email:y,elementRef:l,handleChange:function(e){var t=e.target,n=t.name,r=t.value;w(n,r)},handleFile:function(e){m(e.target.files[0])},handleClick:function(){l.current.click()},onPost:function(){var e={name:h,username:g,avatar:v,biography:b,password:f,email:y};console.log(e),function(e){return T.apply(this,arguments)}(e).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)})),C(),a("/")}})},ye=function(){var e=(0,i.UO)();return console.log("user desde el perfil".concat(e.user)),o.createElement(o.Fragment,null,"Este es el perfil id",e.user)},we=function(){return o.createElement(i.Z5,null,o.createElement(i.AW,{path:"/",element:o.createElement(te,null)}),o.createElement(i.AW,{path:"/login",element:o.createElement(te,null)}),o.createElement(i.AW,{path:"/register",element:o.createElement(Ee,null)}),o.createElement(i.AW,{path:"/about",element:o.createElement("h1",null,"About")}),o.createElement(i.AW,{path:"/layout",element:o.createElement(j,null)}),o.createElement(i.AW,{path:"/profile",element:o.createElement(ye,null)}),o.createElement(i.AW,{path:"/contact",element:o.createElement("h1",null,"Contact")}))};a.hydrate(o.createElement(l.VK,null,o.createElement(E,null,o.createElement(C,null,o.createElement(we,null)))),document.getElementById("app"))}},n={};function r(e){var a=n[e];if(void 0!==a)return a.exports;var o=n[e]={exports:{}};return t[e].call(o.exports,o,o.exports,r),o.exports}r.m=t,e=[],r.O=(t,n,a,o)=>{if(!n){var l=1/0;for(u=0;u<e.length;u++){for(var[n,a,o]=e[u],i=!0,c=0;c<n.length;c++)(!1&o||l>=o)&&Object.keys(r.O).every((e=>r.O[e](n[c])))?n.splice(c--,1):(i=!1,o<l&&(l=o));if(i){e.splice(u--,1);var s=a();void 0!==s&&(t=s)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[n,a,o]},r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.p="/",(()=>{var e={179:0};r.O.j=t=>0===e[t];var t=(t,n)=>{var a,o,[l,i,c]=n,s=0;if(l.some((t=>0!==e[t]))){for(a in i)r.o(i,a)&&(r.m[a]=i[a]);if(c)var u=c(r)}for(t&&t(n);s<l.length;s++)o=l[s],r.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return r.O(u)},n=self.webpackChunkauthentication_webpack=self.webpackChunkauthentication_webpack||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var a=r.O(void 0,[216],(()=>r(799)));a=r.O(a)})();
//# sourceMappingURL=app.js.map