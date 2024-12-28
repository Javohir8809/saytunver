import React from "react";
import Header from "./components/Header";
import RoutesComponent from "./routes/RoutesComponent";
import Footer from "./components/Footer";

const App = () => {

  return (
    <>
      <Header className="sticky top-0 z-50 mb-10" />
      <main>
        <RoutesComponent />
      </main>
      <Footer />
    </>
  );
};

export default App;
