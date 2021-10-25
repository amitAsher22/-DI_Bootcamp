// Instructions
// Using this array:

const gameInfo = [
 {
   username: "john",
   team: "red",
   score: 5,
   items: ["ball", "book", "pen"]
 },
 {
   username: "becky",
   team: "blue",
   score: 10,
   items: ["tape", "backpack", "pen"]
 },
 {
   username: "susy",
   team: "red",
   score: 55,
   items: ["ball", "eraser", "pen"]
 },
 {
   username: "tyson",
   team: "green",
   score: 1,
   items: ["book", "pen"]
 },
];
// Create an array using forEach that contains all the usernames from the gameInfo array, add an exclamation point (ie. “!”) to the end of every username.
// Create an array using forEach that contains the usernames of all players with a score bigger than 5.
// Tip: Use the ternary operator
// Find and display the total score of the users.
 let arrayUsername = []
 let ArrayBigeer5 = []
 gameInfo.forEach((name)=>{
     let userName = name["username"];
     let UserNamePlushI = userName += "!"
     arrayUsername.push(UserNamePlushI)
    
 })

 function bigger5 (){
    let total = 0
     gameInfo.forEach((number)=>{
        let score =  number["score"]
      console.log(  score > 5 ? `${score}: bigger is 5` : `smaller`);
     

      total +=score
       
        
     })
     console.log(`total is : ${total}`);
    }

    bigger5()

  