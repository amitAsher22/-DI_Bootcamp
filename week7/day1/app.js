// // const http = require('http');
// let users = require('./script.js')

// users.users().then((res)=>{
//  res.forEach(element => {
//      console.log(element.name);
//  });
// })

let http = require('http');

const server = http.createServer((req ,res)=>{
    console.log('i am lestening.....');
    res.end('i am lestening..')

})

server.listen(3000)