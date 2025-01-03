import React from "react";
import { Routes, Route } from "react-router-dom";

// Komponentlar
import Footer from "../components/Foydalanuvchiqismiuchun/Layoutcomponents/Footer";
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
import Yigilishlarelon from "../page/Foydalanuvchiqismi/Yangiliklar/E'lonlar/Yigilishlarelon";
import Uchrashuvlarelon from "../page/Foydalanuvchiqismi/Yangiliklar/E'lonlar/Uchrashuvlarelon";
import Seminarlarelon from "../page/Foydalanuvchiqismi/Yangiliklar/E'lonlar/Seminarlarelon";
import Davrasuhfatlarielon from "../page/Foydalanuvchiqismi/Yangiliklar/E'lonlar/Davrasuhfatlarielon";
import Tashriflarelon from "../page/Foydalanuvchiqismi/Yangiliklar/E'lonlar/Tashriflarelon";
import Brifinglarelon from "../page/Foydalanuvchiqismi/Yangiliklar/E'lonlar/Brifinglarelon";
import Fotogalerya from "../page/Foydalanuvchiqismi/Yangiliklar/Fotogaleriya/Fotogalerya";
import Videogalerya from "../page/Foydalanuvchiqismi/Yangiliklar/Fotogaleriya/Videogalerya";
import Direktororinbosarlari from "../page/Foydalanuvchiqismi/Tuzilma/Rahbariyat/Direktororinbosarlari";
import Filialdirektori from "../page/Foydalanuvchiqismi/Tuzilma/Rahbariyat/Filialdirektori";
import Aniqvatabiy from "../page/Foydalanuvchiqismi/Tuzilma/Fakultetlar/Aniqvatabiy";
import Pedagogikatillarni from "../page/Foydalanuvchiqismi/Tuzilma/Fakultetlar/Pedagogikatillarni";
import Raqamlitexnologiyalari from "../page/Foydalanuvchiqismi/Tuzilma/Markazlar/Raqamlitexnologiyalari";
import Axboratresuslarmarkazi from "../page/Foydalanuvchiqismi/Tuzilma/Markazlar/Axboratresuslarmarkazi";
import Korrupsiyagaqarshi from "../page/Foydalanuvchiqismi/Tuzilma/Kafedralar/Korrupsiyagaqarshi";
import Maktabgacha from "../page/Foydalanuvchiqismi/Tuzilma/Kafedralar/Maktabgacha";
import Sirtqibolim from "../page/Foydalanuvchiqismi/Tuzilma/Kafedralar/Sirtqibolim";
import Sportkafedrasi from "../page/Foydalanuvchiqismi/Tuzilma/Kafedralar/Sportkafedrasi";
import Uzbektilivagumanitar from "../page/Foydalanuvchiqismi/Tuzilma/Kafedralar/Uzbektilivagumanitar";
import Xorijiytilkafedrasi from "../page/Foydalanuvchiqismi/Tuzilma/Kafedralar/Xorijiytilkafedrasi";
import Raqamlivaiqtisodiytexnologkafedra from "../page/Foydalanuvchiqismi/Tuzilma/Kafedralar/Raqamlivaiqtisodiytexnologkafedra";
import Oquvuslubiyboshqarma from "../page/Foydalanuvchiqismi/Tuzilma/Bo'limlar/Oquvuslubiyboshqarma";
import Talimsifatinazorat from "../page/Foydalanuvchiqismi/Tuzilma/Bo'limlar/Talimsifatinazorat";
import Jismoniyvayurdek from "../page/Foydalanuvchiqismi/Tuzilma/Bo'limlar/Jismoniyvayurdek";
import Yoshlarbilanishlash from "../page/Foydalanuvchiqismi/Tuzilma/Bo'limlar/Yoshlarbilanishlash";
import Ilmiytadqiqot from "../page/Foydalanuvchiqismi/Tuzilma/Bo'limlar/Ilmiytadqiqot";
import Talabalarturarjoyi from "../page/Foydalanuvchiqismi/Tuzilma/Bo'limlar/Talabalarturarjoyi";
import Psixolog from "../page/Foydalanuvchiqismi/Tuzilma/Bo'limlar/Psixolog";
import Iqdidorlitalabalar from "../page/Foydalanuvchiqismi/Tuzilma/Bo'limlar/Iqdidorlitalabalar";
import Bugalterya from "../page/Foydalanuvchiqismi/Tuzilma/Bo'limlar/Bugalterya";
import Boshauditor from "../page/Foydalanuvchiqismi/Tuzilma/Bo'limlar/Boshauditor";
import Hodimlarbolimi from "../page/Foydalanuvchiqismi/Tuzilma/Bo'limlar/Hodimlarbolimi";
import Xalqarohamkorlikbulimi from "../page/Foydalanuvchiqismi/Tuzilma/Bo'limlar/Xalqarohamkorlikbulimi";
import Birinchibulim from "../page/Foydalanuvchiqismi/Tuzilma/Bo'limlar/Birinchibulim";
import Marketingvatalabalar from "../page/Foydalanuvchiqismi/Tuzilma/Bo'limlar/Marketingvatalabalar";
import Yuristkonsolt from "../page/Foydalanuvchiqismi/Tuzilma/Bo'limlar/Yuristkonsolt";
import Rejamoliyabulimi from "../page/Foydalanuvchiqismi/Tuzilma/Bo'limlar/Rejamoliyabulimi";
import Devonxonavaarxevbolimi from "../page/Foydalanuvchiqismi/Tuzilma/Bo'limlar/Devonxonavaarxevbolimi";
import Korupsiyagaqarshikurash from "../page/Foydalanuvchiqismi/Tuzilma/Bo'limlar/Korupsiyagaqarshikurash";
import Matboutkotibi from "../page/Foydalanuvchiqismi/Tuzilma/Bo'limlar/Matboutkotibi";
import Sirtqibolimd from "../page/Foydalanuvchiqismi/Tuzilma/Bo'limlar/Sirtqibolim";
import Aniqvatabiykafedra from "../page/Foydalanuvchiqismi/Tuzilma/Kafedralar/Aniqvatabiykafedra";
import Uquvdasturlari from "../page/Foydalanuvchiqismi/Tuzilma/oquvjarayoni/Uquvdasturlari";
import Kontingent from "../page/Foydalanuvchiqismi/Foalyat/Oquvjarayoni.jsx/Kontingent";
import Malakatalablari from "../page/Foydalanuvchiqismi/Foalyat/Oquvjarayoni.jsx/Malakatalablari";
import Oquvdasturalari from "../page/Foydalanuvchiqismi/Foalyat/Oquvjarayoni.jsx/Oquvdasturalari";
import Oquvrejalari from "../page/Foydalanuvchiqismi/Foalyat/Oquvjarayoni.jsx/Oquvrejalari";
import Yakuniynazoratsavolar from "../page/Foydalanuvchiqismi/Foalyat/Oquvjarayoni.jsx/Yakuniynazoratsavolar";
import Avtoreferatlar from "../page/Foydalanuvchiqismi/Foalyat/Ilmiyfaoliyat/Avtoreferatlar";
import Filialkengashi from "../page/Foydalanuvchiqismi/Foalyat/Ilmiyfaoliyat/Filialkengashi";
import Ilmiyfaolyatelon from "../page/Foydalanuvchiqismi/Foalyat/Ilmiyfaoliyat/Ilmiyfaolyatelon";
import Ilmiyjurnallar from "../page/Foydalanuvchiqismi/Foalyat/Ilmiyfaoliyat/Ilmiyjurnallar";
import Ilmiyloyihalar from "../page/Foydalanuvchiqismi/Foalyat/Ilmiyfaoliyat/Ilmiyloyihalar";
import Ilmiytadqiqotfaolyati from "../page/Foydalanuvchiqismi/Foalyat/Ilmiyfaoliyat/Ilmiytadqiqotfaolyati";
import Ilmiytadqiqotyunalishlar from "../page/Foydalanuvchiqismi/Foalyat/Ilmiyfaoliyat/Ilmiytadqiqotyunalishlar";
import Ilmiytoplam from "../page/Foydalanuvchiqismi/Foalyat/Ilmiyfaoliyat/Ilmiytoplam";
import Istiqboldagirejalar from "../page/Foydalanuvchiqismi/Foalyat/Ilmiyfaoliyat/Istiqboldagirejalar";
import Konferinsiyalar from "../page/Foydalanuvchiqismi/Foalyat/Ilmiyfaoliyat/Konferinsiyalar";
import Meninggoyam from "../page/Foydalanuvchiqismi/Foalyat/Ilmiyfaoliyat/Meninggoyam";
import Nashiriishlari from "../page/Foydalanuvchiqismi/Foalyat/Ilmiyfaoliyat/Nashiriishlari";
import Ustozshogirtmaktabi from "../page/Foydalanuvchiqismi/Foalyat/Ilmiyfaoliyat/Ustozshogirtmaktabi";
import Yosholimlarmaktabi from "../page/Foydalanuvchiqismi/Foalyat/Ilmiyfaoliyat/Yosholimlarmaktabi";
import Davlatharidlarivainv from "../page/Foydalanuvchiqismi/Foalyat/Manaviy-marifiy/Davlatharidlarivainv";
import Filialpsixologi from "../page/Foydalanuvchiqismi/Foalyat/Manaviy-marifiy/Filialpsixologi";
import Talabalarhayoti from "../page/Foydalanuvchiqismi/Foalyat/Manaviy-marifiy/Talabalarhayoti";
import Yotoqxona from "../page/Foydalanuvchiqismi/Foalyat/Manaviy-marifiy/Yotoqxona";
import Tyutorfaoliyati from "../page/Foydalanuvchiqismi/Foalyat/Manaviy-marifiy/Tyutorfaoliyati";
import DavlatHaridlari from "../page/Foydalanuvchiqismi/Foalyat/Moliyavifaoliyat/DavlatHaridlari";
import Harajatlarsmetasi from "../page/Foydalanuvchiqismi/Foalyat/Moliyavifaoliyat/Harajatlarsmetasi";
import Haridqilinishi from "../page/Foydalanuvchiqismi/Foalyat/Moliyavifaoliyat/Haridqilinishi";
import Kuchmasmulklar from "../page/Foydalanuvchiqismi/Foalyat/Moliyavifaoliyat/Kuchmasmulklar";
import Mansabdorshaxslar from "../page/Foydalanuvchiqismi/Foalyat/Moliyavifaoliyat/Mansabdorshaxslar";
import Shartnomalarnamunasi from "../page/Foydalanuvchiqismi/Foalyat/Moliyavifaoliyat/Shartnomalarnamunasi";
import Tasdiqlanganharajatlar from "../page/Foydalanuvchiqismi/Foalyat/Moliyavifaoliyat/Tasdiqlanganharajatlar";
import TuzulganShartnomalar from "../page/Foydalanuvchiqismi/Foalyat/Moliyavifaoliyat/TuzulganShartnomalar";
import Anonimsorvnoma from "../page/Foydalanuvchiqismi/Foalyat/Talimsifati/Anonimsorvnoma";
import Talabalartashabbusi from "../page/Foydalanuvchiqismi/Foalyat/Talimsifati/Talabalartashabbusi";
import Talimdasturikatalogi from "../page/Foydalanuvchiqismi/Foalyat/Talimsifati/Talimdasturikatalogi";
import Talimsifatisorovnomasi from "../page/Foydalanuvchiqismi/Foalyat/Talimsifati/Talimsifatisorovnomasi";
import Yulxaretasi from "../page/Foydalanuvchiqismi/Foalyat/Talimsifati/Yulxaretasi";
import Eslatma from "../page/Foydalanuvchiqismi/Qabul24/Bakalavriat/Eslatma";
import Hujjatlartoplami from "../page/Foydalanuvchiqismi/Qabul24/Bakalavriat/Hujjatlartoplami";
import Ijodiyimtixonlar from "../page/Foydalanuvchiqismi/Qabul24/Bakalavriat/Ijodiyimtixonlar";
import Ikkinchivaundankeyingi from "../page/Foydalanuvchiqismi/Qabul24/Bakalavriat/Ikkinchivaundankeyingi";
import Imtihonfanlari from "../page/Foydalanuvchiqismi/Qabul24/Bakalavriat/Imtihonfanlari";
import Kallmarkaz from "../page/Foydalanuvchiqismi/Qabul24/Bakalavriat/Kallmarkaz";
import Kuziojizlaruchun from "../page/Foydalanuvchiqismi/Qabul24/Bakalavriat/Kuziojizlaruchun";
import Oqishnikuchirishvaqaytatiklash from "../page/Foydalanuvchiqismi/Qabul24/Bakalavriat/Oqishnikuchirishvaqaytatiklash";
import Qabulkommisiyasi from "../page/Foydalanuvchiqismi/Qabul24/Bakalavriat/Qabulkommisiyasi";
import Qabulkvotasi from "../page/Foydalanuvchiqismi/Qabul24/Bakalavriat/Qabulkvotasi";
import Qabulnizomi from "../page/Foydalanuvchiqismi/Qabul24/Bakalavriat/Qabulnizomi";
import Texnikumbitiruvchilari from "../page/Foydalanuvchiqismi/Qabul24/Bakalavriat/Texnikumbitiruvchilari";
import Utishballari from "../page/Foydalanuvchiqismi/Qabul24/Bakalavriat/Utishballari";
import Bitiruvmalakaviyish from "../page/Foydalanuvchiqismi/Talabalarga/Bakalavriat/Bitiruvmalakaviyish";
import Darsjadvali from "../page/Foydalanuvchiqismi/Talabalarga/Bakalavriat/Darsjadvali";
import Davlatimtihonlari from "../page/Foydalanuvchiqismi/Talabalarga/Bakalavriat/Davlatimtihonlari";
import Iqtidorlitalabalar from "../page/Foydalanuvchiqismi/Talabalarga/Bakalavriat/Iqtidorlitalabalar";
import Odobahloqqoidalari from "../page/Foydalanuvchiqismi/Talabalarga/Bakalavriat/Odobahloqqoidalari";
import Stipendiyalar from "../page/Foydalanuvchiqismi/Talabalarga/Bakalavriat/Stipendiyalar";
import Yuriqnoma from "../page/Foydalanuvchiqismi/Talabalarga/Bakalavriat/Yuriqnoma";

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
        <Route path="/yigilishlarelon" element={<Yigilishlarelon />} />
        <Route path="/uchrashuvlarelon" element={<Uchrashuvlarelon />} />
        <Route path="/seminarlarelon" element={<Seminarlarelon />} />
        <Route path="/davrasuhbatlarielon" element={<Davrasuhfatlarielon />} />
        <Route path="/tashriflarelon" element={<Tashriflarelon />} />
        <Route path="/Brifinglarelon" element={<Brifinglarelon />} />

        {/* Fotogalerya */}
        <Route path="/fotagalerya" element={<Fotogalerya />} />
        <Route path="/videogalerya" element={<Videogalerya />} />
        {/* Video galerya */}
        {/* Tuzulma */}
        {/* Rahbariyat */}
        <Route path="/urinbosar" element={<Direktororinbosarlari />} />
        <Route path="/filiald" element={<Filialdirektori />} />
        {/* Fakultetlar */}
        <Route path="/aniqvatabiy" element={<Aniqvatabiy />} />
        <Route path="/pedagogika" element={<Pedagogikatillarni />} />
        {/* kafedralar */}
        <Route path="/qarshi" element={<Korrupsiyagaqarshi />} />
        <Route path="/maktabgacha" element={<Maktabgacha />} />
        <Route path="/sirtqibolim" element={<Sirtqibolim />} />
        <Route path="/sportkafedrasi" element={<Sportkafedrasi />} />
        <Route path="/gumanitar" element={<Uzbektilivagumanitar />} />
        <Route path="/chettil" element={<Xorijiytilkafedrasi />} />
        <Route
          path="/raqamlis"
          element={<Raqamlivaiqtisodiytexnologkafedra />}
        />
        <Route path="/aniqvatabiyfanlar" element={<Aniqvatabiykafedra />} />
        {/* markazlar */}
        <Route path="/raqamli" element={<Raqamlitexnologiyalari />} />
        <Route path="/axborat" element={<Axboratresuslarmarkazi />} />
        {/* Bolimlar */}
        <Route path="/uslubiy" element={<Oquvuslubiyboshqarma />} />
        <Route path="/nazorat" element={<Talimsifatinazorat />} />
        <Route path="/yurdek" element={<Jismoniyvayurdek />} />
        <Route path="/ishlash" element={<Yoshlarbilanishlash />} />
        <Route path="/tadqiqot" element={<Ilmiytadqiqot />} />
        <Route path="/turarjoy" element={<Talabalarturarjoyi />} />
        <Route path="/psixolog" element={<Psixolog />} />
        <Route path="/talabalariq" element={<Iqdidorlitalabalar />} />
        <Route path="/bugalterya" element={<Bugalterya />} />
        <Route path="/auditor" element={<Boshauditor />} />
        <Route path="/xodimlarbolimi" element={<Hodimlarbolimi />} />
        <Route path="/hamkorlik" element={<Xalqarohamkorlikbulimi />} />
        <Route path="/birinchi" element={<Birinchibulim />} />
        <Route path="/marketing" element={<Marketingvatalabalar />} />
        <Route path="/konsolt" element={<Yuristkonsolt />} />
        <Route path="/rejamoliya" element={<Rejamoliyabulimi />} />
        <Route path="/devanxona" element={<Devonxonavaarxevbolimi />} />
        <Route path="/kurash" element={<Korupsiyagaqarshikurash />} />
        <Route path="/kurash" element={<Korupsiyagaqarshikurash />} />
        <Route path="/matbuat" element={<Matboutkotibi />} />
        <Route path="/sirtqi" element={<Sirtqibolimd />} />
        {/* Oquvjarayoni */}
        <Route path="/dasturlari" element={<Uquvdasturlari />} />

        {/* Faolyat */}
        {/* Oquv jarayoni */}
        <Route path="/kontingent" element={<Kontingent />} />
        <Route path="/malakatalabalar" element={<Malakatalablari />} />
        <Route path="/uquvdasturlari" element={<Oquvdasturalari />} />
        <Route path="/uquvrejalar" element={<Oquvrejalari />} />
        <Route
          path="/yakuniynazoratsavolar"
          element={<Yakuniynazoratsavolar />}
        />
        {/* Ilmiy faolyat */}
        <Route path="/avtoreferatlar" element={<Avtoreferatlar />} />
        <Route path="/filialkengashi" element={<Filialkengashi />} />
        <Route path="/ilmiyfaolyatelon" element={<Ilmiyfaolyatelon />} />
        <Route path="/ilmiyjurnallar" element={<Ilmiyjurnallar />} />
        <Route path="/ilmiyloyihalar" element={<Ilmiyloyihalar />} />
        <Route path="/ilmiytadqiqot" element={<Ilmiytadqiqotfaolyati />} />
        <Route
          path="/tadqiqotyunalish"
          element={<Ilmiytadqiqotyunalishlar />}
        />
        <Route path="/ilmiy/toplam" element={<Ilmiytoplam />} />
        <Route path="/rejalar" element={<Istiqboldagirejalar />} />
        <Route path="/konferinsiyalar" element={<Konferinsiyalar />} />
        <Route path="/meninggoyam" element={<Meninggoyam />} />
        <Route path="/nashirishlari" element={<Nashiriishlari />} />
        <Route path="/ustozshogirt" element={<Ustozshogirtmaktabi />} />
        <Route path="/olimlarmaktabi" element={<Yosholimlarmaktabi />} />
        {/* Manaviy va Marifiy faolyat */}
        <Route path="/yotoqxona" element={<Yotoqxona />} />
        <Route path="/psixologi" element={<Filialpsixologi />} />
        <Route path="/talabalarhayoti" element={<Talabalarhayoti />} />
        <Route path="/tyutor" element={<Tyutorfaoliyati />} />
        {/* Moliyaviy faolyat */}
        <Route path="/haridlari" element={<DavlatHaridlari />} />
        <Route path="/harajatlarsmetasi" element={<Harajatlarsmetasi />} />
        <Route path="/haridqilinishi" element={<Haridqilinishi />} />
        <Route path="/kuchmasmulklar" element={<Kuchmasmulklar />} />
        <Route path="/masabdorshaxslar" element={<Mansabdorshaxslar />} />
        <Route path="/namunasi" element={<Shartnomalarnamunasi />} />
        <Route path="/harajatlar" element={<Tasdiqlanganharajatlar />} />
        <Route path="/shartnomalar" element={<TuzulganShartnomalar />} />
        {/* Talim sifati */}
        <Route path="/anonim" element={<Anonimsorvnoma />} />
        <Route path="/tashabbusi" element={<Talabalartashabbusi />} />
        <Route path="/katalogii" element={<Talimdasturikatalogi />} />
        <Route path="/sorovnomasi" element={<Talimsifatisorovnomasi />} />
        <Route path="/yulxaretasi" element={<Yulxaretasi />} />
        {/* Qabul24 */}
        {/* Bakalavriat */}
        <Route path="/eslatma" element={<Eslatma />} />
        <Route path="/tuplami" element={<Hujjatlartoplami />} />
        <Route path="/imtixonlar" element={<Ijodiyimtixonlar />} />
        <Route path="/keyingi" element={<Ikkinchivaundankeyingi />} />
        <Route path="/fanlari" element={<Imtihonfanlari />} />
        <Route path="/kallmarkaz" element={<Kallmarkaz />} />
        <Route path="/kuziojizlar" element={<Kuziojizlaruchun />} />
        <Route path="/tiklash" element={<Oqishnikuchirishvaqaytatiklash />} />
        <Route path="/kommisiyasi" element={<Qabulkommisiyasi />} />
        <Route path="/qabulkvotasi" element={<Qabulkvotasi />} />
        <Route path="/qabulnizomi" element={<Qabulnizomi />} />
        <Route path="/bitiruvchialar" element={<Texnikumbitiruvchilari />} />
        <Route path="/utishballari" element={<Utishballari />} />

        {/* Talabalarga */}
           {/* Bakalavriat */}

           <Route path="/bitruv" element={<Bitiruvmalakaviyish />} />
        <Route path="/darsjadvali" element={<Darsjadvali />} />
        <Route path="/imtihonlari" element={<Davlatimtihonlari />} />
        <Route path="/talabalar" element={<Iqtidorlitalabalar />} />
        <Route path="/kontingent" element={<Kontingent />} />
        <Route path="/odobaxloq" element={<Odobahloqqoidalari />} />
        <Route path="/stipendiya" element={<Stipendiyalar />} />
        <Route path="/yuriqnoma" element={<Yuriqnoma/>} />



      </Routes>

    </>
  );
};

export default RoutesComponent;
