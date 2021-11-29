
import './App.css';
import React from 'react';
import View from './components/View'
import Helper from './components/Helper';
import {connect} from 'react-redux';

class  App extends React.Component{
  constructor(){
    super()
    this.state = {
      PROPERTY_ONE :'',
      PROPERTY_TWO :'',

    }
  }

  


  render(){
    return (
      <div className="App">
       <View/>
       <Helper helper={this.props.value}/>
      </div>
    );
  }
 
}

const mapStateToProps = (state)=>{
   return{value:state.PROPERTY_ONE} 
}


export default connect(mapStateToProps)(App);
