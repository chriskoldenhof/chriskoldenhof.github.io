const namesInput = document.querySelector('#names-input');
const classNameInput = document.querySelector('.class-name-input');
const classNameDisplay = document.querySelector('.class-name')
const submitButton = document.querySelector('#submit-button');
const deleteButton = document.querySelector('#delete-button');
const container = document.querySelector('.student-wrapper');
const modal = document.querySelector('.modal');
const closeButton = document.querySelector('.close');
const studentWrapper = document.querySelector('.student-wrapper');
const columnNumberInput = document.querySelector('#columns');
const rowNumberInput = document.querySelector('#rows');
const shuffleBox = document.querySelector('#shuffle-box');

// Event Listeners
submitButton.addEventListener('click', function() {
  createArray();
});
deleteButton.addEventListener('click', function() {
  console.log("Clear button pushed ")
  deleteNames();
});
closeButton.addEventListener('click', function() {
  closeModal();
});
modal.addEventListener('click', handleClickOutside);

function createArray() {
  const textAreaValue = namesInput.value.split('\n');
  newArray = Array.from(textAreaValue);
  // filter for empty array items
  const filteredArray = newArray.filter(item => item);
  // randomize the items in the array
  shuffleArray(filteredArray);
  // clear previous items to refresh list
    
  container.innerHTML = '';
  // loop over array and make each entry a list item
  filteredArray.forEach(listMyNames);
}

function listMyNames(name) {
  const html = `
        <div class="card">${name}</li>
    `;
    const className = classNameInput.value;
  // define number of rows/columns
  const columnNumber = columnNumberInput.value;
  const rowNumber = rowNumberInput.value;
  studentWrapper.style.gridTemplateColumns = `repeat(${columnNumber}, 1fr)`;
  studentWrapper.style.gridTemplateRows = `repeat(${rowNumber}, 1fr)`;
  container.insertAdjacentHTML('beforeend', html);
  classNameDisplay.innerHTML = `
    <h1>${className}</h1>
  `
  modal.classList.add('open');
}

function deleteNames() {
  namesInput.value = '';  
}


// Shuffle Function
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i);
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function closeModal() {
  modal.classList.remove('open');
}

function handleClickOutside(e) {
  console.log(e.target, e.currentTarget);
  if (e.target === e.currentTarget) {
    closeModal();
  }
}


