import React, { useEffect, useState } from "react";
import "../custom.css";

const messages = [
  "🌞 India's leading EPC company in Solar, EV & Automation!",
  "⚡ 24x7 support for all sustainable energy solutions.",
  "🚀 Connect with us for customized solar setups.",
  "📞 Call now to get a free energy audit!"
];

export default function AnnouncementBar() {
  const [currentMsgIndex, setCurrentMsgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMsgIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="announcement-bar">
      <div className="announcement-text">
        {messages[currentMsgIndex]}
      </div>
    </div>
  );
}
