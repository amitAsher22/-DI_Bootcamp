// Instructions
// Implement a simple version of Promise.all.
// This function should accept an array of promises and return an array of resolved values.
// If any of the promises are rejected, the function should catch them.

// Example


// // expected output: Array [3, 42, "foo"]

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
setTimeout(resolve, 100, 'foo');
});

let getData = function([promise1 , promise2 , promise3 ]){

    Promise.all([promise1 , promise2 ,promise3 ]).then((res)=>console.log(res)).catch(console.log("error"))

}

getData([promise1,promise2 ,promise3])