import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const ReviewChart = ({ ratings }) => {
  const reversedRatings = [...ratings].reverse();
  const dataValue = (value) => `${(value / 1000000).toFixed(1)}M`

  return (
    <div className="w-full h-96"> 
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={reversedRatings}
          layout="vertical"
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis 
            type="number" 
            tickFormatter={dataValue} 
          />
          <YAxis type="category" dataKey="name" />
          <Tooltip formatter={dataValue} />
          <Legend />
          <Bar dataKey="count" fill="#FF8811" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ReviewChart;
