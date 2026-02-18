import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import { Route,Routes } from "react-router-dom";
import Main from "./components/Main";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Services from "./components/Services";
import AOS from "aos";
import "aos/dist/aos.css";
import FilteredGallery from "./components/FilteredGallery";


const App = () => {

    useEffect(() => {
      AOS.init({
        duration: 800,
        once: true, // animate only first time
        offset: 120,
        easing: "ease-out",
      });
    }, []);
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" index element={<Main />} />
        <Route path="/about" index element={<About />} />
        <Route path="/contact" index element={<Contact />} />
        <Route path="/gallery" index element={<FilteredGallery />} />
        <Route path="/services" index element={<Services />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
