// / 1. Create a form with two fields (name, last name) and a submit button.
// 2. When you click the Send button, send the data as JSON.

let form = document.getElementById('form')
let btn = document.getElementById('btn')

btn.addEventListener("click", function(event){
    event.preventDefault()
    let firstName = form.elements.firstName.value
  
    let lastName = form.elements.LastName.value


let obj = {}
obj["name"] = firstName
obj["lastName"] = lastName
console.log(JSON.stringify(obj));
})