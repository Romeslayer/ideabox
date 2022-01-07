//querySelectors
var titleInput = document.querySelector('#title');
var bodyInput = document.querySelector('#body');
var formSection = document.querySelector('.form-section');
var saveButton = document.querySelector('.save-button');
var ideaSection = document.querySelector('.idea-section-grid');
var ideaArray = [];

formSection.addEventListener('mouseover', checkForm);

formSection.addEventListener('click', function(event) {
  if(event.target.className.includes('save-button')) {
    event.preventDefault();
    saveIdea(titleInput.value, bodyInput.value);
    checkForm();
  }
})

ideaSection.addEventListener('click', function(event) {
  var id = event.target.parentNode.parentNode.id;
  if(event.target.className.includes('delete-button')) {

    deleteIdea(id);
  }
})

function deleteIdea(id) {
  for (var i = 0; i < ideaArray.length; i++) {
    if(ideaArray[i].id.toString() === id) {
      ideaArray.splice(i, 1);
    }
  }
  displayIdeas();
}


function checkForm() {
  if(!titleInput.value || !bodyInput.value) {
    saveButton.style.backgroundColor = '#A9AAD2';
    saveButton.style.cursor = 'not-allowed';
    saveButton.disabled = true;
  } else {
    saveButton.disabled = false;
    saveButton.style.cursor = 'pointer';
    saveButton.style.backgroundColor = '#1F1F3D'
  }
}

function saveIdea(title, body) {
  var idea = new Idea(title, body);
  titleInput.value = '';
  bodyInput.value = '';
  ideaArray.push(idea);
  displayIdeas();
}

function displayIdeas() {
  ideaSection.innerHTML = '';
  ideaArray.forEach(function(element) {
    ideaSection.innerHTML += `<div class="card" id="${element.id}">
            <div class="card-top dark-purple">
              <img src="./assets/star.svg" alt="star"/>
              <img class="delete-button" src="./assets/delete.svg" alt="delete"/>
            </div>
            <div class="card-body">
              <h4>${element.title}</h4>
              <p>${element.body}</p>
            </div>
            <div class='card-comment'>
              <img src="./assets/comment.svg" alt="comment"/>
              <p>Comment</p>
            </div>
          </div>`
  })
}
