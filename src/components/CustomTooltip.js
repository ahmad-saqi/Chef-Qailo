import React from 'react';
import { Tooltip as RechartsTooltip } from 'recharts';

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div
        className="custom-tooltip"
        style={{
          backgroundColor: 'transparent', // Set background to transparent
          color: 'white', // Set text color to white
          
          padding: '5px',
          border: 'none', // Remove border if necessary
          borderRadius: '4px',
          boxShadow: 'none', // Remove shadow if necessary
        }}
      >
        <p>{`Users: ${payload[0].value}`}</p>
      </div>
    );
  }

  return null;
};

export default CustomTooltip;
