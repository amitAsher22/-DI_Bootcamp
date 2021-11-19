const express = require('express');
const fs = require('fs');
const bp = require('body-parser');
const app = express()

app.use(bp.urlencoded({extended:false}));
app.use(bp.json())

app.use('/', express.static(__dirname))

let users = []
app.post('/user' , (req,res)=>{
 
  
        // users.push(req.body)

    fs.readFile('usersAll' , (err ,data)=>{
    if(err){
        console.log(err);
    }else{
       users.push(data.toString());
    }
    })
    


fs.writeFile('usersAll' , JSON.stringify(users) , (err , data)=>{
 
    if(err){
        console.log(err);
      
    }else{
        console.log('this is data from server fs write' , req.body);
        users.push(req.body)
    }
})
res.send({message : 'ok'})

})


app.get('/show' , (req,res)=>{
    let usersFromShow = []

    try {
        let f = fs.readFile('usersAll')
        usersFromShow = JSON.parse(f)
    }
            
    catch (error) {
        res.send(error)
    }
    res.send(usersFromShow)

})



app.listen(3000)