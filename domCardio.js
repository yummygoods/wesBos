console.log("hello?");

// Make a div
let div = document.createElement("div");
div.textContent = "hello?"
document.body.appendChild(div);





// add a class of wrapper to it

div.className = "wrapper";

// put it into the body


// make an unordered list
let ul = document.createElement("ul");
div.appendChild(ul);
// add three list items with the words "one, two, three" in them
let item1 = document.createElement("li");
item1.textContent = "one";
ul.appendChild(item1);

// put that list into the above wrapper

// create an image
let image = document.createElement('img');
image.src = "./wink1.PNG"
image.width = 250;
image.className = "cute"
image.alt = "cute poop"
div.appendChild(image);

// set the source to an image
// set the width to 250
// add a class of cute
// add an alt of Cute Puppy
// Append that image to the wrapper

// with HTML string, make a div, with two paragraphs inside of it


// with HTML string, make a div, with two paragraphs inside of it
// const html = "<p>paragraph 1</p><p>paragraph 2</p>";
// const htmldiv = document.createElement('div');
// htmldiv.innerHTML = html;

// put this div before the unordered list from above
// wrapdiv.in









let str = "<div><p>paragraph 1</p><p>paragraph 2</p></div>";
// div.innerHTML += str;
ul.insertAdjacentHTML('beforebegin', str);



// let str = `
// <div>
// <p>paragraph 1</p>
// <p>paragraph 2</p>
// </div>
// `;
// // div.innerHTML += str;
// ul.insertAdjacentHTML('beforebegin', str);





// put this div before the unordered list from above
// div.prepend(str);

// add a class to the second paragraph called warning


// remove the first paragraph
// let paragraphs = document.getElementsByName("p");
// create a function called generatePlayerCard that takes in three arguments: name, age, and height

// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

// make a new div with a class of cards

// make 4 player cards using generatePlayerCard

// append those cards to the div
// put the div into the DOM just before the wrapper element
// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
// make out delete function
// loop over them and attach a listener