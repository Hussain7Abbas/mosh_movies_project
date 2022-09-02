import "./App.css";
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Navbar from './components/NavBar';
import Movies from './components/page_movies/Movies';
import AboutUs from './components/page_aboutUs/AboutUs';
import ContactUs from './components/page_contactUs/ContactUs';
import MovieDetails from './components/page_movies/MovieDetails';
import NotFound from './components/page_notFound/NotFound';

function App() {

  return (
    <>
      <Navbar />
      <div className='page'>
        <Routes>
          <Route path='/movies/:id' element={<MovieDetails />} />
          <Route path='/movies' element={<Movies />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/contact' element={<ContactUs />} />
          <Route path='/not-found' element={<NotFound />} />
          <Route path='/' element={<Navigate replace to='/movies' />} />
          <Route path='*' element={<Navigate replace to='/not-found' />} />

        </Routes>
      </div>
    </>
  );
}

export default App;
