const fs = require('fs');

let data = 'amit is full stack'
let data2 = 'Buy orange juice'

// fs.appendFile('newtext' , data , (err)=>{
//   if(err){
//       console.log(err);
//   }
// } )

// fs.writeFile('./newtext' , data2 , (err)=>{
//    if(err){
//        console.log(err);
//    }
// } )

fs.unlink('./newtext' , (err)=>{
  if(err){
      console.log(err);
  }else{
      console.log('this is delete');
  }
})