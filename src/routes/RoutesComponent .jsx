import React from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "../components/Footer"; // Footer
import Home from "../page/Home";
import Contact from "../components/Contact";
import YangilikDetails from "../page/YangilikDetails/YangilikDetails";
import ElonlarDetails from "../page/ElonlarDetails/ElonlarDetails";
import Oliytalimyangiliklari from "../page/Headerpage/Oliytalimyangiliklari";
import Omaviytadbirlar from "../page/Headerpage/Omaviytadbirlar";
import Elonlar from "../page/Headerpage/Elonlari";
import Saytxareta from "../page/saytxaretasi/Saytxareta";

const RoutesComponent = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/news/:id" element={<YangilikDetails />} />
        <Route path="/news2/:id" element={<ElonlarDetails />} />
        <Route path="/Oliytalimyangiliklari" element={<Oliytalimyangiliklari/>}/>        <Route path="/Oliytalimyangiliklari" element={<Oliytalimyangiliklari/>}/>
        <Route path="/Omaviytadbirlar" element={<Omaviytadbirlar/>}/>
        <Route path="/Elonlar" element={<Elonlar/>}/>
        <Route path="/Saytxaretasi" element={<Saytxareta/>}/>

      </Routes>
      <Footer />
    </>
  );
};

export default RoutesComponent;
