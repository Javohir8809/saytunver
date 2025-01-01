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
import Aloqa from "../page/Foydalanuvchiqismi/Filial/Filialhaqida/Aloqa";
import Filialnizomi from "../page/Foydalanuvchiqismi/Filial/Filialhaqida/Filialnizomi";
import Filialtuzulmasi from "../page/Foydalanuvchiqismi/Filial/Filialhaqida/Filialtuzulmasi";
import Rekvizitlar from "../page/Foydalanuvchiqismi/Filial/Filialhaqida/Rekvizitlar";
import Filialustovi from "../page/Foydalanuvchiqismi/Filial/Filialhaqida/Filialustovi";
import Qonunlar from "../page/Foydalanuvchiqismi/Filial/Hujjatlar/Qonunlar";
import Farmonlar from "../page/Foydalanuvchiqismi/Filial/Hujjatlar/Farmonlar";
import Qarorlar from "../page/Foydalanuvchiqismi/Filial/Hujjatlar/Qarorlar";
import Nizomvaqoidalar from "../page/Foydalanuvchiqismi/Filial/Hujjatlar/Nizomvaqoidalar";
import Hisobotlar from "../page/Foydalanuvchiqismi/Filial/Hujjatlar/Hisobotlar";
import Yigilishlar from "../page/Foydalanuvchiqismi/Yangiliklar/Yangiliklar/Yigilishlar";
import Uchrashuvlar from "../page/Foydalanuvchiqismi/Yangiliklar/Yangiliklar/Uchrashuvlar";
import Seminarlar from "../page/Foydalanuvchiqismi/Yangiliklar/Yangiliklar/Seminarlar";
import Davrasuxbatlari from "../page/Foydalanuvchiqismi/Yangiliklar/Yangiliklar/Davrasuxbatlari";
import Tashriflar from "../page/Foydalanuvchiqismi/Yangiliklar/Yangiliklar/Tashriflar";
import Brifinglar from "../page/Foydalanuvchiqismi/Yangiliklar/Yangiliklar/Brifinglar";

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
        <Route
          path="/oliy-talim-yangiliklari"
          element={<Oliytalimyangiliklari />}
        />
        <Route path="/omaviy-tadbirlar" element={<Omaviytadbirlar />} />
        <Route path="/elonlar" element={<Elonlar />} />
        <Route path="/sayt-xaritasi" element={<Saytxareta />} />

        {/* Davlat ramzlari */}
        <Route path="/bayroq" element={<Bayroq />} />
        <Route path="/gerb" element={<Gerb />} />

        {/* Navdagi sahifalar */}
        {/* Filial */}
        {/* Filial haqida */}
        <Route path="/aloqa" element={<Aloqa />} />
        <Route path="/filialnizomi" element={<Filialnizomi />} />
        <Route path="/filialtuzulmasi" element={<Filialtuzulmasi />} />
        <Route path="/filialustovi" element={<Filialustovi />} />
        <Route path="/rekvizitlar" element={<Rekvizitlar />} />
        {/* Hujjatlar */}
        <Route path="/qonunlar" element={<Qonunlar />} />
        <Route path="/farmonlar" element={<Farmonlar />} />
        <Route path="/qarorlar" element={<Qarorlar />} />
        <Route path="/nizomlarvaqoidalar" element={<Nizomvaqoidalar />} />
        <Route path="/hisobotlar" element={<Hisobotlar />} />
        {/* Yangiliklar  */}
        {/* yangilikalar */}
        <Route path="/yigilishlar" element={<Yigilishlar />} />
        <Route path="/uchrashuvlar" element={<Uchrashuvlar />} />
        <Route path="/seminarlar" element={<Seminarlar />} />
        <Route path="/davrasuhbatlari" element={<Davrasuxbatlari />} />
        <Route path="/tashriflar" element={<Tashriflar />} />
        <Route path="/Brifinglar" element={<Brifinglar />} />
        {/* E'lonlar */}
        


        {/* Fotogalerya */}
        {/* Video galerya */}
      </Routes>
    </>
  );
};

export default RoutesComponent;
