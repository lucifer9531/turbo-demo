import{d as z,o as i,c as h,a as t,t as H,p as k,b as C,e,f as c,w as a,u as g,F as M,R as b,g as L,r as w,h as x,i as j,j as I,k as A}from"./vue-8fc9dc6e.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))m(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const _ of n.addedNodes)_.tagName==="LINK"&&_.rel==="modulepreload"&&m(_)}).observe(document,{childList:!0,subtree:!0});function l(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function m(s){if(s.ep)return;s.ep=!0;const n=l(s);fetch(s.href,n)}})();const E=o=>(k("data-v-7fe2c961"),o=o(),C(),o),S={class:"greetings"},R={class:"green"},T=E(()=>t("h3",null,[e(" You’ve successfully created a project with "),t("a",{href:"https://vitejs.dev/",target:"_blank",rel:"noopener"},"Vite"),e(" + "),t("a",{href:"https://vuejs.org/",target:"_blank",rel:"noopener"},"Vue 3"),e(". What's next? ")],-1)),O=z({__name:"HelloWorld",props:{msg:{}},setup(o){return(r,l)=>(i(),h("div",S,[t("h1",R,H(r.msg),1),T]))}});const u=(o,r)=>{const l=o.__vccOpts||o;for(const[m,s]of r)l[m]=s;return l},P=u(O,[["__scopeId","data-v-7fe2c961"]]),W={class:"wrapper"},D=z({__name:"App",setup(o){return(r,l)=>(i(),h(M,null,[t("header",null,[t("div",W,[c(P,{msg:"You did it!"}),t("nav",null,[c(g(b),{to:"/"},{default:a(()=>[e("Home")]),_:1}),c(g(b),{to:"/about"},{default:a(()=>[e("About")]),_:1})])])]),c(g(L))],64))}});const B=u(D,[["__scopeId","data-v-c4716740"]]),N="modulepreload",Y=function(o){return"/"+o},$={},q=function(r,l,m){if(!l||l.length===0)return r();const s=document.getElementsByTagName("link");return Promise.all(l.map(n=>{if(n=Y(n),n in $)return;$[n]=!0;const _=n.endsWith(".css"),V=_?'[rel="stylesheet"]':"";if(!!m)for(let p=s.length-1;p>=0;p--){const v=s[p];if(v.href===n&&(!_||v.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${n}"]${V}`))return;const d=document.createElement("link");if(d.rel=_?"stylesheet":N,_||(d.as="script",d.crossOrigin=""),d.href=n,document.head.appendChild(d),_)return new Promise((p,v)=>{d.addEventListener("load",p),d.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${n}`)))})})).then(()=>r())};const F={},U={class:"item"},G={class:"details"};function K(o,r){return i(),h("div",U,[t("i",null,[w(o.$slots,"icon",{},void 0,!0)]),t("div",G,[t("h3",null,[w(o.$slots,"heading",{},void 0,!0)]),w(o.$slots,"default",{},void 0,!0)])])}const f=u(F,[["render",K],["__scopeId","data-v-d5ce134a"]]),J={},Q={xmlns:"http://www.w3.org/2000/svg",width:"20",height:"17",fill:"currentColor"},X=t("path",{d:"M11 2.253a1 1 0 1 0-2 0h2zm-2 13a1 1 0 1 0 2 0H9zm.447-12.167a1 1 0 1 0 1.107-1.666L9.447 3.086zM1 2.253L.447 1.42A1 1 0 0 0 0 2.253h1zm0 13H0a1 1 0 0 0 1.553.833L1 15.253zm8.447.833a1 1 0 1 0 1.107-1.666l-1.107 1.666zm0-14.666a1 1 0 1 0 1.107 1.666L9.447 1.42zM19 2.253h1a1 1 0 0 0-.447-.833L19 2.253zm0 13l-.553.833A1 1 0 0 0 20 15.253h-1zm-9.553-.833a1 1 0 1 0 1.107 1.666L9.447 14.42zM9 2.253v13h2v-13H9zm1.553-.833C9.203.523 7.42 0 5.5 0v2c1.572 0 2.961.431 3.947 1.086l1.107-1.666zM5.5 0C3.58 0 1.797.523.447 1.42l1.107 1.666C2.539 2.431 3.928 2 5.5 2V0zM0 2.253v13h2v-13H0zm1.553 13.833C2.539 15.431 3.928 15 5.5 15v-2c-1.92 0-3.703.523-5.053 1.42l1.107 1.666zM5.5 15c1.572 0 2.961.431 3.947 1.086l1.107-1.666C9.203 13.523 7.42 13 5.5 13v2zm5.053-11.914C11.539 2.431 12.928 2 14.5 2V0c-1.92 0-3.703.523-5.053 1.42l1.107 1.666zM14.5 2c1.573 0 2.961.431 3.947 1.086l1.107-1.666C18.203.523 16.421 0 14.5 0v2zm3.5.253v13h2v-13h-2zm1.553 12.167C18.203 13.523 16.421 13 14.5 13v2c1.573 0 2.961.431 3.947 1.086l1.107-1.666zM14.5 13c-1.92 0-3.703.523-5.053 1.42l1.107 1.666C11.539 15.431 12.928 15 14.5 15v-2z"},null,-1),Z=[X];function e1(o,r){return i(),h("svg",Q,Z)}const t1=u(J,[["render",e1]]),o1={},n1={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":"true",role:"img",class:"iconify iconify--mdi",width:"24",height:"24",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},s1=t("path",{d:"M20 18v-4h-3v1h-2v-1H9v1H7v-1H4v4h16M6.33 8l-1.74 4H7v-1h2v1h6v-1h2v1h2.41l-1.74-4H6.33M9 5v1h6V5H9m12.84 7.61c.1.22.16.48.16.8V18c0 .53-.21 1-.6 1.41c-.4.4-.85.59-1.4.59H4c-.55 0-1-.19-1.4-.59C2.21 19 2 18.53 2 18v-4.59c0-.32.06-.58.16-.8L4.5 7.22C4.84 6.41 5.45 6 6.33 6H7V5c0-.55.18-1 .57-1.41C7.96 3.2 8.44 3 9 3h6c.56 0 1.04.2 1.43.59c.39.41.57.86.57 1.41v1h.67c.88 0 1.49.41 1.83 1.22l2.34 5.39z",fill:"currentColor"},null,-1),r1=[s1];function a1(o,r){return i(),h("svg",n1,r1)}const c1=u(o1,[["render",a1]]),l1={},i1={xmlns:"http://www.w3.org/2000/svg",width:"18",height:"20",fill:"currentColor"},h1=t("path",{d:"M11.447 8.894a1 1 0 1 0-.894-1.789l.894 1.789zm-2.894-.789a1 1 0 1 0 .894 1.789l-.894-1.789zm0 1.789a1 1 0 1 0 .894-1.789l-.894 1.789zM7.447 7.106a1 1 0 1 0-.894 1.789l.894-1.789zM10 9a1 1 0 1 0-2 0h2zm-2 2.5a1 1 0 1 0 2 0H8zm9.447-5.606a1 1 0 1 0-.894-1.789l.894 1.789zm-2.894-.789a1 1 0 1 0 .894 1.789l-.894-1.789zm2 .789a1 1 0 1 0 .894-1.789l-.894 1.789zm-1.106-2.789a1 1 0 1 0-.894 1.789l.894-1.789zM18 5a1 1 0 1 0-2 0h2zm-2 2.5a1 1 0 1 0 2 0h-2zm-5.447-4.606a1 1 0 1 0 .894-1.789l-.894 1.789zM9 1l.447-.894a1 1 0 0 0-.894 0L9 1zm-2.447.106a1 1 0 1 0 .894 1.789l-.894-1.789zm-6 3a1 1 0 1 0 .894 1.789L.553 4.106zm2.894.789a1 1 0 1 0-.894-1.789l.894 1.789zm-2-.789a1 1 0 1 0-.894 1.789l.894-1.789zm1.106 2.789a1 1 0 1 0 .894-1.789l-.894 1.789zM2 5a1 1 0 1 0-2 0h2zM0 7.5a1 1 0 1 0 2 0H0zm8.553 12.394a1 1 0 1 0 .894-1.789l-.894 1.789zm-1.106-2.789a1 1 0 1 0-.894 1.789l.894-1.789zm1.106 1a1 1 0 1 0 .894 1.789l-.894-1.789zm2.894.789a1 1 0 1 0-.894-1.789l.894 1.789zM8 19a1 1 0 1 0 2 0H8zm2-2.5a1 1 0 1 0-2 0h2zm-7.447.394a1 1 0 1 0 .894-1.789l-.894 1.789zM1 15H0a1 1 0 0 0 .553.894L1 15zm1-2.5a1 1 0 1 0-2 0h2zm12.553 2.606a1 1 0 1 0 .894 1.789l-.894-1.789zM17 15l.447.894A1 1 0 0 0 18 15h-1zm1-2.5a1 1 0 1 0-2 0h2zm-7.447-5.394l-2 1 .894 1.789 2-1-.894-1.789zm-1.106 1l-2-1-.894 1.789 2 1 .894-1.789zM8 9v2.5h2V9H8zm8.553-4.894l-2 1 .894 1.789 2-1-.894-1.789zm.894 0l-2-1-.894 1.789 2 1 .894-1.789zM16 5v2.5h2V5h-2zm-4.553-3.894l-2-1-.894 1.789 2 1 .894-1.789zm-2.894-1l-2 1 .894 1.789 2-1L8.553.106zM1.447 5.894l2-1-.894-1.789-2 1 .894 1.789zm-.894 0l2 1 .894-1.789-2-1-.894 1.789zM0 5v2.5h2V5H0zm9.447 13.106l-2-1-.894 1.789 2 1 .894-1.789zm0 1.789l2-1-.894-1.789-2 1 .894 1.789zM10 19v-2.5H8V19h2zm-6.553-3.894l-2-1-.894 1.789 2 1 .894-1.789zM2 15v-2.5H0V15h2zm13.447 1.894l2-1-.894-1.789-2 1 .894 1.789zM18 15v-2.5h-2V15h2z"},null,-1),_1=[h1];function u1(o,r){return i(),h("svg",i1,_1)}const d1=u(l1,[["render",u1]]),m1={},p1={xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor"},f1=t("path",{d:"M15 4a1 1 0 1 0 0 2V4zm0 11v-1a1 1 0 0 0-1 1h1zm0 4l-.707.707A1 1 0 0 0 16 19h-1zm-4-4l.707-.707A1 1 0 0 0 11 14v1zm-4.707-1.293a1 1 0 0 0-1.414 1.414l1.414-1.414zm-.707.707l-.707-.707.707.707zM9 11v-1a1 1 0 0 0-.707.293L9 11zm-4 0h1a1 1 0 0 0-1-1v1zm0 4H4a1 1 0 0 0 1.707.707L5 15zm10-9h2V4h-2v2zm2 0a1 1 0 0 1 1 1h2a3 3 0 0 0-3-3v2zm1 1v6h2V7h-2zm0 6a1 1 0 0 1-1 1v2a3 3 0 0 0 3-3h-2zm-1 1h-2v2h2v-2zm-3 1v4h2v-4h-2zm1.707 3.293l-4-4-1.414 1.414 4 4 1.414-1.414zM11 14H7v2h4v-2zm-4 0c-.276 0-.525-.111-.707-.293l-1.414 1.414C5.42 15.663 6.172 16 7 16v-2zm-.707 1.121l3.414-3.414-1.414-1.414-3.414 3.414 1.414 1.414zM9 12h4v-2H9v2zm4 0a3 3 0 0 0 3-3h-2a1 1 0 0 1-1 1v2zm3-3V3h-2v6h2zm0-6a3 3 0 0 0-3-3v2a1 1 0 0 1 1 1h2zm-3-3H3v2h10V0zM3 0a3 3 0 0 0-3 3h2a1 1 0 0 1 1-1V0zM0 3v6h2V3H0zm0 6a3 3 0 0 0 3 3v-2a1 1 0 0 1-1-1H0zm3 3h2v-2H3v2zm1-1v4h2v-4H4zm1.707 4.707l.586-.586-1.414-1.414-.586.586 1.414 1.414z"},null,-1),v1=[f1];function z1(o,r){return i(),h("svg",p1,v1)}const g1=u(m1,[["render",z1]]),w1={},y1={xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor"},b1=t("path",{d:"M10 3.22l-.61-.6a5.5 5.5 0 0 0-7.666.105 5.5 5.5 0 0 0-.114 7.665L10 18.78l8.39-8.4a5.5 5.5 0 0 0-.114-7.665 5.5 5.5 0 0 0-7.666-.105l-.61.61z"},null,-1),$1=[b1];function M1(o,r){return i(),h("svg",y1,$1)}const V1=u(w1,[["render",M1]]),H1=t("a",{href:"https://vuejs.org/",target:"_blank",rel:"noopener"},"official documentation",-1),k1=t("a",{href:"https://vitejs.dev/guide/features.html",target:"_blank",rel:"noopener"},"Vite",-1),C1=t("a",{href:"https://code.visualstudio.com/",target:"_blank",rel:"noopener"},"VSCode",-1),L1=t("a",{href:"https://github.com/johnsoncodehk/volar",target:"_blank",rel:"noopener"},"Volar",-1),x1=t("a",{href:"https://www.cypress.io/",target:"_blank",rel:"noopener"},"Cypress",-1),j1=t("a",{href:"https://on.cypress.io/component",target:"_blank"},"Cypress Component Testing",-1),I1=t("br",null,null,-1),A1=t("code",null,"README.md",-1),E1=t("a",{href:"https://pinia.vuejs.org/",target:"_blank",rel:"noopener"},"Pinia",-1),S1=t("a",{href:"https://router.vuejs.org/",target:"_blank",rel:"noopener"},"Vue Router",-1),R1=t("a",{href:"https://test-utils.vuejs.org/",target:"_blank",rel:"noopener"},"Vue Test Utils",-1),T1=t("a",{href:"https://github.com/vuejs/devtools",target:"_blank",rel:"noopener"},"Vue Dev Tools",-1),O1=t("a",{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"},"Awesome Vue",-1),P1=t("a",{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"},"Vue Land",-1),W1=t("a",{href:"https://stackoverflow.com/questions/tagged/vue.js",target:"_blank",rel:"noopener"},"StackOverflow",-1),D1=t("a",{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"},"our mailing list",-1),B1=t("a",{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"},"@vuejs",-1),N1=t("a",{href:"https://vuejs.org/sponsor/",target:"_blank",rel:"noopener"},"becoming a sponsor",-1),Y1=z({__name:"TheWelcome",setup(o){return(r,l)=>(i(),h(M,null,[c(f,null,{icon:a(()=>[c(t1)]),heading:a(()=>[e("Documentation")]),default:a(()=>[e(" Vue’s "),H1,e(" provides you with all information you need to get started. ")]),_:1}),c(f,null,{icon:a(()=>[c(c1)]),heading:a(()=>[e("Tooling")]),default:a(()=>[e(" This project is served and bundled with "),k1,e(". The recommended IDE setup is "),C1,e(" + "),L1,e(". If you need to test your components and web pages, check out "),x1,e(" and "),j1,e(". "),I1,e(" More instructions are available in "),A1,e(". ")]),_:1}),c(f,null,{icon:a(()=>[c(d1)]),heading:a(()=>[e("Ecosystem")]),default:a(()=>[e(" Get official tools and libraries for your project: "),E1,e(", "),S1,e(", "),R1,e(", and "),T1,e(". If you need more resources, we suggest paying "),O1,e(" a visit. ")]),_:1}),c(f,null,{icon:a(()=>[c(g1)]),heading:a(()=>[e("Community")]),default:a(()=>[e(" Got stuck? Ask your question on "),P1,e(", our official Discord server, or "),W1,e(". You should also subscribe to "),D1,e(" and follow the official "),B1,e(" twitter account for latest news in the Vue world. ")]),_:1}),c(f,null,{icon:a(()=>[c(V1)]),heading:a(()=>[e("Support Vue")]),default:a(()=>[e(" As an independent project, Vue relies on community backing for its sustainability. You can help us by "),N1,e(". ")]),_:1})],64))}}),q1=z({__name:"HomeView",setup(o){return(r,l)=>(i(),h("main",null,[c(Y1)]))}}),F1=x({history:j("/"),routes:[{path:"/",name:"home",component:q1},{path:"/about",name:"about",component:()=>q(()=>import("./AboutView-8c171935.js"),["assets/AboutView-8c171935.js","assets/vue-8fc9dc6e.js","assets/AboutView-4d995ba2.css"])}]}),y=I(B);y.use(A());y.use(F1);y.mount("#app");export{u as _};
