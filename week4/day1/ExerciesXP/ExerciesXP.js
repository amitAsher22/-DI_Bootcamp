// Exercise 1 : Scope



// Instructions
// Analyse the code below, and predict what will be the value of a in all the following functions.
// Write your prediction as comments in a js file.
// #1
// function q1() {
//     var a = 5;
//     if(a > 1) {
//         a = 3;
//     }
//     alert(a);
// }

// //#2
// var a = 0;
// function q2() {
//     a = 5;
// }

// function q22() {
//     alert(a);
// }


//#3
// function q3() {
//     window.a = "hello";
// }


// function q32() {
//     alert(a);
// }

// //#4
// var a = 1;
// function q4() {
//     var a = "test";
//     alert(a);
// }

// //#5
// var a = 2;
// if (true) {
//     var a = 5;
//     alert(a);
// }
// alert(a);

//// #1 - 3  #2 - 0 #3 - error #4 - "test" #5 - 5


//////////////////////////////////////////////////////////////ex 2


// Exercise 2 : Ternary Operator

// Instructions
// Using the code below :

// function winBattle(){
//     return true;
// }

// //  function experiencePoints () {
//     // if (winBattle()) {
//     //     return 10;
//     // } else {
//     //     return 1;
//     // }
// // }

// function experiencePoints () {
//     return winBattle ? 10 : 1
//  }
//    console.log(experiencePoints())
// You need to modify the function called experiencePoints()
// Create a variable called experiencePoints.
// Assign to this variable, a ternary operator (ie. change the conditional block into a ternary operator).


//////////////////////////////////////////////////////////////////////////////////////////  ex 3


// Exercise 3 : Colors

// Instructions
// Using this array :

// let colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// Check if this array includes the color “Violet”.
// Write a JavaScript program that displays the colors in the following order : “1# choice is Blue.” “2# choice is Green.” “3# choice is Red.” ect…
// Hint : Use the array methods taught in class.

////Check if this array includes the color “Violet”.

// let check = colors.includes("Violet")
// console.log(check);

// colors.forEach((name , index)=>{
//    console.log(`${index}# choice is ${name}`);
// })


////////////////////////////////////////////////////////////////////////////// ex 4



// Exercise 4 : Colors #2

// Instructions
// Using these arrays :

// let color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// let ordinal = ["th","st","nd","rd"];
// Write a JavaScript program that displays the colors in the following order : “1st choice is Blue .” “2nd choice is Green.” “3rd choice is Red.” ect…
// Hint : Use the array methods taught in class.

// color.forEach((nameColor , indexColor)=>{
//  ordinal.forEach((nameOrdinal , idexOrdinal)=>{
//     if(indexColor === 0){
//         if(nameOrdinal === "st"){
//             console.log(`${indexColor}${nameOrdinal} choice is ${nameColor}`);
//         }
//     }
//     if(indexColor === 1){
//         if(nameOrdinal === "nd"){
//             console.log(`${indexColor}${nameOrdinal} choice is ${nameColor}`);
//         }
//     }
//     if(indexColor === 2){
//         if(nameOrdinal === "rd"){
//             console.log(`${indexColor}${nameOrdinal} choice is ${nameColor}`);
//         }
//     }
//  })
// })

////////////////////////////////////////////////////////////////////// ex 5

// Exercise 5 : Is It A String ?

// Instructions
// Write a JavaScript function that checks whether the value of an input is a string or not.
// console.log(isString('hello')); 
// //true
// console.log(isString([1, 2, 4, 0]));
// //false


// function isString(details){
//   console.log(ToString(details));
// }

// let array = [1,2,3,4, "hello"]

// isString(array)


/////////////////////////////////////////////////////////////////////////////////// EX 6

// Exercise 6 : Bank Details

// Instructions
// In this exercise, you have to decide which type of variables you have to use:

// Create a global variable called bankAmount which value is the amount of money currently in your account.
// Create a variable that saves the % amount of VAT (In Israel, it’s 17%).
// Create an array with all your monthly expenses - both positive and negative (money made and money spent).
// Example : let details = ["+200", "-100", "+146", "+167", "-2900"]
// Create a program that modifies the expenses (ie. the expenditures, ie. the negative expenses) so that they will include taxes (multiply each expense by the VAT).
// Display your current bankAccount standing at the end of the month.

// let bankAmount = []
// let VAT = 0.17
// let detailsMyAccount = ["+200", "-100", "+146", "+167", "-2900"]

// detailsMyAccount.forEach((name)=>{
//   let NumberOfmonthly = Number(name)
// let numberPlushVet =  NumberOfmonthly * VAT
// let total = NumberOfmonthly + numberPlushVet
//  bankAmount.push(total)

// })
// console.log(bankAmount);
