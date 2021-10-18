//1. Create a function called getBold_items() that takes no parameter. 
// This function should collect all the bold items inside the paragraph.



function getBold_items(){
    let strong = document.querySelectorAll("strong")
    let arrayStrong = []
    for(let item of strong){
       arrayStrong.push(item)
    }
   
}


function highlight(){
    let strong = document.querySelectorAll("strong")
    for(let item of strong){
        item.style.color = "blue"
    }
}

function return_normal(){
    let strong = document.querySelectorAll("strong");
    for(let item of strong){
        item.style.color = "black"
    }
}



//4. Call the function highlight() onmouseover (ie. when the mouse pointer is moved onto the paragraph), and the function return_normal() onmouseout (ie. when the mouse pointer is moved out of the paragraph)
// . Look at this example
  




  








// getBold_items()
// highlight()
// return_normal()