let title = document.getElementById("title");
let input = document.getElementById("inputt") ;
let button = document.getElementById("Btn");
let lisrDiv = document.getElementById("list")
let ul = document.querySelector("ul")


///// design

title.style.padding = "10px"
title.style.color = "white"

input.style.backgroundColor = "white"
input.style.padding = "10px"
input.style.border = "none"
input.style.textAlign= "left"
input.style.fontSize= "20px"

button.style.backgroundColor = "white"
button.style.padding = "10px"
button.style.border = "none"
button.style.cursor = "pointer"
button.style.fontSize= "20px"

lisrDiv.style.border = "1px solid black"
lisrDiv.style.width = "25vw"
lisrDiv.style.height = "50vh"
lisrDiv.style.marginTop = "20px"
lisrDiv.style.backgroundColor = "white"

ul.style.fontSize = "30px"




//// action
button.addEventListener("click" , addToList)


function addToList(){
  let li = document.createElement("li");
  let valueInput = input.value

  li.textContent = valueInput
 
  li.style.listStyle = "none"
  li.style.backgroundColor = "white"
   li.style.textAlign = "left"
  li.style.paddingLeft = "10px"
  
    ul.appendChild(li)
    input.value = " "
    
}
