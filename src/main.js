import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { fetchImages } from './js/pixabay-api';
import { renderImages } from './js/render-functions';
export const galleryList = document.querySelector('ul.gallery');
export let query = '';
const inputQuery = document.getElementById('search-input');
export let page = 1;
export let limit = 15;
export const loadButton = document.getElementById('load-button');
export const loaderDiv = document.getElementById('loader');
inputQuery.addEventListener('input', e => {
  query = inputQuery.value.trim();

  galleryList.innerHTML = '';
  loadButton.className = 'visually-hidden';
});

function hideLoader() {
  loaderDiv.classList.add('visually-hidden');
}
function showLoader() {
  loaderDiv.classList.remove('visually-hidden');
}

const searchButton = document.getElementById('search-button');

searchButton.addEventListener('click', async () => {
  galleryList.innerHTML = '';
  loaderDiv.className = 'loader';
  page = 1;
  limit = 15;
  try {
    if (query) {
      loadButton.className = '';
      const imageResults = await fetchImages(query);
      renderImages(imageResults);
      hideLoader();
      page += 1;
    }
  } catch (error) {
    loadButton.className = 'visually-hidden';
    console.log(error);
    iziToast.error({
      title: 'Error',
      message: `Виникла помилка під час завантаження зображень. Будь ласка, спробуйте пізніше.`,
      position: 'topRight',
    });
  }
});

loadButton.addEventListener('click', async () => {
  loaderDiv.className = 'loader';
  try {
    if (query) {
      const imageResults = await fetchImages(query);
      const totalItems = imageResults.totalHits;
      const currentPageItems =
        document.querySelectorAll('.gallery-item').length;
      if (currentPageItems >= totalItems) {
        loadButton.className = 'visually-hidden';
        loaderDiv.className = 'visually-hidden';
        return iziToast.error({
          title: 'Error',
          message: `We're sorry, but you've reached the end of search results.`,
          position: 'topRight',
        });
      }
      renderImages(imageResults);
      hideLoader();
      page += 1;
    }
  } catch (error) {
    console.log(error);
    iziToast.error({
      title: 'Error',
      message: `Виникла помилка під час завантаження зображень. Будь ласка, спробуйте пізніше.`,
      position: 'topRight',
    });
  }
});