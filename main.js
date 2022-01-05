//querySelectors
var titleInput = document.querySelector('#title');
var bodyInput = document.querySelector('#body');
var formSection = document.querySelector('.form-section');
var saveButton = document.querySelector('.save-button');
var ideaArray = [];

formSection.addEventListener('mouseover', checkForm);

formSection.addEventListener('click', function(event) {
  if(event.target.className === 'save-button') {
    event.preventDefault();
    saveIdea(titleInput.value, bodyInput.value);
  }
})


function checkForm() {
  if(!titleInput.value || !bodyInput.value) {
    saveButton.style.backgroundColor = 'grey';
    saveButton.style.cursor = 'not-allowed';
    saveButton.disabled = true;
  } else {
    saveButton.disabled = false;
    saveButton.style.backgroundColor = '#1F1F3D'
  }
}

function saveIdea(title, body) {
  var idea = new Idea(title, body);
  ideaArray.push(idea);
  console.log(ideaArray);
}

function convertIdea(idea) {

}
