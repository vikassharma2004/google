import React from "react";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const fireTrendData = [
  { month: "Jan", incidents: 12, area: 100 },
  { month: "Feb", incidents: 15, area: 150 },
  { month: "Mar", incidents: 20, area: 200 },
  { month: "Apr", incidents: 25, area: 300 },
  { month: "May", incidents: 30, area: 400 },
  { month: "Jun", incidents: 35, area: 500 },
  { month: "Jul", incidents: 28, area: 450 },
];

const temperatureData = [
  { time: "00:00", temperature: 25 },
  { time: "06:00", temperature: 28 },
  { time: "12:00", temperature: 32 },
  { time: "18:00", temperature: 30 },
  { time: "24:00", temperature: 26 },
];

const humidityData = [
  { time: "00:00", humidity: 65 },
  { time: "06:00", humidity: 60 },
  { time: "12:00", humidity: 45 },
  { time: "18:00", humidity: 50 },
  { time: "24:00", humidity: 62 },
];

const WildfireDashboard = () => {
  return (
    <div className="bg-gray-50 min-h-screen p-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Wildfire Analytics Dashboard</h1>
      <div className="grid grid-cols-4 gap-4 mb-8">
        <div className="bg-white p-6 rounded-lg shadow flex items-center">
          <div className="p-3 rounded-full bg-red-300 mr-4">
            <i className="fas fa-fire text-red-600"></i>
          </div>
          <div>
            <p className="text-sm text-gray-500">Active Fires</p>
            <p className="text-xl font-semibold">24</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow flex items-center">
          <div className="p-3 rounded-full bg-yellow-300 mr-4">
            <i className="fas fa-exclamation-triangle text-yellow-600"></i>
          </div>
          <div>
            <p className="text-sm text-gray-700">High-risk Areas</p>
            <p className="text-xl font-semibold">12</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow flex items-center">
          <div className="p-3 rounded-full bg-green-300 mr-4">
            <i className="fas fa-exclamation-triangle text-yellow-600"></i>
          </div>
          <div>
            <p className="text-sm text-gray-500">safe Areas</p>
            <p className="text-xl font-semibold">12</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-8">
        <div className="col-span-2">
          <div className="bg-white p-6 rounded-lg shadow mb-8">
            <h2 className="text-lg font-semibold mb-4">Fire Trend Analysis</h2>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={fireTrendData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="incidents" fill="#FF5733" name="Fire Incidents" />
                <Bar dataKey="area" fill="#33A2FF" name="Affected Area (ha)" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-lg font-semibold mb-4">Temperature Distribution</h2>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={temperatureData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="time" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="temperature" stroke="#FF8C00" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-lg font-semibold mb-4">Humidity Levels</h2>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={humidityData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="time" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="humidity" stroke="#008B8B" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WildfireDashboard;