import React from 'react';
import './App.css';
import Header from './Header';
import SearchBox from './SearchBox';
import Navbar from './Navbar';
import ImageSlider from './Carousel'
import CarouselSecound from './CarouselSecound';

function App() {
  return (
    <div className="App">
      <Header/>
      <SearchBox/>
      <Navbar/>
      <ImageSlider/>
      <CarouselSecound/>
    </div>
  );
}

export default App;
