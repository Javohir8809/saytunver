import React from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "../components/Footer"; // Footer
import Home from "../page/Home";
import Contact from "../components/Contact";
import YangilikDetails from "../page/YangilikDetails/YangilikDetails";
import ElonlarDetails from "../page/ElonlarDetails/ElonlarDetails";

const RoutesComponent = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/news/:id" element={<YangilikDetails />} />
        <Route path="/news2/:id" element={<ElonlarDetails />} />
      </Routes>
      <Footer />
    </>
  );
};

export default RoutesComponent;
