var titleInput = document.querySelector('#title');
var bodyInput = document.querySelector('#body');
var formSection = document.querySelector('.js-form-section');
var saveButton = document.querySelector('.js-save-button');
var ideaSection = document.querySelector('.js-idea-section-grid');
var filterSection = document.querySelector('.js-filter-section');
var ideaArray = [];

formSection.addEventListener('input', function(event) {
  if (event.target.className.includes('search-input')) {
    searchIdeas(event.target.value);
  } else {
    checkForm();
  }
});

window.addEventListener('load', function(event) {
  checkForm();
});

formSection.addEventListener('click', function(event) {
  if (event.target.className.includes('js-save-button')) {
    event.preventDefault();
    saveIdea(titleInput.value, bodyInput.value);
    checkForm();
  }
});

ideaSection.addEventListener('click', function(event) {
  var id = event.target.parentNode.parentNode.id;
  if (event.target.className.includes('star-button')) {
    starIdea(id);
  }
  if (event.target.className.includes('delete-button')) {
    deleteIdea(id);
  }
});

filterSection.addEventListener('click', function(event) {
  if (event.target.className.includes('show-starred-ideas')) {
    checkSaveButton(event.target);
  }
});

function checkForm() {
  if (!titleInput.value || !bodyInput.value) {
    saveButton.style.backgroundColor = '#A9AAD2';
    saveButton.style.cursor = 'not-allowed';
    saveButton.disabled = true;
  } else {
    saveButton.disabled = false;
    saveButton.style.cursor = 'pointer';
    saveButton.style.backgroundColor = '#1F1F3D';
  }
};

function saveIdea(title, body) {
  var idea = new Idea(title, body);
  titleInput.value = '';
  bodyInput.value = '';
  ideaArray.push(idea);
  displayIdeas(ideaArray);
};

function displayIdeas(array) {
  ideaSection.innerHTML = '';
  for (var i = 0; i < array.length; i++) {
    ideaSection.innerHTML += `
      <div class='card' id='${array[i].id}'>
        <div class='card-top dark-purple'>
          <img class='star-button' src=${array[i].star ? './assets/star-active.svg' : './assets/star.svg'} alt='star'/>
          <img class='delete-button' src='./assets/delete.svg' alt='delete'/>
        </div>
        <div class='card-body'>
          <h4>${array[i].title}</h4>
          <p>${array[i].body}</p>
        </div>
        <div class='card-comment'>
          <img src='./assets/comment.svg' alt='comment'/>
          <p>Comment</p>
        </div>
      </div>`
  }
};

function starIdea(id) {
  for (var i = 0; i < ideaArray.length; i++) {
    if (ideaArray[i].id.toString() === id) {
      ideaArray[i].updateIdea();
    }
  }

  displayIdeas(ideaArray);
};

function deleteIdea(id) {
  for (var i = 0; i < ideaArray.length; i++) {
    if (ideaArray[i].id.toString() === id) {
      ideaArray.splice(i, 1);
    }
  }

  displayIdeas(ideaArray);
};

function checkSaveButton(target) {
  if (target.innerText === 'Show Starred Ideas') {
    showStarredIdeas();
    target.innerText = 'Show All Ideas';
  } else {
    target.innerText = 'Show Starred Ideas';
    displayIdeas(ideaArray);
  }
};

function showStarredIdeas() {
  var starredIdeas = [];
  for (var i = 0; i < ideaArray.length; i++) {
    if (ideaArray[i].star) {
      starredIdeas.push(ideaArray[i]);
    }
  }

  displayIdeas(starredIdeas);
};

function searchIdeas(element) {
  var filteredIdeas = [];
  for (var i = 0; i < ideaArray.length; i++) {
    if (ideaArray[i].title.includes(element) || ideaArray[i].body.includes(element)) {
      filteredIdeas.push(ideaArray[i]);
    }
  }

  displayIdeas(filteredIdeas);
};
