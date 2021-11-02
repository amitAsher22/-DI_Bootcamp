// make a function that takes in a single parameter
// and returns a new promise. using setTimeout,
// after 5000 milliseconds, the promise will either
// resolve or reject. if the input is a string,
// the promise resolves with that same string
// uppercased. if the input is anything but a string
// it rejects with that same input
// use then to repeat the string twice
// use catch to console.log the error
// finally call a function that console.log ("congratulation")

// function takeSingle(text){
//     let someText = new Promise((resolve , reject)=>{
//         setTimeout(()=>{
//         if( typeof text === "string"){
//             resolve(text)
//         }else{
//             Promise.reject ("this is not string")
//         }
//         } ,5000)

//     })

// return someText

// }

// takeSingle(434)
// .then((message)=>{
//     console.log(message.toUpperCase()); 
//  })
// .catch((message)=>{
//  console.log(message); 
 
//  })

////////////////////////////////////////////////////////////////////////// ex class


// Exercise FETCH
// Part I
// Use fetch to fetch one 1 random gif with the category of "sun"
// You append the gif to the page

// Part II
// Instead of having a fixed category of gif.
// Fetch one word from this api :http://random-word-api.herokuapp.com/word?number=1
// Depending on the word, fetch 1 random gif with the word as its category
// Display the word and the gif on the page

// Part III
// If the gif api doesn't find a gif depending on the word
// (because the word can be strange),
// then instead of displaying an empty image, display a gif that says "404 ERROR"


// Part I
// Use fetch to fetch one 1 random gif with the category of "sun"
// You append the gif to the page

// let button = document.getElementById("BTNdata")
// let url = `https://api.giphy.com/v1/gifs/random?tag=sun&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`

// button.addEventListener("click" , getInfo)

// function getInfo(){
//     fetch(url)
//     .then((resolte)=>{
//         if(resolte.status === 200){
//             return resolte.json()
//         }else{
//             throw new Error("not 200 status")
//         }
//     })
//    .then((information)=>{
//        let array = information.data;
//     //    console.log(array);
//        showOnPage(array)

//    })
//    .catch((error)=>{
//     console.log(error);
//    })
// }

// function showOnPage(data){
//     let div = document.getElementById("container")
//     let img = document.createElement("img")
//     let url = data.image_url
//     img.setAttribute("src" , url)
//     div.appendChild(img)

// }

///////////////////////////////////////////////////////////////////////////////// Part II

// Part II

// Instead of having a fixed category of gif.
// Fetch one word from this api :http://random-word-api.herokuapp.com/word?number=1
// Depending on the word, fetch 1 random gif with the word as its category
// Display the word and the gif on the page

// let button = document.getElementById("Button2")

// let url = `https://api.giphy.com/v1/gifs/random?tag=${api}&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`
// let api = `http://random-word-api.herokuapp.com/word?number=1`

// button.addEventListener("click" , takeData)

// function takeData(){
//     fetch(url)
//     .then(()=>{
        
//     })
    
// }




let goodGrades = false;

let endSemester = new Promise(function (resolve, reject) {
    setTimeout(() => {
        if (goodGrades) {
            resolve("I will get a gift");
        } else {
            reject("I won't get the gift");
        }
    }, 5000);
});
endSemester.then((resolt)=>{
    console.log(resolt);

})

endSemester.catch((error)=>{
    console.log( new Error(error));

})

// console.log(endSemester)
