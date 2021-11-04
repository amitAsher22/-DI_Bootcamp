// Exercise 1: Conversion

// Instructions
// Convert the below promise into async await:

// fetch("https://swapi.dev/api/starships/9/")
//     .then(response => response.json())
//     .then(console.log);

// let url = "https://swapi.dev/api/starships/9/"

// async function convertFromPromise(url){
//     let response = await fetch(url)
//     let data = await response.json()
//     console.log(data);
// }

// convertFromPromise(url)


////////////////////////////////////////////////////////////// Exercise 2: Analyze

// Instructions
function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    let result = await resolveAfter2Seconds();
    console.log(result);
}

asyncCall();
// Analyze the code provided above what will be the outcome?

///////////////////////// answer : 
// 1.  call funcrion asyncCall()
// 2.   print to console.log('calling')
// 3.  go to function that is promise something , now the result waiting 2 milisecond
// after waiting the time print to console.log('resolved')

//// print : 
// 1. 'calling'
// 2 'resolved'
