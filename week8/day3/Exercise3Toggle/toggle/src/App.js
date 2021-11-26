
import React from 'react'

class App extends React.Component{

  constructor(props) {
    super(props);
    this.state = {isToggleOn : 'false'} 
    
  }


 toggle = ()=>{
  if(this.state.isToggleOn === 'true' ){
    this.setState({isToggleOn : 'false'})
  } else{
    this.setState({isToggleOn : 'true'})
  }

}



  render(){
    return(
      <>
      <h1>toggle</h1>
      <button onClick={this.toggle}>{this.state.isToggleOn}</button>
      </>
    )
  }
}


export default App