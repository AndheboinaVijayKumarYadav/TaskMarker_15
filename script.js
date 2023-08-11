// variables

const addButton = document.querySelector('.btn'),
  inputEl = document.querySelector('.text'),
  tasksElements = document.querySelector('.main');

addButton.addEventListener('click', addElements);

function addElements(event) {
  event.preventDefault();

  const divEl = document.createElement('div');
  const pEl = document.createElement('p');
  const divBtnEl = document.createElement('div');
  const doneBtn = document.createElement('button');
  const deleteBtn = document.createElement('button');

  let inputText = inputEl.value;
  if (inputText === '') return alert("Please enter a task");

  // adding text to elements
  pEl.innerText = inputText;
  doneBtn.innerText = 'done';
  deleteBtn.innerText = 'delete';

  // adding classes to the elements
  divBtnEl.classList.add('buttons');
  divEl.classList.add('task');

  // appending the children
  divBtnEl.appendChild(doneBtn);
  divBtnEl.appendChild(deleteBtn);
  

  divEl.appendChild(pEl);
  divEl.appendChild(divBtnEl);
  inputEl.value ="";

  tasksElements.appendChild(divEl);

  doneBtn.addEventListener('click', () => {

    pEl.style.textDecoration = 'line-through';
  })

  deleteBtn.addEventListener('click', () => {
    divEl.remove();
  })
}
