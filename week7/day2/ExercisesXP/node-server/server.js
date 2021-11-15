let http = require('http')

let server = http.createServer((req ,res)=>{
    let data = JSON.stringify(user)
   res.end(data)
})

server.listen(8081, ()=>{
    console.log('listening port 8081');
})
const user = {
    firstname: 'John',
    lastname: 'Doe'
}

