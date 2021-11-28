import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { setCount } from './actions';

class App extends React.Component {

  addCount = () => {
    const newCounter = this.props.count + 1
    this.props.setCount(newCounter);
  }

  decrease = ()=>{
    this.props.setCount(this.props.count- 1)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <button onClick={this.addCount}>+</button>
          <p>{this.props.count}</p>
          <button onClick={this.decrease}>-</button>
        </header>
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    count: state.count
  }
}

export default connect(mapStateToProps, {
  setCount
})(App);
