


const {getBook , getOnlyAlic , insertData ,updateAlic , deleteAlice} = require('./db');

getBook()
.then(data =>{
    console.log(data);
})

getOnlyAlic()
.then(data=>{
    // console.log(JSON.stringify(data));
})

insertData()
.then(data=>{
    // console.log(data);
})

updateAlic()
.then(data=>{
    // console.log(data);
})

deleteAlice()
.then(data =>{
    // console.log(data);
})