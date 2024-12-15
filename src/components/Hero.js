import React, { useState, useEffect } from 'react';
import './Hero.css'; 
// Path to your Tinkerbell image

const Hero = ({ onProceed }) => {
  const [messageIndex, setMessageIndex] = useState(0);
  const messages = [
    "Hi!",
    "Would you like a glimpse of my adventurous journey?",
  ];

  // Function to handle the message transition
  const handleMessageTransition = () => {
    if (messageIndex < messages.length - 1) {
      setTimeout(() => {
        setMessageIndex(messageIndex + 1);
      }, 3000); // Increase the delay to 3 seconds before showing next message
    } else {
      onProceed(); // Trigger the function to render the next screen
    }
  };

  // Use effect to trigger message transition after a delay
  useEffect(() => {
    if (messageIndex === 0) {
      setTimeout(() => {
        setMessageIndex(1); // Automatically move to the next message after 3 seconds
      }, 6000); // Increase the delay for the first message
    }
  }, [messageIndex]);

  return (
    <div className="hero">
      <div>
        <img src="/assets/tinkerbell.png" alt="Tinkerbell" className="tinkerbell" />
      </div>

      <div className="firefly-container">
        {Array.from({ length: 20 }).map((_, index) => (
          <div
            key={index}
            className="firefly"
            style={{
              top: `${Math.random() * 100}vh`,
              left: `${Math.random() * 100}vw`,
              '--i': index, // Custom property for animation delay
            }}
          ></div>
        ))}
      </div>

      <div className={`speech-bubble ${messageIndex === 0 ? 'bubble-appear' : ''}`}>
        {messages[messageIndex]}
      </div>

      {messageIndex === messages.length - 1 && (
        <button className="yes-button" onClick={handleMessageTransition}>
          Yes
        </button>
      )}
    </div>
  );
};

export default Hero;
