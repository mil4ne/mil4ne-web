import"https://code.iconify.design/iconify-icon/2.1.0/iconify-icon.min.js";const u=(t,e=1,n=()=>{})=>{const r=document.createElement("canvas"),o=r.getContext("2d");let c;r.width=t.width,r.height=t.height;try{if(!o)return n?.(new Error("Could not get 2d context")),["",{}];o.drawImage(t,0,0),c=o.getImageData(0,0,t.width,t.height).data}catch(a){return n?.(a),["",{}]}let g=0,l=0,d=0;for(let a=0;a<c.length;a+=4)g+=c[a],l+=c[a+1],d+=c[a+2];const i=r.width*r.height;e=parseFloat(t.getAttribute("average-brightness")||"")||e,g=g/i*e,l=l/i*e,d=d/i*e;const s={red:g<0?0:g,green:l<0?0:l,blue:d<0?0:d};return[`rgb(${s.red}, ${s.green}, ${s.blue})`,s]},h=document.querySelectorAll(".card__portfolio");h.forEach(t=>{const e=t.querySelector(".descripcion__container"),n=t.querySelector("img");if(!n||!e)return;const r=()=>{const[o]=u(n,.7);e.style.background=o};r(),n.onload=r});