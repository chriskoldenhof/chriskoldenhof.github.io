let newArray = [];
const studentList = document.querySelector('ol');
const studentName = document.querySelectorAll('.student-name');
const textInput = document.querySelector('#text-input');
const submitButton = document.querySelector('#submit-btn');
const deleteButton = document.querySelector('#delete-btn');
const chooseOneButton = document.querySelector('#choose-one-btn');
const modal = document.querySelector('.modal');
const closeButton = document.querySelector('.close');

// Event Listeners
submitButton.addEventListener("click", function() {
    createArray();
});
deleteButton.addEventListener("click", function() {
    deleteNames();
});
chooseOneButton.addEventListener("click", function() {
    chooseOnePerson();
});
closeButton.addEventListener('click', function() {
    closeModal();
  });
  modal.addEventListener('click', handleClickOutside);

function createArray() {
    const textAreaValue = textInput.value.split('\n');
        newArray = Array.from(textAreaValue);
        // filter for empty array items
        const filteredArray = newArray.filter(item => item);
        if(filteredArray.length !== 0){
            // randomize the items in the array
            shuffleArray(filteredArray);
            console.log(filteredArray);
            // clear previous items to refresh list
            studentList.innerHTML = "";
            // loop over array and make each entry a list item
            filteredArray.forEach(listMyNames);
    }
    
}

function listMyNames(name) {
    // dump each name into an li
    const html = `
        <li class="student-name">${name}</li>
    `;
    modal.classList.add('open');
    studentList.insertAdjacentHTML('beforeend', html);
  }

function deleteNames() {
      studentList.innerHTML = "";
  }
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() *i);
        [array[i], array[j]] = [array[j], array[i]];
    } return array;
}
function chooseOnePerson() {
    const textAreaValue = textInput.value.split('\n');
    newArray = Array.from(textAreaValue);
    const filteredArray = newArray.filter(item => item);
    const person = filteredArray[Math.floor(Math.random() * filteredArray.length)];
    if(filteredArray.length !== 0){
        console.log(person);
        alert(`Congratulations, ${person}`)
    }   
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