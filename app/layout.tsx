import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NextAuthProvider } from "./NextAuthProvider";
import AuthProvider from "@/components/AuthProvider";
import { ReduxProvider } from "@/store/provider";
import { ToastContainer, Slide } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useAppSelector } from "@/store";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `Expense`,
  description: "Generated by create next app",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={`${inter.className} `}>
        <ReduxProvider>
         <NextAuthProvider>
           <AuthProvider>
             {children}
            </AuthProvider>
            <ToastContainerWrapper/>
         </NextAuthProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
function ToastContainerWrapper () {
  return (
    <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
//  transition: Bounce,
/>
  )
}
