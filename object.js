const { createElement } = require("parse5/lib/tree-adapters/default");

const bookList = [
  {
    title: 'Gifted hands',
    author: 'Ben Carson',
    button: 'Remove',
    line: 'hr',
  },

  {
    title: 'Gifted hands',
    author: 'Ben Carson',
    button: 'Remove',
    line: 'hr',
  },

  {
    title: 'Gifted hands',
    author: 'Ben Carson',
    button: 'Remove',
    line: 'hr',
  },

];

const collection = document.getElementById('books');

bookList.forEach((book, index) => {
  const element = document.createElement('div');
  element.classList.add('item');

  element.innerHTML = `
    <h4>${bookList[index].title}</h4>
    <p>${bookList[index].author}</p>
    <button type="button" class="delete">${bookList[index].button}</button>
    <${bookList[index].line}>
  `;
  collection.appendChild(element);
  
});

const addBook = document.querySelector('.adding');
addBook.textContent = 'Add';
addBook.addEventListener('click',() => {
  const newDiv = document.createElement('div');
  const newTitle = document.getElementById('new-title').value;
  const newAuthor = document.getElementById('new-author').value;

  const heading = document.createElement('h4');
  heading.appendChild(document.createTextNode(newTitle));

  const paragraph = document.createElement('p');
  paragraph.appendChild(document.createTextNode(newAuthor));

  const remove = document.createElement('button');
  remove.classList.add('delete');
  remove.setAttribute('type','button');
  remove.appendChild(document.createTextNode('Remove'));

  const bottomLine = document.createElement('hr');

  newDiv.appendChild(heading);
  newDiv.appendChild(paragraph);
  newDiv.appendChild(remove);
  newDiv.appendChild(bottomLine);

  collection.appendChild(newDiv)
});

