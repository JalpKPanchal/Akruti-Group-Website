import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AnnouncementBar from './Components/Announcement'
import Navbar from './Components/Layout/Navbar'
import Homepage from './Components/Homepage'
import Footer from './Components/Layout/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <AnnouncementBar></AnnouncementBar>
   <Navbar></Navbar>
   <Homepage></Homepage>
   <Footer></Footer>
   
   </>

  )
}

export default App
