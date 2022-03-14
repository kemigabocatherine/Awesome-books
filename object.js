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
    <button type="button">${bookList[index].button}</button>
    <${bookList[index].line}>
  `;
  collection.appendChild(element);
  
});

const addBook = document.querySelector('.adding');
addBook.textContent = 'Add';
addBook.addEventListener('click', => {

});

for (let i = 0; i < )