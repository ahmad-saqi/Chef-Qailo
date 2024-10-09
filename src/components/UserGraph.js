// src/components/UserGraph.js
import React from "react";
import { AreaChart, Area, YAxis, ResponsiveContainer, Tooltip } from "recharts"; // Import Tooltip here
import CustomTooltip from './CustomTooltip'; // Import your custom tooltip

const data = [
  { day: "Mon", users: 120 },
  { day: "Tue", users: 200 },
  { day: "Wed", users: 150 },
  { day: "Thu", users: 300 },
  { day: "Fri", users: 240 },
  { day: "Sat", users: 330 },
  { day: "Sun", users: 280 },
];

const UserGraph = () => {
  return (
    <div className="bg-[#F74821] rounded-xl pt-6 pb-10 px-4 text-white shadow-lg">
      {/* Header */}
      <div className="text-2xl font-poppins font-semibold mb-2">3,240</div>
      <div className="text-md font-poppins font-normal mb-4">Users This Month</div>

      {/* Responsive Area Chart */}
      <ResponsiveContainer width="100%" height={140}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#ffffff" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#ffffff" stopOpacity={0} />
            </linearGradient>
          </defs>

          <YAxis hide />
          <Tooltip content={<CustomTooltip />} /> {/* Use the custom tooltip */}
          <Area
            type="monotone"
            dataKey="users"
            stroke="#ffffff"
            fillOpacity={1}
            fill="url(#colorUsers)"
          />
          <p>sd</p>
        </AreaChart>
        <div className="flex justify-between items-start pb-4">
          <p>M</p>
          <p>T</p>
          <p>W</p>
          <p>T</p>
          <p>F</p>
          <p>S</p>
          <p>S</p>
        </div>
      </ResponsiveContainer>
    </div>
  );
};

export default UserGraph;
