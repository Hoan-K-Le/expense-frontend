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

const styles = {
  container: "bg-white w-1/2 relative",
  nav: "flex justify-between p-8 items-center",
  expenseDescriptionContainer:
    "flex flex-col items-center justify-center min-h-screen",
  expenseDescriptionWrapper: "h-[52vh] flex flex-col items-center",
  expenseTitle: "text-gray-500 text-md  mb-8",
  expensePrice: "text-6xl",
  expenseFooterContainer: "fixed bottom-0 border-t px-4 py-6 w-1/2",
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
          <div className={styles.expenseDisplayContainer}>
            <span className={styles.dollarSignText}>$ -</span>{" "}
            <span className={styles.dollarAmountText}>20</span>{" "}
            <span className={styles.decimalAmountText}>.00</span>
          </div>
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
      <AddExpenseModal />
    </div>
  );
}
