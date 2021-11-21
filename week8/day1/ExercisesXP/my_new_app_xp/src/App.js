
import './App.css';
import React from 'react'
// import Header1 from './Header1';
// import Header2 from './Header2';

/////////////////////////////////////////////////////////////////////////////////////// Exercise 1: First React App
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//        <h1>Hello world!</h1>
      
//       </header>
//     </div>
//   );
// }

////////////////////////////////////////////////////////////////////////////////////////// Exercise 2: No JSX

// const App= () => {
//   return React.createElement(
//     "div",
//     {},
//     React.createElement("h1", {}, "Happy Birthday!")
//   );
// };

////////////////////////////////////////////////////////////////////////////////////////////////// Exercise 3: JSX Introduction

// const App= () => {
//   const myelement = <h1>I Love JSX!</h1>;
//   const sum = 5+5
//   return (
//    <div>
//      {
//       <h1>React is {sum} times better with JSX! </h1>
      
//      }
//    </div>

//   )
// };
///////////////////////////////////////////////////////////////////  Exercise 4 : JSX And HTML
// const listItems  = ['Apples' , 'Bananas' , 'cherries']

// class App extends React.Component{
//   render(){
//  return <div>
//     <Header1/>
//    <Header2/> 
//    {listItems.map(item =>{
//      return <ul>
//      <li>{item}</li>
//       </ul>
//    })}
//   </div>
  
  
//   }
// }

//////////////////////////////////////////////////////////// Exercise 5: JSX And Form


// const App= () => {
 
//   return (
//    <div>
//       <form>
//       <label>Enter your name:
//         <input type="text" />
//       </label>
//     </form>
//    </div>

//   )
// };

//////////////////////////////////////////////////////////////// Exercise 6 : Object
// const object = {
//   first_name: 'Bob',
//   last_name: 'Dylan'
// };

// const App= () => {
//   return (
//    <div>
//      <h1>my name is {object.first_name}</h1> 
//      <h2>my last name is {object.last_name}</h2> 
//    </div>

//   )
// };

///////////////////////////////////////////////////////////////////// Exercise 7 : Array & Map #1

// const animals = ['Horse','Turtle','Elephant','Monkey'];

//  let item =  animals.map(item =>{
//   return item
//   })

// const App= () => {
//   return (
//    <div>
//     {
//      <ul >
//        <li>{item[0]}</li>
//        <li>{item[1]}</li>
//        <li>{item[2]}</li>
//        <li>{item[3]}</li>
     
//      </ul>
//     }
//    </div>

//   )
// };


///////////////////////////////////////////////////////////////////// Exercise 7 : Array & Map #2




const App= () => {
  const animals = [{label: 'Horse'},{label: 'Turtle'},{label: 'Elephant'},{label: 'Monkey'}];
  return (
   <div>
    {
      animals.map(animal =>{
       return <ul key={animal.label} >
          <li >{animal.label}</li>
        </ul>
      })   
    
    }
   </div>

  )
};




export default App;
