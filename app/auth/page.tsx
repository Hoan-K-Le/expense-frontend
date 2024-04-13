"use client";
import React from "react";
import { signIn } from "next-auth/react";
import moneyImage from "../../images/moneyimage.png";
import logo from "../favicon.ico";
import Image from "next/image";
import { GoogleLogo } from "@/components/svg";

const styles = {
  pageContainer:
    "bg-white  flex flex-col items-center gap-2 px-10 max-w-[500px] overflow-hidden ",
  headerContainer: "flex items-center gap-4",
  title: "font-bold text-4xl",
  subTitle: "font-semibold text-2xl",
  description: "text-neutral",
  loginBtn: "flex justify-center items-center",
  buttonContainer:
    "flex items-center w-full border border-neutral rounded-lg px-4 gap-20 my-4",
};

function Auth() {
  const handleLogin = async () => {
    await signIn("google");
  };
  return (
    <div className={styles.pageContainer}>
      <header className={styles.headerContainer}>
        <Image src={logo} alt="logo" width={300} height={100} />
        <h1 className={styles.title}>Daily Expenses</h1>
      </header>
      <p className={styles.subTitle}>Track and analyze your expense today!</p>
      <p className={styles.description}>
        Keep track of your finance expenses in a convenient and organized way.
        This application typically allows you to input information abouit your
        expenses nad provides tools for analyzing and categorizing this
        information to help you better understand your spending limit.
      </p>
      <div className={styles.buttonContainer} data-onsuccess="onSignIn">
        <span>{GoogleLogo()}</span>
        <button className={styles.loginBtn} onClick={handleLogin}>
          Login to Continue
        </button>
      </div>
      <Image src={moneyImage} alt="moneyimage" width={500} height={500} />
    </div>
  );
}

export default Auth;
