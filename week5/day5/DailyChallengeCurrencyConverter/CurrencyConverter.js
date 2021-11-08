
let url = "http://api.currencylayer.com/list?access_key=6b543e9294a71d26a6606f5449cf71a6&format=1"
let selectA = document.getElementById("selectA");
let Form = document.getElementById("Form");
let createSelect = document.getElementById("createSelect");
let button = document.getElementById("BTNconvert");
let valueInput = document.getElementById("numberInput")
let amountText = document.getElementById("amountText")








async function getData() {
    let response = await fetch(url)
    let data = await response.json();
    return data.currencies;
}

async function setData() {
    let dataAll = await getData()
    let select = document.createElement("select");
    for (let [key, value] of Object.entries(dataAll)) {
        let option = document.createElement("option")
        let text = document.createTextNode(`${key} - ${value}`)
        option.setAttribute("value", `${key} - ${value}`);
        option.append(text);
        selectA.append(option)
        /////
        select.id = "selectTwo"
        let option1 = document.createElement("option")
        let text1 = document.createTextNode(`${key} - ${value}`)
        option1.setAttribute("value" , `${key} - ${value}`)
        option1.append(text1)
        select.append(option1)
        createSelect.appendChild(select)


    }


}

setData()
button.addEventListener("click" , convertData)
function convertData(event){
    event.preventDefault()
    let valueInputNumber = Number(valueInput.value) 
    let SelectAValue =  selectA.value;
    let selectBValue = selectTwo.value
    amountText.innerText = valueInputNumber
    valueInput.value = ""
   
 

  
}

