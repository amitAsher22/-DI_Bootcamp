let exp = require('express');




let app = exp()

app.use('/form', exp.static(__dirname + '/public'  ));


app.get('/aboutMe/:hobby' , (req, res)=>{

    console.log(req.params.hobby);
    res.send(`this is my hobby ${req.params.hobby}`)

})

app.get('/pic' , (req, res)=>{

  res.set('Content-Type', 'node.png');
    res.sendFile(__dirname + "/public/node.png");
  

})


app.get('/formData' , (req,res)=>{
  
  let email = req.query.email;
  let message = req.query.message;
res.send(`${email} ${message}`)
 
})

app.listen(3000 , ()=>{
  console.log('listening port 3000');
})






