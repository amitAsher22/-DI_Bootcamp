// Exercise Game - The word game

// You need to create 4 functions, each of them return a promises
// 1. The 1st function, receives 2 famous persons name from the user - if the names are not a string -> reject
// 2. The 2nd function, receives a noun - if the noun is less than 3 letters - reject
// 3. The 3rd function, receives a city - if the city doesn't start with an uppercase letter -> reject
// 4. The 4st function, receives a verb (finishing with "ing") - if it doesn't end with "ing" -> reject
// 5. The last function, is an async function - it receives all the above promises, and return a sentence with it
// Ex: "Beyonce is playing football with Barack Obama in Paris"


// function personsName(name1 , name2){
//    return new Promise((resolve ,reject)=>{
//        if(typeof name1 === "string" && typeof name2 === "string"){
//            resolve([name1 ,name2])
//        }else{
//         reject( "this word not string")
//        }
//    })
// }

// personsName("amit" ,"ron")
// .then((answer )=>{
//     console.log(answer)
// })

// .catch((answer)=>{
//     console.log(new Error(answer) );

// })

// function receivesNoun(none){
//     return new Promise((resolve ,reject)=>{
//         if(none.length > 3){
//             resolve(none)
//         }else{
//             reject("none is less 3")
//         }
//     })

// }

// function nameOfcity(city){
//     return new Promise((resolve ,reject)=>{
//         if(city[0] === city[0].toUpperCase()){
//             resolve(city)
//         }else{
//             throw new Error("the city is not correct") 
//         }

//     })

// }


// function very(ver){

// }



///////////////////////////////////////////////////
//  function case3() {
// return new Promise((resolve ,reject)=>{
//     let number = 20
//      setTimeout(()=>{
//          if(number > 30){
//             resolve(`this number ${number} is bigger 30`) 
//          }else{
//             reject(new Error("this is error , reject"))
//          }

//       }, 9000)
// })
     
//   }

 


//  async function getInfo(){
//     let info = await case3()
//     console.log(info);
//   }

//   getInfo()

// fetch('https://jsonplaceholder.typicode.com/users',{
//   method: "POST"
//  }).then(response => {
//     return response.json()
//   })  // convert to json
//  .then(data => {
//     console.log(data)
//   })    // print data to console
//  .catch(err => {
//     console.log('Request Failed', err)
//   }); // Catch errors



