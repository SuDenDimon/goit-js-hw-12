// import SimpleLightbox from 'simplelightbox';
// import 'simplelightbox/dist/simple-lightbox.min.css';
// import iziToast from 'izitoast';
// import 'izitoast/dist/css/iziToast.min.css';

// import { imgGallery } from '../main';
// import { formEl } from '../main';


// export function getImage(inputValue) {
//   const BASE_URL = 'https://pixabay.com';
//   const END_POINT = '/api/';
//   const params = new URLSearchParams({
//     key: "22926721-5d20aa08498ffd1ff2f906542",
//     q: inputValue,
//     image_type: "photo",
//     orientation: "horizontal",
//     safesearch: true,
//   });
//   const url = `${BASE_URL}${END_POINT}?${params}`;
  
//   return fetch(url).then(res => {
//     if(!res.ok){
//         throw new Error(response.status);
//     }
//     return res.json();
//   });
// }

import axios from 'axios';

export async function getArticles(query, currentPage) {
    const BASE_URL = 'https://newsapi.org/v2';
    const END_POINT = '/everything/';
    const url = BASE_URL + END_POINT;

    const params = {
        q: query,
        language: 'en',
        pageSize: 15,
        page: currentPage,
    };

    const headers = {
        'X-Api-Key' : '17198d035e77463fa8c2425c9fa40f88',


    };

    const res = await axios.get(url, {params, headers});
    return res.data;
}
  
