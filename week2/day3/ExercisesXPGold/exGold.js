// Exercise 1 : Building Management

// Instructions
// let building = {
//     numberLevels : 4,
//     numberOfAptByLevel : {
//         "1": 3,
//         "2": 4,
//         "3": 9,
//         "4": 2,
//     },
//     nameOfTenants : ["Sarah", "Dan", "David"],
//     numberOfRoomsAndRent:  {
//         "Sarah": [3, 990],
//         "Dan":  [4, 1000],
//         "David": [1, 500],
//     },
// }
// Console.log the number of levels in the building.
// Console.log how many apartments are on levels 1 and 3.
// Console.log the name of the second tenant and the number of rooms he has in his apartment.
// Check if the sum of Sarah and David’s rent is bigger than Dan’s rent.
// If it is than increase Dan’s rent.

 

// let building = {
//         numberLevels : 4,
//         numberOfAptByLevel : {
//             "1": 3,
//             "2": 4,
//             "3": 9,
//             "4": 2,
//         },
//         nameOfTenants : ["Sarah", "Dan", "David"],
//         numberOfRoomsAndRent:  {
//             "Sarah": [3, 990],
//             "Dan":  [4, 1000],
//             "David": [1, 500],
//         },
//     }
    // Console.log the number of levels in the building.
    // let numberLevels = building["numberLevels"]
    
    // Console.log how many apartments are on levels 1 and 3.

//    let level1 =  building["numberOfAptByLevel"]["1"]; 
//    let level3 =  building["numberOfAptByLevel"]["3"]; 
//    console.log(`apartment level 1 : ${level1}`);
//    console.log(`apartment level 3 : ${level3}`);

//   3. Console.log the name of the second tenant and the number of rooms he has in his apartment.

//   let numberOfDan = building["numberOfRoomsAndRent"]["Dan"][0];  
//   let nameOfDan = building["nameOfTenants"][1];
//   console.log(`my name is : ${nameOfDan} and i have ${numberOfDan} apartment`);


//4. Check if the sum of Sarah and David’s rent is bigger than Dan’s rent.
// If it is than increase Dan’s rent.

// let SumSarahAndDavid = building["numberOfRoomsAndRent"]["Sarah"][1] + building["numberOfRoomsAndRent"]["David"][1]
// let DanOfRent =  building["numberOfRoomsAndRent"]["Dan"][1]

// if(SumSarahAndDavid > DanOfRent){
//     console.log(`yes , the sum of sara and david is ${SumSarahAndDavid} bigger then dan ${DanOfRent}`);
// }


////////////////////////////////////////////////////////////////// ex 2


// Exercise 2 : Divisible By Three

// Instructions
// let numbers = [123, 8409, 100053, 333333333, 7]
// Loop through the array above and determine whether or not each number is divisible by three.
// Each time you loop console.log “true” or “false”.

// let numbers = [123, 8409, 100053, 333333333, 7];

// for(num of numbers){
//    console.log(`this number is ${num} divider by tree + ${num % 3 === 0}!`);
// }

///////////////////////////////////////////////////////////////////////////////// ex 3

// Exercise 3 : Playing With Numbers

// Instructions
// let age = [20,5,12,43,98,55];
// Requirements : Don’t use built-in Javascript methods to answer the following questions. You have to create the logic by yourself. Use simple for and while loops.
// 1. Console.log the sum of all the numbers in the age array.
// 2. Console.log the largest age in the array.

// let age = [20,5,12,43,98,55];
// let total = 0

// for(let i = 0 ; i < age.length; i++){
//     let oneNumber = age[i]
//     total += oneNumber
// }

// console.log(total);