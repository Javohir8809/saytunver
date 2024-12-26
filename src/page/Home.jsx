import Elonlar from "../components/Elonlar";
import Fakultetlar from "../components/Fakultetlar";
import Swaper from "../components/Swaper";
import Yangiliklar from "../components/Yangiliklar";
import Foaltalabalar from "../components/unverstet/Foaltalabalar";
import Haqida from "../components/unverstet/Haqida";
import Deriktor from "./Deriktor";

const Home = () => {
  return (
    <div className=" mt-[121px]">
      <Swaper />
      <div className="container max-w-[1210px]  mx-auto ">
        <Yangiliklar />
        <Elonlar />
        <Fakultetlar />
        {/* <Deriktor /> */}
        <Haqida/>
        <Foaltalabalar/>
      </div>
    </div>
  );
};
export default Home;
