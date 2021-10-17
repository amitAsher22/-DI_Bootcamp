


let names = ["John", "Lola", "Tom"];
let container = document.getElementById("container")
function addNames(names){
   for(let item of names){
     let p = document.createElement("P");
     p.style.backgroundColor = 'yellow'
     p.innerText = item;
     container.appendChild(p)

   }

}

addNames(names)

