// Get the value of each of the inputs in the HTML file when the button is clicked.

function getValueFromInput(){
    let storySpan = document.getElementById("story")
    let inputs = document.querySelectorAll("input")
    let arrayWords = []
   

   for(let input = 0; input < inputs.length; input++){
       let text = inputs[input].value;
      arrayWords.push(text); 
   
    }
    storySpan.innerHTML = arrayWords.join(" ")
    console.log(arrayWords.join(" "));

   }





  
   

