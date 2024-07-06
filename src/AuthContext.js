import React, { createContext, useState, useEffect } from "react";
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem("jwtToken");
      if (!token) {
        setIsAuthenticated(false);
        return;
      }
      try {
        const response = await fetch(
          "https://dietetica-silvia.onrender.com/api/session/current",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
            credentials: "include",
          }
        );
        if (response.ok) {
          const data = await response.json();
          setIsAuthenticated(true);
          localStorage.setItem("isAuthenticated", "true");
        } else {
          setIsAuthenticated(false);
          localStorage.removeItem("isAuthenticated");
        }
      } catch (err) {
        console.error("Error checking authentication status:", err);
        setIsAuthenticated(false);
        localStorage.removeItem("isAuthenticated");
      }
    };

    const storedAuthState = localStorage.getItem("isAuthenticated");
    if (storedAuthState === "true") {
      checkAuth();
    }
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
