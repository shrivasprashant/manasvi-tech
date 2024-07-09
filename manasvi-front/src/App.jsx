import React from "react";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
import { useLocation } from "react-router-dom";
import Routess from "./components/Routess";

const App = () => {
  const location = useLocation();

  // const adminPaths = [];

  

  // const isRestrictedRoute = adminPaths.includes(location.pathname.toLowerCase());

  return (
    <div>
      {/* {!isRestrictedRoute && <Header />} */}
      <Routess />
      {/* {!isRestrictedRoute && <Footer />} */}
    </div>
  );
};

export default App;
