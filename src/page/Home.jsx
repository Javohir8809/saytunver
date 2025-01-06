import Elonlar from "../components/Elonlar";
import Fakultetlar from "../components/Fakultetlar";
import Foydali from "../components/LinkLibrary/Foydali";
import Swaper from "../components/Swaper";
import Yangiyangilikalar from "../components/Yangiyangilikalar";
import Jonli from "../components/imtixon/Jonli";
import Foaltalabalar from "../components/unverstet/Foaltalabalar";
import Haqida from "../components/unverstet/Haqida";

const Home = () => {
  return (
    <div >
      <Swaper />
      <div className="container mx-auto ">
        <Jonli/>
        <Foydali/>
        {/* <Yangiliklar /> */}
        <Yangiyangilikalar/>
        <Elonlar />
        <Fakultetlar />
        <Haqida/>
        <Foaltalabalar/>
      </div>
    </div>
  );
};
export default Home;
