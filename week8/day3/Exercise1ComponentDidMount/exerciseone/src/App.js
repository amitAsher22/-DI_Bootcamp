import React from 'react'
import './App.css';

// function App() {
//   return (
//     <div className="App">
     
//     </div>
//   );
// }


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = 
    {favoriteColor : 'red'};
  }

  componentDidMount(){
    this.changesColor();
  }

  changesColor(){
    setTimeout(() => {
      this.setState({
        favoriteColor: 'yellow'
      })
    }, 5000)
  }

  changeToBlue=()=>{
    this.setState({
      favoriteColor: 'blue'
    })
  }



  render() {
   
    return (
      <>
      <header>My Favorite Color is {this.state.favoriteColor}</header>
      <button onClick ={this.changeToBlue}>click to blue color</button>
      </>
    )
 
  }
}



export default App;
