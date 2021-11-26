import React from 'react'


// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       username  : "",
//       header:""
//     }
//     this.handelSubmit = this.handelSubmit.bind(this);
//     this.getData = this.getData.bind(this);
//   }

// getData = (event)=>{ 
//   this.setState({username  : event.target.value})
//   this.setState({header  : event.target.value})

// }

// handelSubmit = (event)=>{
//   event.preventDefault()
 
//     this.setState({header : event.target.value})
//   console.log(this.state.header);

// }

//   render(){
    
//     return (
//       <>
//       <form >
//         <h1>Hello {this.state.header}</h1>
//         <p>Enter your name :</p>
//         <input onChange = {this.getData}/>
//         <button onClick={this.handelSubmit}>submit</button>
//       </form>
//       </>
//     )
//   }

// }


////////////////////////////////////////////////////////////////////////////////////////////

class App extends React.Component {
  constructor(props) {
  super(props);
  this.state = {value: '' , number:''};
  this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleSubmit(event) {
  event.preventDefault();
  this.validNumber(event)
  alert(`you are submiting:  ${this.element.value} `)
  this.setState({ value: this.element.value });
  this.setState({ number: this.number.value });
  }


  validNumber(event){
    if( isNaN(event.target.value)){
      alert('your age must number')
    }
    
  }
  
  render() {
  return (
  <div>
  <form onSubmit={this.handleSubmit}>
  <label>
  <input type="text" ref={el => this.element = el} />
  <input type="text" ref={el => this.number = el} />
  </label>
  <input type="submit" value="click me" />
  </form>
  <p> your name is :{ this.state.value }</p>
  <p> your age is :{ this.state.number }</p>
  </div>
  );
  }
  }










export default App;
