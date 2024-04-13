"use client";
import { useEffect, useState, createContext } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Session } from "next-auth";

type SessionType = Session | null;
export const AuthContext = createContext<SessionType>(null);

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!session) {
      router.push("/auth");
    } else {
      router.push("/");
    }
  }, [session]);

  return (
    <AuthContext.Provider value={session}>{children}</AuthContext.Provider>
  );
}
