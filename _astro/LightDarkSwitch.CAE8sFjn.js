import{S as lt,i as at,s as ut,D as fe,k as re,E as He,g as S,x as ft,F as Ot,G as de,J as Qe,e as M,b as P,d as j,K as Ge,L as jt,H as Lt,M as Mt,A as Pt,N as Ke,O as Dt,j as ve,I as xe,P as Q,a as N,y as ke,Q as G,f as B,z as _e,h as I,R as O,l as x,T as K,n as J,t as W,r as X,U as Y,w as $t}from"./translation.ujZDrHxz.js";function dt(e,t){const n={},o={},r={$$scope:1};let i=e.length;for(;i--;){const s=e[i],c=t[i];if(c){for(const e in s)e in c||(o[e]=1);for(const e in c)r[e]||(n[e]=c[e],r[e]=1);e[i]=c}else for(const e in s)r[e]=1}for(const e in o)e in n||(n[e]=void 0);return n}const U="light",V="dark",F="auto",Ft=F,te=/^[a-z0-9]+(-[a-z0-9]+)*$/,pe=(e,t,n,o="")=>{const r=e.split(":");if("@"===e.slice(0,1)){if(r.length<2||r.length>3)return null;o=r.shift().slice(1)}if(r.length>3||!r.length)return null;if(r.length>1){const e=r.pop(),n=r.pop(),i={provider:r.length>0?r[0]:o,prefix:n,name:e};return t&&!ae(i)?null:i}const i=r[0],s=i.split("-");if(s.length>1){const e={provider:o,prefix:s.shift(),name:s.join("-")};return t&&!ae(e)?null:e}if(n&&""===o){const e={provider:o,prefix:"",name:i};return t&&!ae(e,n)?null:e}return null},ae=(e,t)=>!!e&&!(""!==e.provider&&!e.provider.match(te)||!(t&&""===e.prefix||e.prefix.match(te))||!e.name.match(te)),ht=Object.freeze({left:0,top:0,width:16,height:16}),he=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),me=Object.freeze({...ht,...he}),Ee=Object.freeze({...me,body:"",hidden:!1});function At(e,t){const n={};!e.hFlip!=!t.hFlip&&(n.hFlip=!0),!e.vFlip!=!t.vFlip&&(n.vFlip=!0);const o=((e.rotate||0)+(t.rotate||0))%4;return o&&(n.rotate=o),n}function Je(e,t){const n=At(e,t);for(const o in Ee)o in he?o in e&&!(o in n)&&(n[o]=he[o]):o in t?n[o]=t[o]:o in e&&(n[o]=e[o]);return n}function Nt(e,t){const n=e.icons,o=e.aliases||Object.create(null),r=Object.create(null);return Object.keys(n).concat(Object.keys(o)).forEach((function e(t){if(n[t])return r[t]=[];if(!(t in r)){r[t]=null;const n=o[t]&&o[t].parent,i=n&&e(n);i&&(r[t]=[n].concat(i))}return r[t]})),r}function Bt(e,t,n){const o=e.icons,r=e.aliases||Object.create(null);let i={};function s(e){i=Je(o[e]||r[e],i)}return s(t),n.forEach(s),Je(e,i)}function pt(e,t){const n=[];if("object"!=typeof e||"object"!=typeof e.icons)return n;e.not_found instanceof Array&&e.not_found.forEach((e=>{t(e,null),n.push(e)}));const o=Nt(e);for(const r in o){const i=o[r];i&&(t(r,Bt(e,r,i)),n.push(r))}return n}const Rt={provider:"",aliases:{},not_found:{},...ht};function Se(e,t){for(const n in t)if(n in e&&typeof e[n]!=typeof t[n])return!1;return!0}function mt(e){if("object"!=typeof e||null===e)return null;const t=e;if("string"!=typeof t.prefix||!e.icons||"object"!=typeof e.icons||!Se(e,Rt))return null;const n=t.icons;for(const e in n){const t=n[e];if(!e.match(te)||"string"!=typeof t.body||!Se(t,Ee))return null}const o=t.aliases||Object.create(null);for(const e in o){const t=o[e],r=t.parent;if(!e.match(te)||"string"!=typeof r||!n[r]&&!o[r]||!Se(t,Ee))return null}return t}const We=Object.create(null);function Ut(e,t){return{provider:e,prefix:t,icons:Object.create(null),missing:new Set}}function q(e,t){const n=We[e]||(We[e]=Object.create(null));return n[t]||(n[t]=Ut(e,t))}function Pe(e,t){return mt(t)?pt(t,((t,n)=>{n?e.icons[t]=n:e.missing.add(t)})):[]}function Vt(e,t,n){try{if("string"==typeof n.body)return e.icons[t]={...n},!0}catch{}return!1}let ne=!1;function gt(e){return"boolean"==typeof e&&(ne=e),ne}function qt(e){const t="string"==typeof e?pe(e,!0,ne):e;if(t){const e=q(t.provider,t.prefix),n=t.name;return e.icons[n]||(e.missing.has(n)?null:void 0)}}function zt(e,t){const n=pe(e,!0,ne);if(!n)return!1;return Vt(q(n.provider,n.prefix),n.name,t)}function Ht(e,t){if("object"!=typeof e)return!1;if("string"!=typeof t&&(t=e.provider||""),ne&&!t&&!e.prefix){let t=!1;return mt(e)&&(e.prefix="",pt(e,((e,n)=>{n&&zt(e,n)&&(t=!0)}))),t}const n=e.prefix;if(!ae({provider:t,prefix:n,name:"a"}))return!1;return!!Pe(q(t,n),e)}const bt=Object.freeze({width:null,height:null}),yt=Object.freeze({...bt,...he}),Qt=/(-?[0-9.]*[0-9]+[0-9.]*)/g,Gt=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function Xe(e,t,n){if(1===t)return e;if(n=n||100,"number"==typeof e)return Math.ceil(e*t*n)/n;if("string"!=typeof e)return e;const o=e.split(Qt);if(null===o||!o.length)return e;const r=[];let i=o.shift(),s=Gt.test(i);for(;;){if(s){const e=parseFloat(i);isNaN(e)?r.push(i):r.push(Math.ceil(e*t*n)/n)}else r.push(i);if(i=o.shift(),void 0===i)return r.join("");s=!s}}function Kt(e,t="defs"){let n="";const o=e.indexOf("<"+t);for(;o>=0;){const r=e.indexOf(">",o),i=e.indexOf("</"+t);if(-1===r||-1===i)break;const s=e.indexOf(">",i);if(-1===s)break;n+=e.slice(r+1,i).trim(),e=e.slice(0,o).trim()+e.slice(s+1)}return{defs:n,content:e}}function Jt(e,t){return e?"<defs>"+e+"</defs>"+t:t}function Wt(e,t,n){const o=Kt(e);return Jt(o.defs,t+o.content+n)}const Xt=e=>"unset"===e||"undefined"===e||"none"===e;function Yt(e,t){const n={...me,...e},o={...yt,...t},r={left:n.left,top:n.top,width:n.width,height:n.height};let i=n.body;[n,o].forEach((e=>{const t=[],n=e.hFlip,o=e.vFlip;let s,c=e.rotate;switch(n?o?c+=2:(t.push("translate("+(r.width+r.left).toString()+" "+(0-r.top).toString()+")"),t.push("scale(-1 1)"),r.top=r.left=0):o&&(t.push("translate("+(0-r.left).toString()+" "+(r.height+r.top).toString()+")"),t.push("scale(1 -1)"),r.top=r.left=0),c<0&&(c-=4*Math.floor(c/4)),c%=4,c){case 1:s=r.height/2+r.top,t.unshift("rotate(90 "+s.toString()+" "+s.toString()+")");break;case 2:t.unshift("rotate(180 "+(r.width/2+r.left).toString()+" "+(r.height/2+r.top).toString()+")");break;case 3:s=r.width/2+r.left,t.unshift("rotate(-90 "+s.toString()+" "+s.toString()+")")}c%2==1&&(r.left!==r.top&&(s=r.left,r.left=r.top,r.top=s),r.width!==r.height&&(s=r.width,r.width=r.height,r.height=s)),t.length&&(i=Wt(i,'<g transform="'+t.join(" ")+'">',"</g>"))}));const s=o.width,c=o.height,a=r.width,l=r.height;let f,u;null===s?(u=null===c?"1em":"auto"===c?l:c,f=Xe(u,a/l)):(f="auto"===s?a:s,u=null===c?Xe(f,l/a):"auto"===c?l:c);const d={},p=(e,t)=>{Xt(t)||(d[e]=t.toString())};p("width",f),p("height",u);const h=[r.left,r.top,a,l];return d.viewBox=h.join(" "),{attributes:d,viewBox:h,body:i}}const Zt=/\sid="(\S+)"/g,en="IconifyId"+Date.now().toString(16)+(16777216*Math.random()|0).toString(16);let tn=0;function nn(e,t=en){const n=[];let o;for(;o=Zt.exec(e);)n.push(o[1]);if(!n.length)return e;const r="suffix"+(16777216*Math.random()|Date.now()).toString(16);return n.forEach((n=>{const o="function"==typeof t?t(n):t+(tn++).toString(),i=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");e=e.replace(new RegExp('([#;"])('+i+')([")]|\\.[a-z])',"g"),"$1"+o+r+"$3")})),e=e.replace(new RegExp(r,"g"),"")}const Te=Object.create(null);function on(e,t){Te[e]=t}function Ce(e){return Te[e]||Te[""]}function De(e){let t;if("string"==typeof e.resources)t=[e.resources];else if(t=e.resources,!(t instanceof Array&&t.length))return null;return{resources:t,path:e.path||"/",maxURL:e.maxURL||500,rotate:e.rotate||750,timeout:e.timeout||5e3,random:!0===e.random,index:e.index||0,dataAfterTimeout:!1!==e.dataAfterTimeout}}const $e=Object.create(null),ee=["https://api.simplesvg.com","https://api.unisvg.com"],ue=[];for(;ee.length>0;)1===ee.length||Math.random()>.5?ue.push(ee.shift()):ue.push(ee.pop());function rn(e,t){const n=De(t);return null!==n&&($e[e]=n,!0)}function Fe(e){return $e[e]}$e[""]=De({resources:["https://api.iconify.design"].concat(ue)});const sn=()=>{let e;try{if(e=fetch,"function"==typeof e)return e}catch{}};let Ye=sn();function cn(e,t){const n=Fe(e);if(!n)return 0;let o;if(n.maxURL){let e=0;n.resources.forEach((t=>{e=Math.max(e,t.length)}));const r=t+".json?icons=";o=n.maxURL-e-n.path.length-r.length}else o=0;return o}function ln(e){return 404===e}const an=(e,t,n)=>{const o=[],r=cn(e,t),i="icons";let s={type:i,provider:e,prefix:t,icons:[]},c=0;return n.forEach(((n,a)=>{c+=n.length+1,c>=r&&a>0&&(o.push(s),s={type:i,provider:e,prefix:t,icons:[]},c=n.length),s.icons.push(n)})),o.push(s),o};function un(e){if("string"==typeof e){const t=Fe(e);if(t)return t.path}return"/"}const fn=(e,t,n)=>{if(!Ye)return void n("abort",424);let o=un(t.provider);switch(t.type){case"icons":{const e=t.prefix,n=t.icons.join(",");o+=e+".json?"+new URLSearchParams({icons:n}).toString();break}case"custom":{const e=t.uri;o+="/"===e.slice(0,1)?e.slice(1):e;break}default:return void n("abort",400)}let r=503;Ye(e+o).then((e=>{const t=e.status;if(200===t)return r=501,e.json();setTimeout((()=>{n(ln(t)?"abort":"next",t)}))})).then((e=>{"object"==typeof e&&null!==e?setTimeout((()=>{n("success",e)})):setTimeout((()=>{404===e?n("abort",e):n("next",r)}))})).catch((()=>{n("next",r)}))},dn={prepare:an,send:fn};function hn(e){const t={loaded:[],missing:[],pending:[]},n=Object.create(null);e.sort(((e,t)=>e.provider!==t.provider?e.provider.localeCompare(t.provider):e.prefix!==t.prefix?e.prefix.localeCompare(t.prefix):e.name.localeCompare(t.name)));let o={provider:"",prefix:"",name:""};return e.forEach((e=>{if(o.name===e.name&&o.prefix===e.prefix&&o.provider===e.provider)return;o=e;const r=e.provider,i=e.prefix,s=e.name,c=n[r]||(n[r]=Object.create(null)),a=c[i]||(c[i]=q(r,i));let l;l=s in a.icons?t.loaded:""===i||a.missing.has(s)?t.missing:t.pending;const f={provider:r,prefix:i,name:s};l.push(f)})),t}function wt(e,t){e.forEach((e=>{const n=e.loaderCallbacks;n&&(e.loaderCallbacks=n.filter((e=>e.id!==t)))}))}function pn(e){e.pendingCallbacksFlag||(e.pendingCallbacksFlag=!0,setTimeout((()=>{e.pendingCallbacksFlag=!1;const t=e.loaderCallbacks?e.loaderCallbacks.slice(0):[];if(!t.length)return;let n=!1;const o=e.provider,r=e.prefix;t.forEach((t=>{const i=t.icons,s=i.pending.length;i.pending=i.pending.filter((t=>{if(t.prefix!==r)return!0;const s=t.name;if(e.icons[s])i.loaded.push({provider:o,prefix:r,name:s});else{if(!e.missing.has(s))return n=!0,!0;i.missing.push({provider:o,prefix:r,name:s})}return!1})),i.pending.length!==s&&(n||wt([e],t.id),t.callback(i.loaded.slice(0),i.missing.slice(0),i.pending.slice(0),t.abort))}))})))}let mn=0;function gn(e,t,n){const o=mn++,r=wt.bind(null,n,o);if(!t.pending.length)return r;const i={id:o,icons:t,callback:e,abort:r};return n.forEach((e=>{(e.loaderCallbacks||(e.loaderCallbacks=[])).push(i)})),r}function bn(e,t=!0,n=!1){const o=[];return e.forEach((e=>{const r="string"==typeof e?pe(e,t,n):e;r&&o.push(r)})),o}var yn={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function wn(e,t,n,o){const r=e.resources.length,i=e.random?Math.floor(Math.random()*r):e.index;let s;if(e.random){let t=e.resources.slice(0);for(s=[];t.length>1;){const e=Math.floor(Math.random()*t.length);s.push(t[e]),t=t.slice(0,e).concat(t.slice(e+1))}s=s.concat(t)}else s=e.resources.slice(i).concat(e.resources.slice(0,i));const c=Date.now();let a,l="pending",f=0,u=null,d=[],p=[];function h(){u&&(clearTimeout(u),u=null)}function g(){"pending"===l&&(l="aborted"),h(),d.forEach((e=>{"pending"===e.status&&(e.status="aborted")})),d=[]}function m(e,t){t&&(p=[]),"function"==typeof e&&p.push(e)}function b(){l="failed",p.forEach((e=>{e(void 0,a)}))}function y(){d.forEach((e=>{"pending"===e.status&&(e.status="aborted")})),d=[]}function x(){if("pending"!==l)return;h();const o=s.shift();if(void 0===o)return d.length?void(u=setTimeout((()=>{h(),"pending"===l&&(y(),b())}),e.timeout)):void b();const r={status:"pending",resource:o,callback:(t,n)=>{!function(t,n,o){const r="success"!==n;switch(d=d.filter((e=>e!==t)),l){case"pending":break;case"failed":if(r||!e.dataAfterTimeout)return;break;default:return}if("abort"===n)return a=o,void b();if(r)return a=o,void(d.length||(s.length?x():b()));if(h(),y(),!e.random){const n=e.resources.indexOf(t.resource);-1!==n&&n!==e.index&&(e.index=n)}l="completed",p.forEach((e=>{e(o)}))}(r,t,n)}};d.push(r),f++,u=setTimeout(x,e.rotate),n(o,t,r.callback)}return"function"==typeof o&&p.push(o),setTimeout(x),function(){return{startTime:c,payload:t,status:l,queriesSent:f,queriesPending:d.length,subscribe:m,abort:g}}}function vt(e){const t={...yn,...e};let n=[];function o(){n=n.filter((e=>"pending"===e().status))}return{query:function(e,r,i){const s=wn(t,e,r,((e,t)=>{o(),i&&i(e,t)}));return n.push(s),s},find:function(e){return n.find((t=>e(t)))||null},setIndex:e=>{t.index=e},getIndex:()=>t.index,cleanup:o}}function Ze(){}const Ie=Object.create(null);function vn(e){if(!Ie[e]){const t=Fe(e);if(!t)return;const n={config:t,redundancy:vt(t)};Ie[e]=n}return Ie[e]}function xn(e,t,n){let o,r;if("string"==typeof e){const t=Ce(e);if(!t)return n(void 0,424),Ze;r=t.send;const i=vn(e);i&&(o=i.redundancy)}else{const t=De(e);if(t){o=vt(t);const n=Ce(e.resources?e.resources[0]:"");n&&(r=n.send)}}return o&&r?o.query(t,r,n)().abort:(n(void 0,424),Ze)}const et="iconify2",oe="iconify",xt=oe+"-count",tt=oe+"-version",kt=36e5,kn=168,_n=50;function Oe(e,t){try{return e.getItem(t)}catch{}}function Ae(e,t,n){try{return e.setItem(t,n),!0}catch{}}function nt(e,t){try{e.removeItem(t)}catch{}}function je(e,t){return Ae(e,xt,t.toString())}function Le(e){return parseInt(Oe(e,xt))||0}const ge={local:!0,session:!0},_t={local:new Set,session:new Set};let Ne=!1;function Sn(e){Ne=e}let le=typeof window>"u"?{}:window;function St(e){const t=e+"Storage";try{if(le&&le[t]&&"number"==typeof le[t].length)return le[t]}catch{}ge[e]=!1}function It(e,t){const n=St(e);if(!n)return;const o=Oe(n,tt);if(o!==et){if(o){const e=Le(n);for(let t=0;t<e;t++)nt(n,oe+t.toString())}return Ae(n,tt,et),void je(n,0)}const r=Math.floor(Date.now()/kt)-kn,i=e=>{const o=oe+e.toString(),i=Oe(n,o);if("string"==typeof i){try{const n=JSON.parse(i);if("object"==typeof n&&"number"==typeof n.cached&&n.cached>r&&"string"==typeof n.provider&&"object"==typeof n.data&&"string"==typeof n.data.prefix&&t(n,e))return!0}catch{}nt(n,o)}};let s=Le(n);for(let t=s-1;t>=0;t--)i(t)||(t===s-1?(s--,je(n,s)):_t[e].add(t))}function Et(){if(!Ne){Sn(!0);for(const e in ge)It(e,(e=>{const t=e.data,n=q(e.provider,t.prefix);if(!Pe(n,t).length)return!1;const o=t.lastModified||-1;return n.lastModifiedCached=n.lastModifiedCached?Math.min(n.lastModifiedCached,o):o,!0}))}}function In(e,t){const n=e.lastModifiedCached;if(n&&n>=t)return n===t;if(e.lastModifiedCached=t,n)for(const n in ge)It(n,(n=>{const o=n.data;return n.provider!==e.provider||o.prefix!==e.prefix||o.lastModified===t}));return!0}function En(e,t){function n(n){let o;if(!ge[n]||!(o=St(n)))return;const r=_t[n];let i;if(r.size)r.delete(i=Array.from(r).shift());else if(i=Le(o),i>=_n||!je(o,i+1))return;const s={cached:Math.floor(Date.now()/kt),provider:e.provider,data:t};return Ae(o,oe+i.toString(),JSON.stringify(s))}Ne||Et(),t.lastModified&&!In(e,t.lastModified)||Object.keys(t.icons).length&&(t.not_found&&delete(t=Object.assign({},t)).not_found,n("local")||n("session"))}function ot(){}function Tn(e){e.iconsLoaderFlag||(e.iconsLoaderFlag=!0,setTimeout((()=>{e.iconsLoaderFlag=!1,pn(e)})))}function Cn(e,t){e.iconsToLoad?e.iconsToLoad=e.iconsToLoad.concat(t).sort():e.iconsToLoad=t,e.iconsQueueFlag||(e.iconsQueueFlag=!0,setTimeout((()=>{e.iconsQueueFlag=!1;const{provider:t,prefix:n}=e,o=e.iconsToLoad;let r;delete e.iconsToLoad,o&&(r=Ce(t))&&r.prepare(t,n,o).forEach((n=>{xn(t,n,(t=>{if("object"!=typeof t)n.icons.forEach((t=>{e.missing.add(t)}));else try{const n=Pe(e,t);if(!n.length)return;const o=e.pendingIcons;o&&n.forEach((e=>{o.delete(e)})),En(e,t)}catch(e){console.error(e)}Tn(e)}))}))})))}const On=(e,t)=>{const n=hn(bn(e,!0,gt()));if(!n.pending.length){let e=!0;return t&&setTimeout((()=>{e&&t(n.loaded,n.missing,n.pending,ot)})),()=>{e=!1}}const o=Object.create(null),r=[];let i,s;return n.pending.forEach((e=>{const{provider:t,prefix:n}=e;if(n===s&&t===i)return;i=t,s=n,r.push(q(t,n));const c=o[t]||(o[t]=Object.create(null));c[n]||(c[n]=[])})),n.pending.forEach((e=>{const{provider:t,prefix:n,name:r}=e,i=q(t,n),s=i.pendingIcons||(i.pendingIcons=new Set);s.has(r)||(s.add(r),o[t][n].push(r))})),r.forEach((e=>{const{provider:t,prefix:n}=e;o[t][n].length&&Cn(e,o[t][n])})),t?gn(t,n,r):ot};function jn(e,t){const n={...e};for(const e in t){const o=t[e],r=typeof o;e in bt?(null===o||o&&("string"===r||"number"===r))&&(n[e]=o):r===typeof n[e]&&(n[e]="rotate"===e?o%4:o)}return n}const Ln=/[\s,]+/;function Mn(e,t){t.split(Ln).forEach((t=>{switch(t.trim()){case"horizontal":e.hFlip=!0;break;case"vertical":e.vFlip=!0}}))}function Pn(e,t=0){const n=e.replace(/^-?[0-9.]*/,"");function o(e){for(;e<0;)e+=4;return e%4}if(""===n){const t=parseInt(e);return isNaN(t)?0:o(t)}if(n!==e){let t=0;switch(n){case"%":t=25;break;case"deg":t=90}if(t){let r=parseFloat(e.slice(0,e.length-n.length));return isNaN(r)?0:(r/=t,r%1==0?o(r):0)}}return t}function Dn(e,t){let n=-1===e.indexOf("xlink:")?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const e in t)n+=" "+e+'="'+t[e]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+n+">"+e+"</svg>"}function $n(e){return e.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function Fn(e){return"data:image/svg+xml,"+$n(e)}function An(e){return'url("'+Fn(e)+'")'}const rt={...yt,inline:!1},Nn={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"},Bn={display:"inline-block"},Me={"background-color":"currentColor"},Tt={"background-color":"transparent"},st={image:"var(--svg)",repeat:"no-repeat",size:"100% 100%"},it={"-webkit-mask":Me,mask:Me,background:Tt};for(const e in it){const t=it[e];for(const n in st)t[e+"-"+n]=st[n]}function Rn(e){return e+(e.match(/^[-0-9.]+$/)?"px":"")}function Un(e,t){const n=jn(rt,t),o=t.mode||"svg",r="svg"===o?{...Nn}:{};-1===e.body.indexOf("xlink:")&&delete r["xmlns:xlink"];let i="string"==typeof t.style?t.style:"";for(let e in t){const o=t[e];if(void 0!==o)switch(e){case"icon":case"style":case"onLoad":case"mode":break;case"inline":case"hFlip":case"vFlip":n[e]=!0===o||"true"===o||1===o;break;case"flip":"string"==typeof o&&Mn(n,o);break;case"color":i=i+(i.length>0&&";"!==i.trim().slice(-1)?";":"")+"color: "+o+"; ";break;case"rotate":"string"==typeof o?n[e]=Pn(o):"number"==typeof o&&(n[e]=o);break;case"ariaHidden":case"aria-hidden":!0!==o&&"true"!==o&&delete r["aria-hidden"];break;default:if("on:"===e.slice(0,3))break;void 0===rt[e]&&(r[e]=o)}}const s=Yt(e,n),c=s.attributes;if(n.inline&&(i="vertical-align: -0.125em; "+i),"svg"===o){Object.assign(r,c),""!==i&&(r.style=i);let e=0,n=t.id;return"string"==typeof n&&(n=n.replace(/-/g,"_")),{svg:!0,attributes:r,body:nn(s.body,n?()=>n+"ID"+e++:"iconifySvelte")}}const{body:a,width:l,height:f}=e,u="mask"===o||"bg"!==o&&-1!==a.indexOf("currentColor"),d={"--svg":An(Dn(a,{...c,width:l+"",height:f+""}))},p=e=>{const t=c[e];t&&(d[e]=Rn(t))};p("width"),p("height"),Object.assign(d,Bn,u?Me:Tt);let h="";for(const e in d)h+=e+": "+d[e]+";";return r.style=h+i,{svg:!1,attributes:r}}if(gt(!0),on("",dn),typeof document<"u"&&typeof window<"u"){Et();const e=window;if(void 0!==e.IconifyPreload){const t=e.IconifyPreload,n="Invalid IconifyPreload syntax.";"object"==typeof t&&null!==t&&(t instanceof Array?t:[t]).forEach((e=>{try{("object"!=typeof e||null===e||e instanceof Array||"object"!=typeof e.icons||"string"!=typeof e.prefix||!Ht(e))&&console.error(n)}catch{console.error(n)}}))}if(void 0!==e.IconifyProviders){const t=e.IconifyProviders;if("object"==typeof t&&null!==t)for(let e in t){const n="IconifyProviders["+e+"] is invalid.";try{const o=t[e];if("object"!=typeof o||!o||void 0===o.resources)continue;rn(e,o)||console.error(n)}catch{console.error(n)}}}}function Vn(e,t,n,o,r){function i(){t.loading&&(t.loading.abort(),t.loading=null)}if("object"==typeof e&&null!==e&&"string"==typeof e.body)return t.name="",i(),{data:{...me,...e}};let s;if("string"!=typeof e||null===(s=pe(e,!1,!0)))return i(),null;const c=qt(s);if(!c)return n&&(!t.loading||t.loading.name!==e)&&(i(),t.name="",t.loading={name:e,abort:On([s],o)}),null;i(),t.name!==e&&(t.name=e,r&&!t.destroyed&&r(e));const a=["iconify"];return""!==s.prefix&&a.push("iconify--"+s.prefix),""!==s.provider&&a.push("iconify--"+s.provider),{data:c,classes:a}}function qn(e,t){return e?Un({...me,...e},t):null}function ct(e){let t;function n(e,t){return e[0].svg?Hn:zn}let o=n(e),r=o(e);return{c(){r.c(),t=fe()},l(e){r.l(e),t=fe()},m(e,n){r.m(e,n),re(e,t,n)},p(e,i){o===(o=n(e))&&r?r.p(e,i):(r.d(1),r=o(e),r&&(r.c(),r.m(t.parentNode,t)))},d(e){e&&S(t),r.d(e)}}}function zn(e){let t,n=[e[0].attributes],o={};for(let e=0;e<n.length;e+=1)o=de(o,n[e]);return{c(){t=M("span"),this.h()},l(e){t=P(e,"SPAN",{}),j(t).forEach(S),this.h()},h(){Ge(t,o)},m(e,n){re(e,t,n)},p(e,r){Ge(t,o=dt(n,[1&r&&e[0].attributes]))},d(e){e&&S(t)}}}function Hn(e){let t,n,o=e[0].body+"",r=[e[0].attributes],i={};for(let e=0;e<r.length;e+=1)i=de(i,r[e]);return{c(){t=jt("svg"),n=new Lt(!0),this.h()},l(e){t=Mt(e,"svg",{});var o=j(t);n=Pt(o,!0),o.forEach(S),this.h()},h(){n.a=null,Ke(t,i)},m(e,r){re(e,t,r),n.m(o,t)},p(e,s){1&s&&o!==(o=e[0].body+"")&&n.p(o),Ke(t,i=dt(r,[1&s&&e[0].attributes]))},d(e){e&&S(t)}}}function Qn(e){let t,n=e[0]&&ct(e);return{c(){n&&n.c(),t=fe()},l(e){n&&n.l(e),t=fe()},m(e,o){n&&n.m(e,o),re(e,t,o)},p(e,[o]){e[0]?n?n.p(e,o):(n=ct(e),n.c(),n.m(t.parentNode,t)):n&&(n.d(1),n=null)},i:He,o:He,d(e){e&&S(t),n&&n.d(e)}}}function Gn(e,t,n){const o={name:"",loading:null,destroyed:!1};let r,i=!1,s=0;const c=e=>{"function"==typeof t.onLoad&&t.onLoad(e),Dt()("load",{icon:e})};function a(){n(3,s++,s)}return ft((()=>{n(2,i=!0)})),Ot((()=>{n(1,o.destroyed=!0,o),o.loading&&(o.loading.abort(),n(1,o.loading=null,o))})),e.$$set=e=>{n(6,t=de(de({},t),Qe(e)))},e.$$.update=()=>{{const e=Vn(t.icon,o,i,a,c);n(0,r=e?qn(e.data,t):null),r&&e.classes&&n(0,r.attributes.class=("string"==typeof t.class?t.class+" ":"")+e.classes.join(" "),r)}},t=Qe(t),[r,o,i,s]}class Z extends lt{constructor(e){super(),at(this,e,Gn,Qn,ut,{})}}function Ct(e){switch(e){case U:document.documentElement.classList.remove("dark");break;case V:document.documentElement.classList.add("dark");break;case F:window.matchMedia("(prefers-color-scheme: dark)").matches?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")}}function Kn(e){localStorage.setItem("theme",e),Ct(e)}function Jn(){return localStorage.getItem("theme")||Ft}function Wn(e){let t,n,o,r,i,s,c,a,l,f,u,d,p,h,g,m,b,y,v,w,k,$,E,T,L,C,D,z,A,q,_=ve(xe.lightMode)+"",R=ve(xe.darkMode)+"",H=ve(xe.systemMode)+"";return r=new Z({props:{icon:"material-symbols:wb-sunny-outline-rounded",class:"text-[1.25rem]"}}),c=new Z({props:{icon:"material-symbols:dark-mode-outline-rounded",class:"text-[1.25rem]"}}),f=new Z({props:{icon:"material-symbols:radio-button-partial-outline",class:"text-[1.25rem]"}}),g=new Z({props:{icon:"material-symbols:wb-sunny-outline-rounded",class:"text-[1.25rem] mr-3"}}),w=new Z({props:{icon:"material-symbols:dark-mode-outline-rounded",class:"text-[1.25rem] mr-3"}}),L=new Z({props:{icon:"material-symbols:radio-button-partial-outline",class:"text-[1.25rem] mr-3"}}),{c(){t=M("div"),n=M("button"),o=M("div"),Q(r.$$.fragment),i=N(),s=M("div"),Q(c.$$.fragment),a=N(),l=M("div"),Q(f.$$.fragment),u=N(),d=M("div"),p=M("div"),h=M("button"),Q(g.$$.fragment),m=N(),b=ke(_),y=N(),v=M("button"),Q(w.$$.fragment),k=N(),$=ke(R),E=N(),T=M("button"),Q(L.$$.fragment),C=N(),D=ke(H),this.h()},l(e){t=P(e,"DIV",{class:!0,role:!0,tabindex:!0});var x=j(t);n=P(x,"BUTTON",{"aria-label":!0,role:!0,class:!0,id:!0});var O=j(n);o=P(O,"DIV",{class:!0});var I=j(o);G(r.$$.fragment,I),I.forEach(S),i=B(O),s=P(O,"DIV",{class:!0});var M=j(s);G(c.$$.fragment,M),M.forEach(S),a=B(O),l=P(O,"DIV",{class:!0});var F=j(l);G(f.$$.fragment,F),F.forEach(S),O.forEach(S),u=B(x),d=P(x,"DIV",{id:!0,class:!0});var N=j(d);p=P(N,"DIV",{class:!0});var U=j(p);h=P(U,"BUTTON",{class:!0});var z=j(h);G(g.$$.fragment,z),m=B(z),b=_e(z,_),z.forEach(S),y=B(U),v=P(U,"BUTTON",{class:!0});var A=j(v);G(w.$$.fragment,A),k=B(A),$=_e(A,R),A.forEach(S),E=B(U),T=P(U,"BUTTON",{class:!0});var q=j(T);G(L.$$.fragment,q),C=B(q),D=_e(q,H),q.forEach(S),U.forEach(S),N.forEach(S),x.forEach(S),this.h()},h(){I(o,"class","absolute"),O(o,"opacity-0",e[0]!==U),I(s,"class","absolute"),O(s,"opacity-0",e[0]!==V),I(l,"class","absolute"),O(l,"opacity-0",e[0]!==F),I(n,"aria-label","Light/Dark Mode"),I(n,"role","menuitem"),I(n,"class","relative btn-plain scale-animation rounded-lg h-11 w-11 active:scale-90"),I(n,"id","scheme-switch"),I(h,"class","flex transition whitespace-nowrap items-center justify-start w-full btn-plain scale-animation rounded-lg h-9 px-3 font-medium active:scale-95 mb-0.5"),O(h,"current-theme-btn",e[0]===U),I(v,"class","flex transition whitespace-nowrap items-center justify-start w-full btn-plain scale-animation rounded-lg h-9 px-3 font-medium active:scale-95 mb-0.5"),O(v,"current-theme-btn",e[0]===V),I(T,"class","flex transition whitespace-nowrap items-center justify-start w-full btn-plain scale-animation rounded-lg h-9 px-3 font-medium active:scale-95"),O(T,"current-theme-btn",e[0]===F),I(p,"class","card-base float-panel p-2"),I(d,"id","light-dark-panel"),I(d,"class","hidden lg:block absolute transition float-panel-closed top-11 -right-2 pt-5"),I(t,"class","relative z-50"),I(t,"role","menu"),I(t,"tabindex","-1")},m(j,S){re(j,t,S),x(t,n),x(n,o),K(r,o,null),x(n,i),x(n,s),K(c,s,null),x(n,a),x(n,l),K(f,l,null),x(t,u),x(t,d),x(d,p),x(p,h),K(g,h,null),x(h,m),x(h,b),x(p,y),x(p,v),K(w,v,null),x(v,k),x(v,$),x(p,E),x(p,T),K(L,T,null),x(T,C),x(T,D),z=!0,A||(q=[J(n,"click",e[2]),J(n,"mouseenter",Xn),J(h,"click",e[3]),J(v,"click",e[4]),J(T,"click",e[5]),J(t,"mouseleave",Yn)],A=!0)},p(e,[t]){(!z||1&t)&&O(o,"opacity-0",e[0]!==U),(!z||1&t)&&O(s,"opacity-0",e[0]!==V),(!z||1&t)&&O(l,"opacity-0",e[0]!==F),(!z||1&t)&&O(h,"current-theme-btn",e[0]===U),(!z||1&t)&&O(v,"current-theme-btn",e[0]===V),(!z||1&t)&&O(T,"current-theme-btn",e[0]===F)},i(e){z||(W(r.$$.fragment,e),W(c.$$.fragment,e),W(f.$$.fragment,e),W(g.$$.fragment,e),W(w.$$.fragment,e),W(L.$$.fragment,e),z=!0)},o(e){X(r.$$.fragment,e),X(c.$$.fragment,e),X(f.$$.fragment,e),X(g.$$.fragment,e),X(w.$$.fragment,e),X(L.$$.fragment,e),z=!1},d(e){e&&S(t),Y(r),Y(c),Y(f),Y(g),Y(w),Y(L),A=!1,$t(q)}}}function Xn(){document.querySelector("#light-dark-panel").classList.remove("float-panel-closed")}function Yn(){document.querySelector("#light-dark-panel").classList.add("float-panel-closed")}function Zn(e,t,n){const o=[U,V,F];let r=F;function i(e){n(0,r=e),Kn(e)}return ft((()=>{n(0,r=Jn());const e=window.matchMedia("(prefers-color-scheme: dark)"),t=e=>{Ct(r)};return e.addEventListener("change",t),()=>{e.removeEventListener("change",t)}})),[r,i,function(){let e=0;for(;e<o.length&&o[e]!==r;e++);i(o[(e+1)%o.length])},()=>i(U),()=>i(V),()=>i(F)]}class to extends lt{constructor(e){super(),at(this,e,Zn,Wn,ut,{})}}export{to as default};