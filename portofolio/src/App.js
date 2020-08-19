import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import Nav from './components/Nav';
import Practice_areas from './components/Practice_areas';

function App() {
  return (
    <div className="App">
      <Nav/>
     <Navbar/>
     <Carousel/>
     <Practice_areas/>
    </div>
  );
}

export default App;
