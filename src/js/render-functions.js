import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

function getItemMarkdown(item) {
  // webformatURL — посилання на маленьке зображення для списку карток у галереї
  // largeImageURL — посилання на велике зображення для модального вікна
  // tags — рядок з описом зображення. Підійде для атрибута alt
  // likes — кількість вподобайок
  // views — кількість переглядів
  // comments — кількість коментарів
  // downloads — кількість завантажень
  return `
  <li class="gallery-item">
    <a href="${item.largeImageURL}"
      class="galery-item-image-link">
      <img class="galery-item-image"
        src="${item.webformatURL}"
        alt="${item.tags}" />
    </a>
    <ul class="image-info">
      <li class="image-info-item">
        <p class="info-item-caption">Likes</p>
        <p class="info-item-value">${item.likes}</p>
      </li>
      <li class="image-info-item">
        <p class="info-item-caption">Views</p>
        <p class="info-item-value">${item.views}</p>

      </li>
      <li class="image-info-item">
        <p class="info-item-caption">Comments</p>
        <p class="info-item-value">${item.comments}</p>
      </li>
      <li class="image-info-item">
        <p class="info-item-caption">Downloads</p>
        <p class="info-item-value">${item.downloads}</p>
      </li>
    </ul>
  </li>
`;
}

export function getGalleryMarkdown(images) {
  return images.map(getItemMarkdown).join('');
}

export function drawGallery(gallery, markdown) {
  gallery.innerHTML = markdown;
}

const iziCommon = {
  message: 'Common message',
  theme: 'dark',
  position: 'topRight',
  titleColor: '#fff',
  titleSize: '16px',
  titleLineHeight: '1.5',
  messageColor: '#fff',
  messageSize: '16px',
  messageLineHeight: '1.5',
  imageWidth: 24,
};

const notifications = {
  success: {
    ...iziCommon,
    //title: 'OK',
    color: '#59a10d',
    iconUrl: 'ok-icon.svg',
  },
  error: {
    ...iziCommon,
    //title: 'Error',
    color: '#ef4040',
    iconUrl: 'error-icon.svg',
  },
  warning: {
    ...iziCommon,
    //title: 'Warning',
    color: '#ffa000',
    iconUrl: 'caution-icon.svg',
  },
};

export function messageWarning(message) {
  iziToast.warning({
    ...notifications.warning,
    message: message,
  });
}

export function messageError(message) {
  iziToast.error({
    ...notifications.error,
    message: message,
  });
}
