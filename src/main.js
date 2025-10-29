import { getImagesAxios } from './js/pixabay-api';
import {
  getGalleryMarkdown,
  drawGallery,
  messageWarning,
  messageError,
} from './js/render-functions';
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

const refs = {
  loader: document.querySelector('.js-loader'),
};
const minSearchTermLength = 2;
const myGallery = document.querySelector('.gallery');
const searchButton = document.querySelector('.search-button');
const searchInput = document.querySelector('.search-input');
const simpleLightBox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  overlayOpacity: 0.8,
});

searchButton.addEventListener('click', searchButtonHandler);

function searchButtonHandler(event) {
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
    return;
  }

  refs.loader.classList.add('is-active');

  getImagesAxios(searchTerm)
    .finally(() => {
      refs.loader.classList.remove('is-active');
    })
    .then(images => {
      if (images.hits.length === 0) {
        messageError(
          'Sorry, there are no images matching<br> your search query. Please, try again!'
        );
        searchInput.value = ''; // clear input
        drawGallery(myGallery, ''); // clear gallery
      } else {
        searchInput.value = ''; // clear input

        galleryMarkdown = getGalleryMarkdown(images.hits);

        drawGallery(myGallery, galleryMarkdown);
        simpleLightBox.refresh();
      }
    })
    .catch(error => {
      console.error('сталося щось дивне', error);
    });
}

// обробка інших помилок
window.onerror = (message, source, lineno, colno, error) => {
  // Обробляємо всі необроблені помилки
  console.error('Unhandled error:', error);
};
