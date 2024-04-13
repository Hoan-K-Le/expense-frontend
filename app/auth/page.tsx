"use client";
import React from "react";
import { signIn, signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const styles = {
  pageContainer:
    "bg-white  flex flex-col items-center gap-2 px-10 max-w-[500px] overflow-hidden ",
  headerContainer: "flex items-center gap-4",
  title: "font-bold text-4xl",
  subTitle: "font-semibold text-2xl",
  description: "text-neutral",
};

function Auth() {
  const router = useRouter();
  const { data: session } = useSession();
  console.log(session?.user, "session");

  const handleLogin = async () => {
    await signIn("google");
    // router.push("/");
  };
  return (
    <div className={styles.pageContainer}>
      <header className={styles.headerContainer}>
        <img src="../favicon.ico" alt="logo" />
        <h1 className={styles.title}>Daily Expenses</h1>
      </header>
      <p className={styles.subTitle}>Track and analyze your expense today!</p>
      <p className={styles.description}>
        Keep track of your finance expenses in a convenient and organized way.
        This application typically allows you to input information abouit your
        expenses nad provides tools for analyzing and categorizing this
        information to help you better understand your spending limit{" "}
      </p>
      <div className="g-signin2" data-onsuccess="onSignIn">
        <button onClick={handleLogin}>Login to Continue</button>
      </div>
    </div>
  );
}

export default Auth;
