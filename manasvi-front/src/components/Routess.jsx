import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";

import Login from "./Admin/Login";
import Register from "./Admin/Register";
import CreateProject from "./Admin/CreateProject";
import CreateProducts from "./Admin/CreateProducts";
import ProductCarousel from "./ProductCarousel";
import ServicesPage from "./ServicesPage";




function Routess() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/CreateProject" element={<CreateProject />} />
        <Route path="/CreateProducts" element={<CreateProducts />} />
        <Route path="/ProductCarousel" element={<ProductCarousel />} />
        <Route path="/services" element={<ServicesPage />} />
        
      </Routes>
    </div>
  );
}

export default Routess;
