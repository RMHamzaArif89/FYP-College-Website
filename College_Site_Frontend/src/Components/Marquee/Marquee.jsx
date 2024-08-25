import React from 'react';
import './marquee.css'; // Import the CSS file for styling

const Data = [
  { text: "Welcome to GPCSF" },
  { text: "Check out latest Notifications!" },
  { text: "Don't miss to check our complete website" },
  { text: "You can message your query and get response quicky to your query" },
  { text: "You will get all the information related to exam news, fee structure, admisstion process, student rules and regulations" },
];

const Marquee = () => {
  return (
    <div className="marquee-container">
      <div className="marquee-content">
        {Data.map((item, index) => (
          <div className="marquee-item" key={index}>
            {item.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
