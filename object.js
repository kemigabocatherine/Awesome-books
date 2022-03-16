/* eslint-disable no-use-before-define */
let id = 0;
let books = [];
const renderBooks = (books) => {
  const bookList = document.getElementById('book-list');
  bookList.innerHTML = '';
  books.forEach((book) => {
    addBook(book.title, book.author, book.id);
  });
};

const deleteBook = (id) => {
  const result = books.filter((book) => book.id !== id);
  books = result;
  localStorage.setItem('books', JSON.stringify(books));
  renderBooks(books);
};

if (localStorage.getItem('books')) {
  books = JSON.parse(localStorage.getItem('books'));
}

const addBookBtn = document.getElementById('add-book');

const addBook = (title, author, id) => {
  const bookList = document.getElementById('book-list');
  const book = document.createElement('div');
  const bookTitle = document.createElement('p');
  bookTitle.textContent = `Title: ${title}`;
  const bookAuthor = document.createElement('p');
  bookAuthor.textContent = `Author: ${author}`;
  const removeBtn = document.createElement('button');
  removeBtn.textContent = 'Remove';

  removeBtn.addEventListener('click', () => {
    deleteBook(id);
  });

  const bookHr = document.createElement('hr');

  book.append(bookTitle, bookAuthor, removeBtn, bookHr);
  bookList.append(book);
};

const addBookBtnHandler = (e) => {
  e.preventDefault();
  const bookTitleInput = document.getElementById('title');
  const bookAuthorInput = document.getElementById('author');
  id += 1;
  const bookObject = {
    id,
    title: bookTitleInput.value,
    author: bookAuthorInput.value,
  };
  books.push(bookObject);
  localStorage.setItem('books', JSON.stringify(books));
  renderBooks(books);
  bookTitleInput.value = '';
  bookAuthorInput.value = '';
};

addBookBtn.addEventListener('click', addBookBtnHandler);

renderBooks(books);
