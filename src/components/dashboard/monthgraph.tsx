"use client";

import { getColor } from "@/utils/colors";
import { formatMonthAreaData } from "@/utils/dataFormatter";
import { ExpenseType } from "@/utils/types";
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";

export default function MonthGraph({ data }: { data: ExpenseType[] }) {
  const formattedData = formatMonthAreaData(data);
  console.log(formattedData);

  const categories = Object.keys(
    formattedData.reduce((acc, curr) => ({ ...acc, ...curr }), {})
  ).filter((key) => key !== "name");

  const filledData = formattedData.map((day) => {
    const newDay = { ...day };
    categories.forEach((category) => {
      if (!(category in newDay)) {
        newDay[category] = 0;
      }
    });
    return newDay;
  });

  return (
    <ResponsiveContainer>
      <AreaChart data={filledData} margin={{ right: 25, left: 25, bottom: 10 }}>
        <XAxis
          dataKey="name"
          axisLine={false}
          tickFormatter={(value, index) => (index % 4 === 0 ? value : "")}
          tickLine={false}
          tick={{ fill: "#000" }}
        />
        <Tooltip
          labelFormatter={() => ""}
          formatter={(value) => `₹${value}`}
          contentStyle={{
            backgroundColor: "#fff",
            borderRadius: "10px",
            border: "none",
            fontSize: "15px",
          }}
        />
        {categories.map((category) => (
          <Area
            key={category}
            type="monotone"
            dataKey={category}
            stroke={getColor(category)}
            fillOpacity={0.6}
            fill={getColor(category)}
          />
        ))}
      </AreaChart>
    </ResponsiveContainer>
  );
}
