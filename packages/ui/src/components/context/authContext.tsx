"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { UserCreateDto } from "@workspace/types";
import { UserEntity } from "@workspace/types";
import { getCookie, setCookie, deleteCookie } from "@workspace/types";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3306";
interface AuthContextType {
  token: string | null;
  user: UserEntity | null;
  login: (email: string, password: string) => Promise<boolean>;
  register: (userData: UserCreateDto) => Promise<boolean>;
  logout: () => void;
  isAuthenticated: boolean;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<UserEntity | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Check for saved token on initial load
  useEffect(() => {
    const init = async () => {
      if (typeof window !== "undefined") {
        // Try to get token from cookie first (for middleware)
        let savedToken = getCookie("authToken");

        // Fall back to localStorage if not in cookie
        if (!savedToken) {
          savedToken = localStorage.getItem("authToken");
          // If found in localStorage but not in cookie, set the cookie
          if (savedToken) {
            setCookie("authToken", savedToken);
          }
        }

        if (savedToken) {
          setToken(savedToken);
          try {
            // Fetch user data with the token
            const response = await fetch(`${API_BASE_URL}/users/me`, {
              headers: {
                Authorization: `Bearer ${savedToken}`,
              },
              credentials: "include",
            });

            if (response.ok) {
              const userData = await response.json();
              setUser(userData);
            } else {
              throw new Error("Failed to fetch user data");
            }
          } catch (error) {
            console.error("Error fetching user data:", error);
            // Clear invalid token
            deleteCookie("authToken");
            localStorage.removeItem("authToken");
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
      const response = await fetch(`${API_BASE_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
        credentials: "include",
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error("Login error response:", errorData);
        throw new Error(errorData.message || "Login failed");
      }

      const data = await response.json();
      const accessToken = data.accessToken;
      const user = data.user;

      // Save token to both cookie (for middleware) and localStorage (for backup)
      setCookie("authToken", accessToken);
      localStorage.setItem("authToken", accessToken);
      setToken(accessToken);

      // Set placeholder user for now
      setUser({ id: user.id, username: user.username, email: user.email });

      return true;
    } catch (error) {
      console.error("Login error:", error);
      return false;
    }
  };

  // Register function
  const register = async (userData: UserCreateDto) => {
    try {
      const response = await fetch(`${API_BASE_URL}/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
        credentials: "include",
      });

      console.log("Registration response status:", response.status);

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error("Registration error response:", errorData);
        throw new Error(errorData.message || "Registration failed");
      }

      // After successful registration, log the user in
      return await login(userData.email, userData.password);
    } catch (error) {
      console.error("Registration error:", error);
      return false;
    }
  };

  // Logout function
  const logout = () => {
    deleteCookie("authToken");
    localStorage.removeItem("authToken");
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        user,
        login,
        register,
        logout,
        isAuthenticated: !!token,
        isLoading,
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
