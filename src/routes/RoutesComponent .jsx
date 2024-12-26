import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Footer from '../components/Footer'; // Footer
import Home from '../page/Home';
import Contact from '../components/Contact';

const RoutesComponent = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      <Footer />
    </>
  );
};

export default RoutesComponent;
