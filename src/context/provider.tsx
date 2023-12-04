"use client";
import React, { ReactNode } from "react";
import AuthContextProvider from "./auth/auth-context-provider";

const Provider = ({ children }: { children: ReactNode }) => {
  return <AuthContextProvider>{children}</AuthContextProvider>;
};

export default Provider;
