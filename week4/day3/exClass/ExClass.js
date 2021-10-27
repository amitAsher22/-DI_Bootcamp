// //Exercise

// let famousPeople = [
//     {
//         name: "Angelina Jolie",
//         job: "actor",
//         age: 80
//     },
//     {
//         name: "Georges Clooney",
//         job: "actor",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         job: "actor",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         job: "singer",
//         age: 16
//     },
//     {
//         name: "Britney Spears",
//         job: "singer",
//         age: 100
//     }
// ]

// 1. Use the map method, to create a new array and push the name of the people which age
// is equal or bigger than 16.
// 2. Use the map method, to create a new array and to push an object in the new array. 
// Each object should contain the name of the actor, and it's job

// let newArray = famousPeople.map(function(name){
//   if(name.age >= 16){
//    return name.name
//   }
  
// })

// console.log(newArray);

// let newObject = famousPeople.map(function(element){
//   return  {name : element.name , job : element.job}

// })

// console.log(newObject);


////////////////////////////////////////////////////////////////// other ex in class

// const studentsFootball = [
// 	{name: 'Rich', score: 33}, 
// 	{name: 'Peter', score: 55}
// ];
// // Use map to push every student into another array. Every student is an object with the key name, score and average. Average should be equal to true if the score is bigger than 50.

// let newArray = studentsFootball.map(function(element){
//     let value = element.score ? true : false
  
//    return {
//        name : element.name,
//        score: element.score,
//        average : value
//    }
// })


// console.log(newArray);

////////////////////////////////////////////////////////////// ex 3 in class 

// Exercise 1: filter only the positive value
// let numbers = [-23,-20,-17, -12, -5, 0, 1, 5, 12, 19, 20];

// ----

// Exercise 2: Suppose you have a list of Star Trek characters, 
// and you want to get just the characters that appeared in 
// Star Trek: The Next Generation. 
// Use filter() to filter the array of characters below 

// const characters = [
//   { name: 'James T. Kirk', series: ['Star Trek'] },
//   { name: 'Spock', series: ['Star Trek', 'Star Trek: The Next Generation'] },
//   { name: 'Jean-Luc Picard', series: ['Star Trek: The Next Generation'] },
//   { name: 'Worf', series: ['Star Trek: The Next Generation', 'Star Trek: Deep Space Nine'] }
// ];


// // let takeOnlyPosition = numbers.filter(function (element) {
// //     if(element > 0) {
// //         return element
// //     }
// // })

// // console.log(takeOnlyPosition);

// let NextGeneration = characters.filter(element => element["series"].includes("Star Trek: The Next Generation"))
    
// console.log(NextGeneration);



////////////////////////////////////// ex gold

// Exercise 1 : Analyzing The Map Method
// Instructions
// Analyze this code, what will be the output ?

// [1, 2, 3].map(num => {
//   if (typeof num === 'number') return num * 2;
//   return ;
// });

//// return 2 , 4, 6