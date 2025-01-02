import React from "react";


const TestBanner = () => {
  return (
    <div className="test-banner">
      <marquee behavior="scroll" direction="left">
        Ushbu veb-sayt hozirda test rejimida ishlamoqda. Ba'zi funksiyalar mavjud bo'lmasligi yoki kutilganidek ishlamasligi mumkin.
      </marquee>
    </div>
  );
};

export default TestBanner;
