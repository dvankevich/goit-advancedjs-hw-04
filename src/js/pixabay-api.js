import { getApiKey } from './crypto';
import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';

export async function getImagesAxios(searchTerm, page = 1, itemsPerPage = 15) {
  try {
    const response = await axios.get('/', {
      params: {
        key: getApiKey(),
        q: searchTerm,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page: itemsPerPage,
        page: page,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching photos:', error);
    throw error;
  }
}

export function getImages(searchTerm) {
  const options = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  };
  const apiParams = new URLSearchParams({
    key: getApiKey(),
    //q: encodeURIComponent(searchTerm), // працює і без того
    q: searchTerm,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  const queryUrl = `https://pixabay.com/api/?${apiParams}`;
  //console.log(queryUrl);
  return fetch(queryUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .catch(error => console.log('Error fetching photos:', error));
}
