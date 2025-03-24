import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

// import SimpleLightbox from 'simplelightbox';
// import 'simplelightbox/dist/simple-lightbox.min.css';

import { getImage } from './js/pixabay-api';
import { createImagesCard, clearGallery, lightbox } from './js/render-functions';

let page = 1;
let inputValue = '';

const refs = {
  form: document.querySelector('.form'),
  gallery: document.querySelector('.gallery'),
  loader: document.querySelector('.loader'),
  loadMoreBtn: document.querySelector('.load-more-btn'),
};

function hideElement(element) {
  element.classList.add('hidden');
}
function showElement(element) {
  element.classList.remove('hidden');
}

// let lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt' });

refs.form.addEventListener('submit', onFormSubmit);
refs.loadMoreBtn.addEventListener('click', onLoadMoreBtnClick);

async function onFormSubmit(e) {
  e.preventDefault();
  clearGallery(refs.gallery);
  hideElement(refs.loadMoreBtn);
  page = 1;
  const form = e.currentTarget;
  inputValue = form.elements.searchInput.value.trim();

  if (inputValue === '') {
    iziToast.info({
      position: 'topRight',
      color: 'red',
      message: 'Enter something for search!',
    });
    return;
  }
  showElement(refs.loader);

  try {
    const data = await getImage(inputValue, page);

    if (data.hits.length === 0) {
      iziToast.info({
        position: 'topRight',
        color: 'red',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
      return;
    }

    const markUp = createImagesCard(data.hits);
    refs.gallery.insertAdjacentHTML('beforeend', markUp);
    lightbox.refresh();

    if (data.totalHits <= 15) {
      hideElement(refs.loadMoreBtn);
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
        color: 'red',
      });
    } else {
      showElement(refs.loadMoreBtn);
    }
  } catch (error) {
    iziToast.error({
      color: 'red',
      position: 'topRight',
      message: 'Something went wrong!!!',
    });
  } finally {
    hideElement(refs.loader);
    refs.form.reset();
  }
}

async function onLoadMoreBtnClick() {
  page += 1;

  showElement(refs.loader);

  try {
    const data = await getImage(inputValue, page);
    const markUp = createImagesCard(data.hits);
    refs.gallery.insertAdjacentHTML('beforeend', markUp);
    lightbox.refresh();

    let elem = document.querySelector('.gallery-item');
    let elemHeight = elem.getBoundingClientRect().height;

    window.scrollBy({
      top: elemHeight * 2,
      behavior: 'smooth',
    });

    const lastPage = Math.ceil(data.totalHits / 15);

    if (page === lastPage) {
      hideElement(refs.loadMoreBtn);
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
      });
    } else {
      showElement(refs.loadMoreBtn);
    }
  } catch (error) {
    iziToast.error({
      position: 'topRight',
      message: 'Something went wrong!!!',
    });
  } finally {
    hideElement(refs.loader);
  }
}
