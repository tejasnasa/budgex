"use client";

import { TrendingUp } from "lucide-react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const a = [
  { month: "January", food: 1863, transport: 1807 },
  { month: "February", food: 3056, transport: 2000 },
  { month: "March", food: 2377, transport: 1210 },
  { month: "April", food: 1473, transport: 1510 },
  { month: "May", food: 2096, transport: 1307 },
  { month: "June", food: 2714, transport: 1140 },
  { month: "January", food: 1863, transport: 1107 },
  { month: "February", food: 3056, transport: 1000 },
  { month: "March", food: 2377, transport: 1210 },
  { month: "April", food: 3473, transport: 1210 },
  { month: "May", food: 2096, transport: 1307 },
  { month: "June", food: 2714, transport: 1740 },
];

function calculateMonthlySavings(chartData: any) {
  const totalBudget = 5500;

  return chartData.map(({ month, food, transport }: any) => {
    const totalExpenses = food + transport;
    const savings = totalBudget - totalExpenses;
    return { month, food, transport, savings };
  });
}

const chartData = calculateMonthlySavings(a);

const chartConfig = {
  food: {
    label: "food",
    color: "hsl(var(--chart-1))",
  },
  transport: {
    label: "transport",
    color: "hsl(var(--chart-2))",
  },
  savings: {
    label: "savings",
    color: "hsl(var(--chart-4))",
  },
} satisfies ChartConfig;

export function Component() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Area Chart - Stacked</CardTitle>
        <CardDescription>
          Showing total visitors for the last 6 months
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dot" />}
            />
            <Area
              dataKey="transport"
              type="natural"
              fill="var(--color-transport)"
              fillOpacity={0.4}
              stroke="var(--color-transport)"
              stackId="a"
            />
            <Area
              dataKey="food"
              type="natural"
              fill="var(--color-food)"
              fillOpacity={0.4}
              stroke="var(--color-food)"
              stackId="a"
            />
            <Area
              dataKey="savings"
              type="natural"
              fill="var(--color-savings)"
              fillOpacity={0.4}
              stroke="var(--color-savings)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              January - June 2024
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
