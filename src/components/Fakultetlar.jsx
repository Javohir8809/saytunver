import fakul1 from "../assets/Fakultetlar/yonalishlarimg/Fakultetlar2.jpg";
import fakul2 from "../assets/Fakultetlar/yonalishlarimg/Fakultetlar 3.jpg";
// import fakul3 from "../assets/Fakultetlar/yonalishlarimg/Fakultetlar 3.jpg";

const Fakultetlar = () => {
  return (
    <div className="container max-w-[1210px] mx-auto mt-5 mb-10">
      <div>
        <h1 className="mb-5 font-lato text-4xl">Fakultetlar</h1>
      </div>
      <div className="flex flex-wrap justify-between gap-5">
        <div className="border rounded-lg overflow-hidden w-full sm:w-[48%] md:w-[48%] lg:w-[48%] xl:w-[48%]">
          <img src={fakul1} alt="Samdukf" className="h-[292px] w-full object-cover" />
          <div className="bg-[#1B6B50] text-white py-4 h-14">
            <p className="text-center font-lato">Raqamli talim va Iqdisod fakulteti</p>
          </div>
        </div>
        <div className="border rounded-lg overflow-hidden w-full sm:w-[48%] md:w-[48%] lg:w-[48%] xl:w-[48%]">
          <img src={fakul2} alt="Samdukf" className="h-[292px] w-full object-cover" />
          <div className="bg-[#1B6B50] text-white py-4 h-14">
            <p className="text-center">Pedagogika va tillarni o'qitish fakulteti</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fakultetlar;
