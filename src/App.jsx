import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Layout from "./Layout";
import AboutPage from "./pages/AboutPage";
import CategoriesPage from "./pages/CategoriesPage";
import ContactPage from "./pages/ContactPage";
import SavedNews from "./pages/SavedNews";
import BlogsPage from "./pages/BlogsPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ReadNews from "./components/home/ReadNews";

const App = () => {
  const location = useLocation();
  const hideHeaderFooter = location.pathname === "/" || location.pathname === "/signup";

  return (
    <>
      {!hideHeaderFooter && <Navbar />}

      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Layout />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/saved-news" element={<SavedNews />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/home/read-news" element={<ReadNews/>} />
      </Routes>

      {!hideHeaderFooter && <Footer />}
    </>
  );
};

export default App;
