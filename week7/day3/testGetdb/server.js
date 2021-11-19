const express = require('express');
const bp = require('body-parser');
const fs = require('fs');

const app = express();


app.use(bp.urlencoded({extended:false}));
app.use(bp.json());

app.use('/',express.static(__dirname+'/public'));



app.post('/users',(req,res)=>{
  console.log(req.body);
  let users = [];
  try{
    const f = fs.readFileSync('./users');
    users = JSON.parse(f)
  }
  catch(e){
    // console.log(e);
  }
  finally{
    users.push(req.body)
  }

  fs.writeFile('./users', JSON.stringify(users), err=>{
    if(err){
      console.log('error writing to file');
    }
  })

  res.send({message:'OK'})
})

app.get('/show', (req,res)=>{
  let users = [];
  try{
    const f = fs.readFileSync('./users');
    users = JSON.parse(f);
  }
  catch(e){
    res.send('data not found')
  }
  res.send(users)
})


app.listen(3000 , (req , res)=>{
  console.log(`listening 3000 port`);
})