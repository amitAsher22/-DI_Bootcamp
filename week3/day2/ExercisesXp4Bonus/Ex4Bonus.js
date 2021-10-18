
// Add as many events listeners as possible to one element on your webpage. 
// Each listener should do a different thing, for instance- change position x, change position y, change color, change the font size… and more.



let myForm = document.getElementById("MyForm")
let input = document.getElementById("radius")
let p = document.querySelector("p")


//// blur

// input.addEventListener("blur" , function(event){
//     alert("Input field lost focus.");
// })


///dblclick

// p.addEventListener("dblclick" , function(){
//    let p = document.createElement("p")
//    p.innerHTML = "this is duble click - create paragraph"
//    myForm.appendChild(p)
// })

///input

// input.addEventListener("input" , function(event){
//    let valueFromInput = event.target.value;
//    let p = document.createElement("div")
//    p.innerText = valueFromInput
//    myForm.appendChild(p)

// })