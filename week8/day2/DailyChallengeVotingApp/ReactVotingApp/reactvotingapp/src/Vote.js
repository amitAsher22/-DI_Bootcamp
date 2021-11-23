import React from 'react';
import './App.css';




class Vote extends React.Component {

constructor(props) {
super(props);
this.state = {
languages: [
{ name: "Php", votes: 0 },
{ name: "Python", votes: 0 },
{ name: "JavaSript", votes: 0 },
{ name: "Java", votes: 0 }
]

}
}


changePHP = () => {

this.setState({ votes: this.state.languages[0].votes ++ })
console.log(this.state.languages[0].votes);
}

changePython = () => {

this.setState({ votes: this.state.languages[1].votes ++ })
console.log(this.state.languages[1].votes);
}

changeJavaScript = () => {

this.setState({ votes: this.state.languages[2].votes ++ })
console.log(this.state.languages[2].votes);
}

changeJava = () => {

  this.setState({ votes: this.state.languages[3].votes ++ })
  console.log(this.state.languages[3].votes);
  }

render() {
return (
<>
<div className="mainCards">
<div className="card">{this.state.languages[0].votes} PHP <button onClick={this.changePHP} className="clickhere">Click here</button></div>
<div className="card"> {this.state.languages[1].votes} Python <button onClick={this.changePython} className="clickhere">Click here</button></div>
<div className="card"> {this.state.languages[2].votes} JavaScript <button onClick={this.changeJavaScript} className="clickhere">Click here</button></div>
<div className="card"> {this.state.languages[3].votes} Java <button onClick={this.changeJava} className="clickhere">Click here</button></div>
</div>
</>

)
}
}


export default Vote