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

let arrayOfNames = ["dudi", "amit", "nike", "rotem", "amir"];

function makeAllCaps(arrayOfWords) {
    return new Promise((resolve, reject) => {
        let newArrayWords = []
        for (let item of arrayOfWords) {
            if (typeof item !== "string") {
                reject(`this is not string: ${item}`)
                return // stop loop
            } else {
                newArrayWords.push(item.toUpperCase())
            }
        }
        resolve(newArrayWords) //when loop finished
    })
}

function sortWords(listOfWords) {
    return new Promise((resolve) => {
        resolve(listOfWords.sort())
    })
}

makeAllCaps(arrayOfNames)
    .then(answer => sortWords(answer))
    .then(res => console.log(res))
    .catch(err => console.log(err))