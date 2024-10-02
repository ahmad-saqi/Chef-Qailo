// src/components/LineChart.js
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = () => {
  // Months with years as labels for the x-axis
  const data = {
    labels: ['Jan 2023', 'Feb 2023', 'Mar 2023', 'Apr 2023', 'May 2023', 'Jun 2023', 'Jul 2023', 'Aug 2023', 'Sep 2023', 'Oct 2023', 'Nov 2023', 'Dec 2023'],
    datasets: [
      {
        label: 'Users',
        data: [2000, 2500, 3000, 2800, 3300, 3600, 4100, 3900, 4200, 4600, 4800, 5100], // Sample data points for each month
        borderColor: '#f97316', // Orange line color
        backgroundColor: 'rgba(249, 115, 22, 0.1)', // Slightly transparent orange area fill
        tension: 0.4, // Curved line
        fill: true, // Fill the area under the line
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
      },
     
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Month and Year',
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Number of Users',
        },
        ticks: {
          stepSize: 1000, // Adjust to control the y-axis intervals
        },
      },
    },
  };

  return (
    <div className="bg-white p-6 rounded-lg  mt-6">
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
