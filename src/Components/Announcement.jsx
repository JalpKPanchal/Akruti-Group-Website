import React, { useEffect, useState } from "react";

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
    <>
    <div className="bg-success text-white py-4 text-center">
      <div
        className="transition"
        style={{
          transition: "transform 0.5s ease-in-out",
          transform: "translateY(0)",
        }}
      >
        <strong>{messages[currentMsgIndex]}</strong>
      </div>
    </div>
    </>
  );
}
