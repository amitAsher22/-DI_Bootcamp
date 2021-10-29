let MainDivCards = document.getElementById("groupCard")
let inputNames = document.getElementById("inputNames")




const robots = [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
      image: 'https://robohash.org/1?200x200'
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv',
      image: 'https://robohash.org/2?200x200'
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      username: 'Samantha',
      email: 'Nathan@yesenia.net',
      image: 'https://robohash.org/3?200x200'
    },
    {
      id: 4,
      name: 'Patricia Lebsack',
      username: 'Karianne',
      email: 'Julianne.OConner@kory.org',
      image: 'https://robohash.org/4?200x200'
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      username: 'Kamren',
      email: 'Lucio_Hettinger@annie.ca',
      image: 'https://robohash.org/5?200x200'
    },
    {
      id: 6,
      name: 'Mrs. Dennis Schulist',
      username: 'Leopoldo_Corkery',
      email: 'Karley_Dach@jasper.info',
      image: 'https://robohash.org/6?200x200'
    },
    {
      id: 7,
      name: 'Kurtis Weissnat',
      username: 'Elwyn.Skiles',
      email: 'Telly.Hoeger@billy.biz',
      image: 'https://robohash.org/7?200x200'
    },
    {
      id: 8,
      name: 'Nicholas Runolfsdottir V',
      username: 'Maxime_Nienow',
      email: 'Sherwood@rosamond.me',
      image: 'https://robohash.org/8?200x200'
    },
    {
      id: 9,
      name: 'Glenna Reichert',
      username: 'Delphine',
      email: 'Chaim_McDermott@dana.io',
      image:'https://robohash.org/9?200x200'
    },
    {
      id: 10,
      name: 'Clementina DuBuque',
      username: 'Moriah.Stanton',
      email: 'Rey.Padberg@karina.biz',
      image:'https://robohash.org/10?200x200'
    }
    ];

 

  

function getRobot(array){
  for(let robot of array){
    let name = robot.name;
    let img = robot.image;
    let email = robot.email;
    let carDiv = document.createElement("div")
    let DivSecond = document.createElement("div")
    let imgDiv = document.createElement("img")
    imgDiv.setAttribute("src" , img)
    let h1 = document.createElement("h1")
    h1.innerHTML = name
    let h3 = document.createElement("h3")
    h3.innerHTML = email
    carDiv.classList.add("card")
    imgDiv.classList.add("imageRobot")
    DivSecond.classList.add("divSecond")
    h1.classList.add("nameRobot")
    h3.classList.add("emailRobot")
     MainDivCards.appendChild(carDiv)
   
    carDiv.appendChild(imgDiv)
    carDiv.appendChild(DivSecond)
    carDiv.appendChild(h1)
    carDiv.appendChild(h3)
  }


}


  inputNames.addEventListener("keyup",function(){
    let inputWords = inputNames.value;
    MainDivCards.innerHTML = "";
    let searchResult = robots.filter((names , index , arr)=>{
       if(names.name.toLowerCase().includes(inputWords)){
         return true
       }else{
         return false
       }
 
     
    })

  // console.log(searchResult);
    getRobot(searchResult)
    
  
  })













