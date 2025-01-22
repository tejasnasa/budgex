"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ArrowUpRight,
  ArrowDownRight,
  Wallet,
  Target,
  AlertCircle,
} from "lucide-react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from "recharts";

const Dashboard = () => {
  // Sample data
  const spendingData = [
    { name: "Jan 1", amount: 400 },
    { name: "Jan 8", amount: 300 },
    { name: "Jan 15", amount: 500 },
    { name: "Jan 22", amount: 200 },
    { name: "Jan 29", amount: 450 },
    { name: "Jan 1", amount: 400 },
    { name: "Jan 8", amount: 300 },
    { name: "Jan 15", amount: 500 },
    { name: "Jan 22", amount: 200 },
    { name: "Jan 29", amount: 450 },
    { name: "Jan 1", amount: 400 },
    { name: "Jan 8", amount: 300 },
    { name: "Jan 15", amount: 500 },
    { name: "Jan 22", amount: 200 },
    { name: "Jan 29", amount: 450 },
    { name: "Jan 1", amount: 400 },
    { name: "Jan 8", amount: 300 },
    { name: "Jan 15", amount: 500 },
    { name: "Jan 22", amount: 200 },
    { name: "Jan 29", amount: 450 },
    { name: "Jan 1", amount: 400 },
    { name: "Jan 8", amount: 300 },
    { name: "Jan 15", amount: 500 },
    { name: "Jan 22", amount: 200 },
    { name: "Jan 29", amount: 450 },
    { name: "Jan 1", amount: 400 },
    { name: "Jan 8", amount: 300 },
    { name: "Jan 15", amount: 500 },
    { name: "Jan 22", amount: 200 },
    { name: "Jan 29", amount: 450 },
  ];

  const categoryData = [
    { name: "Food", value: 350 },
    { name: "Transport", value: 200 },
    { name: "Entertainment", value: 150 },
    { name: "Books", value: 100 },
    { name: "Others", value: 80 },
  ];

  const monthlyComparison = [
    { name: "Jan", budget: 800, spent: 750 },
    { name: "Feb", budget: 800, spent: 850 },
    { name: "Mar", budget: 800, spent: 650 },
    { name: "Apr", budget: 800, spent: 900 },
  ];

  const savingsProgress = [
    { name: "Laptop", target: 1000, saved: 600 },
    { name: "Vacation", target: 800, saved: 300 },
    { name: "Emergency", target: 1500, saved: 1200 },
  ];

  const recentTransactions = [
    { id: 1, name: "Grocery Shopping", amount: -45.5, category: "Food" },
    { id: 2, name: "Monthly Allowance", amount: 500.0, category: "Income" },
    { id: 3, name: "Bus Ticket", amount: -12.0, category: "Transport" },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884d8"];

  return (
    <div className="p-6 space-y-6">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Financial Dashboard</h1>
        <div className="flex space-x-4">
          <Card className="w-[200px]">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">
                Total Balance
              </CardTitle>
              <Wallet className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$1,245.89</div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Spending Trends Chart */}
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>Spending Trends</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={spendingData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="amount"
                    stroke="#2563eb"
                    strokeWidth={2}
                    name="Spending"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Category Breakdown */}
        <Card>
          <CardHeader>
            <CardTitle>Spending by Category</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={categoryData}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, value }) => `${name}: $${value}`}
                  >
                    {categoryData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => `$${value}`} />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Budget vs Actual */}
        <Card>
          <CardHeader>
            <CardTitle>Budget vs Actual</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={monthlyComparison}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip formatter={(value) => `$${value}`} />
                  <Legend />
                  <Bar dataKey="budget" fill="#2563eb" name="Budget" />
                  <Bar dataKey="spent" fill="#f97316" name="Spent" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Savings Goals Progress */}
        <Card>
          <CardHeader>
            <CardTitle>Savings Goals Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={savingsProgress}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip formatter={(value) => `$${value}`} />
                  <Legend />
                  <Bar dataKey="saved" fill="#22c55e" name="Saved" />
                  <Bar dataKey="target" fill="#94a3b8" name="Target" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Quick Stats */}
        <Card>
          <CardHeader>
            <CardTitle>This Month's Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm font-medium">Income</p>
                  <p className="text-2xl">$500.00</p>
                </div>
                <ArrowUpRight className="h-4 w-4 text-green-500" />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm font-medium">Spent</p>
                  <p className="text-2xl">$254.11</p>
                </div>
                <ArrowDownRight className="h-4 w-4 text-red-500" />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm font-medium">Savings Progress</p>
                  <p className="text-2xl">45%</p>
                </div>
                <Target className="h-4 w-4 text-blue-500" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recent Transactions */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Transactions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentTransactions.map((transaction) => (
                <div
                  key={transaction.id}
                  className="flex items-center justify-between"
                >
                  <div className="space-y-1">
                    <p className="text-sm font-medium">{transaction.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {transaction.category}
                    </p>
                  </div>
                  <p
                    className={`text-sm font-medium ${
                      transaction.amount > 0 ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    {transaction.amount > 0 ? "+" : ""}$
                    {Math.abs(transaction.amount).toFixed(2)}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
