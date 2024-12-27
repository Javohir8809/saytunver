import { GiTeacher } from "react-icons/gi";
import { LuNotebookPen } from "react-icons/lu";
import { PiStudentBold } from "react-icons/pi";
import { FaUniversity } from "react-icons/fa";
import Counter from "../Animation/Counter"; // Counter komponenti

const Haqida = () => {
  return (
    <div className="bg-[#1B6B50] text-white py-10 rounded-xl">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-10 ">
        {/* Fakultetlar */}
        <div className="flex flex-col items-center">
          <FaUniversity size={50} className="text-white mb-4" />
          <h1 className="text-4xl font-bold text-yellow-300">
            <Counter target={2} />
          </h1>
          <span className="text-lg">Fakultetlar</span>
        </div>

        {/* Kafedralar */}
        <div className="flex flex-col items-center">
          <LuNotebookPen size={50} className="text-white mb-4" />
          <h1 className="text-4xl font-bold text-yellow-300">
            <Counter target={5} />
          </h1>
          <span className="text-lg">Kafedralar</span>
        </div>

        {/* O'qituvchilar */}
        <div className="flex flex-col items-center">
          <GiTeacher size={50} className="text-white mb-4" />
          <h1 className="text-4xl font-bold text-yellow-300">
            <Counter target={148} />
          </h1>
          <span className="text-lg">O'qituvchilar</span>
        </div>

        {/* Talabalar */}
        <div className="flex flex-col items-center">
          <PiStudentBold size={50} className="text-white mb-4" />
          <h1 className="text-4xl font-bold text-yellow-300">
            <Counter target={2555} />
          </h1>
          <span className="text-lg">Talabalar</span>
        </div>
      </div>
    </div>
  );
};

export default Haqida;
