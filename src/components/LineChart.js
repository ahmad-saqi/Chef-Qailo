// src/components/LineChart.js
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend } from 'chart.js';

// Register chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

const LineChart = () => {
  // Months with years as labels for the x-axis
  const data = {
    labels: [
      'Jan 2023', 'Feb 2023', 'Mar 2023', 'Apr 2023',
      'May 2023', 'Jun 2023', 'Jul 2023', 'Aug 2023',
      'Sep 2023', 'Oct 2023', 'Nov 2023', 'Dec 2023',
    ],
    datasets: [
      {
        label: 'Performance', // Label for the dataset
        data: [10, 25, 40, 55, 70, 85, 90, 65, 50, 80, 95, 100], // Sample data points (0 to 100)
        borderColor: '#f97316', // Line color
        backgroundColor: 'rgba(249, 115, 22, 0.1)', // Fill color under the line
        tension: 0.4, // Curved line
        fill: true, // Fill the area under the line
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // Disable aspect ratio to allow flexible height/width
    plugins: {
      legend: { display: false }, // Hide the legend
    },
    scales: {
      x: {
        title: { display: false }, // Hide x-axis title
      },
      y: {
        beginAtZero: true,
        min: 0, // Set minimum value of y-axis to 0
        max: 100, // Set maximum value of y-axis to 100
        title: { display: false }, // Hide y-axis title
        ticks: { stepSize: 10 }, // Adjust to control the y-axis intervals
      },
    },
  };

  return (
    <div className="bg-white px-4 sm:px-6 rounded-lg">
      <div className="h-48 sm:h-60 md:h-48 lg:h-48 w-full"> {/* Adjust height for different screen sizes */}
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default LineChart;
