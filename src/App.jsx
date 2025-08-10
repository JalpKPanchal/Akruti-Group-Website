import { Routes, Route } from 'react-router-dom'

import { useState } from 'react'

import './App.css'

import AnnouncementBar from './Components/Announcement'
import Navbar from './Components/Layout/Navbar'
import Footer from './Components/Layout/Footer'
import Homepage from './Components/Homepage'
import ServicesSection from './Components/Services'
import AboutSection from './Components/About'
import FeatureSection from './Components/Feature'
import GallerySection from './Components/Gallery'
import PartnersSection from './Components/Partners'
import ContactMapSection from './Components/ContactMap'
import Careers from './Components/Career'
import ScrollToTop from './ScrollToTop'
import PageLayout from './Components/Layout/PageLayout'
import ContactUs from './Components/ContactUs'
import SolarEPC from './Components/SolarEPC'
import WindSolarHybrid from './Components/WindSolarHybrid'
import SolarIC from './Components/Solar ic'
import GalleryPage from './Components/GalleryPage'

function App() {
  return (
    <>
      <AnnouncementBar />
      <PageLayout>
 <ScrollToTop />
      <Routes>
        
        <Route
          path="/"
          element={
            <>
              <Homepage />
              <ServicesSection />
              <AboutSection />
              <FeatureSection />
              <GallerySection />
              <PartnersSection />
              <ContactMapSection />
            </>
          }
        />
        <Route path="/career" element={<Careers />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/solarepc" element={<SolarEPC />} />
          <Route path="/windsolarhybrid" element={<WindSolarHybrid />} />
            <Route path="/solaric" element={<SolarIC />} />
            <Route path="/gallerypage" element={<GalleryPage />} /> 
            {/* //gallerypage done */}
      </Routes>

    </PageLayout>
    </>
  )
}

export default App
