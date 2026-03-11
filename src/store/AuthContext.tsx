import React, { createContext, useContext, useState, ReactNode } from "react";
import { toast } from "sonner";

export interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, pass: string) => Promise<void>;
  register: (name: string, email: string, pass: string) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const login = async (email: string, pass: string) => {
    setIsLoading(true);
    // Mock API call
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        setIsLoading(false);
        if (email && pass) {
          setUser({ id: "1", name: email.split("@")[0], email });
          toast.success("Successfully logged in");
          resolve();
        } else {
          toast.error("Invalid credentials.");
          reject(new Error("Invalid credentials"));
        }
      }, 1000);
    });
  };

  const register = async (name: string, email: string, pass: string) => {
    setIsLoading(true);
    // Mock API call
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        setIsLoading(false);
        if (name && email && pass) {
          setUser({ id: "1", name, email });
          toast.success("Successfully registered");
          resolve();
        } else {
          toast.error("Invalid details.");
          reject(new Error("Invalid details"));
        }
      }, 1000);
    });
  };

  const logout = () => {
    setUser(null);
    toast.success("Logged out");
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
