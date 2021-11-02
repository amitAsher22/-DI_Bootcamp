
// Exercise 1 : Comparison
// Instructions
// Create a function called compareToTen that takes a number as an argument.
// The function should return a Promise that tests if the value of the given argument is less or greater than 10.
// Test:

// compareToTen(15)
//   .then(result => console.log(result))
//   .catch(error => console.log(error))

// compareToTen(8)
//   .then(result => console.log(result))
//   .catch(error => console.log(error))


// function compareToTen(number){

//     let resolve = new Promise((resolve , reject)=>{
//         if(number >= 10){
//             resolve(`${number} greater than 10 , you success`)
//         }if(number <= 10){
//             resolve(`${number} is less then 10 , error`)
//         }else{
//             reject(`Not all items in the array are strings!`)
//         }
//     })

//     resolve.then((answer)=>{
//         console.log(answer);

//     })

//     resolve.catch((error)=>{
//         console.log(new Error(error));

//     })

// }

// compareToTen("hello")
// compareToTen(13)
// compareToTen(3)



/////////////////////////////////////////////////////////////////////////// Exercise 2 : Promises


// Exercise 2 : Promises

// Instructions
// Create a promise that resolves itself in 4 seconds and returns a “success” string.
// Read about Promise.resolve() and Promise.reject().
// How can you make your promise from part 1 shorter using Promise.resolve() and console.log “success”?
// Add code to catch errors and console.log ‘Ooops something went wrong’.




// (function() {
//     let condition = true
// let PromissesString = new Promise((resolve , reject)=>{
//     setTimeout(() => {
       
//         if(condition){
//           resolve("success")
//         }else{
//             reject("Ooops something went wrong")
//         }
//     }, 4000);
// }) 

// PromissesString.then((sucssesOutcome)=>{
//     console.log(sucssesOutcome);
// })

// PromissesString.catch((error)=>{
//     console.log(new Error(error));

// })



// })()
// let condition = true
//  Promise.resolve(
//    console.log("success")
// )

// Promise.reject(
//     console.log("Ooops something went wrong")
//  )

// console.log("waiting to resolve...");

/////////////////////////////////////////////////////////////////////////// Exercise 3 : Resolve & Reject

// Exercise 3 : Resolve & Reject

// Instructions
// Use Promise.resolve(value) to create a promise that will resolve itself with a value of 3.
// Use Promise.reject(error) to create a promise that will reject itself with the string “Boo!”



// takeNumber(5)

// function takeNumber(number){
//     if(number === 3){
//          Promise.resolve(
//             console.log(`the number is : ${number}`)
//             )  
//         }else{
//             Promise.reject(
//                 console.log(new Error("Boo!"))
//             )
//         }
            

// }
