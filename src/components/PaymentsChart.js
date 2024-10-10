import React, { useState } from 'react';
import Chart from 'react-apexcharts';
import { BsThreeDotsVertical } from "react-icons/bs";
const BarChart = () => {
  // Define default and hover colors
  const defaultBarColor = '#E5E7EB'; // Tailwind gray-200
  const hoverBarColor = '#F74821'; // Custom hover color

  // Define chart options and data
  const [chartData] = useState({
    series: [
      {
        name: 'Sales', // The label for the data set
        data: [20, 20, 55, 40, 59, 80,], // Data for each bar
      },
    ],
    options: {
      chart: {
        type: 'bar',
        toolbar: {
          show: false, // Hides the toolbar
        },
      },
      plotOptions: {
        bar: {
          horizontal: false, // Makes the bars vertical
          columnWidth: '30%', // Width of bars
          borderRadius: 4, // Makes the top of bars rounded
        },
      },
      dataLabels: {
        enabled: false, // Disables data labels on the bars
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'April', 'May', 'Jun'], // X-axis labels
        labels: {
          style: {
            colors: '#6B7280', // Tailwind gray-500 for text color
          },
        },
        axisBorder: {
          show: false, // Removes the line under the bars
        },
      },
      yaxis: {
        labels: {
          show: false, // Hides the y-axis labels
        },
      },
      fill: {
        colors: [defaultBarColor], // Sets default bar color
      },
      tooltip: {
        theme: 'dark', // Dark theme for the tooltip
        custom: function({ series, seriesIndex, dataPointIndex, w }) {
          // Custom tooltip content
          const value = series[seriesIndex][dataPointIndex]; // Gets the value of the bar
          return `<div class="px-2 py-1 bg-[${hoverBarColor}] text-white rounded">
                    ${value} k
                  </div>`;
        },
      },
      grid: {
        borderColor: '#ffff', // Grid color
        xaxis: {
          lines: {
            show: false, // Hides the vertical grid lines (removes line under the bars)
          },
        },
        yaxis: {
          lines: {
            show: false, // Hides the horizontal grid lines
          },
        },
      },
      states: {
        normal: {
          fill: {
            colors: [defaultBarColor], // Default color for bars
          },
        },
        hover: {
          fill: {
            colors: [hoverBarColor], // Hover color for bars
          },
        },
      },
    },
  });

  return (
    <div className="p-2 bg-white border-2 rounded-lg max-w-lg mx-auto">
     <div className='flex items-center justify-between'> <h2 className="text-xl font-semibold text-gray-800">Payments</h2><BsThreeDotsVertical /></div>
      <Chart options={chartData.options} series={chartData.series} type="bar" height={150} />
    </div>
  );
};

export default BarChart;
