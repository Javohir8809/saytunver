import React from "react";
import Header from "./components/Foydalanuvchiqismiuchun/Layoutcomponents/Header";
import RoutesComponent from "./routes/RoutesComponent";
import Footer from "./components/Foydalanuvchiqismiuchun/Layoutcomponents/Footer";

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
