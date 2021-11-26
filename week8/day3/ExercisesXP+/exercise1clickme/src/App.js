

import React, { Component } from 'react'

 class App extends Component {

  constructor(props) {
    super(props);
    this.text = "";
   
    
  }


  render() {
  
  const  clickHandler = ()=>{
      alert('I was clicked')
    }

    const handleKeyPress = (e)=>{
 
      if(e.target.value === 'react'){
        alert('the enter key was pressed , your input is :react')
      }
     
    }
    
    return (
      <div>

        <button onClick={clickHandler}>click me!</button>
        <input  onKeyPress={handleKeyPress} placeholder="press the enter key"></input>
      </div>
    )
  }

}


export default App

