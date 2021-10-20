
  let divs = document.querySelectorAll(".color");
  let colorDiv = document.getElementById("colorDiv")
  let colors = ["red","orange","DarkSeaGreen","GreenYellow","Green","DeepSkyBlue","Crimson","DodgerBlue","LightBlue","MediumBlue","Turquoise","SlateBlue","Purple","Plum","Pink","Silver","Black","White"]
  let boxs = document.querySelectorAll(".box");
  let buttonClear = document.querySelector("button")
  
 
 
  
 



/// show color to right side

for(let colorBG of colors){
   let createDiv = document.createElement("div")
   createDiv.classList.add("color")
   createDiv.style.backgroundColor = colorBG
   colorDiv.appendChild(createDiv)
   createDiv.addEventListener("mousedown" ,function(event){
      let colorOfDiv = event.target.style.backgroundColor;
      for( let box2 of boxs){
        box2.addEventListener("mouseover" , function(event){
            event.target.style.backgroundColor = colorOfDiv;
            buttonClear.addEventListener("click" , function(){
              
                box2.style.backgroundColor = ""
            
           
                
            })

        })

       

    }

 
   })

}

function clearAll (){
    divs.style.backgroundColor = stop()
    colors = stop()
}





