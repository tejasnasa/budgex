"use client";

import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";
import { getColor } from "@/utils/colors";
import { formatWeekBarData } from "@/utils/dataFormatter";
import { ExpenseType } from "@/utils/types";

export default function WeekGraph({ data }: { data: ExpenseType[] }) {
  const formattedData = formatWeekBarData(data);

  const categories = Array.from(
    new Set(
      formattedData.flatMap((day) =>
        Object.keys(day).filter((key) => key !== "name")
      )
    )
  );

  return (
    <ResponsiveContainer width="100%">
      <BarChart
        data={formattedData}
        margin={{ top: 0, bottom: 10, right: 20, left: 20 }}
        barSize={12}
      >
        <XAxis
          dataKey="name"
          axisLine={false}
          tickLine={false}
          tick={{ fill: "#000" }}
        />
        <Tooltip
          labelFormatter={() => ""}
          formatter={(value) => `₹ ${value}`}
          contentStyle={{
            backgroundColor: "#fff",
            borderRadius: "10px",
            border: "none",
          }}
        />
        {categories.map((category) => (
          <Bar
            key={category}
            dataKey={category}
            stackId="expenses"
            fill={getColor(category)}
          />
        ))}
      </BarChart>
    </ResponsiveContainer>
  );
}
