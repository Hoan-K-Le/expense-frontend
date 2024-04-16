"use client";
import { useState, useEffect } from "react";
import { signOut } from "next-auth/react";
import {
  Moon,
  LogOutIcon,
  AddIcon,
  ChangeLogIcon,
  AnalyticIcon,
} from "@/components/svg";
import AddExpenseModal from "@/components/AddExpenseModal";
import { useAppSelector } from "@/store";
const styles = {
  container: "bg-white relative flex flex-col min-w-[400px] ",
  nav: "flex justify-between items-center px-4 py-2",
  expenseDescriptionContainer:
    "flex flex-col gap-20 justify-center min-h-screen",
  expenseDescriptionWrapper: "flex flex-col items-center",
  expenseTitle: "text-gray-500 text-md ",
  expensePrice: "text-6xl",
  expenseFooterContainer: "sticky bottom-0  border-t p-4 w-full z-2 bg-white",
  expenseFooterWrapper: "flex justify-around w-full ",
  btnStyle: "flex flex-col items-center text-gray-500 text-sm",
  addIcon: "bg-yellow-200 rounded-full p-2",
  navTitle: "font-bold",
  expenseDisplayContainer: "text-red-600 flex",
  dollarSignText: "text-4xl",
  dollarAmountText: "text-6xl",
  decimalAmountText: "text-4xl",
};

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpenAddExpenseModal = (): void => {
    setIsOpen(true);
  };
  const expense = useAppSelector(state => state.expense.expense);

  const expenseTotal = useAppSelector(state => state.expense.total);

  const expenseTextDisplay = (expense: string) => {
    if (expense.length === 0) {
      return;
    }
    const expenseSplit = expense.split(".");
    return (
      <div className={styles.expenseDisplayContainer}>
        <span className={styles.dollarSignText}>$ -</span>
        <span className={styles.dollarAmountText}>{expenseSplit[0]}</span>
        <span className={styles.decimalAmountText}>.{expenseSplit[1]}</span>
      </div>
    );
  };

  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <button>{Moon()}</button>
        <p className={styles.navTitle}>EXPENSES</p>
        <button onClick={() => signOut()}>{LogOutIcon()}</button>
      </nav>
      <div className={styles.expenseDescriptionContainer}>
        <div className={styles.expenseDescriptionWrapper}>
          <p className={styles.expenseTitle}>Spent this month</p>
          {expenseTotal && expenseTextDisplay(expenseTotal)}
        </div>
        <div className="flex flex-col">
          {expense &&
            expense.map((ex, i) => (
              <div
                className="flex justify-between items-center p-4"
                key={`${i}${ex.price}`}
              >
                <p>tag</p>
                <p className="text-red-400">- {ex.price}$</p>
              </div>
            ))}
        </div>
      </div>
      <div className={styles.expenseFooterContainer}>
        <div className={styles.expenseFooterWrapper}>
          <button className={styles.btnStyle}>
            <p>{AnalyticIcon()}</p>
            Analytic
          </button>

          <button
            onClick={handleOpenAddExpenseModal}
            className={styles.addIcon}
          >
            {AddIcon()}
          </button>
          <button className={styles.btnStyle}>
            <p>{ChangeLogIcon()}</p>
            Change logs
          </button>
        </div>
      </div>
      {isOpen && <AddExpenseModal setIsOpen={setIsOpen} />}
    </div>
  );
}
