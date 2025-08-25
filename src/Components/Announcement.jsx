import React, { useEffect, useState, useRef } from "react";
import "../announcement-bar.css";

const messages = [
  "Akruti Group secured 50 MW project from Bondada Engineering Ltd., Maharashtra",
  "Akruti Group 56 MW ground-mount solar project from Prozeal Green Energy Client GSECL, Gujarat",

];

export default function AnnouncementBar() {
  const [currentMsgIndex, setCurrentMsgIndex] = useState(0);
  const [animation, setAnimation] = useState("slide-in");
  const timeoutRef = useRef();

  useEffect(() => {
    // Animate out after 4.3s, change msg after 0.7s
    timeoutRef.current = setTimeout(() => {
      setAnimation("slide-out-left");
      setTimeout(() => {
        setCurrentMsgIndex((prevIndex) => (prevIndex + 1) % messages.length);
        setAnimation("slide-in-right");
        setTimeout(() => setAnimation("slide-in"), 70); // Let DOM apply slide-in-right, then slide-in
      }, 700);
    }, 4300);

    return () => clearTimeout(timeoutRef.current);
  }, [currentMsgIndex]);

  return (
    <div className="announcement-bar">
      <div className={`announcement-text ${animation}`}>
        {messages[currentMsgIndex]}
      </div>
    </div>
  );
}
