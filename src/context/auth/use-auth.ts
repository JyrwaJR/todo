import { useContext } from "react";
import { AuthContext } from ".";
import { AuthContextType } from "./auth-context";

const useAuth = () => {
  const authContext: AuthContextType = useContext(AuthContext);
  if (!authContext) {
    throw new Error("Auth Context must be used within an AuthProvider");
  }
  return authContext;
};
export { useAuth };
