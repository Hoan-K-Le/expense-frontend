"use client";
import React, { useEffect } from "react";
import { useAppSelector } from "@/store";
import Chart from "chart.js/auto";

function Analytics() {
  const { darkMode } = useAppSelector(state => state.darkMode);
  const expense = useAppSelector(state => state.expense.expense);
  const styles = {
    container: " relative flex flex-col min-w-[400px] ",
  };
  console.log(expense, "expense");

  useEffect(() => {
    let chartStatus = Chart.getChart("expense");
    if (chartStatus != undefined) {
      chartStatus.destroy();
    }
    new Chart(document.getElementById("expense" as any) as any, {
      type: "bar",
      data: {
        labels: expense.map((ex: any) => ex.date),
        datasets: [
          {
            label: "Expenses",
            data: expense.map((ex: any) => Number(ex.price)),
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
