(()=>{"use strict";var e,o={173:(e,o,t)=>{var s=t(202),n=t(684),r=t(660),l=t(863),i=t(598);const a=(0,n.createContext)({}),c=({children:e})=>{const[o,t]=(0,n.useState)("white");return(0,i.jsx)(a.Provider,{value:{theme:o,handleMode:()=>{t("dark"===o?"white":"dark")}},children:e})},h=a,d=()=>(0,i.jsx)("div",{className:"logo",children:(0,i.jsx)("h2",{children:"<Kuroikuma />"})}),u=({theme:e,handleMode:o})=>(0,i.jsx)("div",{onClick:o,className:`change ${e}`,children:(0,i.jsx)("button",{})}),g=()=>{const{handleMode:e,theme:o}=(0,n.useContext)(h);return(0,i.jsx)(u,{theme:o,handleMode:e})},p=({theme:e,children:o})=>(0,i.jsxs)("div",{className:`container ${e}`,children:[(0,i.jsx)(g,{})," ",(0,i.jsx)(d,{})," ",o]}),x=({children:e})=>{const{theme:o}=(0,n.useContext)(h);return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(p,{theme:o,children:e})})},j=e=>{const{fullWidth:o,hover:t,focus:s,error:n,placeholder:r,type:l,size:a,handleInputChange:c,disabled:h,multiline:d,handlerHoverChange:u,handlerFocusChange:g,rows:p,valueI:x,helperText:j}=e;return(0,i.jsxs)("div",{className:`containerInput ${o?"fullWidth":""} ${t?"hover":""} ${s?"focus":""} ${n?"error":""} ${a}`,children:[d?(0,i.jsx)("textarea",{onChange:c,disabled:h,onMouseEnter:u,onMouseLeave:u,onFocus:g,onBlur:g,placeholder:r,rows:p,children:x}):(0,i.jsx)("input",{id:"input",onChange:c,disabled:h,onMouseEnter:u,onMouseLeave:u,onFocus:g,onBlur:g,placeholder:r,type:l,value:x}),""===j?null:(0,i.jsx)("p",{children:j})]})},m=e=>{const{error:o=!1,disabled:t=!1,fullWidth:s=!1,helperText:r="",value:l="",size:a="",type:c="",placeholder:h="",multiline:d=!1,rows:u=0}=e,[g,p]=(0,n.useState)(!1),[x,m]=(0,n.useState)(l),[v,b]=(0,n.useState)(!1);return(0,i.jsx)(j,{fullWidth:s,hover:v,focus:g,error:o,size:a,handleInputChange:e=>{m(e.target.value)},disabled:t,multiline:d,handlerHoverChange:()=>{b(!v)},handlerFocusChange:()=>{p(!g)},rows:u,type:c,placeholder:h,valueI:x,helperText:r})},v=t.p+"assets/resources/google-white.png",b=t.p+"assets/resources/google-dark.png";var f=t(565);const _=({responseGoogle:e,logoDark:o,logoWhite:t,theme:s})=>(0,i.jsx)(f.GoogleLogin,{clientId:"208716464272-jcatu0n6hreikd73fi0p97rol1kabe0i.apps.googleusercontent.com",render:e=>(0,i.jsx)("button",{className:"buttonGoogle",onClick:e.onClick,disabled:e.disabled,children:(0,i.jsx)("img",{src:"white"===s?o:t,alt:"google"})}),onSuccess:e,onFailure:e,cookiePolicy:"single_host_origin"}),k=()=>{let e=(0,l.s0)();const{theme:o}=(0,n.useContext)(h);return(0,i.jsx)(_,{responseGoogle:o=>{const t=o.profileObj.googleId;e(`/profile/${t}`)},logoWhite:v,logoDark:b,theme:o})},w=t.p+"assets/resources/github-logo-white.png",C=t.p+"assets/resources/github-logo-dark.png",N=({logoWhite:e,logoDark:o,theme:t})=>(0,i.jsx)("button",{className:"buttonGithub",children:(0,i.jsx)("a",{className:"linkGithub",href:"https://github.com/login/oauth/authorize?client_id=5b0a416181b203e91d38",children:(0,i.jsx)("img",{src:"white"===t?o:e,alt:"logo"})})}),W=()=>{const{theme:e}=(0,n.useContext)(h);return(0,i.jsx)(N,{logoWhite:w,logoDark:C,theme:e})},y=t.p+"assets/resources/facebook-white.png",B=t.p+"assets/resources/facebook-dark.png",L=({facebookLogin:e,logoDark:o,logoWhite:t,theme:s})=>(0,i.jsx)("button",{className:"buttonGoogle",onClick:e,children:(0,i.jsx)("img",{src:"white"===s?o:t,alt:"facebook"})}),O=()=>{const{theme:e}=(0,n.useContext)(h);let o=(0,l.s0)();const t=e=>{console.log(e),"connected"===e.status&&window.FB.api("/me?fields=id,name,email,picture",(e=>{const t=e.id;o(`/profile/${t}`)}))};return(0,i.jsx)(L,{facebookLogin:()=>{window.FB&&window.FB.getLoginStatus((e=>{"connected"===e.status?t(e):window.FB.login(t,{scope:"public_profile,email"})}))},logoWhite:y,logoDark:B,theme:e})},F=t.p+"assets/resources/twitter-white.png",$=t.p+"assets/resources/twitter-dark.png",G=()=>{const{theme:e}=(0,n.useContext)(h);return(0,i.jsx)("button",{className:"buttonGoogle",children:(0,i.jsx)("img",{src:"white"===e?$:F,alt:"google"})})},I=()=>(0,i.jsx)(x,{children:(0,i.jsxs)("div",{className:"loginContainer",children:[(0,i.jsxs)("div",{className:"loginContainer__Top",children:[(0,i.jsx)("h3",{children:"Login"}),(0,i.jsx)(m,{size:"sm",fullWidth:!0,type:"text",placeholder:"email"}),(0,i.jsx)(m,{size:"sm",fullWidth:!0,type:"password",placeholder:"password"}),(0,i.jsx)("button",{children:"Login"})]}),(0,i.jsxs)("div",{className:"loginContainer__Botton",children:[(0,i.jsx)("p",{children:"or continue with these social profile"}),(0,i.jsxs)("div",{className:"loginContainer__Botton__Logo",children:[(0,i.jsx)("div",{className:"loginContainer__Botton__Logo__item",children:(0,i.jsx)(k,{})}),(0,i.jsx)("div",{className:"loginContainer__Botton__Logo__item",children:(0,i.jsx)(W,{})}),(0,i.jsx)("div",{className:"loginContainer__Botton__Logo__item",children:(0,i.jsx)(O,{})}),(0,i.jsx)("div",{className:"loginContainer__Botton__Logo__item",children:(0,i.jsx)(G,{})})]}),(0,i.jsxs)("p",{children:["Don’t have an account yet?",(0,i.jsx)("span",{children:"Register"})]})]})]})}),M=()=>{let e=(0,l.UO)();return console.log(`user desde el perfil${e.user}`),(0,i.jsxs)(i.Fragment,{children:["Este es el perfil id",e.user]})},D=()=>(0,i.jsxs)(l.Z5,{children:[(0,i.jsx)(l.AW,{path:"/",element:(0,i.jsx)(I,{})}),(0,i.jsx)(l.AW,{path:"/about",element:(0,i.jsx)("h1",{children:"About"})}),(0,i.jsx)(l.AW,{path:"/layout",element:(0,i.jsx)(x,{})}),(0,i.jsx)(l.AW,{path:"profile/:user",element:(0,i.jsx)(M,{})}),(0,i.jsx)(l.AW,{path:"/contact",element:(0,i.jsx)("h1",{children:"Contact"})})]});s.hydrate((0,i.jsx)(r.VK,{children:(0,i.jsx)(c,{children:(0,i.jsx)(D,{})})}),document.getElementById("app"))}},t={};function s(e){var n=t[e];if(void 0!==n)return n.exports;var r=t[e]={exports:{}};return o[e].call(r.exports,r,r.exports,s),r.exports}s.m=o,e=[],s.O=(o,t,n,r)=>{if(!t){var l=1/0;for(h=0;h<e.length;h++){for(var[t,n,r]=e[h],i=!0,a=0;a<t.length;a++)(!1&r||l>=r)&&Object.keys(s.O).every((e=>s.O[e](t[a])))?t.splice(a--,1):(i=!1,r<l&&(l=r));if(i){e.splice(h--,1);var c=n();void 0!==c&&(o=c)}}return o}r=r||0;for(var h=e.length;h>0&&e[h-1][2]>r;h--)e[h]=e[h-1];e[h]=[t,n,r]},s.d=(e,o)=>{for(var t in o)s.o(o,t)&&!s.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:o[t]})},s.o=(e,o)=>Object.prototype.hasOwnProperty.call(e,o),s.p="/",(()=>{var e={179:0};s.O.j=o=>0===e[o];var o=(o,t)=>{var n,r,[l,i,a]=t,c=0;if(l.some((o=>0!==e[o]))){for(n in i)s.o(i,n)&&(s.m[n]=i[n]);if(a)var h=a(s)}for(o&&o(t);c<l.length;c++)r=l[c],s.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return s.O(h)},t=self.webpackChunkauthentication_webpack=self.webpackChunkauthentication_webpack||[];t.forEach(o.bind(null,0)),t.push=o.bind(null,t.push.bind(t))})();var n=s.O(void 0,[216],(()=>s(173)));n=s.O(n)})();