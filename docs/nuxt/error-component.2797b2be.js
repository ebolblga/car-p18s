import{d as a,_ as c,o as E,c as f,n as k,g as P,u as t}from"./entry.69c5baba.js";const v={__name:"nuxt-error-page",props:{error:Object},setup(p){var n;const s=p.error;(s.stack||"").split(`
`).splice(1).map(e=>({text:e.replace("webpack:/","").replace(".vue",".js").trim(),internal:e.includes("node_modules")&&!e.includes(".cache")||e.includes("internal")||e.includes("new Promise")})).map(e=>`<span class="stack${e.internal?" internal":""}">${e.text}</span>`).join(`
`);const r=Number(s.statusCode||500),o=r===404,u=(n=s.statusMessage)!=null?n:o?"Page Not Found":"Internal Server Error",i=s.message||s.toString(),_=void 0,d=a(()=>c(()=>import("./error-404.e6f86fb6.js"),["error-404.e6f86fb6.js","error-404.7729cee9.css","entry.69c5baba.js","entry.b23db60e.css"],import.meta.url)),l=a(()=>c(()=>import("./error-500.99a4a4f0.js"),["error-500.99a4a4f0.js","error-500.08851880.css","entry.69c5baba.js","entry.b23db60e.css"],import.meta.url)),m=o?d:l;return(e,g)=>(E(),f(t(m),k(P({statusCode:t(r),statusMessage:t(u),description:t(i),stack:t(_)})),null,16))}},b=v;export{b as default};
