
let url = "https://swapi.dev/api/people";
let button = document.querySelector(".btnSomeOne");
let container = document.querySelector(".container")


// async function getApi(url){
//   let response = await fetch(url);
//   let data = await response.json();
//  let arrayPeople = await data.results

// }

// getApi(url)


button.addEventListener("click" , getDataFromUrl)

async function getDataFromUrl(){
    let randomNum = Math.floor((Math.random() * 82) + 1);
    let response = await fetch("https://swapi.dev/api/people/" + randomNum);
    let data = await response.json()
    
    randomData(data)
   

}

async function randomData(data){
    console.log(data);
    let name = data.name
    let Birthyear = data.birth_year
    let Height = data.height
    let Gender = data.gender
    let Homeworld = data.homeworld
    let sesponse = await fetch(Homeworld) ;
    let answer = await sesponse.json()
   let nameFromHomeWorld =  answer.name;
       

    /// data 
    // catch dom
    let h1 = document.querySelector(".styleName")
    let pbirthyear = document.querySelector(".Pbirthyear")
    let pHeight = document.querySelector(".pHeight")
    let pGender = document.querySelector(".PGender")
    let Phomeworld = document.querySelector(".Phomeworld")
  
 ///// TEXT
    h1.textContent = name
    pbirthyear.textContent = `Birthyear : ${Birthyear}`
    pHeight.textContent = `Height : ${Height}`
    pGender.textContent = `Gender : ${Gender}`
    Phomeworld.textContent = `homeworld : ${nameFromHomeWorld}`


    
    
      
    //style
    h1.classList.add("styleName")
    pbirthyear.classList.add("styleP")
    pHeight.classList.add("styleP")
    pGender.classList.add("styleP")
    Phomeworld.classList.add("styleP")


}