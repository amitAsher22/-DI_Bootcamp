let form =document.getElementById('form');
let nameInput = document.getElementById('Name');
let Description = document.getElementById('Description')
let StartdayeAndTime = document.getElementById('StartdayeAndTime');
let EnddayeAndTime = document.getElementById('EnddayeAndTime');
let BtnAdd = document.getElementById('add');
let trueCheack = document.getElementById('true');
let falseCheack = document.getElementById('false');



BtnAdd.addEventListener('click', function(e){
    e.preventDefault()

    if(nameInput.value === '' || Description.value === '' || StartdayeAndTime === '' || EnddayeAndTime === ''){
        alert(`You must fill all the inputes`)
    }else{
        let nameOfTask = nameInput.value;
        let DescriptionOfTask = Description.value;
        let StartdayeAndTimeOfTask = StartdayeAndTime.value;
        let EnddayeAndTimeOfTask = EnddayeAndTime.value;
        let cheackBoxTrue = trueCheack.value;
        let cheackBoxfalse = falseCheack.value;
 
    }
})




