// WindSolarHybrid.jsx
import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";

import { Link } from "react-router-dom";
import "../SolarRooftop.css"; // Adjusted to "./" assuming same directory; change if needed

export default function SolarRooftop() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 120, easing: "ease-in-out" });
  }, []);

  return (
    <>
    
    </>
  );
}
