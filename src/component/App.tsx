import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import SearchBox from "./SearchBox";
import Navbar from "./Navbar";
import CarouselSecound from "./CarouselSecound";

//Pages

import Category from "../pages/Category";
import Sell from "../pages/Sell";
import Buy from "../pages/Buy";
import Return from "../pages/Return";
import Language from "../pages/Language";
import Help from "../pages/Help";
import AddProduct from "../pages/AddProduct";
import CustomerCare from "../pages/CustomerCare";
import SetMyLocation from "../pages/SetMyLocation";

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBox />
      <Navbar />
      <Routes>
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
      {/* <CarouselSecound/> */}
    </div>
  );
}

export default App;
