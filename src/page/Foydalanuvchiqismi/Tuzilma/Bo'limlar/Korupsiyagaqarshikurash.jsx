import React, { useState } from "react";
import rasimlar from "../../../../assets/img/Elbekaka.jpg";
import Swaperkorupsiya from "../../../../components/Swaperkorupsiya";

const Korupsiyagaqarshikurash = () => {
  
  const [currentSlide, setCurrentSlide] = useState(0);

  const showSlide = (index) => {
    const slides = document.querySelectorAll(".slider-images img");
    if (index >= slides.length) {
      setCurrentSlide(0);
    } else if (index < 0) {
      setCurrentSlide(slides.length - 1);
    } else {
      setCurrentSlide(index);
    }
  };
  const nextSlide = () => {
    showSlide(currentSlide + 1);
  };

  const prevSlide = () => {
    showSlide(currentSlide - 1);
  };

  return (
    <div className="container max-w-[1210px] mx-auto mt-[200px] px-4 sm:px-6 lg:px-8">
      {/* Profile Section */}
      <div className="flex flex-wrap md:flex-nowrap border- rounded-xl shadow-xl border-blue-500 mb-10 bg-gray-100">
        <div className="w-full md:w-[319px] bg-gray-200 rounded-tl-xl flex justify-center items-center md:pt-[80px] pb-20 py-6">
          <img
            src={rasimlar}
            alt="Image"
            className="border-6 border-blue-500 rounded-full w-48 h-48 md:w-60 md:h-60"
          />
        </div>
        <div className="w-full px-4 py-6 md:py-4">
          <h1 className="text-center text-lg md:text-2xl font-semibold">
          Korrupsiyaga qarshi kurashish 'Komplaens-nazorat' tizimini boshqarish bo‘limi
          </h1>
          <div className="mt-4 space-y-2">
            <p>
              <strong>F.I.O.:</strong> <span>Xudoyqulov Elbek Botirovich</span>
            </p>
            <p>
              <strong>Lavozimi:</strong>{" "}
              <span>
                Korruptsiyaga qarshi kurashish “Kompleans nazorat” tizimini boshqarish bo'limi boshlig'i
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
          </div>
          <p className="description mt-4 text-sm">
          2021-yilda Samarqand davlat universitetining Kattaqo‘rg’on filialida Korrupsiyaga qarshi kurashish
          kompleans nazorat tizimini boshqarish bo‘limi boshlig’i

          </p>
        </div>
      </div>

      {/* Footer Text */}
      <p className="footer-text text-sm leading-relaxed">
      <p>Biografiya</p>
      <p>1997-2001 yy. - Samarqand davlat universiteti talabasi</p>
      <p>2002-2004 yy. - Samarqand davlat universiteti magistranti</p>
      <p>2001-2005 yy. – Samarqand temir yo‘l transporti KHK o‘qituvchisi</p>
      <p>2005-2012 yy. - Samarqand temir yo‘l transporti KHK kunduzgi bo‘lim boshlig‘i</p>
      <p>2012-2014 yy. – Samarqand davlat universiteti, fizika fakulteti laboranti</p>
      <p>2014-2017 yy. - Samarqand davlat universiteti, fizika fakulteti assistenti</p>
      <p>2017-2017 yy. – Samarqand “Temurbeklar” maktabi direktori</p>
      <p>2018- 2019 yy.   – Sartepo turizm va maishiy xizmat kasb-hunar kolleji direktori</p>
      <p>2020 y – 2021-y Samarqand davlat universiteti, fizika fakulteti  ilmiy xodimi	 </p>
      <p>2021-y-x.v Samarqand davlat universitetining Kattaqo‘rg’on filialida Korrupsiyaga qarshi kurashish
      kompleans nazorat tizimini boshqarish bo‘limi boshlig’i</p>
      </p>

      <p className="footer-text text-sm leading-relaxed">
      <p>Bo‘lim faoliyati haqida:</p>
      <p>-Bо‘lim Samarqand davlat universiteti Kattaqo’rg’on filialining tarkibiy bо‘linmasi hisoblanadi.</p>
      <p>-Bо‘limning faoliyati oliy ta’lim muassasasida “Komplayens nazorat” tizimini boshqarish, shuningdek, korrupsiyaga qarshi kurashish faoliyatini olib borishga yо‘naltirilgan bо‘lib, о‘z vakolatlari doirasida bevosita SamDUKF direktoriga bо‘ysunadi hamda Oliy va о‘rta maxsus ta’lim vazirligi (keyingi о‘rinlarda - vazirlik)ning Komplayens nazorat va korrupsiyaga karshi kurashish bо‘limiga hisobot beradi.</p>
      <p>-Bо‘lim о‘z faoliyatida О‘zbekiston Respublikasi Konstitusiyasiga va qonunlariga, O‘zbekiston Respublikasi Oliy Majlisining qarorlariga, О‘zbekiston Respublikasi Prezidentining Farmonlari, Qarorlari va farmoyishlariga, О‘zbekiston Respublikasi Vazirlar Mahkamasining Qarorlari va farmoyishlariga, vazirlik buyruqlariga va Hay’ati karorlariga, SamDUKFning ichki buyruqlari, shuningdek, boshqa qonun hujjatlariga amal qiladi.</p>
      <p>-Bо‘lim о‘z faoliyatini Samarqand davlat universiteti Kattaqo‘rg’on filialining boshqa bо‘linmalari bilan о‘zaro hamkorlikda amalga oshiradi</p>
      </p>
      <p className="footer-text text-sm leading-relaxed">
      <p>Bo‘limning asosiy vazifalari:</p>
      Korrupsiyaga qarshi kurashish “Kompleans nazorat” tizimini boshqarish bo‘limining asosiy vazifalari:
SamDUKFda korrupsiyaga oid huquqbuzarliklarni profilaktika qilish va ularga qarshi kurashish;
oliy ta’lim tizimida “Korrupsiyasiz soha” loyihasini oliy ta’lim muassasasi miqyosida amalga oshirishga qaratilgan chora-tadbirlar ijrosini ta’minlash;
SamDUKFda korrupsiyaga karshi kurash “Komplayens nazorat” tizimini joriy etish va uni amalga oshirish;
SamDUKFda korrupsiyaga oid xavf-xatarlar yuqori bо‘lgan yӱnalishlar hamda korrupsiyaga oid huquqbuzarliklar sodir etilishining sabab va shart-sharoitlarini aniqlash;
SamDUKFda korrupsiya kо‘rinishlari namoyon bо‘lishiga olib keladigan tizimli muammolar va ularni bartaraf etish bо‘yicha tegishli takliflarni kiritgan holda axborot berib borish;
SamDUKFda korrupsiyaga oid huquqbuzarliklarning sabab va shart-sharoitlarini bartaraf etish hamda korrupsiyaga qarshi kurashish choralarining samaradorligini oshirishga qaratilgan dasturlar ijrosini ta’minlash;
SamDUKFda korrupsiyaga qarshi kurashishga yо‘naltirilgan jamoatchilik nazoratini muvofiqlashtirib borish. Shuningdek, zamonaviy usullar va axborot-kommunikatsiya texnologiyalari asosida korrupsiyaga qarshi monitoring olib borish;
korrupsiyaga qarshi kurashish va jamoat nazorati sohasida umum e’tirof etilgan xalqaro standartlar va xorijning ijobiy tajribasini о‘rganish hamda ilg‘or jihatlarni tatbiq etish bо‘yicha takliflar ishlab chiqish;
oliy ta’lim muassasasida korrupsiyaning holati, tendensiyalari va sabablari hamda korrupsiyaga karshi choralar kо‘rishning samaradorligi yuzasidan sotsiologik, ilmiy va boshqa tadqiqotlarni tashkil etish va takliflar ishlab chiqish;
    1.	Bо‘lim о‘ziga yuklangan vazifalarni bajarish uchun quyidagi funksiyalarni amalga oshiradi:
SamDUKFda korrupsiyaga qarshi kurashishga oid qonunlar va qonunosti hujjatlar, shuningdek, Vazirlik Hay’ati qarorlari va buyruqlariga rioya etilishi ustidan nazorat olib boradi;
korrupsiyaga oid huquqbuzarliklarning oldini olishga qaratilgan chora-tadbirlar va ish rejalarini ishlab chiqadi, ularning tо‘liq, sifatli va о‘z vaqtida ijro etilishini ta’minlaydi, belgilangan chora-tadbirlarning amalga oshirilishi ahvolini о‘rganadi, natijalari bо‘yicha ma’lumotlar tayyorlaydi;
SamDUKFda “Korrupsiyasiz soha” loyihasini amalga oshiradi;
SamDUKFda korrupsiyaga qarshi kurashish bо‘yicha chora-tadbirlarni amalga oshirishga qaratilgan ichki hujjatlar loyihalarini ishlab chiqadi va tasdiqlash uchun direktorga kiritadi;
SamDUKFning ichki hujjatlarida aniqlangan korrupsiyaviy normalarni bartaraf qilish bо‘yicha takliflar ishlab chiqadi;
SamDUKFda korrupsiyaviy xavf-xatarlarni baholaydi va ularni kamaytirish yuzasidan chora-tadbirlar rejalarini ishlab chiqadi;
SamDUKFning profsssor-о‘qituvchilari, boshqaruv, texnik, xizmat kо‘rsatuvchi va о‘quv-yordamchi xodimlarining hatti-harakatlaridagi korrupsiyaviy xavf xatarlar va huquqbuzarliklar haqida kelib tushadigan murojaatlar va anonim xabarlarni kо‘rib chiqadi hamda о‘rnatilgan tartibda choralar kо‘radi;
SamDUKFda korrupsiya faktlarga doir xizmat tekshiruvlarini reyestrini yuritib boradi;
davlat xaridlarini amalga oshirishda manfaatlar tо‘qnashuvini tahlil qilishda va kontragentlarning ishonchliligini tekshirishda ishtirok etadi;
SamDUKF xodimlari о‘rtasida manfaatlar tо‘qnashuvi monitoringini yuritadi va tegishli takliflar kiritadi;
SamDUKFning professor-о‘qituvchilari, boshqaruv, texnik, xizmat kо‘rsatuvchi, о‘quv-yordamchi xodimlari о‘rtasida muntazam ravishda profilaktik suhbatlar tashkil etib boradi;
oliy ta’lim muassasasi faoliyatida korrupsiyaviy holatlarni aniqlash maqsadida professor-о‘qituvchilar, boshqaruv, texnik, xizmat kо‘rsatuvchi, о‘quv-yordamchi xodimlar, talabalar va aholi о‘rtasida sо‘rovlar о‘tkazadi;
sо‘rovlar, ijtimoiy va boshqa tadkiqotlar asosida korrupsiyaga qarshi kurashish targ‘iboti bӱyicha chora-tadbirlar natijalari va ta’sirini muntazam ravishda baholab boradi hamda keyingi chora-tadbirlarni belgilashda baholash natijalaridan foydalanadi;
professor-о‘qituvchilar, talaba-yoshlar о‘rtasida korrupsiyaga qarshi kurashishga qaratilgan konferensiyalar, uchrashuvlar, seminarlar, tanlovlar tashkil etadi;
SamDUKFda korrupsiyaga oid huquqbuzarliklar sodir etilishining shart-sharoitlari va sabablarini о‘rganadi, shuningdek, ularni bartaraf etish bо‘yicha takliflarni ishlab chiqadi;
SamDUKFning rasmiy veb-saytida “Korrupsiyaga qarshi kurashish” bо‘limidagi ma’lumotlarni muntazam ravishda yangilab borilishini ta’minlaydi;
O‘zbekiston Respublikasi Prezidentining “O‘zbekiston Respublikasi “Manfaatlar to‘qnashuvi to‘g‘risida”gi Qonuni ijrosini samarali tashkil etish chora-tadbirlari to‘g‘risida” 2024-yil 5-iyundagi PQ-210-son qarorida belgilangan vazifalarning ijrosini ta’minlash;
har chorakda va zaruratga kura korrupsiyaga qarshi kurashish bо‘yicha amalga oshirilgan ishlar hamda SamDUKFdagi korrupsiyaviy vaziyat haqida direktorga hamda Oliy va о‘rta maxsus ta’lim vazirligining Ҝomplayens nazorat va korrupsiyaga qarshi kurashish bо‘limiga hisobot beradi;
Oliy va о‘rta maxsus ta’lim vazirligining Komplayens nazorat va korrupsiyaga qarshi kurashish bо‘limi hamda korrupsiyaga qarshi qurashish bо‘yicha faoliyatni amalga oshiruvchi boshqa davlat organlari va tashkilotlari, ota-onalar bilan korrupsiyaga qarshi kurashish sohasida samarali hamkorlikni yо‘lga kо‘yadi;
SamDUKFda korrupsiyaga qarshi amalga oshirilgan ishlar monitoringini yuritadi, tahliliy materiallarni rahbariyatga hamda vazirlikka kiritib boradi.

      </p>

      {/* Swaperkorupsiya Component */}
      <Swaperkorupsiya />

      {/* Documents Section */}
      <div className="mt-10 space-y-6">
        <div className="w-full shadow-xl rounded-lg py-4 px-6 bg-gray-100">
          <h2 className="text-lg font-semibold">Bo'lim Hujjatlari</h2>
          <ul className="mt-2 space-y-2">
            <li>
              <a className="text-blue-600 font-bold" href="#">
                Korruptsiyaga Qarshi Kurashish Qonuni
              </a>
            </li>
          </ul>
        </div>

        <div className="w-full shadow-xl rounded-lg py-4 px-6 bg-gray-100">
          <h2 className="text-lg font-semibold">
            Manfatlar to'qnashuvi bo'yicha namunaviy deklaratsiya 2024-yil
          </h2>
          <ul className="mt-2">
            <li>
              <a className="text-blue-600 font-bold" href="#">
                Manfaatlar to'qnashuvi bo'yicha namunaviy deklaratsiyani ko'rish
                va yuklab olish
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Korupsiyagaqarshikurash;
