import { fetchTopBooks } from './api.js';
import { displayTitle } from './categories.js';

async function displayTopBooks() {
  try {
    const response = await fetchTopBooks();
    const topBookCard = document.querySelector('.books-container-list');

    displayTitle('All Categories');

    topBookCard.innerHTML = createUl(response);
  } catch (error) {
    console.error(error);
  }
}

function createBooks(arr) {
  return arr
    .map(({ _id, book_image, title, author }) => {
      return `<li li-id="${_id}" class="top-book-card">
  <a href="" class="book-card-thumb"
    ><div class="thumb">
    <img src="${book_image}" alt="${title}" class="" /></div>
    <p class="book-card-title">${title}</p>
    <p class="book-card-author">${author}</p
  ></a></li>`;
    })
    .join('');
}
function createButtonMarkap(list_name) {
  return `
      <div class="div-button">
        <a data-list="${list_name}" href="" class="button-open-categories">
          SEE MORE
        </a>
      </div>
    `;
}
function createUl(arr) {
  return arr
    .map(({ list_name, books }) => {
      return `<li class="top-books-ul">
      <h2>${list_name}</h2>
      <ul class="top-books-list">${createBooks(books)}</ul>
      ${createButtonMarkap(list_name)}
        </li>
        `;
    })
    .join('');
}

displayTopBooks();

export { displayTopBooks };
