const express = require('express');
let path = require('path');

const app = express();

app.use('/', express.static(path.join(__dirname, '/public')))

app.get('/' , (req ,res)=>{
    res.sendFile(path.join(__dirname  ,'/index.html' ));
 
})

app.get('/js/exercisesJsall.js' , (req ,res)=>{
    res.sendFile(path.join(__dirname  ,'/js/exercisesJsall.js' ));
 
})


app.listen(3000 , (req, res)=>{
    console.log('listening for 3000');
})