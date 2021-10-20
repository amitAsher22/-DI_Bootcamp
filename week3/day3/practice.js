
let input = document.getElementById("ipt");

input.addEventListener("keydown" , function(event){
    if(event.keyCode <= 90 && event.keyCode >= 65){
        console.log(event.key , "is a string");
    }else{
        console.log(event.key , "is a number") ;
        event.preventDefault()
    }
})