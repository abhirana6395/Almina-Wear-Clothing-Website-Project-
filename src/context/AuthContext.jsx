import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // load from localStorage
  useEffect(() => {
    const stored = localStorage.getItem("almina-user");
    if (stored) setUser(JSON.parse(stored));
  }, []);

  const login = (data) => {
    localStorage.setItem("almina-user", JSON.stringify(data));
    setUser(data);
  };

  const logout = () => {
    localStorage.removeItem("almina-user");
    setUser(null);
  };

  const signup = (data) => {
    login(data); // same behaviour for frontend
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoggedIn: !!user,
        login,
        signup,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
