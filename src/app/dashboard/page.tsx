import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ArrowUpRight,
  ArrowDownRight,
  Wallet,
  Target,
  AlertCircle,
} from "lucide-react";
import { Component } from "@/components/charts/temp";
import { Weeklyspend } from "@/components/charts/weeklyspend";
import { MonthlySpend } from "@/components/charts/montlyspend";
import { SavingGoal } from "@/components/charts/savinggoals";
import { ThemeChanger } from "@/components/theme-changer";

const Dashboard = () => {
  // Sample data - replace with real data from your backend
  const spendingData = [
    { name: "Jan 1", amount: 400 },
    { name: "Jan 8", amount: 300 },
    { name: "Jan 15", amount: 500 },
    { name: "Jan 22", amount: 200 },
    { name: "Jan 29", amount: 450 },
  ];

  const recentTransactions = [
    { id: 1, name: "Grocery Shopping", amount: -45.5, category: "Food" },
    { id: 2, name: "Monthly Allowance", amount: 500.0, category: "Income" },
    { id: 3, name: "Bus Ticket", amount: -12.0, category: "Transport" },
  ];

  return (
    <div className="p-6 space-y-6 dark bg-black text-white">
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
        <Component />
        <Weeklyspend />
        <MonthlySpend />
        <SavingGoal />
        <ThemeChanger />

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
                  <p className="text-sm font-medium">Savings Goal Progress</p>
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
                    {transaction.amount > 0 ? "+" : ""}
                    {transaction.amount.toFixed(2)}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Upcoming Bills Alert */}
        <Card className="col-span-2">
          <CardHeader>
            <div className="flex items-center space-x-2">
              <AlertCircle className="h-4 w-4 text-amber-500" />
              <CardTitle>Upcoming Bills</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <p className="text-sm">Internet Bill</p>
                <div className="space-x-4 flex items-center">
                  <p className="text-sm font-medium">$35.00</p>
                  <p className="text-xs text-muted-foreground">Due in 5 days</p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm">Phone Bill</p>
                <div className="space-x-4 flex items-center">
                  <p className="text-sm font-medium">$25.00</p>
                  <p className="text-xs text-muted-foreground">Due in 8 days</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
