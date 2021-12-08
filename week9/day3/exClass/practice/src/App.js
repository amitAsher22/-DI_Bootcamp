
import './App.css';
import { connect } from 'react-redux';
import CardList from './components/CardList';
import React from 'react';
// import { robots } from './actions';
import {setdata} from './actions/index'


 class App extends React.Component {
constructor(){
  super()
  this.state = {
    robots :[]
  }
}

 render(){
   const {robots} = this.state
   
  return (
   
    <div className="App">
     <h1>hello</h1>
     <CardList robots = {this.props.listRobots} />
    </div>
  )
 }




 componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res=> res.json())
  .then(data =>  this.props.setdata(data)) 
    
}
 
}







const mapStateToProp = (state)=>{
    return{
      listRobots : state.listRobots
    }
}

const mapDispatchToProps = (dispatch) =>{

  return {
    setdata : (data)=> dispatch(setdata(data))
  }
}

export default connect(mapStateToProp , mapDispatchToProps)(App);
