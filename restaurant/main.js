(()=>{"use strict";var e={886:(e,n,l)=>{function i(){const e=document.createElement("nav"),n=u("div","left_nav",null,null),l=u("div","right_nav",null,null);["home","menu","about"].forEach((e=>l.appendChild(u("a",`${e}_link`,null,e))));const i=u("p","logo",null,"green burgers");n.appendChild(i),e.appendChild(n),e.appendChild(l),a.appendChild(e)}function t(){const e=document.createElement("footer"),n=u("p","copyright",null,"Copyright © 2077 Green Burgers Inc. All rights reserved."),l=u("div","footer-links",null,null);["Privacy Policy","Terms of Use","Sales and Refunds","Legal"].forEach((e=>{l.appendChild(u("p",null,null,e))})),e.appendChild(n),e.appendChild(l),a.appendChild(e)}l.d(n,{k:()=>a,N:()=>u});const a=document.getElementById("content");function u(e,n,l,i){const t=document.createElement(e);return n&&(t.id=n),l&&l.forEach((e=>t.classList.add(e))),i&&(t.innerText=i),t}function r(){a.innerHTML="",i(),function(){const e=u("main","home",null,null),n=u("div","left-panel",null,null),l=u("p","top",null,"100%"),i=u("p","mid",null,"Vegan & Organic"),t=u("p","bot",null,"since 2021"),r=u("div","top-right-panel",null,null),o=u("p","top-right-panel-header",null,"carbon-neutral farming"),d=u("div","bot-right-panel",null,null),p=u("div","bot-right-header",null,null),c=u("p","top",null,"drone delivery"),s=u("p","bot",null,"now available");n.appendChild(l),n.appendChild(i),n.appendChild(t),r.appendChild(o),p.appendChild(c),p.appendChild(s),d.appendChild(p),e.appendChild(n),e.appendChild(r),e.appendChild(d),a.appendChild(e)}(),t()}r(),document.addEventListener("click",(e=>{const n=e.target.innerText;"HOME"===n&&r(),"MENU"===n&&(a.innerHTML="",i(),function(){const e=u("main","menu",null,null),n=u("div","menu_container",null,null);for(let e=0;e<12;e++){const l=u("div",`item-${e}-image`,["food-image"],null),i=u("p",`item-${e}-description`,["food-description"],null),t=u("div",`item-${e}-container`,["food-item-container"],null);t.appendChild(l),t.appendChild(i),n.appendChild(t)}e.appendChild(n),a.appendChild(e)}(),t()),"ABOUT"===n&&(a.innerHTML="",i(),function(){const e=u("main","about",null,null),n=u("h1","header",null,"Why choose Green Burger?"),l=u("p","choose-us",null,"At Green Burger, we dolor sit amet, consectetur adipiscing elit. Mauris ullamcorper mauris at turpis bibendum convallis. In tempor et metus ut molestie. Aliquam accumsan nibh justo, sed consectetur arcu congue et. Proin interdum auctor massa ac sollicitudin. Aliquam interdum placerat dictum. Mauris convallis massa quis placerat lobortis. Fusce pellentesque nisi eu congue fermentum. Integer non massa placerat, tempus massa ut, efficitur velit. Donec in pharetra libero, vel gravida nulla. Curabitur lectus nisl, semper eget augue quis, mattis euismod urna. Integer vitae hendrerit ligula, vel fringilla leo. Quisque convallis tellus a dolor ultricies, id consequat lacus commodo.");e.appendChild(n),e.appendChild(l),a.appendChild(e)}(),t())}))}},n={};function l(i){if(n[i])return n[i].exports;var t=n[i]={exports:{}};return e[i](t,t.exports,l),t.exports}l.d=(e,n)=>{for(var i in n)l.o(n,i)&&!l.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:n[i]})},l.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),l(886)})();