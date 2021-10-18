
// Using DOM methods, remove the last paragraph in the <article> tag from the DOM.
// Add an event listener which will change the background color of the h2 tag from the DOM when clicked on.
// Set the font size of the h1 tag to a random pixel size between 0 to 100.(Check out this documentation)
// Add an event listener which will hide the h3 when it’s clicked on (use the display property).
// Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.
// When the “Submit” button of the form is clicked:
// get the values of the input tags
// make sure that they are not empty,
// then append them to a HTML table, in the div, below the form.
// When you hoover on the 2nd paragraph, it should fade out (Check out “fade css animation” on Google)


// Using DOM methods, remove the last paragraph in the <article> tag from the DOM.

// let articleP = document.querySelectorAll("p")
// let removeLastP = articleP[3].remove()

// Add an event listener which will change the background color of the h2 tag from the DOM when clicked on.

let h2 = document.querySelector("h2")
h2.addEventListener("mouseover" , function(event){
  h2.classList.add("fade")
})

// h2.addEventListener("click" , function(){
//     h2.style.backgroundColor = "red"
// })

// Set the font size of the h1 tag to a random pixel size between 0 to 100.(Check out this documentation)

// let h1 = document.querySelector("h1");
// h1.style.fontSize = Math.floor(Math.random() * 100);

// Add an event listener which will hide the h3 when it’s clicked on (use the display property).

// let h3 = document.querySelector("h3");
// h3.style.display = "none";

// Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.

// let boldBtn = document.getElementById("bold")
// boldBtn.addEventListener("click" , function(){
//     let Allp = document.querySelectorAll("p");
//     for(p of Allp){
//       p.style.fontWeight = "bold"
//     }
  
// })


// When the “Submit” button of the form is clicked:
// get the values of the input tags
// make sure that they are not empty,
// then append them to a HTML table, in the div, below the form.

let submit = document.getElementById("submit");
let inputOne = document.getElementById("fname")
let inputTwo = document.getElementById("lname")




let form = document.querySelector("form");
// console.log(form);

form.addEventListener("submit" , function(e){
    e.preventDefault()
   let value = e.target.fname.value;
   console.log(value);
   inputOne.value = " "
   row1.innerHTML = value
   

})

form.addEventListener("submit" , function(e){
    e.preventDefault()
    let value2 = e.target.lname.value;
    console.log(value2);
    inputTwo.value = " "
    row2.innerHTML = value2

})

let article = document.querySelector("article")
let table = document.createElement('table')
let thead = document.createElement('thead');
let tbody = document.createElement('tbody');

let row1 = document.createElement('td');
let row2 = document.createElement('td');


let heading1 = document.createElement('th');
let heading2 = document.createElement('th');

heading1.innerHTML = "First name";
heading2.innerHTML = "Last name";

////// thead
thead.appendChild(heading1)
thead.appendChild(heading2)


///////tbody 

tbody.appendChild(row1)
tbody.appendChild(row2)


///// append to artical (table)
article.appendChild(table)
table.appendChild(thead)
table.appendChild(tbody)













