import{_ as P}from"./my-button.3b37f172.js";import{L as U,a as H,A as I,D as v,y as j,M as K,k as L,o as f,v as _,E as $,F as O,G as u,H as B,I as D,x as Q,p as X,N as A,O as q,u as m,J as y,P as J,K as W}from"./entry.1ac96a01.js";async function k(s=""){let e=s.split(`
`).map(t=>t.at(-1)=="\r"?t.slice(0,-1):t);const n=e.filter(t=>/^[авекмнорстух]?[озчбд]{3}[авекмнорстух]{0,2}$/i.test(t)&&t.length).map(t=>/(^[авекмнорстух]?)([озчбд]{3})([авекмнорстух]{0,2})$/i.exec(t)).map(([t,i,p,E])=>i.padStart(1,"*")+p+E.padEnd(2,"*")),o=e.filter(t=>/^[авекмнорстух]?[озчбд]{0,2}$/i.test(t)&&t.length).map(t=>/^([авекмнорстух]?)([озчбд]{0,2})$/i.exec(t)).map(([t,i,p])=>i.padStart(1,"*")+p.padEnd(5,"*")),d=e.filter(t=>/^[озчбд]{0,2}[авекмнорстух]{1,2}$/i.test(t)).map(t=>/^([озчбд]{0,2})([авекмнорстух]{1,2})$/i.exec(t)).map(([t,i,p])=>i.padStart(4,"*")+p.padEnd(2,"*"));return[...n,...o,...d]}async function G(s=""){return s.split(`
`).map(n=>n.at(-1)=="\r"?n.slice(0,-1):n).filter(n=>/^[авекмнорстух]{3}$/i.test(n))}async function N(s=""){return s.split(`
`).map(n=>n.at(-1)=="\r"?n.slice(0,-1):n).filter(n=>/^[авекмнорстух][озчбд]{3}[авекмнорстух]{2}$/i.test(n))}async function Y(s="russianUTF-8.txt"){const e=await $fetch("/Library/"+s);return k(e)}async function Z(s="russianUTF-8.txt"){const e=await $fetch("/Library/"+s);return G(e)}async function tt(s="russianUTF-8.txt"){const e=await $fetch("/Library/"+s);return N(e)}async function ut(s){const e=await s.text();return k(e)}async function et(s){const e=await s.text();return G(e)}async function st(s){const e=await s.text();return N(e)}function nt(s,e="",n=o=>{}){const o=U({loading:!0,error:!1,data:[]});return{"":ut,3:et,6:st}[e](s).then(t=>{console.log(t),o.data=t,o.loading=!1,n(t)}).catch(t=>{o.error=!0,o.loading=!1,console.error(t)}),o}function at(s="russianUTF-8.txt",e="",n=o=>{}){const o=U({loading:!0,error:!1,data:[]});return{"":Y,3:Z,6:tt}[e](s).then(t=>{console.log(t),o.data=t,o.loading=!1,n(t)}).catch(t=>{o.error=!0,o.loading=!1,console.error(t)}),o}const ot={class:"content-center text-center pt-[5vh]"},rt=u("option",{value:null,disabled:""},"None",-1),lt=["value"],ct=u("br",null,null,-1),it=["value"],dt=u("option",{value:null,disabled:""},"None",-1),pt=["value"],gt=u("br",null,null,-1),ft=W("\u041F\u043E\u0438\u0441\u043A"),_t=u("link",{href:"https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght@100",rel:"stylesheet"},null,-1),ht=u("div",{class:"py-2 px-3 rounded-t-lg border-b border-gray-600 bg-gray-700"},[u("h3",{class:"font-semibold text-white"},"\u041F\u043E\u0438\u0441\u043A \u0441\u043B\u043E\u0432 \u043D\u0430 \u043D\u043E\u043C\u0435\u0440\u0430\u0445 \u043C\u0430\u0448\u0438\u043D")],-1),xt=u("div",{class:"py-2 px-3"},[u("p",null,"1. \u0412\u044B\u0431\u0435\u0440\u0435\u0442\u0435 \u0431\u0430\u0437\u0443 \u0434\u0430\u043D\u043D\u044B\u0445 \u0434\u043B\u044F \u043F\u043E\u0438\u0441\u043A\u0430"),u("p",null,"2. \u0412\u044B\u0431\u0435\u0440\u0435\u0442\u0435 \u043C\u0435\u0442\u043E\u0434 \u0441\u043E\u0432\u043F\u0430\u0434\u0435\u043D\u0438\u044F"),u("p",null,'3. \u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u043A\u043D\u043E\u043F\u043A\u0443 "\u041F\u043E\u0438\u0441\u043A"')],-1),mt=u("div",{"data-popper-arrow":""},null,-1),yt=[ht,xt,mt],bt=u("br",null,null,-1),vt={key:0,class:"text-green-300 pt-5"},Et={key:1},wt={class:"text-gray-600 text-xl"},Ft={key:0,class:"mx-[10vw] sm:mx-[25vw] overflow-x-hidden relative shadow-md rounded-lg"},Ct={class:"w-[80vw] sm:w-[50vw] text-gray-400"},Bt=u("thead",{class:"text-xm bg-gray-700 text-gray-400"},[u("tr",null,[u("th",{class:"py-3 px-auto"},"\u2116"),u("th",{class:"py-3 px-auto"},"\u0421\u043B\u043E\u0432\u043E"),u("th",{class:"py-3 px-auto"},"\u041D\u043E\u043C\u0435\u0440"),u("th",{class:"py-3 px-auto"},"\u0418\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435")])],-1),Dt={class:"py-4 px-auto"},At={class:"py-4 px-auto"},Lt={class:"py-4 px-auto"},$t={class:"py-4 px-auto"},Ot={class:"flex justify-center",href:"https://youtu.be/dQw4w9WgXcQ",target:"_blank"},Ut=["src","alt"],Tt=H({__name:"index",setup(s){I({title:"\u0413\u0435\u043D\u0435\u0440\u0430\u0442\u043E\u0440"});const e={"russianUTF-8.txt":"\u0412\u0441\u0435 \u0440\u0443\u0441\u0441\u043A\u0438\u0435 \u0441\u043B\u043E\u0432\u0430","swears.txt":"\u0411\u0440\u0430\u043D\u043D\u044B\u0435 \u0441\u043B\u043E\u0432\u0430","ebeba.txt":"\u0421\u043C\u0435\u0448\u043D\u044B\u0435 \u0441\u043B\u043E\u0432\u0430","":"\u0421\u0432\u043E\u0439 \u0444\u0430\u0439\u043B"},n=v("russianUTF-8.txt"),o={6:"\u0421\u0435\u0440\u0438\u044F + \u043D\u043E\u043C\u0435\u0440 (6 \u0431\u0443\u043A\u0432)",3:"\u0422\u043E\u043B\u044C\u043A\u043E \u0441\u0435\u0440\u0438\u044F (3 \u0431\u0443\u043A\u0432\u044B)","":"\u0421 \u043F\u0440\u043E\u0431\u0435\u043B\u0430\u043C\u0438"};let d,t,i;const{public:{base:p}}=j();K(async()=>{const l=await new FontFace("RoadNumbers",`url(${p}RoadNumbers2.0.ttf)`).load();document.fonts.add(l),d=document.createElement("canvas"),Object.assign(d,{width:156,height:36}),t=d.getContext("2d"),i=new Image,i.src=`${p}TemplateRU.png`});function E(a="A000AA",l=177){return t.drawImage(i,0,0),t.font="38px RoadNumbers",t.fillText(a,11,30),t.font="25px RoadNumbers",t.fillText(l,120,21),d.toDataURL()}const b=v("6"),g=v({data:[],loading:!1,error:!1}),T=a=>{const l={\u0430:"A",\u0432:"B",\u0435:"E",\u043A:"K",\u043C:"M",\u043D:"H",\u043E:"O",\u0440:"P",\u0441:"C",\u0442:"T",\u0445:"X",\u0443:"Y"},h={\u043E:0,\u0437:3,\u0447:4,\u0431:6,\u0434:9},r=F=>F.replace(/[авекмнорстух]/ig,C=>l[C]),c=F=>F.replace(/[озчбд]/ig,C=>h[C]),[kt,M,V,z]=/(.)(...)(..)/.exec(a.toLowerCase());return r(M)+c(V)+r(z)},w=L(()=>g.value.data.map(a=>{if(a.length==3){const[l,h,r]=/(.)(..)/.exec(a);a=`${h}***${r}`}return T(a)})),R=L(()=>w.value.map(a=>E(a)));function S(){if(n.value==""){const a=document.createElement("input");a.type="file",a.accept=".txt",a.click(),a.onchange=l=>{const h=a.files[0];g.value=nt(h,b.value)}}else g.value=at(n.value,b.value)}let x=v(!1);return(a,l)=>{const h=P;return f(),_("div",ot,[$(u("select",{"onUpdate:modelValue":l[0]||(l[0]=r=>n.value=r),class:"min-w-[220px] h-[40px] mb-5 text-center focus:outline-none rounded-lg border focus:z-10 focus:ring-4 focus:ring-gray-700 bg-gray-800 text-gray-400 border-gray-600 hover:text-white hover:bg-gray-700"},[rt,(f(),_(B,null,D(e,(r,c)=>u("option",{value:c},y(r),9,lt)),64))],512),[[O,n.value]]),ct,$(u("select",{value:b.value,"onUpdate:modelValue":l[1]||(l[1]=r=>b.value=r),class:"min-w-[220px] h-[40px] mb-5 text-center focus:outline-none rounded-lg border focus:z-10 focus:ring-4 focus:ring-gray-700 bg-gray-800 text-gray-400 border-gray-600 hover:text-white hover:bg-gray-700"},[dt,(f(),_(B,null,D(o,(r,c)=>u("option",{value:c},y(r),9,pt)),64))],8,it),[[O,b.value]]),gt,Q(h,{onClick:S,class:A({"border-red-500 focus:ring-red-400 shake":g.value.error})},{default:X(()=>[ft]),_:1},8,["class"]),_t,u("span",{class:"material-symbols-outlined icon w-0",onClick:l[2]||(l[2]=r=>q(x)?x.value=!m(x):x=!m(x))},"help"),u("div",{class:A(["inline-block absolute z-10 w-64 ml-8 mt-[-40px] text-sm font-light rounded-lg border shadow-sm text-gray-400 border-gray-600 bg-gray-800",{hidden:!m(x)}])},yt,2),bt,g.value.loading?(f(),_("span",vt," \u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430... ")):(f(),_("span",Et,[u("span",wt,"\u0412\u0441\u0435\u0433\u043E \u043D\u0430\u0439\u0434\u0435\u043D\u043E: "+y(g.value.data.length),1),g.value.data.length>0?(f(),_("div",Ft,[u("table",Ct,[Bt,(f(!0),_(B,null,D(g.value.data,(r,c)=>(f(),_("tbody",null,[u("tr",{class:A(["border-b border-gray-700",{"bg-gray-800":c%2,"bg-gray-900":(c+1)%2}])},[u("td",Dt,y(c+1),1),u("td",At,y(r),1),u("td",Lt,y(m(w)[c]),1),u("td",$t,[u("a",Ot,[u("img",{src:m(R)[c],alt:m(w)[c]},null,8,Ut)])])],2)]))),256))])])):J("",!0)]))])}}});export{Tt as default};
