import React, { createContext, useContext, useEffect, useState } from "react";
import { AuthInterface } from "../../Interfaces";


const AuthContext = createContext<AuthInterface | null>(null);
const AuthContextDispatcher = createContext<any>(null);

const AuthProvider = ({ children }: any) => {
  const [auth, setAuth] = useState(null);

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("setAuth")!);
    setAuth(savedUser);
  }, []);

  useEffect(() => {
    localStorage.setItem("setAuth", JSON.stringify(auth));
  }, [auth]);

  return (
    <AuthContext.Provider value={auth}>
      <AuthContextDispatcher.Provider value={setAuth}>
        {children}
      </AuthContextDispatcher.Provider>
    </AuthContext.Provider>
  );
};

export default AuthProvider;
export const UseAuth = () => useContext(AuthContext);
export const useAuthActions = () => useContext(AuthContextDispatcher);
