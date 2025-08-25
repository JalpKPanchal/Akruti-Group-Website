import { Routes, Route } from "react-router-dom";

import { useState } from "react";

// import "./App.css";

import AnnouncementBar from "./Components/Announcement";
import Navbar from "./Components/Layout/Navbar";
import Footer from "./Components/Layout/Footer";
import Homepage from "./Components/Homepage";
import ServicesSection from "./Components/Services";
import AboutSection from "./Components/About";
import FeatureSection from "./Components/Feature";
import GallerySection from "./Components/Gallery";
import PartnersSection from "./Components/Partners";
import ContactMapSection from "./Components/ContactMap";
import Careers from "./Components/Career";
import ScrollToTop from "./ScrollToTop";
import PageLayout from "./Components/Layout/PageLayout";
import ContactUs from "./Components/ContactUs";
import SolarEPC from "./Components/SolarEPC";
import WindSolarHybrid from "./Components/WindSolarHybrid";
// import SolarIC from "./Components/Solar ic";
import GalleryPage from "./Components/GalleryPage";
import Projects from "./Components/Our Projects";
import SolarRooftop from "./Components/SolarRooftop";

function App() {
  return (
    <>
      {/* <Navbar/> */}
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Homepage />
              <ServicesSection />
              {/* <AboutSection /> */}
              <FeatureSection />
              {/* <GallerySection /> */}
              <PartnersSection />
              <ContactMapSection />
              <Footer />
            </>
          }
        />
        <Route path="/career" element={<Careers />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/solarepc" element={<SolarEPC />} />
        <Route path="/windsolarhybrid" element={<WindSolarHybrid />} />
        <Route path="/solarrooftop" element={<SolarRooftop/>} />

        {/* <Route path="/solaric" element={<SolarIC />} /> */}
        <Route path="/gallerypage" element={<GalleryPage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<AboutSection />} />
        {/* //gallerypage done */}
      </Routes>
      {/*akruti group*/}
      {/* <Footer/> */}
    </>
  );
}

export default App;
