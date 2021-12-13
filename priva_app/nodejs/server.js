const express = require('express');
const DB = require('./db/knex')

const app = express()

app.get('/owners' , (req, res)=>{
    return DB.getOwners()
    .then(owner => res.json(owner))
    .catch(e => console.log(e))

})


app.listen(8080 , ()=>{
    console.log('listen to port 8080');
})