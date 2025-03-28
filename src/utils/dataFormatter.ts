import { DataProps } from "./types";

export function formatData(data: DataProps["data"]) {
  const today = new Date();
  today.setUTCHours(0, 0, 0, 0);

  interface DayExpense {
    name: string;
    [category: string]: string | number;
  }

  const dayAbbreviations = ["S", "M", "T", "W", "T", "F", "S"];

  const last7Days = [...Array(7)].map((_, i) => {
    const date = new Date(today);
    date.setUTCDate(today.getUTCDate() - (6 - i));
    return {
      date: date.toISOString().split("T")[0],
      dayName: dayAbbreviations[date.getUTCDay()],
    };
  });

  // Initialize grouped data
  const groupedData: Record<string, DayExpense> = {};

  last7Days.forEach(({ date, dayName }) => {
    groupedData[date] = { name: dayName };
  });

  data.forEach(({ amount, date, category }) => {
    const parsedDate = new Date(date);
    parsedDate.setUTCHours(0, 0, 0, 0);
    const formattedDate = parsedDate.toISOString().split("T")[0];

    if (groupedData[formattedDate]) {
      if (typeof groupedData[formattedDate][category.name] !== "number") {
        groupedData[formattedDate][category.name] = 0;
      }
      (groupedData[formattedDate][category.name] as number) += amount;
    }
  });

  return last7Days.map(({ date }) => groupedData[date]);
}
