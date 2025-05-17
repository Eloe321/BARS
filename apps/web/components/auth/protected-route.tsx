"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@workspace/ui/components/context/authContext";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { isAuthenticated, token } = useAuth();
  const router = useRouter();

  useEffect(() => {
    // Check if we're on the client side
    if (typeof window !== "undefined") {
      // If not authenticated, redirect to login page
      if (!isAuthenticated && !token) {
        router.replace("/login");
      }
    }
  }, [isAuthenticated, token, router]);

  // While checking authentication, you could show a loading spinner
  if (!isAuthenticated && typeof window !== "undefined") {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-[#0a192f]">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-[#64ffda] border-t-transparent"></div>
      </div>
    );
  }

  // If authenticated or on server during SSR, render children
  return <>{children}</>;
}
