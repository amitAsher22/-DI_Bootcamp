///////////////////////////////////////////////////////////// Exercise 1 : Analyzing

// Analyze these pieces of code before executing them. What will be the outputs ?
// ------1------
// const fruits = ["apple", "orange"];
// const vegetables = ["carrot", "potato"];

// const result = ['bread', ...vegetables, 'chicken', ...fruits];

// console.log(result); //////// *Answer* ['bread',["carrot", "potato"], 'chicken', ["apple", "orange"]]



// ------2------
// const country = "USA";

// console.log([...country]);//////// *Answer* ['U' , 'S' , ''A]



// ------Bonus------
// let newArray = [...[,,]];

// console.log(newArray); //////// *Answer*  [undefind , undefind]



////////////////////////////////////////////////////////////////// Exercise 2 : Employees

// Instructions
// Using this array:

// let users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
//              { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
//              { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
//              { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
//              { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
//              { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
//              { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];

// // Using the map() method, say hello to the users using only their firstname (ie. “Hello Bradley”, “Hello Chloe” ect…)
// // Using the filter() method, congratulate only the Full Stack Resident

// /////// Using the map() method, say hello to the users using only their firstname (ie. “Hello Bradley”, “Hello Chloe” ect…)

// let sayHelloUser = users.map(name => {
//     return ` hello ${name.firstName}`;
// })

// console.log(sayHelloUser);

// // Using the filter() method, congratulate only the Full Stack Resident

// let congratulateonlytheFullStackResidents = users.filter(element => {
//     return element.role === "Full Stack Resident"
// })


// console.log(congratulateonlytheFullStackResidents);


/////////////////////////////////////////////////////////////////////////// Exercise 3 : Star Wars

// Exercise 3 : Star Wars

// Instructions
// Using this array let epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];
// 1. Use the reduce() method to combine all of these into a single string.


// let epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

// let combineToSingleString = epic.reduce((element , index) => {
//   return [...element , index].join('')
// });
// console.log(  combineToSingleString);







///////////////////////////////////////////////////////////////////////////////// Exercise 4 : Employees #2

// Instructions
// Using this object:

// let student = [{name: "Ray", course: "Computer Science", isPassed: true}, 
//                {name: "Liam", course: "Computer Science", isPassed: false}, 
//                {name: "Jenner", course: "Information Technology", isPassed: true}, 
//                {name: "Marco", course: "Robotics", isPassed: true}, 
//                {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
//                {name: "Jamie", course: "Big Data", isPassed: false}];

// // Use the filter() method to congratulate the students that passed the course.

// let x = student.filter(function(element){
// return "Congratulations you passed the course", element.isPassed
// })
// console.log(x);

// Bonus : Chain the filter method with a map method, to congratulate the students with their name and course name (ie. “Good job Jenner, you passed the course in Information Technology”, “Good Job Marco you passed the course in Robotics” ect…)

// let studentsPassWithMap = student.map(element => {
//   if(element.isPassed === true){
//     return `Good Job ${element.name} you passed the course in ${element.course}`
//   }else {
//     return null
//   }
// })


// // console.log(studentsPassWithMap);
// let studentsPassWithFilter = student.filter(people => people.isPassed).map(element => `Good Job ${element.name} you passed the course in ${element.course}`)

// // .map(element => `Good Job ${element.name} you passed the course in ${element.course}`)

// console.log(studentsPassWithFilter );
// // console.log(studentsPass);




















//////////////////////////////////////////////////////










// Exercise 3 : Star Wars
// Instructions
// Using this array
//  let epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

// // 1. Use the reduce() method to combine all of these into a single string

// let combineAllString = epic.reduce((eccu , element)=> eccu + " " + element)
// console.log(combineAllString);
  
  

/////////////////////////////////////////////////////////

// //Exercise
// 1. Turn an array of voter objects into a count of how many people voted
// 2. Do the exercise using reduce only
// 3. Then do it by chaining filter, map and reduce

// let voters = [
//     {name:'Bob' , age: 30, voted: true},
//     {name:'Jake' , age: 32, voted: true},
//     {name:'Kate' , age: 25, voted: false},
//     {name:'Sam' , age: 20, voted: false},
//     {name:'Bob' , age: 30, voted: true},
// ];

// let voterPeople = voters.reduce((accumulator,element)=> {
//   if(element.voted === true){
//     return ++accumulator
//   }else{
//     return accumulator
//   }
// }, 0)

// console.log("the number is :" , voterPeople);


///////// sulotion

// let x = voters.filter((element)=>{
//  if( element.voted === true){
//    return element

//   }
// })

////////////////////////////////////////////////////////////////////////// class !!!!!!!!!!!!

// function getDetails({name , house , goodstudent}) {
// 	console.log("name :" , name , "house : " , house , "goodstudent" , goodstudent);
// }

// getDetails({name: 'Harry Potter',house: 'Gryfindor',goodstudent : false})

/////////////////////////////////////////////////////////////

// function getDetails({name , house , friend :{friendName ,age}} ) {
//   console.log("name" , name , "house" , house,  "friendName" , friendName , "age" ,age);

// }
// getDetails({name: 'Hermione Granger', house: 'Gryfindor', friend :  {friendName : 'Harry Potter', age : 20}})

//////////////////////////////////////////////////////////////////////

// Exercise Object Destructuring

// 1. Write a function called displayName() that takes an object as an
// argument and prints the person's first and last name.
// Use object destructuring in the function argument.
// And also, use template strings when printing the first and last name.
// Use the object below:
// 2. Change the displayName() to print the person's first and last name
// the houses location and the value of those houses

// const person = {
//     first: 'Elon',
//     last: 'Musk',
//     housesLocation : ["new york", "paris"],
//     twitter: '@elonmusk',
//     company: 'Space X',
//     houses : {
//       amount: 2,
//       value : "5Million"
//     }
// }


const student = {
  name: 'John Doe',
  age: 16,
  scores: {
      maths: 74,
      english: 63,
      science: 85
  }
};

function displaySummary({name, scores: { maths = 0, english = 0, science = 0 }}) {
  console.log('Hello, ' + name);
  console.log('Your Maths score is ' + maths);
  console.log('Your English score is ' + english);
  console.log('Your Science score is ' + science);
}

displaySummary(student);
