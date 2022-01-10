# IdeaBox

## Overview

Capturing all your ideas in one place is easy with IdeaBox. Want to create a new idea? Simply fill in your title and body, and then select `save` to display your new idea. Have ideas that you *really* like? Make sure to select the `star` at the top of your idea to add it to your very own personalized collection. Looking for an idea, but can't find it? Don't worry! We made finding ideas quick and efficient. Just enter your key words into the `Search Ideas` bar to start filtering through all of your ideas.


### Project Motivation

The IdeaBox project aims to teach developers how the DOM works with JavaScript, CSS, and HTML to create functional and interactive websites. This project was completed using "driver-navigator" style collaboration: where students work together to write and create code with other students to develop skills that are essential for working in a professional programming environment.


## Project Information
#### Code Style & Framework
* JavaScript
* HTML
* CSS

#### Features
* Create a Personalized Idea
* Display All Ideas
* Favorite ideas
* Delete Ideas
* Filter Ideas
* Display Favorite Ideas

#### Code Sample

```javascript

function searchIdeas(element) {
  var filteredIdeas = [];
  for (var i = 0; i < ideaArray.length; i++) {
    if(ideaArray[i].title.includes(element) || ideaArray[i].body.includes(element)) {
      filteredIdeas.push(ideaArray[i]);
    }
    displayIdeas(filteredIdeas);
  }
}
```

### Installation

1. To edit this repository:
  * navigate to repo on `github.com` or use [this link](https://github.com/Romeslayer/ideabox)
  * choose `fork`
  * `clone` to local machine
2. `cd` into repository
3. Open in your text editor
4. To view webpage, run the command `open index.html` in your terminal

## User Instructions

* After installation, the main page of the application will be displayed

<img width="1410" alt="Screen Shot 2022-01-08 at 9 27 56 AM" src="https://user-images.githubusercontent.com/93341234/148651905-ba08fb17-0a77-440a-b521-575340cd848e.png">

&nbsp;
* Enter text into the title & body input fields
* Click the `Save Button` to display an idea

<img width="1414" alt="Screen Shot 2022-01-08 at 9 55 18 AM" src="https://user-images.githubusercontent.com/93341234/148652719-5382df6c-84c1-43a8-8c45-1a1ce31868f6.png">

&nbsp;
* Click the `star` icon to star favorite ideas
* Click the `X` icon to delete ideas
* Click `Show Starred Ideas` to display only favorite ideas
* Click `Show All Ideas` to display all ideas


<img width="1413" alt="Screen Shot 2022-01-08 at 10 05 17 AM" src="https://user-images.githubusercontent.com/93341234/148653079-738cbbdf-762e-4849-93f8-d6c4555057ad.png">

&nbsp;
* Enter text into the `Search Ideas` area to find an idea  

<img width="1413" alt="Screen Shot 2022-01-08 at 10 10 00 AM" src="https://user-images.githubusercontent.com/93341234/148653222-fa191f33-146e-420c-9862-8eebdaf84d47.png">

### Credits

Authors of the IdeaBox: [Igor Decess](https://github.com/userigorgithub), [DéNaje Ferguson](https://github.com/Romeslayer/), [Oakley Windiate](https://github.com/oakleywindiate)

Deployed site: [click here](https://romeslayer.github.io/ideabox/)

Interested in learning more about Turing? [click here](https://turing.edu/)
