"use client";
import React, { useEffect } from "react";
import { useAppSelector } from "@/store";
import Chart from "chart.js/auto";

function Analytics() {
  const { darkMode } = useAppSelector(state => state.darkMode);
  const expenses = useAppSelector(state => state.expense.expense);
  const styles = {
    container: " relative flex flex-col min-w-[400px] ",
  };
  console.log(expenses, "expense");

  // group the expense by date and display that date with total expense
  const groupByDate = (expense: any) => {
    return expense.reduce((group: any, exp: any) => {
      const date = exp.date;
      let price = exp.price;
      if (!group[date]) {
        group[date] = 0;
      }
      group[date] += Number(price);
      return group;
    }, {});
  };
  console.log(groupByDate(expenses));
  const expenseChartData = groupByDate(expenses);
  useEffect(() => {
    let chartStatus = Chart.getChart("expense");
    if (chartStatus != undefined) {
      chartStatus.destroy();
    }
    new Chart(document.getElementById("expense" as any) as any, {
      type: "bar",
      data: {
        labels: Object.keys(expenseChartData),
        datasets: [
          {
            label: "Expenses",
            data: Object.values(expenseChartData),
          },
        ],
      },
    });
  }, []);
  return (
    <div
      className={`flex justify-center ${
        darkMode ? "bg-accent-content" : "bg-neutral-content"
      }`}
    >
      <div
        className={`${styles.container} ${
          darkMode ? "bg-base-content text-white" : "bg-white"
        }`}
      >
        <div className="h-[100vh]">
          <div style={{ width: "800px", height: "500px" }}>
            <canvas id="expense"></canvas>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Analytics;
