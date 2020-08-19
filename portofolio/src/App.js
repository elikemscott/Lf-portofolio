import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import Nav from './components/Nav';
import Practice_areas from './components/Practice_areas';
import Parallax from './components/Parallax';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Navbar/>
      <Carousel/>
      <Parallax/>
    </div>
  );
}

export default App;
