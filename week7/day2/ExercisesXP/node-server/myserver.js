var http = require('http');
let server = http.createServer((req ,res)=>{
  res.end(`<div><h1>this is my first response</h1><h2>this is my second response</h2> <p>this is my third response</p></div>`)
})


server.listen(3000, (req, res)=>{
    console.log('listening port 3000');
})