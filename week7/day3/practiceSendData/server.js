const express = require('express');
const fs = require('fs');
const bp = require('body-parser');
const app = express()

app.use(bp.urlencoded({extended:false}));
app.use(bp.json())

app.use('/', express.static(__dirname))


app.post('/user' , (req,res)=>{

        let users = [];
        try{
          const f = fs.readFileSync('usersAll');
          users = JSON.parse(f)
        }
        catch(e){
          // console.log(e);
        }
        finally{
          users.push(req.body)
        }
   
    


fs.writeFile('usersAll' , JSON.stringify(users) , (err , data)=>{
    if(err){
        console.log(err);
      
    }
})
res.send({message : 'ok'})

})










app.get('/show' , (req,res)=>{
    let usersFromShow = []

    try {
        let f = fs.readFileSync('usersAll')
        usersFromShow = JSON.parse(f)
    }
            
    catch (error) {
        res.send(error)
    }
 
    res.send(usersFromShow)

})



app.listen(3000)