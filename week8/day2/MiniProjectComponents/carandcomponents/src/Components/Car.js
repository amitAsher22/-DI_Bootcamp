import React from "react";
import Garage from "./Garage";


// const Car =()=>{
// return(
//     <>
//     <h2>Hi, I am a Car!</h2>
//     </>
// )  
// }



class Car extends React.Component {
    constructor(props) {
        super(props);
        this.state = {color: 'red'};
      }

    render() { 
      return(
       
        <>
          <h2>Hi, I am a {this.state.color} Car!</h2>
          <Garage size="small" />
          <header> the name is :{this.props.carData.name} the model is {this.props.carData.model}</header>
         </>
      )
     
    }
  }
  


export default Car