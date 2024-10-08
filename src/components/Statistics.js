// src/components/Statistics.js
import React from "react";
import LineChart from "./LineChart"; // Import LineChart component

const Statistics = () => {
  return (
    <div className="bg-white p-4 sm:p-6 rounded-xl mt-6 w-full">
      <h3 className="text-lg sm:text-xl font-bold mb-4">Statistics</h3>

      <div className="w-full">
        <LineChart /> {/* Add the LineChart component here */}
      </div>
    </div>
  );
};

export default Statistics;
