
function AddInfo(){
    let nameOfUser = document.getElementById('userName').value
    let userdata={
        nameOfUser,
    }
    fetch('http://localhost:3000/user',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify(userdata)
    })
    .then(res => res.json())
    .then(data => {
      
        document.getElementById('root').innerHTML = `${data.message}`
      })
      .catch(err=>{
          console.log(err);
      })
  
   
}





function getInfo(){
fetch('http://localhost:3000/show') 
.then(res => res.json())
.then(data=>{
    console.log( "data from script", data);
    // showUsers(data)
})

}


// function showUsers(data) {
//     let root = document.getElementById('root');
//     root.innerHTML = "";
//     data.forEach(item =>{
//       let div = document.createElement('div');
//       div.innerText= item.user;
//       root.appendChild(div)
//     })
//   }