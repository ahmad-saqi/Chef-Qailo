// src/components/Statistics.js
import React from "react";
import LineChart from "./LineChart"; // Import LineChart component

const Statistics = () => {
  return (
    <div className="bg-white p-6 rounded-lg  mt-6">
      <h3 className="text-xl font-bold mb-4">Statistics</h3>
      <div className="grid grid-cols-5 gap-4">
        <div className="col-span-4">
          <LineChart /> {/* Add the LineChart component here */}
        </div>
        <div className="flex items-center justify-center">
          <img src="/pie-chart.png" alt="Pie Chart" />
        </div>
      </div>
    </div>
  );
};

export default Statistics;
