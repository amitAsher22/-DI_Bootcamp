

// Exercise 1 : Change The Navbar

// Instructions
//  <div id="navBar">
//     <ul>
//         <li><a href="#">Profile</a></li>
//         <li><a href="#">Home</a></li>
//         <li><a href="#">My Friends</a></li>
//         <li><a href="#">Messenger</a></li>
//         <li><a href="#">My Pics</a></li>
//     </ul>
// </div>


// In the <div> above, change the value of the id attribute from navBar to socialNetworkNavigation, using the setAttribute method.
// We are going to add a new <li> to the <ul>.
// First, create a new <li> tag (use the createElement method).
// Create a new text node with “Logout” as its specified text.
// Append the text node to the newly created list node (li).
// Finally, append this updated list node to the unordered list above, using the appendChild method.
// Bonus
// Use the firstElementChild and the lastElementChild properties to retrieve the first and last li elements from their parent element (ul). Display the text of each link. (Hint: use the textContent property).


//# 1 # In the <div> above, change the value of the id attribute from navBar to socialNetworkNavigation, using the setAttribute method

// let changeNavBarDiv = document.getElementById("navBar").setAttribute("id" , "socialNetworkNavigation")

//# 2 # First, create a new <li> tag (use the createElement method).
//# 3 # Create a new text node with “Logout” as its specified text.
//# 4 # Append the text node to the newly created list node (li).
//# 5 # Finally, append this updated list node to the unordered list above, using the appendChild method.


// let catchUl = document.querySelector("ul")
// let createLi = document.createElement("li");
// catchUl.appendChild(createLi)
// let aTag = document.createElement("a");
// createLi.appendChild(aTag)
// aTag.setAttribute("href" , "#")
// aTag.innerHTML = "Logout"

///////////////////////////////////////////////////////////////////////////////////////////////// Exercise 2

// Exercise 2 : Users

// Instructions
// <html>
// <body>
//   <div id="container">Users:</div>
//   <ul class="list">
//     <li>John</li>
//     <li>Pete</li>
//   </ul>
//   <ul class="list">
//     <li>David</li>
//     <li>Sarah</li>
//     <li>Dan</li>
//   </ul>
// </body>
// </html>


// In the HTML above change the name “Pete” to “Richard”.
// Change each first name of the two <ul>'s to your name.
// At the end of each <ul> add a <li> that says “Hey students”.
// Delete the name Sarah from the second <ul>.
// Bonus
// Add a class called student_list to both of the <ul>'s.
// Add the classes university and attendance to the first <ul>.


//# 1 # In the HTML above change the name “Pete” to “Richard”.

// let ulFirst = document.querySelectorAll(".list")[0];
// let liSeconde = ulFirst.lastElementChild.textContent = "Richard"

//# 2 # Change each first name of the two <ul>'s to your name.

// let ulSecond = document.querySelectorAll(".list")
// let createLiToList = document.createElement('li')

// for(let item of ulSecond){
//    let changeFirst = item.firstElementChild.textContent = "amit";
//    createLiToList.textContent = "Hey students"
//   item.appendChild(createLiToList)
// }

// //# 4 # Delete the name Sarah from the second <ul>.
// let listSecond = ulSecond[1];

// let deleteSara = document.querySelector("#sarah");
// deleteSara.remove()


///////////////////////////////////////////////////////////////////////////////////////////////// Exercise 3

// Exercise 3 : Users And Style

// Instructions
// <html>
// <body>
//   <div>Users:</div>
//   <ul>
//     <li>John</li>
//     <li>Pete</li>
//   </ul>
// </body>
// </html>


// For the following exercise use the HTML presented above:

// Add a “light blue” background color and some padding to the <div>.
// Do not display the first name (John) in the list.
// Add a border to the second name (Pete).
// Change the font size of the whole body.
// Bonus: If the background color of the div is “light blue”, alert “Hello x and y” (x and y are the users in the div).


// # 1 # Add a “light blue” background color and some padding to the <div>

// let title = document.getElementById("title")
// let changeColorBG = title.style.backgroundColor = "lightblue";
// let addPadding = title.style.padding = "20px"

// //# 2 # Do not display the first name (John) in the list

// let ListUl = document.querySelector("ul")
// // let displyFirst =  ListUl.firstElementChild.style.display  = "none"


// //# 3 # Add a border to the second name (Pete).

// ListUl.firstElementChild.style.border = "1px solid black"

// // Change the font size of the whole body

// let changeFontSize = document.body.style.fontSize = "30px"