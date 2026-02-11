import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // 🔄 Load user from localStorage on refresh
  useEffect(() => {
    const stored = localStorage.getItem("almina-user");
    if (stored) {
      setUser(JSON.parse(stored));
    }
  }, []);

  // ✅ LOGIN
  const login = async ({ email, password }) => {
    const res = await fetch("http://localhost:8080/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (!res.ok) {
      throw new Error("Invalid credentials");
    }

    const result = await res.json();

    // result = { id, name, email, role, token(optional) }
    localStorage.setItem("almina-user", JSON.stringify(result));
    setUser(result);

    return result.role; // 🔥 VERY IMPORTANT
  };

  // ✅ SIGNUP
  const signup = async ({ name, email, password }) => {
    const res = await fetch("http://localhost:8080/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });

    if (!res.ok) {
      throw new Error("Signup failed");
    }

    // Auto login after signup
    return await login({ email, password });
  };

  const logout = () => {
    localStorage.removeItem("almina-user");
    setUser(null);
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