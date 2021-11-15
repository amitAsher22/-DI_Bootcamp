const express = require('express');

// Exercise 1 : Express & JSON

// let app = express();

// app.get('/' , (req,res)=>{
//     const user = {
//         firstname: 'John',
//         lastname: 'Doe'
//     }
//  res.json(user)
// })





// app.listen(3000 , (req,res)=>{
//     console.log('listening port 3000');
// })

////////////////////////////////////////Exercise 2 : Express & Parameters

let app = express()


app.get('/:id' , (req,res)=>{
 
    let id = req.params
    console.log(id);
    res.send(id)


})

app.listen(3000 , ()=>{
    console.log('listening port 3000');
})
