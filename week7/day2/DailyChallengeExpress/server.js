let express = require('express');

let app = express()

app.use(express.static(__dirname));

app.get('/aboutMe/:hobby' , (req, res)=>{

    console.log(req.params.hobby);
    res.send(`this is my hobby ${req.params.hobby}`)

})

app.get('/pic' , (req, res)=>{
 
  res.sendFile(__dirname  + '/public/' + 'index.html')

 
})

app.get('/form' , (req, res)=>{
res.sendFile(__dirname + '/public/' + 'twoindex.html');
console.log(req.body)

})


app.listen(3000)