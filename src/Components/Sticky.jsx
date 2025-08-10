import React from 'react';
import { FaWhatsapp, FaComments } from 'react-icons/fa';

export default function StickyButtons() {
  return (
    <>
    <div className="sticky-buttons">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/918320292904" // Replace with your number
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        title="WhatsApp"
      >
        <FaWhatsapp />
      </a>

      {/* Live Chat Button */}
      <button className="chat-btn" aria-label="Live Chat" title="Live Chat">
        <FaComments />
      </button>
    </div>
    </>
  );
}
