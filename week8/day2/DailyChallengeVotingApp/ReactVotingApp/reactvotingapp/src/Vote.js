import React from 'react';
import './App.css';

class Vote extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            languages : [
                {name: "Php", votes: 0},
                {name: "Python", votes: 0},
                {name: "JavaSript", votes: 0},
                {name: "Java", votes: 0}
            ]
        }
      }

   changePHP = ()=>{
    this.setState({languages:this.state.languages.votes+1})
   }




    render() {
      return(
          <>
          <div className="mainCards">
             <div className="card"> {this.state.languages[0].votes} PHP <span onClick={this.changePHP} className="clickhere">Click here</span></div>
             <div className="card">{this.state.languages[0].votes} Python <span className="clickhere">Click here</span></div>
             <div className="card">{this.state.languages[0].votes} JavaScript <span className="clickhere">Click here</span></div>
             <div className="card">{this.state.languages[0].votes} Java <span className="clickhere">Click here</span></div>
          </div>
          </>

      ) 
    }
  }


  export default Vote