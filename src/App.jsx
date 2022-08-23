import "./App.css";
import MoviesList from './components/MoviesList';
import React from 'react';
import Navbar from './components/NavBar';


function App() {

  return (
    <>
      <Navbar></Navbar>
      <MoviesList></MoviesList>
    </>

  );
}

export default App;
