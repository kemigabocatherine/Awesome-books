let bookList = [];


if (!localStorage.getItem('listOfBooks')) {
  localStorage.setItem('listOfBooks', JSON.stringify([])); 
} else { bookList= JSON.parse(localStorage.getItem('listOfBooks'));
}

const removeBtn = (title,author)=>{
  const newBook={title,author};
  bookList.remove(newBook)}
  localStorage.setItem('listOfBooks', JSON.stringify(bookList));

const updateData = (title,author)=>{
  const newBook={title,author};
  bookList.push(newBook); 
  localStorage.setItem('listOfBooks', JSON.stringify(bookList)); 
  console.log(bookList);
} 

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
addBook.addEventListener('click', () => {
  const newDiv = document.createElement('div');

  const newTitle = document.getElementById('new-title').value;
  const newAuthor = document.getElementById('new-author').value;
  
  updateData(newTitle, newAuthor);
  removeBtn(newTitle,newAuthor);

  const heading = document.createElement('h4');
  heading.appendChild(document.createTextNode(newTitle));

  const paragraph = document.createElement('p');
  paragraph.appendChild(document.createTextNode(newAuthor));

  const remove = document.createElement('button');
  remove.classList.add('delete');
  remove.setAttribute('type', 'button');
  remove.appendChild(document.createTextNode('Remove'));

  const bottomLine = document.createElement('hr');

  newDiv.appendChild(heading);
  newDiv.appendChild(paragraph);
  newDiv.appendChild(remove);
  newDiv.appendChild(bottomLine);

  collection.appendChild(newDiv);
  remove.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete')) {
      if (confirm('Are you sure?')) {
        e.target.parentElement.remove();
      }
    }
  });
});

const removeBtns = document.querySelectorAll('.delete');
removeBtns.forEach((button) => {
  button.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete')) {
      if (confirm('Are you sure?')) {
        var div = e.target.parentElement;
        div.remove();
        window.localStorage.setItem('listOfBooks', JSON.stringify(bookList));
      }
    }
  });
});
