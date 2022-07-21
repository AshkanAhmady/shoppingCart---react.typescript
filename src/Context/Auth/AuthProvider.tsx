import { createContext, useContext, useEffect, useState } from "react";

// interface AuthContextInterface {
//   auth: AuthInterface;
//   setAuth: React.Dispatch<React.SetStateAction<AuthInterface | null>>
// }

const AuthContext = createContext<any>(null);

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
    <AuthContext.Provider value={{auth, setAuth}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
export const UseAuth = () => useContext(AuthContext);
