
function sendData(){
    let user = document.getElementById('user').value;
    let usersData ={
        user,
    }
    fetch('http://localhost:3000/users', {
        method:'POST',
        headers:{"Content-type": "application/json;charset=UTF-8"},
        body: JSON.stringify(usersData)
    })
    .then(res=>res.json())
    .then(data=>{
        console.log("data from script" , data);
        document.getElementById('root').innerHTML = `${data.message}`
    })
}


function getData() {
  fetch('http://localhost:3000/show')
  .then(res => res.json())
  .then(data => {
    showUsers(data);
  })
}

function showUsers(data) {
  let root = document.getElementById('root');
  root.innerHTML = "";
  data.forEach(item =>{
    let div = document.createElement('div');
    div.innerText= item.user;
    root.appendChild(div)
  })
  }
  