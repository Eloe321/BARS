"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { setCookie, getCookie, deleteCookie } from "../../lib/cookies";

interface AuthContextType {
  token: string | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  user: any | null; // Replace with proper user type when available
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<any | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Check for saved token on initial load
  useEffect(() => {
    const init = async () => {
      if (typeof window !== "undefined") {
        const savedToken = getCookie("authToken");
        if (savedToken) {
          setToken(savedToken);
          try {
            // Optional: Fetch user data with the token
            // const userData = await fetchUserData(savedToken);
            // setUser(userData);
            setUser({ id: "placeholder" }); // Replace with actual user data
          } catch (error) {
            console.error("Error fetching user data:", error);
            // If token is invalid, clear it
            deleteCookie("authToken");
            setToken(null);
          }
        }
        setIsLoading(false);
      }
    };

    init();
  }, []);

  // Login function
  const login = async (email: string, password: string) => {
    try {
      const response = await fetch("http://localhost:3306/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("Login failed");
      }

      const data = await response.json();
      const { accessToken } = data;

      // Save token to cookies and state
      setCookie("authToken", accessToken);
      setToken(accessToken);

      // Set user data (you might want to fetch user profile here)
      setUser({ id: "placeholder" }); // Replace with actual user data

      return true;
    } catch (error) {
      console.error("Login error:", error);
      return false;
    }
  };

  // Logout function
  const logout = () => {
    deleteCookie("authToken");
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        isAuthenticated: !!token,
        login,
        logout,
        user,
      }}
    >
      {!isLoading && children}
    </AuthContext.Provider>
  );
}

// Hook to use the auth context
export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
