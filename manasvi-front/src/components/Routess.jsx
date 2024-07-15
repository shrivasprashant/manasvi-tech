import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";

import Login from "./Admin/Login";
import Register from "./Admin/Register";
import CreateProducts from "./Admin/CreateProducts";
import CreateTeam from "./Admin/CreateTeam";
import CreateReview from "./CreateReview";
import AboutUsPage from "../pages/AboutUsPage";
import WebServices from "../pages/WebServices";
import DigitalServices from "../pages/DigitalServices";
import AppServices from "../pages/AppServices";
import SoftwareServices from "../pages/SoftwareServices";
import ProductPage from "../pages/ProductPage";
import TeamSection from "../pages/TeamSection";
import Contact from "../components/Contact"
import ServiceManagement from "./Admin/ServiceManagement";
import Admin from "./Admin/Admin";
import ProjectManagement from "./Admin/ProjectManagement";
import TeamManagement from "./Admin/TeamManagement";
import ReviewManagement from "./Admin/ReviewManagement";
import ContactManagement from "./Admin/ContactManagement";

function Routess() {
  return (
    <div>
      <Routes>
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/CreateTeam" element={<CreateTeam />} />
        <Route path="/admin/CreateProducts" element={<CreateProducts />} />
        <Route path="/CreateReview" element={<CreateReview />} />
        <Route path="/admin/services" element={<ServiceManagement />} />
        <Route path="/admin/ManageProducts" element={<ProjectManagement />} />
        <Route path="/admin/ManageTeam" element={<TeamManagement />} />
        <Route path="/admin/ManageReviews" element={<ReviewManagement />} />
        <Route path="/admin/ManageContacts" element={<ContactManagement />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/services/web" element={<WebServices />} />
        <Route path="/services/digital" element={<DigitalServices />} />
        <Route path="/services/app" element={<AppServices />} />
        <Route path="/services/software" element={<SoftwareServices />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/team" element={<TeamSection />} />
        <Route path="/contact" element={<Contact />} />
      


        <Route path="*" element={<h1>page not found</h1>} />
      </Routes>
    </div>
  );
}

export default Routess;
