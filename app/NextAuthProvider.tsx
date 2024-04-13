"use client";
import { SessionProvider } from "next-auth/react";
type NextAuthProvidersProp = {
  children: React.ReactNode;
};

export const NextAuthProvider: React.FC<NextAuthProvidersProp> = ({
  children,
}) => {
  return <SessionProvider>{children}</SessionProvider>;
};
