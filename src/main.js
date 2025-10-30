import { getImagesAxios } from './js/pixabay-api';
import {
  getGalleryMarkdown,
  drawGallery,
  messageWarning,
  messageError,
  showHtmlObject,
  hideHtmlObject,
} from './js/render-functions';
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

const refs = {
  loader: document.querySelector('.js-loader'),
};

const myGallery = document.querySelector('.gallery');
const searchButton = document.querySelector('.search-button');
const searchInput = document.querySelector('.search-input');
const loadMoreButton = document.querySelector('.load-more-button');

const simpleLightBox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  overlayOpacity: 0.8,
});

const minSearchTermLength = 2;
let page = 1;
let searchTermGlobal = '';
let perPage = 15; // items per page
let totalHits = 0;

searchButton.addEventListener('click', searchButtonHandler);
loadMoreButton.addEventListener('click', loadMoreButtonHandler);

async function searchButtonHandler(event) {
  event.preventDefault();
  let searchTerm = String(searchInput.value.trim());
  searchTerm = searchTerm.replace(/[*]/g, ''); // видалення спецсимволів
  let galleryMarkdown = '';
  let images = '';

  if (!searchTerm || searchTerm.length < minSearchTermLength) {
    messageWarning(
      `Enter data for search, please. Min. ${minSearchTermLength} symbols.`
    );
    searchInput.value = ''; // clear input
    drawGallery(myGallery, ''); // clear gallery
    hideHtmlObject(loadMoreButton);
    return;
  }

  refs.loader.classList.add('is-active');
  drawGallery(myGallery, ''); // clear gallery
  hideHtmlObject(loadMoreButton);

  searchTermGlobal = searchTerm; // save searchTerm in global variable;
  page = 1;

  images = await getImagesAxios(searchTerm, page, perPage);

  totalHits = images.totalHits;
  if (images.hits.length === 0) {
    messageError(
      'Sorry, there are no images matching<br> your search query. Please, try again!'
    );
    searchInput.value = ''; // clear input
    refs.loader.classList.remove('is-active');
    drawGallery(myGallery, ''); // clear gallery
  } else {
    searchInput.value = ''; // clear input

    galleryMarkdown = getGalleryMarkdown(images.hits);

    refs.loader.classList.remove('is-active');
    drawGallery(myGallery, galleryMarkdown);

    simpleLightBox.refresh();

    if (totalHits > page * perPage) {
      showHtmlObject(loadMoreButton);
    } else {
      messageWarning(
        "We're sorry, but you've reached<br>the end of search results."
      );
      hideHtmlObject(loadMoreButton);
    }
  }
}

async function loadMoreButtonHandler(event) {
  event.preventDefault();
  page += 1;
  let galleryMarkdown = '';
  let images = '';

  refs.loader.classList.add('is-active');
  hideHtmlObject(loadMoreButton);

  images = await getImagesAxios(searchTermGlobal, page, perPage); // використовуємо глобальний searchTerm

  totalHits = images.totalHits;
  if (images.hits.length === 0) {
    // тут вже не перша сторінка і якщо результат пошуку пустий то більше зображень нема
    messageError(
      "We're sorry, but you've reached<br>the end of search results."
    );
  } else {
    galleryMarkdown = getGalleryMarkdown(images.hits);
    drawGallery(myGallery, galleryMarkdown, 'beforeend'); // додаємо зображення на екран
    simpleLightBox.refresh();
    // scroll
    const galleryItem = document.querySelector('.gallery-item');
    window.scrollBy({
      top: galleryItem.getBoundingClientRect().height * 2,
      left: 0,
      behavior: 'smooth',
    });

    if (totalHits > page * perPage) {
      showHtmlObject(loadMoreButton);
    } else {
      messageWarning(
        "We're sorry, but you've reached<br>the end of search results."
      );
      hideHtmlObject(loadMoreButton);
    }
  }
  refs.loader.classList.remove('is-active');
}

// обробка інших помилок
window.onerror = (message, source, lineno, colno, error) => {
  // Обробляємо всі необроблені помилки
  console.error('Unhandled error:', error);
};
