/* eslint-disable max-classes-per-file */
// Book class
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

// Main Class
class Main {
  static displayBooks() {
    // eslint-disable-next-line no-use-before-define
    const books = Store.getBooks();

    books.forEach((book) => Main.addBookToList(book));
  }

  static addBookToList(book) {
    const collection = document.querySelector('#books-collection');

    const element = document.createElement('div');
    element.classList.add('item');
    element.setAttribute('id', book.title);

    element.innerHTML = `
      <p id="author">"${book.title}" by ${book.author}</p>
      <button type="button" class="delete">Remove</button>
    `;

    collection.appendChild(element);
  }

  static deleteBook(el) {
    if (el.classList.contains('delete')) {
      el.parentElement.remove();
    }
  }

  static clearFields() {
    document.querySelector('#new-title').value = '';
    document.querySelector('#new-author').value = '';
  }
}

// Store Class
class Store {
  static getBooks() {
    let books;
    if (localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }
    return books;
  }

  static addBook(book) {
    const books = Store.getBooks();

    books.push(book);

    localStorage.setItem('books', JSON.stringify(books));
  }

  static removeBook(index) {
    const books = Store.getBooks();
    let counter = 0;

    books.forEach((book) => {
      if (book.title === index) {
        books.splice(counter, 1);
      }
      counter += 1;
    });

    localStorage.setItem('books', JSON.stringify(books));
  }
}

// Event: Display Books
// document.addEventListener('DOMContentLoaded', Main.displayBooks);

// Event: Add a Book
document.querySelector('#add').addEventListener('click', (e) => {
  // Prevent actual submit
  e.preventDefault();

  // Get form values
  const title = document.querySelector('#new-title').value;
  const author = document.querySelector('#new-author').value;

  // Instatiate book
  const book = new Book(title, author);

  // Add Book to Main
  Main.addBookToList(book);

  // Add book to store
  Store.addBook(book);

  // Clear fields
  Main.clearFields();
});

// Event: Remove a book
document.querySelector('#books-collection').addEventListener('click', (e) => {
  // from Main
  Main.deleteBook(e.target);

  // from Store
  Store.removeBook(e.target.parentElement.id);
});

// FULL WEBSITE
// List
const item1 = document.querySelector('#nav-item1');
const bookSection = document.querySelector('#list');

// Add new
const item2 = document.querySelector('#nav-item2');
const formSection = document.querySelector('.form');

// Contact
const item3 = document.querySelector('#nav-item3');
const contactSection = document.querySelector('#contact');

// list function
item1.addEventListener('click', () => {
  bookSection.style.display = 'block';
  formSection.style.display = 'none';
  contactSection.style.display = 'none';
});

// add new function
item2.addEventListener('click', () => {
  formSection.style.display = 'block';
  bookSection.style.display = 'none';
  contactSection.style.display = 'none';
});

// contact function
item3.addEventListener('click', () => {
  contactSection.style.display = 'block';
  bookSection.style.display = 'none';
  formSection.style.display = 'none';
});

const dayTime = document.querySelector('#date');
dayTime.innerText = new Date();