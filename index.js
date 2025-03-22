import{a as y,S as w,i as l}from"./assets/vendor-h_xsmXee.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();async function m(t,a){const n="https://pixabay.com",i="/api/",e=new URLSearchParams({key:"22926721-5d20aa08498ffd1ff2f906542",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:a}),r=`${n}${i}?${e}`;try{return(await y(r)).data}catch(s){console.log(s)}}function h(t){return t.map(({webformatURL:a,largeImageURL:n,tags:i,likes:e,views:r,comments:s,downloads:p})=>`
    <li class="gallery-item">
            <a class="gallery-link" href="${n}">
                <img
                    class="gallery-image"
                    width="1280"
                    heigh="152"
                    src="${a}"
                    data-source="${n}"
                    alt="${i}"
                />
                <ul class="gallery-description">
                  <li><h3>likes:</h3><P>${e}</p></li>
                  <li><h3>views:</h3><P>${r}</p></li>
                  <li><h3>comments:</h3><P>${s}</p></li>
                  <li><h3>downloads:</h3><P>${p}</p></li>
              </ul>
            </a>
        </li>`).join("")}function L(t){t.innerHTML=""}let c=1,u="";const o={form:document.querySelector(".form"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader"),loadMoreBtn:document.querySelector(".load-more-btn")};function d(t){t.classList.add("hidden")}function f(t){t.classList.remove("hidden")}let g=new w(".gallery a",{captionsData:"alt"});o.form.addEventListener("submit",b);o.loadMoreBtn.addEventListener("click",S);async function b(t){if(t.preventDefault(),L(o.gallery),d(o.loadMoreBtn),c=1,u=t.currentTarget.elements.searchInput.value.trim(),u===""){l.info({position:"topRight",color:"red",message:"Enter something for search!"});return}f(o.loader);try{const n=await m(u,c);if(n.hits.length===0){l.info({position:"topRight",color:"red",message:"Sorry, there are no images matching your search query. Please try again!"});return}const i=h(n.hits);o.gallery.insertAdjacentHTML("beforeend",i),g.refresh(),n.totalHits<=15?(d(o.loadMoreBtn),l.info({message:"We're sorry, but you've reached the end of search results.",color:"red"})):f(o.loadMoreBtn)}catch{l.error({color:"red",position:"topRight",message:"Something went wrong!!!"})}finally{d(o.loader),o.form.reset()}}async function S(){c+=1,f(o.loader);try{const t=await m(u,c),a=h(t.hits);o.gallery.insertAdjacentHTML("beforeend",a),g.refresh();let i=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:i*2,behavior:"smooth"});const e=Math.ceil(t.totalHits/15);c===e?(d(o.loadMoreBtn),l.info({message:"We're sorry, but you've reached the end of search results."})):f(o.loadMoreBtn)}catch{l.error({position:"topRight",message:"Something went wrong!!!"})}finally{d(o.loader)}}
//# sourceMappingURL=index.js.map
