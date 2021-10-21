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
button.addEventListener("click" , checkInput)


function addToList(){
  let li = document.createElement("li");
  let div = document.createElement("div")
  let checkbox = document.createElement("INPUT")
  let buttonX = document.createElement("button")
  let btnText = document.createTextNode('X')
  let valueInput = document.createTextNode(input.value)
  


  checkbox.setAttribute("type" , "checkbox")


  checkbox.addEventListener("change", check)
  function check (){
    if(checkbox.checked === true){
        li.style.textDecorationLine = "line-through"

    } else if (checkbox.checked === false) {
      li.style.textDecorationLine = "none"
    }
}
  div.setAttribute("class" , "BTNdiv")
 

   li.style.listStyle = "none"
   li.style.backgroundColor = "white"
   li.style.textAlign = "left"
   li.style.paddingLeft = "10px"
   li.style.borderBottom = "1px solid black"
   div.style.backgroundColor = "white"
   
   

   ul.appendChild(li)
   li.appendChild(div)
   li.appendChild(valueInput)
   buttonX.appendChild(btnText)
  div.appendChild(buttonX)
  div.appendChild(checkbox)
 
    input.value = ""
    buttonX.addEventListener("click" , function(event){
      console.log(li.remove());
    })
}

function checkInput (){
  if(input.value === ""){
      alert('your task is empty , full the input')
      return
  } else {
      addToList()
  }
}


