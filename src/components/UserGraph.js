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
    <div className="bg-[#F74821] rounded-xl py-8 px-6 text-white shadow-lg">
      {/* Header */}
      <div className="text-3xl font-poppins font-semibold mb-2">3,240</div>
      <div className="text-lg font-poppins font-normal mb-6">Users This Month</div>

      {/* Responsive Area Chart */}
      <ResponsiveContainer width="100%" height={100}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#ffffff" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#ffffff" stopOpacity={0} />
            </linearGradient>
          </defs>

          <YAxis hide />
          <Tooltip content={<CustomTooltip />} /> {/* Use the Tooltip component correctly */}
          <Area
            type="monotone"
            dataKey="users"
            stroke="#fff"
            fillOpacity={1}
            fill="url(#colorUsers)"
          />
        </AreaChart>
      </ResponsiveContainer>

      {/* Days of the week labels */}
      <div className="flex justify-between text-sm font-semibold tracking-wider mt-3">
        <span>M</span>
        <span>T</span>
        <span>W</span>
        <span>T</span>
        <span>F</span>
        <span>S</span>
        <span>S</span>
      </div>
    </div>
  );
};

export default UserGraph;
