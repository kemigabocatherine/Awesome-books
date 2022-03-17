/* eslint-disable max-classes-per-file */
// Book class
class Book {
  constructor(title, author, button) {
    this.title = title;
    this.author = author;
    this.button = 'Remove';
  }
}

// Main Class
class Main {
  static displayBooks() {
    const books = Store.getBooks();

    books.forEach((book) => Main.addBookToList(book));
  }

  static addBookToList(book) {
    const collection = document.querySelector('#books-collection');

    const element = document.createElement('div');
    element.classList.add('item');

    element.innerHTML = `
      <p id="author">${book.title} by ${book.author}</p>
      <button type="button" class="delete">${book.button}</button>
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

    books.forEach((book, index) => {
      if (book.index === index) {
        books.splice(index, 1);
      }
    });

    localStorage.setItem('books', JSON.stringify(books));
  }
}

// Event: Display Books
document.addEventListener('DOMContentLoaded', Main.displayBooks);

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
  Store.removeBook(e.target.parentElement(index));
});