import React from 'react';
import './App.css';
import Header from './Header';
import SearchBox from './SearchBox';
import Navbar from './Navbar';

const breakPoints=[
  {width:1,itemstoShow:1 },
  {width:550,itemstoShow:2 },
  {width:768,itemstoShow:3},
  {width:1200,itemstoshow:4}
];

function App() {
  return (
    <div className="App">
      <Header/>
      <SearchBox/>
      <Navbar/>
    </div>
  );
}

export default App;
