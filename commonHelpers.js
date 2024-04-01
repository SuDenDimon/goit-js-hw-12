import{a as p}from"./assets/vendor-34f890c2.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();async function l(r,o){const e="https://newsapi.org/v2"+"/everything/",t={q:r,language:"en",pageSize:15,page:o},n={"X-Api-Key":"17198d035e77463fa8c2425c9fa40f88"};return(await p.get(e,{params:t,headers:n})).data}const u=document.querySelector(".gallery"),g=document.querySelector(".form"),d=document.querySelector(".js-btn-load");let a,c=1;g.addEventListener("submit",y);d.addEventListener("click",h);async function y(r){r.preventDefault(),a=r.target.elements.image.value.trim(),u.innerHTML="";const o=await l(a,c);m(o.articles),f()}async function h(){c+=1;const r=await l(a,c);m(r.articles),f()}function f(){d.classList.remove("hidden")}function L(r){const{urlToImage:o,title:i,description:s,author:e,publishedAt:t,url:n}=r;return`
    <li class="gallery-item">
           <a class="gallery-link" href="${n}">
             <img
               class="gallery-image"
               src="${o}"
               data-source="${n}"
               alt="${s}"
             />
             </a>
             <ul class="gallery-description">
             <li><h3>Views</h3><p>${i}</p>
               </li>
                 <li><h3>Downloads</h3><p>${t}</p>
                   </li>
             </ul>
           </li>`}function b(r){return r.map(L).join()}function m(r){const o=b(r);u.insertAdjacentHTML("beforeend",o)}
//# sourceMappingURL=commonHelpers.js.map
