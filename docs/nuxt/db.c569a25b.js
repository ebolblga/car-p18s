import{_ as K}from"./my-button.568f8fac.js";import{D as C,u as n,k as E,E as D,F as O,G as k,a as $,A as J,o as v,v as h,H as q,I as X,J as o,K as N,L as S,M as T,x as Y,p as Z,N as x,O as Q,P as ee,Q as ue}from"./entry.b65e2a54.js";var R;const I=typeof window<"u",z=(e,u,t)=>Math.min(t,Math.max(u,e)),B=()=>{};I&&((R=window==null?void 0:window.navigator)==null?void 0:R.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function P(e){return typeof e=="function"?e():n(e)}function te(e){return e}function A(e,u,t={}){var a,r;const{flush:b="sync",deep:_=!1,immediate:d=!0,direction:c="both",transform:l={}}=t;let f,g;const m=(a=l.ltr)!=null?a:s=>s,y=(r=l.rtl)!=null?r:s=>s;return(c==="both"||c==="ltr")&&(f=C(e,s=>u.value=m(s),{flush:b,deep:_,immediate:d})),(c==="both"||c==="rtl")&&(g=C(u,s=>e.value=y(s),{flush:b,deep:_,immediate:d})),()=>{f==null||f(),g==null||g()}}I&&window.document;I&&window.navigator;I&&window.location;const F=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},L="__vueuse_ssr_handlers__";F[L]=F[L]||{};F[L];function U(e,u,t){const a=O(e);return E({get(){return a.value=z(a.value,P(u),P(t))},set(r){a.value=z(r,P(u),P(t))}})}function ne(e){const{total:u=1/0,pageSize:t=10,page:a=1,onPageChange:r=B,onPageSizeChange:b=B,onPageCountChange:_=B}=e,d=U(t,1,1/0),c=E(()=>Math.max(1,Math.ceil(n(u)/n(d)))),l=U(a,1,c),f=E(()=>l.value===1),g=E(()=>l.value===c.value);D(a)&&A(a,l),D(t)&&A(t,d);function m(){l.value--}function y(){l.value++}const s={currentPage:l,currentPageSize:d,pageCount:c,isFirstPage:f,isLastPage:g,prev:m,next:y};return C(l,()=>{r(k(s))}),C(d,()=>{b(k(s))}),C(c,()=>{_(k(s))}),s}var V;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(V||(V={}));var ae=Object.defineProperty,M=Object.getOwnPropertySymbols,se=Object.prototype.hasOwnProperty,oe=Object.prototype.propertyIsEnumerable,j=(e,u,t)=>u in e?ae(e,u,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[u]=t,re=(e,u)=>{for(var t in u||(u={}))se.call(u,t)&&j(e,t,u[t]);if(M)for(var t of M(u))oe.call(u,t)&&j(e,t,u[t]);return e};const le={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};re({linear:te},le);const ie={class:"content-center text-center pt-[5vh]"},ce=o("option",{value:"",disabled:""},"\u0412\u044B\u0431\u0435\u0440\u0435\u0442\u0435 \u0431\u0430\u0437\u0443 \u0434\u0430\u043D\u043D\u044B\u0445",-1),de=["value"],pe=o("link",{href:"https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght@100",rel:"stylesheet"},null,-1),fe=ee('<div class="py-2 px-3 rounded-t-lg border-b border-gray-600 bg-gray-700"><h3 class="font-semibold text-white">\u0418\u0441\u0442\u043E\u0447\u043D\u0438\u043A\u0438 \u0434\u0430\u043D\u043D\u044B\u0445</h3></div><div class="py-2 px-3"><a href="https://github.com/danakt/russian-words" target="_blank" class="underline">\u0412\u0441\u0435 \u0440\u0443\u0441\u0441\u043A\u0438\u0435 \u0441\u043B\u043E\u0432\u0430 \u0438\u0437 \u0440\u0435\u043F\u043E\u0437\u0438\u0442\u043E\u0440\u0438\u044F danakt</a><br><a href="https://2yxa.ru/mat/" target="_blank" class="underline">\u0411\u0440\u0430\u043D\u043D\u044B\u0435 \u0441\u043B\u043E\u0432\u0430 \u0437\u0430\u043F\u0430\u0440\u0441\u0435\u043D\u044B \u0441 \u0441\u0430\u0439\u0442\u0430 2yxa.ru</a><br><a href="https://github.com/ahibis/hahaRU/blob/master/hahaRU/WordGeneration.cs" target="_blank" class="underline">\u0421\u043C\u0435\u0448\u043D\u044B\u0435 \u0441\u043B\u043E\u0432\u0430 \u0438\u0437 \u0441\u0442\u0430\u0440\u043E\u0433\u043E \u043F\u0440\u043E\u0435\u043A\u0442\u0430</a></div><div data-popper-arrow></div>',3),ge=[fe],ve=o("br",null,null,-1),he=ue("\u0421\u043A\u0430\u0447\u0430\u0442\u044C"),_e=o("br",null,null,-1),be={key:0,class:"text-green-300 pt-5"},me={key:1,class:"text-gray-600 text-xl"},ye={class:"flex justify-center"},we={class:"pt-10 content-center text-center"},xe={class:"text-base"},Ee=$({__name:"db",setup(e){J({title:"\u0411\u0430\u0437\u0430 \u0434\u0430\u043D\u043D\u044B\u0445"});let u=O(!1);const t={"russianUTF-8.txt":"\u0412\u0441\u0435 \u0440\u0443\u0441\u0441\u043A\u0438\u0435 \u0441\u043B\u043E\u0432\u0430","swears.txt":"\u0411\u0440\u0430\u043D\u043D\u044B\u0435 \u0441\u043B\u043E\u0432\u0430","ebeba.txt":"\u0421\u043C\u0435\u0448\u043D\u044B\u0435 \u0441\u043B\u043E\u0432\u0430"},a=O("russianUTF-8.txt");let r=O([]);const b=E(()=>r.value.length),_=O(15),{currentPage:d,currentPageSize:c,pageCount:l,isFirstPage:f,isLastPage:g,prev:m,next:y}=ne({total:b,page:1,pageSize:_});async function s(){const w=await $fetch("/Library/"+a.value);r.value=w.split(`
`).map(i=>i.at(-1)=="\r"?i.slice(0,-1):i)}s();async function G(){const w=document.createElement("a");w.download=a.value,w.href="/Library/"+a.value,w.click()}return(w,i)=>{const H=K;return v(),h("div",ie,[q(o("select",{"onUpdate:modelValue":i[0]||(i[0]=p=>a.value=p),onChange:s,class:"min-w-[220px] h-[40px] mb-5 text-center focus:outline-none rounded-lg border focus:z-10 focus:ring-4 focus:ring-gray-700 bg-gray-800 text-gray-400 border-gray-600 hover:text-white hover:bg-gray-700"},[ce,(v(),h(N,null,S(t,(p,W)=>o("option",{value:W},x(p),9,de)),64))],544),[[X,a.value]]),pe,o("span",{class:"material-symbols-outlined icon w-0 cursor-help select-none",onClick:i[1]||(i[1]=p=>D(u)?u.value=!n(u):u=!n(u))},"help"),o("div",{class:T(["inline-block absolute z-10 w-86 ml-8 mt-[-40px] text-sm font-light rounded-lg border shadow-sm text-gray-400 border-gray-600 bg-gray-800",{hidden:!n(u)}])},ge,2),ve,Y(H,{onClick:G},{default:Z(()=>[he]),_:1}),_e,n(r).length?(v(),h("span",me,[o("p",null,"\u0412\u0441\u0435\u0433\u043E \u0437\u0430\u043F\u0438\u0441\u0435\u0439: "+x(n(r).length),1),(v(!0),h(N,null,S(n(c),p=>(v(),h("div",null,x(n(r)[(n(d)-1)*_.value+p]),1))),256)),o("div",ye,[o("div",{class:T({flex:1,"justify-between":n(f)&&n(g),"w-[300px]":1,"justify-center":!(n(f)&&n(g))})},[o("div",we,[o("p",xe,"("+x(n(d))+" / "+x(n(l))+")",1),n(f)?Q("",!0):(v(),h("span",{key:0,class:"material-symbols-outlined icon cursor-pointer select-none",onClick:i[2]||(i[2]=(...p)=>n(m)&&n(m)(...p))},"arrow_back")),n(g)?Q("",!0):(v(),h("span",{key:1,class:"material-symbols-outlined icon cursor-pointer select-none",onClick:i[3]||(i[3]=(...p)=>n(y)&&n(y)(...p))},"arrow_forward"))])],2)])])):(v(),h("span",be," \u041D\u0435 \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043D\u043E "))])}}});export{Ee as default};
