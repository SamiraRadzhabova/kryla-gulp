document.addEventListener("DOMContentLoaded",(function(e){const t=document.documentElement,c=document.querySelectorAll(".lang__btn");c&&m(c);const o=document.querySelectorAll(".submenu");o?.length&&(o.forEach((e=>{e.addEventListener("click",(()=>{e.classList.contains("open")||o.forEach((e=>{e.classList.remove("open")})),e.classList.toggle("open")}))})),window.addEventListener("click",(e=>{e.target.closest(".submenu")&&!e.target.classList.contains("submenu__item")||o.forEach((e=>{e.classList.remove("open")}))})));const n=document.querySelector(".header"),s=document.querySelector(".burger");s&&n&&s.addEventListener("click",(()=>{n.classList.toggle("open"),s.classList.toggle("open"),t.classList.toggle("block")}));const l=document.querySelectorAll(".btn");l?.length&&l.forEach((e=>{["mouseenter","mouseout"].forEach((t=>{e.addEventListener(t,(t=>{let c=e.getBoundingClientRect(),o=t.clientX-c.left,n=t.clientY-c.top;const s=e.querySelector("span");s&&(s.style.top=`${n}px`,s.style.left=`${o}px`)}))}))}));const a=document.querySelectorAll(".donat__bank"),r=document.querySelectorAll(".donat__sum");a&&m(a),r&&m(r);const i=document.querySelectorAll(".accordion"),d=document.querySelectorAll(".accordion__body"),u=document.querySelectorAll(".accordion__content");function m(e){e.forEach((t=>{t.addEventListener("click",(()=>{e.forEach((e=>{e.classList.remove("active")})),t.classList.add("active")}))}))}i&&i.forEach(((e,t)=>{e.addEventListener("click",(()=>{if(e.classList.contains("active"))e.classList.remove("active"),d[t].style.maxHeight="0";else{i.forEach(((e,t)=>{e.classList.remove("active"),d[t].style.maxHeight="0"})),e.classList.add("active");let c=u[t].offsetHeight;d[t].style.maxHeight=`${c}px`}}))})),console.log("DOM fully loaded and parsed")}));