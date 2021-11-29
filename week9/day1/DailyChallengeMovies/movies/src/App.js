
import './App.css';
import React from 'react';
import MovieDetails from './components/MovieDetails';
import MovieList from './components/MovieList';



class App extends React.Component {
  render() {
    return (
      <>
     
          <MovieDetails/>
          <MovieList/>

     
      </>
    )
  }

   
}




export default App;
