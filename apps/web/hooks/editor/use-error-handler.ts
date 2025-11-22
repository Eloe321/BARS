"use client";

import { toast } from "sonner";

export const useErrorHandler = () => {
  const handleError = (error: any, context: string) => {
    console.error(`Error in ${context}:`, error);

    let userMessage = "An unexpected error occurred. Please try again.";

    if (error.message) {
      if (
        error.message.includes("Unauthorized") ||
        error.message.includes("401")
      ) {
        userMessage = "Your session has expired. Please log in again.";
      } else if (error.message.includes("Failed to fetch")) {
        userMessage =
          "Network error. Please check your connection and try again.";
      } else if (error.message.includes("Failed to save")) {
        userMessage =
          "Failed to save your song. Please try again or contact support.";
      } else if (error.message.includes("Failed to fetch music data")) {
        userMessage =
          "Could not load music data. Please try selecting the track again.";
      } else {
        userMessage = error.message;
      }
    }

    toast.error(userMessage, {
      duration: 5000,
      action: {
        label: "Dismiss",
        onClick: () => {},
      },
    });
  };

  return { handleError };
};
