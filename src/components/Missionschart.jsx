import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Page A',
    preventionRate: 4000,
    responseRate: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    preventionRate: 3000,
    responseRate: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    preventionRate: 2000,
    responseRate: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    preventionRate: 2780,
    responseRate: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    preventionRate: 1890,
    responseRate: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    preventionRate: 2390,
    responseRate: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    preventionRate: 3490,
    responseRate: 4300,
    amt: 2100,
  },
];

const LineChartComponent = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis yAxisId="left" />
        <YAxis yAxisId="right" orientation="right" />
        <Tooltip />
        <Legend />
        <Line yAxisId="left" type="monotone" dataKey="responseRate" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line yAxisId="right" type="monotone" dataKey="preventionRate" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineChartComponent;
