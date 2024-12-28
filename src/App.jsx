import React from "react";
import Header from "./components/Header";
import RoutesComponent from "./routes/RoutesComponent";

const App = () => {

  return (
    <>
      <Header />
      <main>
        <RoutesComponent />
      </main>
    </>
  );
};

export default App;
