import{a as h,S as d,i as l}from"./assets/vendor-h_xsmXee.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&t(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();async function f(s,a){const o="https://pixabay.com",t="/api/",e=new URLSearchParams({key:"22926721-5d20aa08498ffd1ff2f906542",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:a}),r=`${o}${t}?${e}`;return await h.get(r).then(i=>i.data).catch(i=>{console.log(i)})}function m(s){return s.map(({webformatURL:a,largeImageURL:o,tags:t,likes:e,views:r,comments:i,downloads:u})=>`
    <li class="gallery-item">
            <a class="gallery-link" href="${o}">
                <img
                    class="gallery-image"
                    width="1280"
                    heigh="152"
                    src="${a}"
                    data-source="${o}"
                    alt="${t}"
                />
                <ul class="gallery-description">
                  <li><h3>likes:</h3><P>${e}</p></li>
                  <li><h3>views:</h3><P>${r}</p></li>
                  <li><h3>comments:</h3><P>${i}</p></li>
                  <li><h3>downloads:</h3><P>${u}</p></li>
              </ul>
            </a>
        </li>`).join("")}const n={form:document.querySelector(".form"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader")};function c(){n.loader.classList.add("hidden")}function p(){n.loader.classList.remove("hidden")}const g={captionsData:"alt"};let y=new d(".gallery a",g);c();n.form.addEventListener("submit",L);async function L(s){s.preventDefault(),n.gallery.innerHTML="";const o=s.currentTarget.elements.searchInput.value;o!==""&&(p(),f(o).then(t=>{const e=m(t.hits);n.gallery.insertAdjacentHTML("beforeend",e),y.refresh(),t.hits.length===0&&l.show({maxWidth:"432px",height:"48px",color:"red",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"})}).catch(t=>{l.show({maxWidth:"432px",height:"48px",color:"red",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"})}).finally(()=>{c(),n.form.reset()}))}
//# sourceMappingURL=index.js.map
