"use client";

import { useState } from "react";
import { DataProps } from "@/utils/types";
import { Cell, Pie, PieChart, ResponsiveContainer, PieProps } from "recharts";
import { formatPieChartData } from "@/utils/dataFormatter";
import { renderActiveShape } from "./monthpiehelper";

export default function CategoryPieChart({ data }: DataProps) {
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
          activeShape={renderActiveShape}
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
