import React from "react";
import { Routes, Route } from "react-router-dom";

// Komponentlar
import Footer from "../components/Layoutcomponents/Footer"; 
import Contact from "../components/Contact";

// Sahifalar
import Home from "../page/Home";
import YangilikDetails from "../page/YangilikDetails/YangilikDetails";
import ElonlarDetails from "../page/ElonlarDetails/ElonlarDetails";
import Oliytalimyangiliklari from "../page/Headerpage/Oliytalimyangiliklari";
import Omaviytadbirlar from "../page/Headerpage/Omaviytadbirlar";
import Elonlar from "../page/Headerpage/Elonlari";
import Saytxareta from "../page/saytxaretasi/Saytxareta";

// Ramzlar
import Bayroq from "../page/Foydalanuvchiqismi/Ramzlar/Bayroq";
import Gerb from "../page/Foydalanuvchiqismi/Ramzlar/Gerb";

const RoutesComponent = () => {
  return (
    <>
      <Routes>
        {/* Asosiy sahifalar */}
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/news/:id" element={<YangilikDetails />} />
        <Route path="/news2/:id" element={<ElonlarDetails />} />

        {/* Qo'shimcha sahifalar */}
        <Route path="/oliy-talim-yangiliklari" element={<Oliytalimyangiliklari />} />
        <Route path="/omaviy-tadbirlar" element={<Omaviytadbirlar />} />
        <Route path="/elonlar" element={<Elonlar />} />
        <Route path="/sayt-xaritasi" element={<Saytxareta />} />

        {/* Davlat ramzlari */}
        <Route path="/bayroq" element={<Bayroq />} />
        <Route path="/gerb" element={<Gerb />} />
      </Routes>
    </>
  );
};

export default RoutesComponent;
