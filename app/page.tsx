"use client";
import { signOut } from "next-auth/react";
import {
  Moon,
  LogOutIcon,
  AddIcon,
  ChangeLogIcon,
  AnalyticIcon,
} from "@/components/svg";

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
};

export default function Home() {
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
          <div className="text-red-600  flex">
            <span className="text-4xl">$ -</span>{" "}
            <span className="text-6xl">20</span>{" "}
            <span className="text-4xl">.00</span>
          </div>
        </div>
      </div>
      <div className={styles.expenseFooterContainer}>
        <div className={styles.expenseFooterWrapper}>
          <button className={styles.btnStyle}>
            <p>{AnalyticIcon()}</p>
            Analytic
          </button>

          <button className={styles.addIcon}>{AddIcon()}</button>
          <button className={styles.btnStyle}>
            <p>{ChangeLogIcon()}</p>
            Change logs
          </button>
        </div>
      </div>
    </div>
  );
}
