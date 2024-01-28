import { ReactNode } from "react";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "@/shared/ErrorFallback";

export default function ErrorBoundaryProvider({
  children,
}: {
  children: ReactNode;
}) {
  // Error logging function
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const logErrorToService = (error: any, info: any) => {
    // Use your preferred error logging service
    console.error("Caught an error:", error, info);
  };

  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => window.location.replace("/")}
      onError={logErrorToService}
    >
      {children}
    </ErrorBoundary>
  );
}
