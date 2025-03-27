"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    name: "Monday",
    uv: 0,
    pv: 240,
  },
  {
    name: "Tuesday",
    uv: 50,
    pv: 0,
  },
  {
    name: "Page C",
    uv: 500,
    pv: 800,
  },
  {
    name: "Page D",
    uv: 780,
    pv: 908,
  },
  {
    name: "Page E",
    uv: 0,
    pv: 0,
  },
  {
    name: "Page F",
    uv: 0,
    pv: 0,
  },
  {
    name: "Page G",
    uv: 390,
    pv: 300,
  },
];

export default function WeekGraph() {
  return (
    <ResponsiveContainer>
      <BarChart data={data} margin={{top: 20}}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="pv" stackId="pv" fill="#8884d8" />
        <Bar dataKey="uv" stackId="pv" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  );
}
