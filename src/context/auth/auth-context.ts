import { createContext } from "react";

export type User = {
  email: string;
  password: string;
  name?: string;
  token?: string;
  id?: string;
  isLogged?: boolean;
};

export type AuthContextType = {
  user: User;
  login: ({ email, password }: { email: string; password: string }) => void;
  logout: () => void;
  forgetPassword: (email: string) => void;
  register: (email: string, password: string) => void;
  resetPassword: (password: string, email: string) => void;
  updateProfile: (user: User) => void;
  updatePassword: (password: string, email: string) => void;
};

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export default AuthContext;
