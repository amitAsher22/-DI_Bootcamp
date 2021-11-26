import React from 'react';
import './App.css';
import UsersList from './UsersList';



class App extends React.Component {

constructor(){
  super()
  this.state = {
    users :[]
  }
}

componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(data => this.setState({users:data}))
  
}

  render(){
  const {users} = this.state
  console.log(users);
    return (
      <>
       <div><UsersList post={users}/></div>
      </>
    );
  }

}

export default App;
