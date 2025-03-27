"use client";

import { Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

const data01 = [
  {
    name: "Group A",
    value: 400,
  },
  {
    name: "Group B",
    value: 300,
  },
  {
    name: "Group C",
    value: 300,
  },
  {
    name: "Group D",
    value: 200,
  },
  {
    name: "Group E",
    value: 278,
  },
  {
    name: "Group F",
    value: 189,
  },
];

export default function MonthPie() {
  return (
    <ResponsiveContainer>
      <PieChart>
        <Pie
          data={data01}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          fill="#8884d8"
        />
        <Tooltip/>
      </PieChart>
    </ResponsiveContainer>
  );
}
