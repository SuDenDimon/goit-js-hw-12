import { getArticles } from "./js/pixabay-api";
// import { imageTemplate } from 

// import iziToast from 'izitoast';
// import 'izitoast/dist/css/iziToast.min.css';

// import SimpleLightbox from 'simplelightbox';
// import 'simplelightbox/dist/simple-lightbox.min.css';

// import { getImage } from './js/pixabay-api';


 export const imgGallery = document.querySelector('.gallery');

 export const formEl = document.querySelector('.form');

 const btnLoadMore =  document.querySelector('.js-btn-load')

 let query;
 let currentPage = 1;

 formEl.addEventListener('submit', onFormSubmit)
 btnLoadMore.addEventListener ('click', onLoadMoreClick) 

 async function onFormSubmit (event) {
    event.preventDefault();

    query = event.target.elements.image.value.trim();
    imgGallery.innerHTML = '';

    const data = await getArticles(query, currentPage);

    renderArticles(data.articles);
    showLoadMore();
}

async function onLoadMoreClick () {
    currentPage += 1;

    const data = await getArticles(query, currentPage);
    
    renderArticles(data.articles);
    showLoadMore();
}

function showLoadMore() {
    btnLoadMore.classList.remove('hidden');
  }
function hideLoadMore() {
    btnLoadMore.classList.add('hidden');
  }



function articleTemplate (obj) {
    const { urlToImage, title, description, author, publishedAt, url } = obj;
    return  `
    <li class="gallery-item">
           <a class="gallery-link" href="${url}">
             <img
               class="gallery-image"
               src="${urlToImage}"
               data-source="${url}"
               alt="${description}"
             />
             </a>
             <ul class="gallery-description">
             <li><h3>Views</h3><p>${title}</p>
               </li>
                 <li><h3>Downloads</h3><p>${publishedAt}</p>
                   </li>
             </ul>
           </li>`
}


function articlesTemplate (arr) {
    return arr.map(articleTemplate).join();
}

function renderArticles (arr) {
 const markup = articlesTemplate(arr);
 imgGallery.insertAdjacentHTML('beforeend', markup);
}


// `<li class="gallery-item">
//       <img
//         loading="lazy"
//         class="gallery-image"
//         src="${urlToImage}"
//         alt="${title}"
//       />
//       <h3 class="card-title">${title}</h3>
//       <p class="card-desc">${description}</p>
//       <div class="card-footer">
//         <span>${author}</span>
//         <span>${publishedAt}</span>
//       </div>
// </li>`;









// const loader = document.querySelector('.loader');

// function hideLoader() {
//     loader.classList.add("hidden");
// }
// function showLoader() {
//     loader.classList.remove("hidden");
// }
// const galleryCfg = {
//         captionsData: 'alt',
//       };
//       let lightbox = new SimpleLightbox('.gallery a', galleryCfg);
//       lightbox.on('show.simplelightbox', function () {});

//       hideLoader();

 




//     const inputValue = event.currentTarget.elements.image.value.trim();
//     imgGallery.innerHTML = '<div class="loader"></div>';

//     getImage(inputValue).then(data =>{
//         hideLoader();
//       const markup = imageTemplate(data.hits);
//        imgGallery.innerHTML = markup; 
//        lightbox.refresh();
//        if (data.hits.length === 0) {
//         iziToast.error({
//             maxWidth: '432px',
//             height: '48px',
//             color: 'red',
//             position: 'topRight',
//             message: "Sorry, there are no images matching your search query. Please try again!",



//     }
      
//     })
//     .catch(error => {

//         iziToast.error({
//           maxWidth: '432px',
//           height: '48px',
//           color: 'red',
//           position: 'topRight',
//           message: "Sorry, there are no images matching your search query. Please try again!",
//         })
//           })
//   .finally(() => {       
//     formEl.reset()
//   });
//   });