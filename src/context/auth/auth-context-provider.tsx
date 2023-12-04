import React, { ReactNode } from "react";
import { AuthContext } from ".";
import { User } from "./auth-context";

async function login(email: string, password: string) {
  try {
    return true;
    // TODO-1: Implement login logic here
  } catch (error) {
    throw error;
  }
}
async function register(email: string, password: string) {
  try {
    return true;
    // TODO-2: Implement register logic here
  } catch (error) {
    throw error;
  }
}
const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = React.useState<User>({
    email: "",
    password: "",
    name: "",
    token: "",
    id: "",
    isLogged: false,
  });
  const onLogin = async (email: string, password: string) => {
    const res = await login(email, password);
    console.log(res);
    if (res) {
      setUser({
        email,
        password,
        name: "Jyrwa",
        token: "test",
        id: "1",
        isLogged: true,
      });
    }
  };
  const onRegister = async (email: string, password: string) => {
    const res = await register(email, password);
    console.log(res);
    if (res) {
      setUser({
        email,
        password,
        name: "Jyrwa",
        token: "test",
        id: "1",
        isLogged: true,
      });
    }
  };
  return (
    <AuthContext.Provider
      value={{
        resetPassword: () => {},
        updatePassword: () => {},
        updateProfile: () => {},
        forgetPassword: () => {},
        login: ({ email, password }: { email: string; password: string }) =>
          onLogin(email, password),
        logout: () => {},
        register: (email, password) => onRegister(email, password),
        user: user as User,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
