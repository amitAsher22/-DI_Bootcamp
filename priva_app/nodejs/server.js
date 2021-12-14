const express = require('express');
const DB = require('./db/knex')
const cors = require('cors')


const app = express()
app.use(express.json())
app.use(cors())

app.get('/owners' , (req, res)=>{
    res.send("hello")
    return DB.getOwners()
    .then(owner => res.send(owner))
    .catch(e => console.log(e))

})

app.post('/setOwners' , (req,res)=>{
    console.log( "message",req.body);
      DB.setOwners(req.body)
      .then(data => res.json(data))
      .catch(err => res.json({msa : err}))
})

 

app.listen(8080 , ()=>{
    console.log('listen to port 8080');
})