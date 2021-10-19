// Exercise 1 : Select A Kind Of Music

// Instructions
// <select id="genres">
//   <option value="rock">Rock</option>
//   <option value="blues" selected>Blues</option>
// </select>


// Display the value of the selected option.
// Add an additional option to the select tag:
// <option value="classic">Classic</option>
// The newly added option should be selected by default.



let button = document.getElementById("click")

button.addEventListener("click" , function(){
let select = document.getElementById("genres").value;
 document.getElementById("pText").innerHTML = select
})




