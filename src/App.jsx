import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AnnouncementBar from './Components/Announcement'
import Navbar from './Components/Layout/Navbar'
import Homepage from './Components/Homepage'
import Footer from './Components/Layout/Footer'
import ServicesSection from './Components/Services'
import AboutSection from './Components/About'
import FeatureSection from './Components/Feature'
import GallerySection from './Components/Gallery'
import PartnersSection from './Components/Partners'
import ContactMapSection from './Components/ContactMap'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <AnnouncementBar></AnnouncementBar>
   <Navbar></Navbar>
   <Homepage></Homepage>
   <ServicesSection></ServicesSection>
   <AboutSection></AboutSection>
   <FeatureSection></FeatureSection>
   <GallerySection></GallerySection>
   <PartnersSection></PartnersSection>
   <ContactMapSection></ContactMapSection>
   <Footer></Footer>
   
   </>

  )
}

export default App
