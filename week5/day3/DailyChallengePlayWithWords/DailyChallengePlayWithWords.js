// 1rst Daily Challenge

// Create two functions that use promises which can be chained.
// The first function called makeAllCaps(), should take an array of words as an argument and capitalize them.
// The second function called sortWords(), should sort the words in alphabetical order.
// If the array contains anything but strings, it should throw an error.
// Test:

// makeAllCaps(arrayOfWords)
//       .then(sortWords)
//       .then((result) => console.log(result))
//       .catch(error => console.log(error))

// makeAllCaps(complicatedArray)
//       .then(sortWords)
//       .then((result) => console.log(result))
//       .catch(error => console.log(error))

// let arrayOfNames = ["dudi", "amit", "nike", "rotem", "amir"];

// function makeAllCaps(arrayOfWords) {
//     return new Promise((resolve, reject) => {
//         let newArrayWords = []
//         for (let item of arrayOfWords) {
//             if (typeof item !== "string") {
//                 reject(`this is not string: ${item}`)
//                 return // stop loop
//             } else {
//                 newArrayWords.push(item.toUpperCase())
//             }
//         }
//         resolve(newArrayWords) //when loop finished
//     })
// }

// function sortWords(listOfWords) {
//     return new Promise((resolve) => {
//         resolve(listOfWords.sort())
//     })
// }

// makeAllCaps(arrayOfNames)
//     .then(answer => sortWords(answer))
//     .then(res => console.log(res))
//     .catch(err => console.log(err))



///////////////////////////////////////////////////////////////// 2nd Daily Challenge

// let morse = `{
//     "0": "-----",
//     "1": ".----",
//     "2": "..---",
//     "3": "...--",
//     "4": "....-",
//     "5": ".....",
//     "6": "-....",
//     "7": "--...",
//     "8": "---..",
//     "9": "----.",
//     "a": ".-",
//     "b": "-...",
//     "c": "-.-.",
//     "d": "-..",
//     "e": ".",
//     "f": "..-.",
//     "g": "--.",
//     "h": "....",
//     "i": "..",
//     "j": ".---",
//     "k": "-.-",
//     "l": ".-..",
//     "m": "--",
//     "n": "-.",
//     "o": "---",
//     "p": ".--.",
//     "q": "--.-",
//     "r": ".-.",
//     "s": "...",
//     "t": "-",
//     "u": "..-",
//     "v": "...-",
//     "w": ".--",
//     "x": "-..-",
//     "y": "-.--",
//     "z": "--..",
//     ".": ".-.-.-",
//     ",": "--..--",
//     "?": "..--..",
//     "!": "-.-.--",
//     "-": "-....-",
//     "/": "-..-.",
//     "@": ".--.-.",
//     "(": "-.--.",
//     ")": "-.--.-"
//   }`
//   Create three functions that use promises which can be chained.
  
//   Call the first function toJs():
//   this function should take the morse json object provided above, and convert it to a morse javascript object.
//   if the morse javascript object is empty, throw an error (use reject)
//   else return morse javascript object (use resolve)
  
//   The second function called toMorse(morseJS), takes one argument: the new morse javascript object.
//   This function should asks the user for a word or a sentence
//   if the user entered a character that doesn’t exist in the new morse javascript object, throw an error. (use reject)
//   else return an array with it’s morse translation of the user’s word.
  
//   The last function called joinWords(), should join the morse translation by using line break.


