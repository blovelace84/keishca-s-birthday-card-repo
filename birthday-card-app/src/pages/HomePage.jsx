import React from "react";
import "./HomePage.css";

const HomePage = ({ onOpen }) => {
  return (
    <div className="homepage">
      <h1 className="text-4xl font-bold text-purple-700 mb-6">
        Happy Birthday Sis! 🎂
      </h1>
      <button onClick={onOpen}>Open Your Card</button>
    </div>
  );
};

export default HomePage;
