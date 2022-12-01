import React from "react";
import { Routes, Route } from "react-router-dom";
//import "./App.css";
import Header from "./Header";
import SearchBox from "./SearchBox";
import Navbar from "./Navbar";
import { Banner } from "./Banner";
import { HouseList } from "./HouseList";

//import CarouselSecound from "./CarouselSecound";

//Pages

function App() {
  return (
    <>
      <Header />
      <SearchBox />
      <Navbar />
      <Banner />
      <HouseList />
      {/* <Routes>
        <Route path="/category" element={<CarouselSecound />} />
      </Routes>
      <Routes>
        <Route path="/sell" element={<Sell />} />
      </Routes>
      <Routes>
        <Route path="/buy" element={<Buy />} />
      </Routes>
      <Routes>
        <Route path="/return" element={<Return />} />
      </Routes>
      <Routes>
        <Route path="/language" element={<Language />} />
      </Routes>
      <Routes>
        <Route path="/help" element={<Help />} />
      </Routes>
      <Routes>
        <Route path="/addProduct" element={<AddProduct />} />
      </Routes>
      <Routes>
        <Route path="/customerCare" element={<CustomerCare />} />
      </Routes>
      <Routes>
        <Route path="/setMyLocation" element={<SetMyLocation />} />
      </Routes>
      <CarouselSecound/> */}
    </>
  );
}

export default App;
