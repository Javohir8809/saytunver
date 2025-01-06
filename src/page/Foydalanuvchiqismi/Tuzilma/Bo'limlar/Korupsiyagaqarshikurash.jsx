import React, { useState } from "react";
import rasimlar from "../../../../assets/img/Elbekaka.jpg";
import Swaperkorupsiya from "../../../../components/Swaperkorupsiya"; 

const Korupsiyagaqarshikurash = () => {
  const [currentTab, setCurrentTab] = useState(0);

  const tabs = [
    { name: <strong>Biografiya</strong>, content: (
      <ul className="footer-text text-sm leading-relaxed list-disc pl-4">
        <li><span className="font-bold">1997-2001 yy.</span> - Samarqand davlat universiteti talabasi</li>
        <li><span className="font-bold">2002-2004 yy.</span> - Samarqand davlat universiteti magistranti</li>
        <li><span className="font-bold">2001-2005 yy.</span> – Samarqand temir yo‘l transporti KHK o‘qituvchisi</li>
        <li><span className="font-bold">2005-2012 yy.</span> - Samarqand temir yo‘l transporti KHK kunduzgi bo‘lim boshlig‘i</li>
        <li><span className="font-bold">2012-2014 yy.</span> – Samarqand davlat universiteti, fizika fakulteti laboranti</li>
        <li><span className="font-bold">2014-2017 yy.</span> - Samarqand davlat universiteti, fizika fakulteti assistenti</li>
        <li><span className="font-bold">2017-2017 yy.</span> – Samarqand “Temurbeklar” maktabi direktori</li>
        <li><span className="font-bold">2018- 2019 yy.</span>   – Sartepo turizm va maishiy xizmat kasb-hunar kolleji direktori</li>
        <li><span className="font-bold">2020 y</span> – <span className="font-bold">2021-y</span> Samarqand davlat universiteti, fizika fakulteti  ilmiy xodimi</li>
        <li><span className="font-bold">2021-y-x.v</span> Samarqand davlat universitetining Kattaqo‘rg’on filialida Korrupsiyaga qarshi kurashish kompleans nazorat tizimini boshqarish bo‘limi boshlig’i</li>
      </ul>
    )},
    { name: <strong>Bo‘lim faoliyati</strong>, content: (
      <p className="footer-text text-sm leading-relaxed">
        <ul className="footer-text text-sm leading-relaxed list-disc pl-4">
          <li><span>Bо‘lim Samarqand davlat universiteti Kattaqo’rg’on filialining tarkibiy bо‘linmasi hisoblanadi.</span></li>
          <li><span>Bо‘limning faoliyati oliy ta’lim muassasasida “Komplayens nazorat” tizimini boshqarish, shuningdek, korrupsiyaga qarshi kurashish faoliyatini olib borishga yо‘naltirilgan bо‘lib, о‘z vakolatlari doirasida bevosita SamDUKF direktoriga bо‘ysunadi hamda Oliy va о‘rta maxsus ta’lim vazirligi (keyingi о‘rinlarda - vazirlik)ning Komplayens nazorat va korrupsiyaga karshi kurashish bо‘limiga hisobot beradi.</span></li>
          <li><span>Bо‘lim о‘z faoliyatida О‘zbekiston Respublikasi Konstitusiyasiga va qonunlariga, O‘zbekiston Respublikasi Oliy Majlisining qarorlariga, О‘zbekiston Respublikasi Prezidentining Farmonlari, Qarorlari va farmoyishlariga, О‘zbekiston Respublikasi Vazirlar Mahkamasining Qarorlari va farmoyishlariga, vazirlik buyruqlariga va Hay’ati karorlariga, SamDUKFning ichki buyruqlari, shuningdek, boshqa qonun hujjatlariga amal qiladi.</span></li>
          <li><span>Bо‘lim о‘z faoliyatini Samarqand davlat universiteti Kattaqo‘rg’on filialining boshqa bо‘linmalari bilan о‘zaro hamkorlikda amalga oshiradi.</span></li>
        </ul>
      </p>
    )},
    { name: <strong>Bо‘limning asosiy vazifalari</strong>, content: (
      <p className="footer-text text-sm leading-relaxed">
        <ul className="footer-text text-sm leading-relaxed list-disc pl-4">
          <li><span>Korrupsiyaga qarshi kurashish “Kompleans nazorat” tizimini boshqarish bo‘limining asosiy vazifalari:</span></li>
          <li><span>SamDUKFda korrupsiyaga oid huquqbuzarliklarni profilaktika qilish va ularga qarshi kurashish;</span></li>
          <li><span>Oliy ta’lim tizimida “Korrupsiyasiz soha” loyihasini oliy ta’lim muassasasi miqyosida amalga oshirishga qaratilgan chora-tadbirlar ijrosini ta’minlash;</span></li>
          <li><span>SamDUKFda korrupsiyaga karshi kurash “Komplayens nazorat” tizimini joriy etish va uni amalga oshirish;</span></li>
          <li><span>SamDUKFda korrupsiyaga oid xavf-xatarlar yuqori bо‘lgan yӯnalishlar hamda korrupsiyaga oid huquqbuzarliklar sodir etilishining sabab va shart-sharoitlarini aniqlash;</span></li>
          <li><span>SamDUKFda korrupsiya kо‘rinishlari namoyon bо‘lishiga olib keladigan tizimli muammolar va ularni bartaraf etish bо‘yicha tegishli takliflarni kiritgan holda axborot berib borish;</span></li>
          <li><span>SamDUKFda korrupsiyaga oid huquqbuzarliklarning sabab va shart-sharoitlarini bartaraf etish hamda korrupsiyaga qarshi kurashish choralarining samaradorligini oshirishga qaratilgan dasturlar ijrosini ta’minlash;</span></li>
          <li><span>SamDUKFda korrupsiyaga qarshi kurashishga yо‘naltirilgan jamoatchilik nazoratini muvofiqlashtirib borish. Shuningdek, zamonaviy usullar va axborot-kommunikatsiya texnologiyalari asosida korrupsiyaga qarshi monitoring olib borish;</span></li>
          <li><span>Korrupsiyaga qarshi kurashish va jamoat nazorati sohasida umum e’tirof etilgan xalqaro standartlar va xorijning ijobiy tajribasini о‘rganish hamda ilg‘or jihatlarni tatbiq etish bо‘yicha takliflar ishlab chiqish;</span></li>
          <li><span>Oliy ta’lim muassasasida korrupsiyaning holati, tendensiyalari va sabablari hamda korrupsiyaga karshi choralar kо‘rishning samaradorligi yuzasidan sotsiologik, ilmiy va boshqa tadqiqotlarni tashkil etish va takliflar ishlab chiqish;</span></li>
        </ul>
      </p>
    )},
    { name: <strong>Bо‘limning asosiy funksiyalari</strong>, content: (
      <p className="footer-text text-sm leading-relaxed">
        <ul className="footer-text text-sm leading-relaxed list-disc pl-4">
        <li><span>SamDUKFda korrupsiyaga qarshi kurashishga oid qonunlar va qonunosti hujjatlar, shuningdek, Vazirlik Hay’ati qarorlari va buyruqlariga rioya etilishi ustidan nazorat olib boradi;</span></li>
        <li><span>Korrupsiyaga oid huquqbuzarliklarning oldini olishga qaratilgan chora-tadbirlar va ish rejalarini ishlab chiqadi, ularning tо‘liq, sifatli va о‘z vaqtida ijro etilishini ta’minlaydi, belgilangan chora-tadbirlarning amalga oshirilishi ahvolini о‘rganadi, natijalari bо‘yicha ma’lumotlar tayyorlaydi;</span></li>
        <li><span>SamDUKFda “Korrupsiyasiz soha” loyihasini amalga oshiradi;</span></li>
        <li><span>SamDUKFda korrupsiyaga qarshi kurashish bо‘yicha chora-tadbirlarni amalga oshirishga qaratilgan ichki hujjatlar loyihalarini ishlab chiqadi va tasdiqlash uchun direktorga kiritadi;</span></li>
        <li><span>SamDUKFning ichki hujjatlarida aniqlangan korrupsiyaviy normalarni bartaraf qilish bо‘yicha takliflar ishlab chiqadi;</span></li>
        <li><span>SamDUKFda korrupsiyaviy xavf-xatarlarni baholaydi va ularni kamaytirish yuzasidan chora-tadbirlar rejalarini ishlab chiqadi;</span></li>
        <li><span>SamDUKFning profsssor-о‘qituvchilari, boshqaruv, texnik, xizmat kо‘rsatuvchi va о‘quv-yordamchi xodimlarining hatti-harakatlaridagi korrupsiyaviy xavf xatarlar va huquqbuzarliklar haqida kelib tushadigan murojaatlar va anonim xabarlarni kо‘rib chiqadi hamda о‘rnatilgan tartibda choralar kо‘radi;</span></li>
        <li><span>SamDUKFda korrupsiya faktlarga doir xizmat tekshiruvlarini reyestrini yuritib boradi;</span></li>
        <li><span>Davlat xaridlarini amalga oshirishda manfaatlar tо‘qnashuvini tahlil qilishda va kontragentlarning ishonchliligini tekshirishda ishtirok etadi;</span></li>
        <li><span>SamDUKF xodimlari о‘rtasida manfaatlar tо‘qnashuvi monitoringini yuritadi va tegishli takliflar kiritadi;</span></li>
        <li><span>SamDUKFning professor-о‘qituvchilari, boshqaruv, texnik, xizmat kо‘rsatuvchi, о‘quv-yordamchi xodimlari о‘rtasida muntazam ravishda profilaktik suhbatlar tashkil etib boradi;</span></li>
        <li><span>Oliy ta’lim muassasasi faoliyatida korrupsiyaviy holatlarni aniqlash maqsadida professor-о‘qituvchilar, boshqaruv, texnik, xizmat kо‘rsatuvchi, о‘quv-yordamchi xodimlar, talabalar va aholi о‘rtasida sо‘rovlar о‘tkazadi;</span></li>
        <li><span>Sо‘rovlar, ijtimoiy va boshqa tadkiqotlar asosida korrupsiyaga qarshi kurashish targ‘iboti bӯyicha chora-tadbirlar natijalari va ta’sirini muntazam ravishda baholab boradi hamda keyingi chora-tadbirlarni belgilashda baholash natijalaridan foydalanadi;</span></li>
        <li><span>Professor-о‘qituvchilar, talaba-yoshlar о‘rtasida korrupsiyaga qarshi kurashishga qaratilgan konferensiyalar, uchrashuvlar, seminarlar, tanlovlar tashkil etadi;</span></li>
        <li><span>SamDUKFda korrupsiyaga oid huquqbuzarliklar sodir etilishining shart-sharoitlari va sabablarini о‘rganadi, shuningdek, ularni bartaraf etish bо‘yicha takliflarni ishlab chiqadi;</span></li>
        <li><span>SamDUKFning rasmiy veb-saytida “Korrupsiyaga qarshi kurashish” bо‘limidagi ma’lumotlarni muntazam ravishda yangilab borilishini ta’minlaydi;</span></li>
        <li><span>O‘zbekiston Respublikasi Prezidentining “O‘zbekiston Respublikasi “Manfaatlar to‘qnashuvi to‘g‘risida”gi Qonuni ijrosini samarali tashkil etish chora-tadbirlari to‘g‘risida” 2024-yil 5-iyundagi PQ-210-son qarorida belgilangan vazifalarning ijrosini ta’minlash;</span></li>
        <li><span>Har chorakda va zaruratga kura korrupsiyaga qarshi kurashish bо‘yicha amalga oshirilgan ishlar hamda SamDUKFdagi korrupsiyaviy vaziyat haqida direktorga hamda Oliy va о‘rta maxsus ta’lim vazirligining Ҝomplayens nazorat va korrupsiyaga qarshi kurashish bо‘limiga hisobot beradi;</span></li>
        <li><span>Oliy va о‘rta maxsus ta’lim vazirligining Komplayens nazorat va korrupsiyaga qarshi kurashish bо‘limi hamda korrupsiyaga qarshi qurashish bо‘yicha faoliyatni amalga oshiruvchi boshqa davlat organlari va tashkilotlari, ota-onalar bilan korrupsiyaga qarshi kurashish sohasida samarali hamkorlikni yо‘lga kо‘yadi;</span></li>
        <li><span>SamDUKFda korrupsiyaga qarshi amalga oshirilgan ishlar monitoringini yuritadi, tahliliy materiallarni rahbariyatga hamda vazirlikka kiritib boradi.</span></li>

        </ul>
      </p>
    )},
  ];

  return (
    <div className="container max-w-[1210px] mx-auto mt-[200px] px-6 sm:px-6 lg:px-8">
      {/* Profile Section */}
      <div className="flex flex-wrap md:flex-nowrap border- rounded-xl shadow-xl border-blue-500 mb-10 bg-gray-100">
        <div className="w-full md:w-[319px] bg-gray-200 rounded-tl-xl flex justify-center items-center md:pt-[80px] pb-20 py-6">
          <img
            src={rasimlar}
            alt="Image"
            className="border-4 border-blue-500 rounded-full w-48 h-48 md:w-60 md:h-60"
          />
        </div>
        <div className="w-full px-12 py-12 md:py-12">
          <h3 className="text-center text-lg md:text-2xl font-semibold">
            Korrupsiyaga qarshi kurashish 'Komplaens-nazorat' tizimini boshqarish bo‘limi
          </h3>
          
          <div className="mt-10 space-y-10">
            <h3 className="text-lg md:text-2xl">
            <p>
              <strong>F.I.O.:</strong> <span>Xudoyqulov Elbek Botirovich</span>
            </p>
            <br />
            <p>
              <strong>Lavozimi:</strong>{" "}
              <span>
                Bo'limi boshlig'i
              </span>
            </p>         
            <p>
              <strong>Qabul vaqti: </strong>{" "}
              <span>Dushanba – Shanba 8:30 dan 16:00 gacha</span>
            </p>
            <p>
              <strong>Telefon:</strong> <span>+998 91 530 22 21</span>
            </p>
            <p>
              <strong>E-mail:</strong> <span>exudoykulov78@gmail.com</span>
            </p>
          </h3>
          </div>
          
        </div>
        
      </div>

      {/* Tabs Section */}
      <div className="tabs">
        <ul className="flex justify-start border-b mb-4">
          {tabs.map((tab, index) => (
            <li
              key={index}
              className={`cursor-pointer py-2 px-4 ${currentTab === index ? "border-b-2 border-blue-600" : ""}`}
              onClick={() => setCurrentTab(index)}
            >
              {tab.name}
            </li>
          ))}
        </ul>
        <div className="tab-content">
          {tabs[currentTab].content}
        </div>
      </div>

      {/* Swaperkorupsiya Component */}
      <Swaperkorupsiya />
    </div>
  );
};

export default Korupsiyagaqarshikurash;
