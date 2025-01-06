import React, { Children } from "react";
import Header from "./components/Foydalanuvchiqismiuchun/Layoutcomponents/Header";
import RoutesComponent from "./routes/RoutesComponent";
import Footer from "./components/Foydalanuvchiqismiuchun/Layoutcomponents/Footer";
import "./App.css";

const App = () => {
  return (
    <>
      <Header className="sticky top-0 z-50 mb-10 mx-auto" />
      <div className="">
      {Children.toArray(<RoutesComponent />)}
      </div>
      <Footer />
    </>
  );
};

export default App;
