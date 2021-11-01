
let search = document.getElementById("search");
let buttonGo = document.getElementById("BTNsearch");

let keyGift = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My"
let urlGift = `api.giphy.com/v1/gifs/api_key=${keyGift}`


buttonGo.addEventListener("click" , function(event){
    event.preventDefault()
    let valueFromInput = Number(search.value)
    // console.log(valueFromInput);
  

let xhr = new XMLHttpRequest();

xhr.open('GET', `http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=${keyGift}&limit=${valueFromInput}`);
xhr.send();
xhr.onload = function() {
    if (xhr.status != 200) {
        console.log("error status")
       
    } else {
        console.log("Finished Loading")
        showDetails(xhr.response)
       
    }
};

})

function showDetails(array){
  let NewArray = JSON.parse(array).data;  
  let div = document.getElementById("gifts")
  NewArray.forEach(element => {
    let images = element.images;
    let ImagesUrl = images.preview.mp4;
    let video = document.createElement("video")
    let source = document.createElement("source")
    video.style.width="100px"
    video.style.height="100px"
    source.src = ImagesUrl
    video.appendChild(source)
    div.appendChild(video)
   
  });

}






