
let divDrag = document.getElementById("item");
let allDragZone = document.getElementsByClassName("dropzone")


divDrag.addEventListener("dragstart" , startDrag)

function startDrag(event){
    event.dataTransfer.setData("text/plain", event.target.id);
    divDrag.classList.add("startDragging")
  
}

for(zon of allDragZone){
    zon.addEventListener("dragover" , overDrag)
    divDrag.addEventListener("dragend" , dropEnd)
    

    
  
}

function overDrag(event){
    event.preventDefault();
    event.dataTransfer.setData("text",event.target.id)
    console.log("over");
    // event.target.classList.add("dragOver")
}



function dropEnd(event){
    event.preventDefault()
    
}