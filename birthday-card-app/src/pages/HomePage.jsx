import React from "react";

const HomePage = ({ onOpen }) => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold text-purple-700 mb-6">
        Happy Birthday Sis! 🎂
      </h1>
      <button
        onClick={onOpen}
        className="bg-purple-500 text-white px-6 py-3 rounded-2xl shadow-lg hover:bg-purple-600"
      >
        Open Your Card
      </button>
    </div>
  );
};

export default HomePage;
