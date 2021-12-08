import React from "react";
import ShowWeather from './ShowWeather';


class InputWeather extends React.Component{
    constructor(props) {
        super(props);
        this.state = {value: ''};
    }
    
    onSubmit =(event)=>{
        event.preventDefault()
        this.setState({value:event.target.inputOne.value})
    }
   
  
   
    render(){
        return(
            <>
            <h1 className=" p-3">Weather App</h1>
            <form onSubmit={this.onSubmit}>
            <input name='inputOne' className="col-md-4  borde  me-sm-2 rounded w-50 h-25 "  placeholder="Tel Aviv"/>
            <button  className=" border border-none btn btn-warning text-black h-25 " >Get Weather</button>
            </form>
          
            <ShowWeather infoValue={this.state.value}/>
            </>
        )
    }
}

export default InputWeather
