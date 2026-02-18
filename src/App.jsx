import React, { useEffect,useState } from "react";
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
import Preloader from "./components/Preloader"
import CookieBanner from "./components/CookieBanner";



const App = () => {
  const [cookieConsent, setCookieConsent] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem("cookieConsent");
    if (saved) setCookieConsent(saved); 
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setCookieConsent("accepted");
  };

  const rejectCookies = () => {
    localStorage.setItem("cookieConsent", "rejected");
    setCookieConsent("rejected");
  };


    useEffect(() => {
      AOS.init({
        duration: 800,
        once: true, 
        offset: 120,
        easing: "ease-out",
      });
    }, []);
  return (
    <>
      <Preloader />
      <Navbar />

      <Routes>
        <Route path="/" index element={<Main />} />
        <Route
          path="/about"
          index
          element={<About cookieConsent={cookieConsent} />}
        />
        <Route
          path="/contact"
          index
          element={<Contact cookieConsent={cookieConsent} />}
        />
        <Route path="/gallery" index element={<FilteredGallery />} />
        <Route path="/services" index element={<Services />} />
      </Routes>

      <Footer />

      {cookieConsent === null && (
        <CookieBanner onAccept={acceptCookies} onReject={rejectCookies} />
      )}
    </>
  );
};

export default App;
