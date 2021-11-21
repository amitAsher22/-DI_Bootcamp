const fs = require('fs');

fs.readFile('./RightLeft.txt' ,  'utf8' , (err ,data)=>{
  if (err) {
    console.log(err)
} else {
    let arr = data.split('')
    let steps = 0;
    arr.filter(x => {
        if (x === '>') {
            steps++
        } else if (x === '<') {
            steps--
        }
    }).length;
    console.log(`Total Steps - ${steps}`)
}

 
})