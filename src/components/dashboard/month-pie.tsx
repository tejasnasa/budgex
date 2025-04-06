"use client";

import { useState } from "react";
import { Cell, Pie, PieChart, ResponsiveContainer, PieProps } from "recharts";
import { formatPieChartData } from "@/utils/dataFormatter";
import { renderActiveShape } from "./month-pie-helper";
import { ExpenseType } from "@/utils/types";
import { JSX } from "react";

export default function CategoryPieChart({ data }: { data: ExpenseType[] }) {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const formattedData = formatPieChartData(data);

  const onPieEnter = (_: PieProps, index: number) => {
    setActiveIndex(index);
  };

  return (
    <ResponsiveContainer>
      <PieChart>
        <Pie
          activeIndex={activeIndex}
          activeShape={
            renderActiveShape as unknown as (props: unknown) => JSX.Element
          }
          data={formattedData}
          cx="50%"
          cy="50%"
          innerRadius={50}
          outerRadius={80}
          dataKey="value"
          onMouseEnter={onPieEnter}
        >
          {formattedData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
}
