import React, { useEffect, useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  Tooltip,
  LineChart,
  XAxis,
  YAxis,
  Area,
  Scatter,
  ComposedChart,
  PieChart,
  Pie,
} from "recharts";
import "./Inventory.css";
const Inventory = () => {
  const [info, setInfo] = useState([]);
  
 

  useEffect(() => {
    fetch("bd.json")
      .then((res) => res.json())
      .then((data) => setInfo(data));
  }, []);
  
  return (
    <div className="inventory-container container">
      <h2>Hey! This is Inventory</h2>
      <div className="row">
        <div className="col-md-6">
          <LineChart
            width={500}
            height={300}
            data={info}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip></Tooltip>
            <Legend />
            <Line
              type="monotone"
              dataKey="investment"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="revenue" stroke="#82ca9d" />
          </LineChart>
        </div>
        <div className="col-md-6">
          <BarChart
            width={500}
            height={300}
            data={info}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip></Tooltip>
            <Legend />
            <Bar
              dataKey="investment"
              fill="#8884d8"
              background={{ fill: "#eee" }}
            />
            <Bar dataKey="revenue" fill="#82ca9d" />
          </BarChart>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
          <ComposedChart
            width={500}
            height={400}
            data={info}
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20,
            }}
          >
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis dataKey="month" scale="band" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area
              type="monotone"
              dataKey="amt"
              fill="#8884d8"
              stroke="#8884d8"
            />
            <Area type="monotone" dataKey="revenue" fill="#8884d8" stroke="#8884d8" />
            <Bar dataKey="investment" barSize={20} fill="#413ea0" />
            <Line type="monotone" dataKey="revenue" stroke="#ff7300" />
            <Scatter dataKey="sell" fill="red" />
          </ComposedChart>
        </div>

        <div className="col-md-6">
        <PieChart width={400} height={400}>
          <Pie data={info.map(hello => (hello.revenue))} dataKey="value" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
          <Pie data={info.map(hello => (hello.sell))} dataKey="value" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
        </PieChart>
        </div>
      </div>
    </div>
  );
};

export default Inventory;
