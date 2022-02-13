(()=>{"use strict";var e,t={22:(e,t,n)=>{var o=n(935),r=n(294),a=n(711),l=n(974),c=n(152),i=(0,r.createContext)({}),u=function(e){var t=e.children,n=(0,r.useState)("white"),o=(0,c.Z)(n,2),a=o[0],l=o[1];return r.createElement(i.Provider,{value:{theme:a,handleMode:function(){l("dark"===a?"white":"dark")}}},t)};const s=i;var m=function(){return r.createElement("div",{className:"logo"},r.createElement("h2",null,"<Kuroikuma />"))},h=function(e){var t=e.theme,n=e.handleMode;return r.createElement("div",{onClick:n,className:"change ".concat(t)},r.createElement("button",null))},d=function(){var e=(0,r.useContext)(s),t=e.handleMode,n=e.theme;return r.createElement(h,{theme:n,handleMode:t})},g=function(e){var t=e.theme,n=e.children;return r.createElement("div",{className:"container ".concat(t)},r.createElement(d,null)," ",r.createElement(m,null)," ",n)},p=function(e){var t=e.children,n=(0,r.useContext)(s).theme;return r.createElement(r.Fragment,null,r.createElement(g,{theme:n},t))},f=function(e){var t=e.fullWidth,n=e.hover,o=e.focus,a=e.error,l=e.placeholder,c=e.type,i=e.size,u=e.handleInputChange,s=e.disabled,m=e.multiline,h=e.handlerHoverChange,d=e.handlerFocusChange,g=e.rows,p=e.valueI,f=e.helperText;return r.createElement("div",{className:"containerInput ".concat(t?"fullWidth":""," ").concat(n?"hover":""," ").concat(o?"focus":""," ").concat(a?"error":""," ").concat(i)},m?r.createElement("textarea",{onChange:u,disabled:s,onMouseEnter:h,onMouseLeave:h,onFocus:d,onBlur:d,placeholder:l,rows:g},p):r.createElement("input",{id:"input",onChange:u,disabled:s,onMouseEnter:h,onMouseLeave:h,onFocus:d,onBlur:d,placeholder:l,type:c,value:p}),""===f?null:r.createElement("p",null,f))},v=function(e){var t=e.error,n=void 0!==t&&t,o=e.disabled,a=void 0!==o&&o,l=e.fullWidth,i=void 0!==l&&l,u=e.helperText,s=void 0===u?"":u,m=e.value,h=void 0===m?"":m,d=e.size,g=void 0===d?"":d,p=e.type,v=void 0===p?"":p,E=e.placeholder,b=void 0===E?"":E,_=e.multiline,w=void 0!==_&&_,k=e.rows,C=void 0===k?0:k,y=(0,r.useState)(!1),x=(0,c.Z)(y,2),N=x[0],W=x[1],O=(0,r.useState)(h),B=(0,c.Z)(O,2),L=B[0],F=B[1],j=(0,r.useState)(!1),M=(0,c.Z)(j,2),G=M[0],I=M[1];return r.createElement(f,{fullWidth:i,hover:G,focus:N,error:n,size:g,handleInputChange:function(e){F(e.target.value)},disabled:a,multiline:w,handlerHoverChange:function(){I(!G)},handlerFocusChange:function(){W(!N)},rows:C,type:v,placeholder:b,valueI:L,helperText:s})};const E=n.p+"assets/resources/google-white.png",b=n.p+"assets/resources/google-dark.png";var _=n(645),w=function(e){var t=e.responseGoogle,n=e.logoDark,o=e.logoWhite,a=e.theme;return r.createElement(_.GoogleLogin,{clientId:"208716464272-jcatu0n6hreikd73fi0p97rol1kabe0i.apps.googleusercontent.com",render:function(e){return r.createElement("button",{className:"buttonGoogle",onClick:e.onClick,disabled:e.disabled},r.createElement("img",{src:"white"===a?n:o,alt:"google"}))},onSuccess:t,onFailure:t,cookiePolicy:"single_host_origin"})},k=n(861),C=n(757),y=n.n(C);function x(e){return N.apply(this,arguments)}function N(){return(N=(0,k.Z)(y().mark((function e(t){var n;return y().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/login_auth",{method:"POST",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},redirect:"follow",referrerPolicy:"no-referrer",body:JSON.stringify(t)});case 2:return n=e.sent,e.abrupt("return",n.json().then((function(e){return e})).catch((function(e){return console.log(e)})));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var W=function(){(0,l.s0)();var e=(0,r.useContext)(s).theme;return r.createElement(w,{responseGoogle:function(e){var t=e.profileObj;x({email:t.email||"",username:t.givenName||"",password:t.googleId||"",avatar:t.imageUrl||"",name:t.name||"",biography:"",phone:0}).then((function(e){return console.log(e)}))},logoWhite:E,logoDark:b,theme:e})};const O=n.p+"assets/resources/github-logo-white.png",B=n.p+"assets/resources/github-logo-dark.png";var L=function(e){var t=e.logoWhite,n=e.logoDark,o=e.theme;return r.createElement("button",{className:"buttonGithub"},r.createElement("a",{className:"linkGithub",href:"https://github.com/login/oauth/authorize?client_id=5b0a416181b203e91d38"},r.createElement("img",{src:"white"===o?n:t,alt:"logo"})))},F=function(){var e=(0,r.useContext)(s).theme;return(0,r.useEffect)((function(){if("undefined"!=typeof window){var e=window.location.href;if(e.includes("?code=")){var t=e.split("?code=")[1];fetch("/auth-github/".concat(t)).then((function(e){return e.json()})).then((function(e){x({email:e.html_url||"",username:e.login||"",password:e.login||"",avatar:e.avatar_url||"",name:e.name||"",biography:e.bio||"",phone:0}).then((function(e){return console.log(e)}))})).catch((function(e){console.log(e)}))}}}),[]),r.createElement(L,{logoWhite:O,logoDark:B,theme:e})};const j=n.p+"assets/resources/facebook-white.png",M=n.p+"assets/resources/facebook-dark.png";var G=function(e){var t=e.facebookLogin,n=e.logoDark,o=e.logoWhite,a=e.theme;return r.createElement("button",{className:"buttonGoogle",onClick:t},r.createElement("img",{src:"white"===a?n:o,alt:"facebook"}))},I=function(){var e=(0,r.useContext)(s).theme,t=((0,l.s0)(),function(e){"connected"===e.status&&window.FB.api("/me?fields=id,name,email,picture",(function(e){x({email:e.email||"",username:"avatar default",password:e.id||"",avatar:e.picture.data.url||"",name:e.name||"",biography:"",phone:0}).then((function(e){return console.log(e)}))}))});return r.createElement(G,{facebookLogin:function(){window.FB&&window.FB.getLoginStatus((function(e){"connected"===e.status?t(e):window.FB.login(t,{scope:"public_profile,email"})}))},logoWhite:j,logoDark:M,theme:e})};const S=n.p+"assets/resources/twitter-white.png",A=n.p+"assets/resources/twitter-dark.png";var D=function(){var e=(0,r.useContext)(s).theme;return r.createElement("button",{className:"buttonGoogle"},r.createElement("img",{src:"white"===e?A:S,alt:"google"}))},z=function(){return r.createElement(p,null,r.createElement("div",{className:"loginContainer"},r.createElement("div",{className:"loginContainer__Top"},r.createElement("h3",null,"Login"),r.createElement(v,{size:"sm",fullWidth:!0,type:"text",placeholder:"email"}),r.createElement(v,{size:"sm",fullWidth:!0,type:"password",placeholder:"password"}),r.createElement("button",null,"Login")),r.createElement("div",{className:"loginContainer__Botton"},r.createElement("p",null,"or continue with these social profile"),r.createElement("div",{className:"loginContainer__Botton__Logo"},r.createElement("div",{className:"loginContainer__Botton__Logo__item"},r.createElement(W,null)),r.createElement("div",{className:"loginContainer__Botton__Logo__item"},r.createElement(F,null)),r.createElement("div",{className:"loginContainer__Botton__Logo__item"},r.createElement(I,null)),r.createElement("div",{className:"loginContainer__Botton__Logo__item"},r.createElement(D,null))),r.createElement("p",null,"Don’t have an account yet?",r.createElement("span",null,"Register")))))},P=function(){return r.createElement(z,null)},T=function(){var e=(0,l.UO)();return console.log("user desde el perfil".concat(e.user)),r.createElement(r.Fragment,null,"Este es el perfil id",e.user)},Z=function(){return r.createElement(l.Z5,null,r.createElement(l.AW,{path:"/",element:r.createElement(P,null)}),r.createElement(l.AW,{path:"/login",element:r.createElement(P,null)}),r.createElement(l.AW,{path:"/about",element:r.createElement("h1",null,"About")}),r.createElement(l.AW,{path:"/layout",element:r.createElement(p,null)}),r.createElement(l.AW,{path:"profile/:user",element:r.createElement(T,null)}),r.createElement(l.AW,{path:"/contact",element:r.createElement("h1",null,"Contact")}))};o.hydrate(r.createElement(a.VK,null,r.createElement(u,null,r.createElement(Z,null))),document.getElementById("app"))}},n={};function o(e){var r=n[e];if(void 0!==r)return r.exports;var a=n[e]={exports:{}};return t[e].call(a.exports,a,a.exports,o),a.exports}o.m=t,e=[],o.O=(t,n,r,a)=>{if(!n){var l=1/0;for(s=0;s<e.length;s++){for(var[n,r,a]=e[s],c=!0,i=0;i<n.length;i++)(!1&a||l>=a)&&Object.keys(o.O).every((e=>o.O[e](n[i])))?n.splice(i--,1):(c=!1,a<l&&(l=a));if(c){e.splice(s--,1);var u=r();void 0!==u&&(t=u)}}return t}a=a||0;for(var s=e.length;s>0&&e[s-1][2]>a;s--)e[s]=e[s-1];e[s]=[n,r,a]},o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.p="/",(()=>{var e={179:0};o.O.j=t=>0===e[t];var t=(t,n)=>{var r,a,[l,c,i]=n,u=0;if(l.some((t=>0!==e[t]))){for(r in c)o.o(c,r)&&(o.m[r]=c[r]);if(i)var s=i(o)}for(t&&t(n);u<l.length;u++)a=l[u],o.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return o.O(s)},n=self.webpackChunkauthentication_webpack=self.webpackChunkauthentication_webpack||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var r=o.O(void 0,[216],(()=>o(22)));r=o.O(r)})();