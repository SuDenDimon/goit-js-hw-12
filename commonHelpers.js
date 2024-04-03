import{a as f,i as c,S as v}from"./assets/vendor-7fa2620e.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const u of s.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();async function h(t){t=encodeURIComponent(t);const r="42609290-856768105ab9e79485c69bf61",o=new URLSearchParams({per_page:g,page:d,key:r,image_type:"photo",orientation:"horizontal",safesearch:"true"});return(await f.get(`https://pixabay.com/api/?${o}&q=${t}`)).data}async function y(t){const r=t.hits;r.length==0&&(l.className="visually-hidden",document.getElementsByClassName("loader")[0].className="loader visually-hidden",c.error({title:"Error",message:"No such pictures",position:"topRight"}));const o=r.map(e=>`<li class="gallery-item">
        <a class="gallery-link" href="${e.largeImageURL}">
          <img
            class="gallery-image"
            width="1280"
            height="152"
            src="${e.webformatURL}"
            data-source="${e.largeImageURL}"
            alt="${e.tags}"
          />
          <ul class="gallery-description">
          <li><h3>Likes</h3><p>${e.likes}</p>
          </li>
          <li><h3>Views</h3><p>${e.views}</p>
            </li>
            <li><h3>Comments</h3><p>${e.comments}</p>
              </li>
              <li><h3>Downloads</h3><p>${e.downloads}</p>
                </li>
          </ul>
        </a>
      </li>`).join("");m.insertAdjacentHTML("beforeend",o);const i={captionsData:"alt"};new v(".gallery a",i)}const m=document.querySelector("ul.gallery");let n="";const p=document.getElementById("search-input");let d=1,g=15;const l=document.getElementById("load-button"),a=document.getElementById("loader");p.addEventListener("input",t=>{n=p.value.trim(),m.innerHTML="",l.className="visually-hidden",a.className="visually-hidden"});const L=document.getElementById("search-button");L.addEventListener("click",async()=>{m.innerHTML="",a.className="loader",d=1,g=15;try{if(n){l.className="";const t=await h(n);y(t),a.className="loader visually-hidden",d+=1}}catch(t){l.className="visually-hidden",console.log(t),c.error({title:"Error",message:"Виникла помилка під час завантаження зображень. Будь ласка, спробуйте пізніше.",position:"topRight"})}});l.addEventListener("click",async()=>{a.className="loader";try{if(n){const t=await h(n),r=t.totalHits;if(document.querySelectorAll(".gallery-item").length>=r)return l.className="visually-hidden",a.className="visually-hidden",c.error({title:"Error",message:"We're sorry, but you've reached the end of search results.",position:"topRight"});y(t),a.className="loader visually-hidden",d+=1}}catch(t){console.log(t),c.error({title:"Error",message:"Виникла помилка під час завантаження зображень. Будь ласка, спробуйте пізніше.",position:"topRight"})}});
//# sourceMappingURL=commonHelpers.js.map
