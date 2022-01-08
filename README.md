# IdeaBox

## Overview

“An idea that is developed and put into action is more important than an idea that exists only as an idea.”
 ― Edward De Bono

Capturing all your ideas in one place is easy with IdeaBox. Want to create a new idea? Simply fill in your title and body, and then select `save` to start your new collection. Have ideas that you *really* like? Make sure to select the `star` at the top of your idea to add it to your very own personalized collection. Looking for an idea, but can't find it? Don't worry! We made finding ideas quick and efficient. Just enter your key words into the `Search Ideas` bar to start filtering through all of your ideas.

*INSERT FUNCTIONALITY INFO HERE*

### Project Motivation

The IdeaBox project aims to teach developers how the DOM works with JavaScript, CSS, and HTML to create functional and interactive websites. This project was completed using "driver-navigator" style collaboration: where students work together to write and create code with other students in the program to develop skills that are essential for working in a professional programming environment.


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

### Credits

Authors of the IdeaBox: [Igor Decess](https://github.com/userigorgithub), [DéNaje Ferguson](https://github.com/Romeslayer/), [Oakley Windiate](https://github.com/oakleywindiate)

Deployed site: [click here](https://romeslayer.github.io/ideabox/)

Interested in learning more about Turing? [click here](https://turing.edu/)
