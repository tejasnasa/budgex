export interface ExpenseType {
  name: string;
  id: string;
  userid: string;
  amount: number;
  date: Date;
  categoryid: string;
  created_at: Date;
  category: {
    name: string;
    id: string;
    created_at: Date;
  };
}

export interface PieChartData {
  name: string;
  value: number;
  color: string;
}

export interface ActiveShapeProps {
  cx: number;
  cy: number;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
  startAngle: number;
  endAngle: number;
  fill: string;
  payload: PieChartData;
  percent: number;
  value: number;
}

export interface ExpenseFormData {
  name: string;
  amount: number;
  date: string;
  category: string;
}

export interface IncomeFormData {
  name: string;
  amount: number;
  date: string;
}
