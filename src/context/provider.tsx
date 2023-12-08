"use client";
import React, { ReactNode } from "react";
import AuthContextProvider from "./auth/auth-context-provider";
import TaskContextProviders from "./task/task-context-provider";

const Provider = ({ children }: { children: ReactNode }) => {
  return (
    <AuthContextProvider>
      <TaskContextProviders>{children}</TaskContextProviders>
    </AuthContextProvider>
  );
};

export default Provider;
